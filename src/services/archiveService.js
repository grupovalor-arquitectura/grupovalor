import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

import { db } from "../firebase/firestore";
import { storage } from "../firebase/firebase";

async function resolveImage(imagePath) {
  if (!imagePath) return "";

  try {
    const imageRef = ref(storage, imagePath);
    return await getDownloadURL(imageRef);
  } catch (error) {
    console.warn("No se pudo resolver la imagen:", imagePath);
    return "";
  }
}

export async function getArchive() {


  try {
    const snapshot = await getDocs(collection(db, "archive"));

    const archive = await Promise.all(
      snapshot.docs.map(async (doc) => {
        const project = doc.data();

        return {
          ...project,

          gallery: await Promise.all(
            (project.gallery ?? []).map(resolveImage)
          ),
        };
      })
    );

    return archive.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error("Error obteniendo archivo histórico:", error);
    throw error;
  }
}