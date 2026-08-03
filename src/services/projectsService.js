import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firestore";
import { resolveImage } from "./resolveImage";

// Usado por Home (destacados) y el dashboard admin, donde sí hace falta
// la lista completa. La vitrina pública /proyectos ya NO usa esta
// función — usa getProjectsPage() en su lugar (ver projectsPageService.js).
export async function getProjects() {
  try {
    const snapshot = await getDocs(collection(db, "projects"));

    const projects = await Promise.all(
      snapshot.docs.map(async (doc) => {
        const project = doc.data();

        return {
          ...project,
          coverImage: await resolveImage(project.coverImage),
          gallery: await Promise.all(
            (project.gallery ?? []).map(resolveImage)
          ),
        };
      })
    );

    return projects.sort((a, b) => b.order - a.order);
  } catch (error) {
    console.error("Error obteniendo proyectos:", error);
    throw error;
  }
}