import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firestore";

const firestoreIdMap = {
  "arquitectura-valor": "arquitecturaValor",
  "constructora-valor": "constructoraValor",
  "promotora-valor": "promotoraValor",
  "estrategias-valor": "estrategiasValor",
  "banca-valor": "bancaValor",
};

export async function getCompany(slug) {
  try {
    const documentId = firestoreIdMap[slug];

    const docRef = doc(db, "companies", documentId);

    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error("La empresa no existe.");
    }

    return docSnap.data();
  } catch (error) {
    console.error("Error obteniendo la empresa:", error);
    throw error;
  }
}