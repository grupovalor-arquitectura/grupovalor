import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import { storage } from "../../../firebase/firebase";

/**
 * Sube una imagen a Firebase Storage.
 *
 * @param {Object} params
 * @param {File} params.file
 * @param {String} params.folder
 * @param {String} [params.fileName]
 *
 * @returns {Promise<String>} downloadURL
 */

export default async function uploadImage({
  file,
  folder,
  fileName,
}) {
  if (!file) {
    throw new Error("No se recibió ningún archivo.");
  }

  const extension = file.name.split(".").pop();

  // Si se envía un nombre, conserva la extensión.
  // Si no, genera un nombre único.
  const finalName = fileName
    ? `${fileName}.${extension}`
    : `${crypto.randomUUID()}.${extension}`;

  const storageRef = ref(
    storage,
    `${folder}/${finalName}`
  );

  await uploadBytes(storageRef, file);

  return await getDownloadURL(storageRef);
}