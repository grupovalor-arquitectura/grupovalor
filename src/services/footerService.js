import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firestore";

export async function getFooter() {
  console.log("🔥🔥🔥 VERSION NUEVA DEL SERVICIO 🔥🔥🔥");

  const docRef = doc(db, "footer", "content");
  const docSnap = await getDoc(docRef);

  console.log("EXISTE =", docSnap.exists());

  if (!docSnap.exists()) {
    console.warn("El documento del footer no existe.");
    return null;
  }

  console.log("Datos:", docSnap.data());

  return docSnap.data();
}