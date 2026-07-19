import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firestore";

export async function getFooter() {
  

  const docRef = doc(db, "footer", "content");
  const docSnap = await getDoc(docRef);

  

  if (!docSnap.exists()) {
    console.warn("El documento del footer no existe.");
    return null;
  }
;

  return docSnap.data();
}