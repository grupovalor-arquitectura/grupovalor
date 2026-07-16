import deleteImage from "./deleteImage";
import uploadImages from "./uploadImages";
import generateSlug from "../../utils/generateSlug";

export default async function saveArchiveGallery({
  archive,
  gallery,
  galleryFiles,
}) {
  // ==========================
  // Eliminar imágenes borradas
  // ==========================

  const removedImages = archive.gallery.filter(
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
      folder: `images/${generateSlug(archive.title)}/gallery`,
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