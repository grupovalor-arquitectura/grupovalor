import { initializeApp, cert } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";

// Leer la cuenta de servicio
const serviceAccount = JSON.parse(
  fs.readFileSync("./scripts/serviceAccountKey.json", "utf8")
);

// Inicializar Firebase Admin
initializeApp({
  credential: cert(serviceAccount),
  storageBucket: "grupo-valor-9014d.firebasestorage.app",
});

// Exportar servicios
export const db = getFirestore();
export const bucket = getStorage().bucket();

console.log("✅ Firebase Admin inicializado");