import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firestore";

import footerData from "../data/footerData";

export async function seedFooter() {
  try {
    await setDoc(
      doc(db, "footer", "content"),
      footerData
    );

    console.log("✅ Footer sembrado");
  } catch (error) {
    console.error(error);
  }
}