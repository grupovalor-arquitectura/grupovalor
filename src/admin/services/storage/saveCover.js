import deleteImage from "./deleteImage";
import uploadImage from "./uploadImage";

export default async function saveCover({
  project,
  originalProject,
  coverFile,
}) {
  // Se subió un archivo nuevo: reemplaza cualquier portada anterior.
  if (coverFile) {
    if (originalProject?.coverImage) {
      await deleteImage(originalProject.coverImage);
    }

    return await uploadImage({
      file: coverFile,
      folder: `images/${project.slug}`,
      fileName: "cover",
    });
  }

  // No hay archivo nuevo, pero la portada se borró explícitamente desde
  // el form (formData.coverImage quedó vacío comparado con la original).
  if (!project.coverImage && originalProject?.coverImage) {
    await deleteImage(originalProject.coverImage);
    return null;
  }

  // Sin cambios.
  return project.coverImage;
}