import saveCover from "./storage/saveCover";
import saveGallery from "./storage/saveGallery";
import updateProject from "./firestore/updateProject";

/**
 * Guarda un proyecto.
 *
 * - Sube portada si cambió.
 * - Sincroniza la galería.
 * - Actualiza Firestore.
 */

export default async function saveProject({
  originalProject,
  project,
  coverFile,
  galleryFiles,
}) {

  const data = { ...project };

  // ==========================
  // Cover
  // ==========================

  data.coverImage = await saveCover({
    project,
    coverFile,
  });

  // ==========================
  // Gallery
  // ==========================

  data.gallery = await saveGallery({
    project: originalProject,
    gallery: data.gallery,
    galleryFiles,
  });

  // ==========================
  // Firestore
  // ==========================

  await updateProject(data);

  return data;
}