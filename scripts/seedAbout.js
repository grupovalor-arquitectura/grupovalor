import { doc, setDoc } from "firebase/firestore";

import { db } from "../src/firebase/firestore";
import { aboutData } from "../src/data/aboutData";

export async function seedAbout() {
  try {
    await setDoc(
      doc(db, "about", "content"),
      aboutData
    );

    console.log("✅ About sembrado correctamente.");
  } catch (error) {
    console.error("❌ Error al sembrar About:", error);
  }
}