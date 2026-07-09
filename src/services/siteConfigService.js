import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firestore";

export async function getSiteConfig() {
  const docRef = doc(db, "config", "website");
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    throw new Error("No existe el documento config/website");
  }

  return snapshot.data();
}