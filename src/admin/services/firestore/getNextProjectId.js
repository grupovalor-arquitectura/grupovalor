import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../../../firebase/firestore";

export default async function getNextProjectId() {
  const snapshot = await getDocs(
    collection(db, "projects")
  );

  if (snapshot.empty) {
    return 1;
  }

  const maxId = Math.max(
    ...snapshot.docs.map((doc) => {
      const id = Number(doc.data().id);

      return Number.isFinite(id) ? id : 0;
    })
  );

  return maxId + 1;
}