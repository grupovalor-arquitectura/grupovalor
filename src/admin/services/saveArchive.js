import saveArchiveGallery from "./storage/saveArchiveGallery";
import updateArchive from "./firestore/updateArchive";

/**
 * Guarda un registro del archivo.
 *
 * - Sincroniza la galería.
 * - Actualiza Firestore.
 */

export default async function saveArchive({
  originalArchive,
  archive,
  galleryFiles,
}) {
  const data = { ...archive };

  // ==========================
  // Gallery
  // ==========================

  data.gallery = await saveArchiveGallery({
    archive: originalArchive,
    gallery: data.gallery,
    galleryFiles,
  });

  // ==========================
  // Firestore
  // ==========================

  await updateArchive(data);

  return data;
}