import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase/firebase";

/**
 * Resuelve una referencia de imagen a una URL utilizable en <img src>.
 *
 * Compatibilidad hacia atrás: si el valor ya es una URL completa (porque
 * se guardó resuelta en el momento de subirla), se retorna tal cual sin
 * pegarle a Storage. Si es una ruta de Storage (el formato viejo, el que
 * usan los 70 proyectos ya sembrados), se resuelve como antes. Esto
 * permite migrar datos gradualmente sin romper nada.
 */
export async function resolveImage(value) {
  if (!value) return "";

  if (typeof value === "string" && /^https?:\/\//.test(value)) {
    return value;
  }

  try {
    return await getDownloadURL(ref(storage, value));
  } catch (error) {
    console.error(`No se pudo resolver la imagen: ${value}`, error);
    return "";
  }
}