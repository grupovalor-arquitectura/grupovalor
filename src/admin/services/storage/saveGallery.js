import deleteImage from "./deleteImage";
import uploadImages from "./uploadImages";

export default async function saveGallery({
  project,
  originalProject,
  gallery = [],
  galleryFiles = [],
}) {
  // ==========================
  // Eliminar imágenes borradas
  // ==========================


  const existingGallery = originalProject?.gallery ?? [];

  const removedImages = existingGallery.filter(
    (image) => !gallery.includes(image)
  );

  for (const image of removedImages) {
    await deleteImage(image);
  }

  // ==========================
  // Subir imágenes nuevas
  // ==========================

  let uploadedImages = [];

  if (galleryFiles.length) {

    uploadedImages = await uploadImages({
      files: galleryFiles,
      folder: `images/${project.slug}/gallery`,
    });

   
  }

  // ==========================
  // Galería final
  // ==========================

  return [
    ...gallery,
    ...uploadedImages,
  ];
}