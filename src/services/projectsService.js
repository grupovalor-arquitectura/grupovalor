import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase/firestore";

export async function getProjects() {

  console.log("🔥 LEYENDO PROJECTS DESDE FIRESTORE");
  try {
    const snapshot = await getDocs(collection(db, "projects"));

    const projects = snapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    return projects.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error("Error obteniendo proyectos:", error);
    throw error;
  }
}