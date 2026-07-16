import {
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../../firebase/firestore";

export default async function updateArchive(archive) {
  if (!archive?.id) {
    throw new Error("El registro no tiene un id.");
  }

  const archiveRef = doc(
    db,
    "archive",
    String(archive.id)
  );

  await updateDoc(archiveRef, archive);
}