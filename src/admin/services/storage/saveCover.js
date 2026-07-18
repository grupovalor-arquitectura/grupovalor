import deleteImage from "./deleteImage";
import uploadImage from "./uploadImage";

export default async function saveCover({
  project,
  coverFile,
}) {
  // No cambió la portada
  if (!coverFile) {
    return project.coverImage;
  }

  // Eliminar portada anterior
  if (project.coverImage) {
    await deleteImage(project.coverImage);
  }

  // Subir nueva portada
  const coverUrl = await uploadImage({
    file: coverFile,
    folder: `images/${project.slug}`,
    fileName: "cover",
  });

  return coverUrl;
}