import uploadImage from "./storage/uploadImage";
import uploadImages from "./storage/uploadImages";
import updateProject from "./firestore/updateProject";
/**
 * Guarda un proyecto.
 *
 * - Sube portada si cambió.
 * - Sube nuevas imágenes de galería.
 * - Actualiza Firestore.
 */

export default async function saveProject({
  project,
  coverFile,
  galleryFiles,
}) {
  const data = { ...project };

  // ==========================
  // Cover
  // ==========================

  if (coverFile) {
    data.coverImage = await uploadImage({
      file: coverFile,
      folder: `images/projects/${project.slug}`,
      fileName: "cover",
    });
  }

  // ==========================
  // Gallery
  // ==========================

  if (galleryFiles.length) {
    const urls = await uploadImages({
      files: galleryFiles,
      folder: `images/projects/${project.slug}/gallery`,
    });

    data.gallery = [
      ...project.gallery,
      ...urls,
    ];
  }

  // ==========================
  // Firestore
  // ==========================

  await updateProject(data);

  return data;
}