import {
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../../firebase/firestore";

export default async function updateProject(project) {
  if (!project?.id) {
    throw new Error("El proyecto no tiene un id.");
  }

  const projectRef = doc(
    db,
    "projects",
    String(project.id)
  );

  await updateDoc(projectRef, project);
}