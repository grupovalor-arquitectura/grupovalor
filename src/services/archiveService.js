import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase/firestore";

export async function getArchive() {
  try {
    const snapshot = await getDocs(collection(db, "archive"));

    const archive = snapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    return archive.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error("Error obteniendo archivo histórico:", error);
    throw error;
  }
}