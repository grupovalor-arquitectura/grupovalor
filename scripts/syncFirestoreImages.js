import { db, bucket } from "./firebaseAdmin.js";

// ==============================
// Normalizar títulos
// ==============================

function normalize(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "")
    .replace(/[–—]/g, "-")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// ==============================

async function buildImageData(folder) {
  const prefix = `images/${folder}/gallery/`;

  const [galleryFiles] = await bucket.getFiles({
    prefix,
  });

  const gallery = galleryFiles
    .filter(file => !file.name.endsWith("/"))
    .map(file => file.name)
    .sort();

  const coverPath = `images/${folder}/cover.jpg`;

  const [exists] = await bucket.file(coverPath).exists();

  return {
    coverImage: exists ? coverPath : null,
    gallery,
  };
}

// ==============================

async function updateCollection(collectionName, hasCover) {

  console.log(`\n📁 ${collectionName}\n`);

  const snapshot = await db.collection(collectionName).get();

  let updated = 0;
  let missing = 0;

  for (const doc of snapshot.docs) {

    const data = doc.data();

    const folder = normalize(data.title);

    const images = await buildImageData(folder);

    if (images.gallery.length === 0 && !images.coverImage) {

      console.log(`⚠ ${data.title}`);

      missing++;

      continue;
    }

    const update = {
      gallery: images.gallery,
    };

    if (hasCover) {
      update.coverImage = images.coverImage;
    }

    await doc.ref.update(update);

    console.log(`✅ ${data.title}`);

    updated++;
  }

  console.log("");

  console.log(`Actualizados : ${updated}`);
  console.log(`Sin imágenes : ${missing}`);
}

// ==============================

async function main() {

  console.clear();

  console.log("======================================");
  console.log("SYNC FIRESTORE IMAGES");
  console.log("======================================");

  await updateCollection("projects", true);

  await updateCollection("archive", false);

  console.log("");

  console.log("======================================");
  console.log("FINALIZADO");
  console.log("======================================");
}

main().catch(console.error);