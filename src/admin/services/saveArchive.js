import saveArchiveGallery from "./storage/saveArchiveGallery";
import updateArchive from "./firestore/updateArchive";

import createArchive from "./firestore/createArchive";
import getNextArchiveId from "./firestore/getNextArchiveId";
import getNextArchiveOrder from "./firestore/getNextArchiveOrder";

/**
 * Guarda un registro del archivo.
 *
 * - Sincroniza la galería.
 * - Actualiza Firestore.
 */

export default async function saveArchive({
  isNew,
  originalArchive,
  archive,
  galleryFiles,
}) {
  const data = { ...archive };

  if (isNew) {
    data.id = await getNextArchiveId();
    data.order = await getNextArchiveOrder();
  }

  // ==========================
  // Gallery
  // ==========================

  data.gallery = await saveArchiveGallery({
    originalArchive,
    archive: data,
    gallery: data.gallery,
    galleryFiles,
  });

  // ==========================
  // Firestore
  // ==========================

  if (isNew) {
    await createArchive(data);
  } else {
    await updateArchive(data);
  }

  return data;
}