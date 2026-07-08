import { doc, setDoc } from "firebase/firestore";

import { db } from "../firebase/firestore";
import { projectsData } from "../data/projectsData";

export async function seedProjects() {
  try {
    for (const project of projectsData.projects) {
      await setDoc(
        doc(db, "projects", String(project.id)),
        project
      );

      console.log(`✔ ${project.title} sembrado`);
    }

    console.log("✅ Todos los proyectos fueron sembrados correctamente.");
  } catch (error) {
    console.error("❌ Error al sembrar proyectos:", error);
  }
}