import fs from "fs";
import path from "path";

import { projectsData } from "../src/data/projectsData.js";

// =============================
// Ruta de las carpetas
// =============================

const PROJECTS_PATH =
  "C:/Users/saraa/OneDrive/Documents/Proyectos/02_Externos/Felipe/Grupo Valor/02_Entregas/2_GV_Website/grupovalor/src/assets/registro-fotografico";

// =============================
// Unimos projects + archive
// =============================

const allProjects = [
  ...projectsData.projects,
  ...projectsData.archive,
];

// =============================
// Normalizar texto
// =============================

function normalize(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/^\d+\s*-\s*/, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
}

// =============================
// Crear nombre de carpeta
// =============================

function folderName(project) {
  if (project.slug) {
    return project.slug;
  }

  return project.title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// =============================
// Leer carpetas
// =============================

const folders = fs
  .readdirSync(PROJECTS_PATH)
  .filter((folder) =>
    fs.statSync(path.join(PROJECTS_PATH, folder)).isDirectory()
  );


let renamed = 0;
let skipped = 0;
let errors = 0;

folders.forEach((folder) => {
  const cleanFolder = folder.replace(/^\d+\-/, "");

  const normalizedFolder = normalize(cleanFolder);

  const project = allProjects.find(
    (item) => normalize(item.title) === normalizedFolder
  );

  if (!project) {
    console.log(`❌ Sin coincidencia: ${folder}`);
    errors++;
    return;
  }

  const newFolder = folderName(project);

  // Ya tiene el nombre correcto
  if (folder === newFolder) {
    console.log(`⏭ ${folder}`);
    skipped++;
    return;
  }

  const oldPath = path.join(PROJECTS_PATH, folder);
  const newPath = path.join(PROJECTS_PATH, newFolder);

  // Evita sobreescribir una carpeta existente
  if (fs.existsSync(newPath)) {
    console.log(`⚠ Ya existe: ${newFolder}`);
    errors++;
    return;
  }

  fs.renameSync(oldPath, newPath);

  console.log(`✓ ${folder}`);
  console.log(`  → ${newFolder}\n`);

  renamed++;
});

console.log("\n===============================");
console.log(`Renombradas : ${renamed}`);
console.log(`Sin cambios : ${skipped}`);
console.log(`Errores     : ${errors}`);
console.log("===============================\n");