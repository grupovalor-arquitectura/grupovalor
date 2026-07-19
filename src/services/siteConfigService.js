import {
  doc,
  getDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../firebase/firestore";

export async function getSiteConfig() {
  const docRef = doc(db, "config", "website");
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    throw new Error("No existe el documento config/website");
  }

  return snapshot.data();
}

export async function bumpSiteVersion() {
  const docRef = doc(db, "config", "website");

  await updateDoc(docRef, {
    version: increment(1),
  });
}