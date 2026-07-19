import {
  ref,
  deleteObject,
} from "firebase/storage";

import { storage } from "../../../firebase/firebase";

/**
 * Elimina una imagen de Firebase Storage a partir de su URL pública.
 *
 * @param {string} url
 */
export default async function deleteImage(url) {

   
  if (!url) return;

 


  try {
    // Extrae la ruta interna de Storage desde la URL
    const path = decodeURIComponent(
      url.split("/o/")[1].split("?")[0]
    );

    const imageRef = ref(storage, path);

    await deleteObject(imageRef);
  } catch (error) {
    // Si el archivo no existe, simplemente continuamos.
    if (error.code === "storage/object-not-found") {
      return;
    }

    console.error("Error eliminando imagen:", error);
    throw error;
  }
}