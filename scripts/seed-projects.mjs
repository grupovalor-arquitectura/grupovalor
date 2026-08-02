/**
 * seed-projects.mjs
 *
 * 1. Borra por completo la colección "projects" en Firestore (reemplazo total).
 * 2. Recorre OPTIMIZED_DIR: cada subcarpeta es un proyecto, emparejado con
 *    projectsSeed.js por el número al inicio del nombre de carpeta (ej. "58").
 * 3. Sube la foto "portada" a images/{slug}/{archivo} y el resto de fotos a
 *    images/{slug}/gallery/{archivo}.
 * 4. Escribe cada documento en Firestore con coverImage/gallery apuntando a
 *    esas rutas de Storage (no URLs — así lo espera projectsService.js).
 * 5. Bumpea config/website.version para que el sitio público invalide cache.
 *
 * Uso:
 *   npm install firebase-admin
 *   node seed-projects.mjs
 */

import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import projectsSeed from "../src/data/projectSeed.js"; // scripts/ -> src/data/

// ==========================
// Configuración — AJUSTA ESTO
// ==========================

const SERVICE_ACCOUNT_PATH = "./service-account.json";
const STORAGE_BUCKET = "grupo-valor-9014d.firebasestorage.app"; // busca VITE_FIREBASE_STORAGE_BUCKET en tu .env

const OPTIMIZED_DIR =
  "C:\\Users\\saraa\\OneDrive\\Documents\\Proyectos\\02_Externos\\Felipe\\Grupo Valor\\01_Assets\\site_fotos_optimizado";

// Pon esto en false si NO quieres borrar la colección "projects" antes de
// sembrar (por defecto en true porque pediste un reemplazo completo).
const CONFIRM_WIPE_COLLECTION = true;

const VALID_EXTENSIONS = [".webp", ".jpg", ".jpeg", ".png"];

// ==========================
// Setup Firebase Admin
// ==========================

const serviceAccountRaw = await fs.readFile(SERVICE_ACCOUNT_PATH, "utf-8");
const serviceAccount = JSON.parse(serviceAccountRaw);

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: STORAGE_BUCKET,
});

const db = getFirestore();
const bucket = getStorage().bucket();

// ==========================
// Utilidades
// ==========================

function parseFolderOrder(folderName) {
  const match = folderName.match(/^(\d+)\s*-\s*/);
  return match ? Number(match[1]) : null;
}

function getContentType(filePath) {
  switch (path.extname(filePath).toLowerCase()) {
    case ".webp":
      return "image/webp";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    default:
      return "application/octet-stream";
  }
}

async function uploadFile(localPath, destPath) {
  const token = crypto.randomUUID();

  await bucket.upload(localPath, {
    destination: destPath,
    metadata: {
      contentType: getContentType(localPath),
      metadata: {
        firebaseStorageDownloadTokens: token,
      },
    },
  });

  // Guardamos la ruta, no una URL — projectsService.js resuelve la URL
  // en el navegador con getDownloadURL() en cada visita.
  return destPath;
}

async function wipeCollection(collectionName) {
  const snapshot = await db.collection(collectionName).get();

  if (snapshot.empty) {
    console.log(`La colección "${collectionName}" ya está vacía.`);
    return;
  }

  console.log(
    `Borrando ${snapshot.size} documentos existentes en "${collectionName}"...`
  );

  const batch = db.batch();
  snapshot.docs.forEach((doc) => batch.delete(doc.ref));
  await batch.commit();

  console.log("Colección vaciada.\n");
}

// ==========================
// Main
// ==========================

async function main() {
  if (CONFIRM_WIPE_COLLECTION) {
    await wipeCollection("projects");
  } else {
    console.log(
      "CONFIRM_WIPE_COLLECTION está en false — no se borra nada, los documentos nuevos se mezclarán con los existentes.\n"
    );
  }

  const topLevel = await fs.readdir(OPTIMIZED_DIR, { withFileTypes: true });
  const projectFolders = topLevel.filter((entry) => entry.isDirectory());

  const results = [];

  for (const folder of projectFolders) {
    const order = parseFolderOrder(folder.name);

    if (order === null) {
      console.log(`⚠ No pude leer el número en "${folder.name}", se omite.`);
      continue;
    }

    const project = projectsSeed.find((p) => p.order === order);

    if (!project) {
      console.log(
        `⚠ No hay proyecto en projectsSeed.js con order ${order} ("${folder.name}"), se omite.`
      );
      continue;
    }

    const folderPath = path.join(OPTIMIZED_DIR, folder.name);

    const files = (
      await fs.readdir(folderPath, { withFileTypes: true })
    ).filter(
      (f) =>
        f.isFile() && VALID_EXTENSIONS.includes(path.extname(f.name).toLowerCase())
    );

    if (!files.length) {
      console.log(`— "${folder.name}" no tiene imágenes, se omite.`);
      continue;
    }

    const coverCandidates = files.filter((f) => /portada/i.test(f.name));
    const coverFile = coverCandidates[0] ?? null;

    if (coverCandidates.length > 1) {
      console.log(
        `  ⚠ "${folder.name}" tiene ${coverCandidates.length} archivos con "portada" en el nombre, se usó "${coverFile.name}" como portada y el resto pasó a galería.`
      );
    }

    const galleryFiles = files.filter((f) => f !== coverFile);

    console.log(
      `\n${folder.name} → ${project.slug} (${files.length} imágenes${
        coverFile ? "" : ", SIN portada"
      })`
    );

    let coverImage = null;

    if (coverFile) {
      const destPath = `images/${project.slug}/${coverFile.name}`;
      coverImage = await uploadFile(path.join(folderPath, coverFile.name), destPath);
      console.log(`  ✓ portada: ${destPath}`);
    } else {
      console.log(`  ⚠ sin foto de portada`);
    }

    const gallery = [];

    for (const file of galleryFiles) {
      const destPath = `images/${project.slug}/gallery/${file.name}`;
      await uploadFile(path.join(folderPath, file.name), destPath);
      gallery.push(destPath);
      console.log(`  ✓ galería: ${destPath}`);
    }

    results.push({
      ...project,
      coverImage,
      gallery,
    });
  }

  // Proyectos del seed sin carpeta de fotos encontrada: se siembran igual,
  // solo que sin coverImage/gallery (el cliente las sube después).
  const matchedOrders = new Set(results.map((r) => r.order));
  const unmatched = projectsSeed.filter((p) => !matchedOrders.has(p.order));

  const finalData = [...results, ...unmatched];

  console.log(`\nEscribiendo ${finalData.length} documentos en Firestore...`);

  const batch = db.batch();

  for (const project of finalData) {
    const ref = db.collection("projects").doc(String(project.id));
    batch.set(ref, project);
  }

  await batch.commit();

  // Mismo bump de versión que hace saveWithVersion en el dashboard, para
  // que el sitio público invalide su cache y traiga todo esto de una vez.
  await db.doc("config/website").update({
    version: FieldValue.increment(1),
  });

  console.log("\nListo. Colección projects sembrada.");
}

main().catch((error) => {
  console.error("Error fatal:", error);
  process.exit(1);
});
