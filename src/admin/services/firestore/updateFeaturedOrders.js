import {
  writeBatch,
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../../../firebase/firestore";
import saveWithVersion from "../../../services/saveWithVersion";

export default async function updateFeaturedOrders(projects) {
  return saveWithVersion(async () => {
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
        featuredOrder: project.featuredOrder,
      });
    });

    await batch.commit();
  });
}