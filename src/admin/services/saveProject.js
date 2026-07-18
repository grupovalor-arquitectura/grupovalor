import saveCover from "./storage/saveCover";
import saveGallery from "./storage/saveGallery";
import updateProject from "./firestore/updateProject";

import createProject from "./firestore/createProject";
import getNextProjectId from "./firestore/getNextProjectId";
import getNextProjectOrder from "./firestore/getNextProjectOrder";


/**
 * Guarda un proyecto.
 *
 * - Sube portada si cambió.
 * - Sincroniza la galería.
 * - Actualiza Firestore.
 */

export default async function saveProject({

  isNew,
  originalProject,
  project,
  coverFile,
  galleryFiles,

}) {


  const data = { ...project };

  if (isNew) {
    data.id = await getNextProjectId();
    data.order = await getNextProjectOrder();

   
  }

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
    project: data,
    originalProject,
    gallery: data.gallery,
    galleryFiles,
  });

  // ==========================
  // Firestore
  // ==========================

 if (isNew) {
    await createProject(data);
  } else {
    await updateProject(data);
  }

  return data;
}