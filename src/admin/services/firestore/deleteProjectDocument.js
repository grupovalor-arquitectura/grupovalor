import {
  doc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../../../firebase/firestore";

export default async function deleteProjectDocument(project) {
  if (!project?.id) {
    throw new Error("El proyecto no tiene un id.");
  }

  const projectRef = doc(
    db,
    "projects",
    String(project.id)
  );

  await deleteDoc(projectRef);
}