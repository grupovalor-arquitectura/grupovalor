import { doc, getDoc } from "firebase/firestore";

import { db } from "../firebase/firestore";

export async function getAboutContent() {
  try {
    const docRef = doc(db, "about", "content");

    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error("El documento about/content no existe.");
    }

    return docSnap.data();
  } catch (error) {
    console.error("Error obteniendo About:", error);
    throw error;
  }
}