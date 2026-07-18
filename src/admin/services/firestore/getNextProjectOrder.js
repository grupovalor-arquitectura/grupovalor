import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../../../firebase/firestore";

export default async function getNextProjectOrder() {
  const snapshot = await getDocs(
    collection(db, "projects")
  );

  if (snapshot.empty) {
    return 1;
  }

  const maxOrder = Math.max(
    ...snapshot.docs.map((doc) => {
      const order = Number(doc.data().order);

      return Number.isFinite(order) ? order : 0;
    })
  );

  return maxOrder + 1;
}