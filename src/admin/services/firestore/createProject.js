import {
  doc,
  setDoc,
} from "firebase/firestore";

import { db } from "../../../firebase/firestore";
import saveWithVersion from "../../../services/saveWithVersion";

export default async function createProject(project) {
  if (!project?.id) {
    throw new Error("El proyecto no tiene un id.");
  }

  const projectRef = doc(
    db,
    "projects",
    String(project.id)
  );

  // saveWithVersion hace el setDoc y además bumpea config/website.version,
  // para que el sitio público invalide su cache y traiga este proyecto
  // en el próximo load, sin depender de que quien llame a createProject
  // se acuerde de hacerlo.
  return saveWithVersion(() => setDoc(projectRef, project));
}