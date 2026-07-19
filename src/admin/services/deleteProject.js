import deleteImage from "./storage/deleteImage";
import deleteProjectDocument from "./firestore/deleteProjectDocument";

export default async function deleteProject(project) {

  try {
    // ==========================
    // Cover
    // ==========================

    if (project.coverImage) {
      await deleteImage(project.coverImage);
    }

    // ==========================
    // Gallery
    // ==========================

    if (Array.isArray(project.gallery)) {
      await Promise.all(
        project.gallery.map((image) => deleteImage(image))
      );
    }

    // ==========================
    // Firestore
    // ==========================

    await deleteProjectDocument(project);

  } catch (error) {
    console.error("Error eliminando proyecto:", error);
    throw error;
  }
}