/**
 * migrate-image-urls.mjs
 *
 * Convierte coverImage/gallery de "ruta de Storage" a "URL ya resuelta"
 * en los proyectos ya sembrados. NO sube fotos nuevas, NO borra nada en
 * Storage — solo lee el download token que cada archivo ya tiene (se lo
 * puso seed-projects.mjs al subirlo) y arma la URL final, guardándola
 * en el documento de Firestore.
 *
 * Seguro de correr más de una vez: si un valor ya es una URL completa,
 * lo deja intacto.
 *
 * Uso:
 *   node scripts/migrate-image-urls.mjs
 */

import fs from "fs/promises";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

// ==========================
// Configuración — AJUSTA ESTO
// ==========================

const SERVICE_ACCOUNT_PATH = "./service-account.json";
const STORAGE_BUCKET = "grupo-valor-9014d.firebasestorage.app";

// ==========================
// Setup
// ==========================

const serviceAccountRaw = await fs.readFile(SERVICE_ACCOUNT_PATH, "utf-8");
const serviceAccount = JSON.parse(serviceAccountRaw);

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: STORAGE_BUCKET,
});

const db = getFirestore();
const bucket = getStorage().bucket();

function isFullUrl(value) {
  return typeof value === "string" && /^https?:\/\//.test(value);
}

async function resolveStoragePath(path) {
  if (!path || isFullUrl(path)) return path ?? null;

  try {
    const file = bucket.file(path);
    const [metadata] = await file.getMetadata();
    const token = metadata.metadata?.firebaseStorageDownloadTokens;

    if (!token) {
      console.log(`  ⚠ "${path}" no tiene download token, se deja igual.`);
      return path;
    }

    const encodedPath = encodeURIComponent(path);
    return `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodedPath}?alt=media&token=${token}`;
  } catch (error) {
    console.log(`  ✗ Error resolviendo "${path}": ${error.message}`);
    return path;
  }
}

async function main() {
  const snapshot = await db.collection("projects").get();

  console.log(`Revisando ${snapshot.size} proyectos...\n`);

  let updated = 0;

  for (const doc of snapshot.docs) {
    const project = doc.data();
    let changed = false;

    const newCoverImage = await resolveStoragePath(project.coverImage);
    if (newCoverImage !== project.coverImage) changed = true;

    const newGallery = await Promise.all(
      (project.gallery ?? []).map(resolveStoragePath)
    );
    if (
      JSON.stringify(newGallery) !== JSON.stringify(project.gallery ?? [])
    ) {
      changed = true;
    }

    if (changed) {
      await doc.ref.update({
        coverImage: newCoverImage,
        gallery: newGallery,
      });

      updated++;
      console.log(`✓ ${project.title ?? doc.id} actualizado`);
    }
  }

  console.log(`\nListo. ${updated} de ${snapshot.size} proyectos actualizados.`);
}

main().catch((error) => {
  console.error("Error fatal:", error);
  process.exit(1);
});
