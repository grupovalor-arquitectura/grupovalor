import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase/firebase";

async function resolveImage(path) {
  if (!path) return "";

  try {
    return await getDownloadURL(ref(storage, path));
  } catch (error) {
    console.error(`No se pudo resolver la imagen: ${path}`, error);
    return "";
  }
}

export async function getProjects() {

  try {
    const snapshot = await getDocs(collection(db, "projects"));

    const projects = await Promise.all(
      snapshot.docs.map(async (doc) => {
        const project = doc.data();

        return {
          ...project,
          coverImage: await resolveImage(project.coverImage),
          gallery: await Promise.all((project.gallery ?? []).map(resolveImage)
),
        };
      })
    );

  
    return projects.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error("Error obteniendo proyectos:", error);
    throw error;
  }
}