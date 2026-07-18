import fs from "fs";
import path from "path";
import { bucket } from "./firebaseAdmin.js";

const LOCAL_IMAGES_PATH = "./src/assets/registro-fotografico";
const STORAGE_ROOT = "images";

const startTime = Date.now();

let totalProjects = 0;
let totalImages = 0;
let totalCovers = 0;
let totalErrors = 0;

async function uploadFile(localPath, destination) {
  try {
    await bucket.upload(localPath, {
      destination,
      metadata: {
        cacheControl: "public, max-age=31536000",
      },
    });

    console.log(`   ✅ ${destination}`);
    totalImages++;
  } catch (error) {
    console.error(`   ❌ ${destination}`);
    console.error(error.message);
    totalErrors++;
  }
}

async function processProject(projectFolder) {
  const folderPath = path.join(LOCAL_IMAGES_PATH, projectFolder);

  const files = fs
    .readdirSync(folderPath)
    .filter((file) => file.toLowerCase().endsWith(".jpg"));

  console.log("");
  console.log("=======================================");
  console.log(`📁 ${projectFolder}`);
  console.log("=======================================");

  for (const file of files) {
    const localFile = path.join(folderPath, file);

    // Cover
    if (file.endsWith("_image_cover.jpg")) {
      totalCovers++;

      await uploadFile(
        localFile,
        `${STORAGE_ROOT}/${projectFolder}/cover.jpg`
      );

      continue;
    }

    // Gallery
    await uploadFile(
      localFile,
      `${STORAGE_ROOT}/${projectFolder}/gallery/${file}`
    );
  }
}

async function main() {
  console.clear();

  console.log("");
  console.log("=======================================");
  console.log("🚀 MIGRACIÓN DE IMÁGENES A STORAGE");
  console.log("=======================================");
  console.log("");

  const folders = fs
    .readdirSync(LOCAL_IMAGES_PATH)
    .filter((folder) =>
      fs.statSync(path.join(LOCAL_IMAGES_PATH, folder)).isDirectory()
    );

  totalProjects = folders.length;

  console.log(`📦 Proyectos encontrados: ${totalProjects}`);
  console.log("");

  for (const folder of folders) {
    await processProject(folder);
  }

  const seconds = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log("");
  console.log("=======================================");
  console.log("✅ MIGRACIÓN FINALIZADA");
  console.log("=======================================");
  console.log(`📁 Proyectos : ${totalProjects}`);
  console.log(`🖼️  Imágenes : ${totalImages}`);
  console.log(`⭐ Covers    : ${totalCovers}`);
  console.log(`❌ Errores   : ${totalErrors}`);
  console.log(`⏱️ Tiempo    : ${seconds} s`);
  console.log("=======================================");
}

main();