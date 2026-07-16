import uploadImage from "./uploadImage";

/**
 * Sube múltiples imágenes a Firebase Storage.
 *
 * @param {Object} params
 * @param {File[]} params.files
 * @param {String} params.folder
 *
 * @returns {Promise<String[]>}
 */

export default async function uploadImages({
  files,
  folder,
}) {
  if (!files?.length) {
    return [];
  }

  return await Promise.all(
    files.map((file) =>
      uploadImage({
        file,
        folder,
      })
    )
  );
}