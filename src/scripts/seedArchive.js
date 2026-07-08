import { doc, setDoc } from "firebase/firestore";

import { db } from "../firebase/firestore";
import { projectsData } from "../data/projectsData";

export async function seedArchive() {
  try {
    for (const project of projectsData.archive) {
      await setDoc(
        doc(db, "archive", String(project.order)),
        project
      );

      console.log(`✔ ${project.title} sembrado`);
    }

    console.log("✅ Todo el archivo histórico fue sembrado correctamente.");
  } catch (error) {
    console.error("❌ Error al sembrar el archivo histórico:", error);
  }
}