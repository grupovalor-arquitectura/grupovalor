import deleteImage from "./storage/deleteImage";
import deleteArchiveDocument from "./firestore/deleteArchiveDocument";

export default async function deleteArchive(archive) {
  try {

    // ==========================
    // Gallery
    // ==========================

    if (Array.isArray(archive.gallery)) {
      await Promise.all(
        archive.gallery.map((image) => deleteImage(image))
      );
    }

    // ==========================
    // Firestore
    // ==========================

    await deleteArchiveDocument(archive);

  } catch (error) {
    console.error("Error eliminando registro:", error);
    throw error;
  }
}