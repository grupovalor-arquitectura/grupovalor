/**
 * optimize-images.mjs
 *
 * Recorre INPUT_DIR recursivamente, optimiza cada imagen (resize + compresión
 * a WebP) y la escribe en OUTPUT_DIR replicando la misma estructura de
 * carpetas. NUNCA toca ni sobreescribe los archivos originales.
 *
 * Uso:
 *   npm install sharp
 *   node optimize-images.mjs
 *
 * Requiere Node con soporte de ESM (package.json con "type": "module",
 * o guardar este archivo con extensión .mjs como está aquí).
 */

import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

// ==========================
// Configuración
// ==========================

const INPUT_DIR =
  "C:\\Users\\saraa\\OneDrive\\Documents\\Proyectos\\02_Externos\\Felipe\\Grupo Valor\\01_Assets\\site_fotos";

const OUTPUT_DIR =
  "C:\\Users\\saraa\\OneDrive\\Documents\\Proyectos\\02_Externos\\Felipe\\Grupo Valor\\01_Assets\\site_fotos_optimizado";

const MAX_DIMENSION = 2400; // px, lado más largo. No agranda imágenes chicas.
const FORMAT = "webp"; // "webp" | "jpeg"
const QUALITY = 80; // 1-100

// Si tienes fotos .heic (típico de iPhone), agrégalo aquí y prueba con
// una sola imagen primero — sharp necesita que libvips tenga soporte HEIF,
// no siempre viene incluido según el sistema operativo.
const VALID_EXTENSIONS = [".jpg", ".jpeg", ".png"];

// ==========================
// Utilidades
// ==========================

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files = files.concat(await walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

// ==========================
// Optimización
// ==========================

async function optimizeImage(inputPath, outputPath) {
  const originalStats = await fs.stat(inputPath);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  const pipeline = sharp(inputPath).resize({
    width: MAX_DIMENSION,
    height: MAX_DIMENSION,
    fit: "inside",
    withoutEnlargement: true,
  });

  if (FORMAT === "webp") {
    pipeline.webp({ quality: QUALITY });
  } else {
    pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
  }

  await pipeline.toFile(outputPath);

  const optimizedStats = await fs.stat(outputPath);

  return {
    originalSize: originalStats.size,
    optimizedSize: optimizedStats.size,
  };
}

// ==========================
// Main
// ==========================

async function main() {
  console.log(`Buscando imágenes en: ${INPUT_DIR}`);

  const allFiles = await walk(INPUT_DIR);
  const imageFiles = allFiles.filter((file) =>
    VALID_EXTENSIONS.includes(path.extname(file).toLowerCase())
  );

  console.log(`Encontradas ${imageFiles.length} imágenes.\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;
  let processed = 0;
  const failed = [];

  for (const inputPath of imageFiles) {
    const relativePath = path.relative(INPUT_DIR, inputPath);
    const parsed = path.parse(relativePath);

    const outputExt = FORMAT === "webp" ? "webp" : "jpg";
    const outputRelative = path.join(parsed.dir, `${parsed.name}.${outputExt}`);
    const outputPath = path.join(OUTPUT_DIR, outputRelative);

    try {
      const { originalSize, optimizedSize } = await optimizeImage(
        inputPath,
        outputPath
      );

      totalOriginal += originalSize;
      totalOptimized += optimizedSize;
      processed++;

      const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(0);

      console.log(
        `✓ ${relativePath} — ${formatBytes(originalSize)} → ${formatBytes(
          optimizedSize
        )} (-${savings}%)`
      );
    } catch (error) {
      failed.push({ file: relativePath, error: error.message });
      console.log(`✗ ${relativePath} — ERROR: ${error.message}`);
    }
  }

  console.log("\n==========================");
  console.log("Resumen");
  console.log("==========================");
  console.log(`Procesadas: ${processed}/${imageFiles.length}`);
  console.log(`Fallidas: ${failed.length}`);
  console.log(`Tamaño original total: ${formatBytes(totalOriginal)}`);
  console.log(`Tamaño optimizado total: ${formatBytes(totalOptimized)}`);

  if (totalOriginal > 0) {
    console.log(
      `Ahorro: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`
    );
  }

  if (failed.length) {
    console.log("\nArchivos con error:");
    failed.forEach(({ file, error }) => console.log(`  - ${file}: ${error}`));
  }
}

main().catch((error) => {
  console.error("Error fatal:", error);
  process.exit(1);
});
