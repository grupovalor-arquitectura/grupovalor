import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase/firestore";

export async function getCompanies() {
  try {
    const snapshot = await getDocs(
      collection(db, "companies")
    );

    return snapshot.docs
      .map((doc) => ({
        id: doc.id, // ← ID del documento de Firestore (solo en memoria)
        ...doc.data(),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

  } catch (error) {
    console.error("Error obteniendo compañías:", error);
    throw error;
  }
}