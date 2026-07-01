import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firestore";

export async function getHomeContent() {
  try {
    const docRef = doc(db, "home", "content");

    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error("El documento home/content no existe.");
    }

    return docSnap.data();
  } catch (error) {
    console.error("Error obteniendo el Home:", error);
    throw error;
  }
}