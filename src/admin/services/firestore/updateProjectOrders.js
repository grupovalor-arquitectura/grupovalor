import {
  writeBatch,
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../../../firebase/firestore";

export default async function updateProjectOrders(projects) {
  const batch = writeBatch(db);

  const snapshot = await getDocs(
    collection(db, "projects")
  );

  snapshot.forEach((doc) => {
    const project = projects.find(
      (p) => String(p.id) === doc.id
    );

    if (!project) return;

    batch.update(doc.ref, {
      order: project.order,
    });
  });

  await batch.commit();
}