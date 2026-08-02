import {
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../../firebase/firestore";
import saveWithVersion from "../../../services/saveWithVersion";

export default async function updateProject(project) {
  if (!project?.id) {
    throw new Error("El proyecto no tiene un id.");
  }

  const projectRef = doc(
    db,
    "projects",
    String(project.id)
  );

  // Mismo caso que createProject: envolvemos el updateDoc con
  // saveWithVersion para que la edición bumpee config/website.version
  // y el sitio público sepa que debe refrescar su cache.
  return saveWithVersion(() => updateDoc(projectRef, project));
}