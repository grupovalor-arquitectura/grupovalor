import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firestore";
import { resolveImage } from "./resolveImage";

// Usado por ProjectsContext (Home, /proyectos, dashboard admin) para
// tener la lista completa una sola vez por sesión, con cache en
// localStorage. /proyectos ya no pide su propia página aparte
// (getProjectsPage() quedó sin uso — ver projectsPageService.js) para
// no repetir esta misma consulta en cada visita.
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