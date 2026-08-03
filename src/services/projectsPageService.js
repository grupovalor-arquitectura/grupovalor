import {
  collection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase/firestore";
import { resolveImage } from "./resolveImage";

export const PROJECTS_PAGE_SIZE = 20;

/**
 * Trae UNA página de proyectos directo de Firestore, en vez de traer la
 * colección completa. Pensado específicamente para /proyectos, donde la
 * lista puede seguir creciendo. El resto del sitio (Home, dashboard)
 * sigue usando getProjects() con la lista completa.
 *
 * @param {"all"|"sale"|"history"} filter - tag de project.filters, o
 *   "all" para no filtrar.
 * @param {import("firebase/firestore").QueryDocumentSnapshot|null} cursor
 *   - el último documento de la página anterior, o null para la primera.
 *
 * NOTA: si usas un filter distinto de "all", Firestore va a pedir crear
 * un índice compuesto la primera vez que corras esta query (where +
 * orderBy sobre campos distintos). El error en consola trae un link
 * directo para crearlo con un clic — o se crea a mano en Firebase
 * Console → Firestore → Índices: colección "projects", campos
 * "filters" (Arrays) + "order" (Descendente).
 */
export async function getProjectsPage({ filter = "all", cursor = null } = {}) {
  const constraints = [];

  if (filter !== "all") {
    constraints.push(where("filters", "array-contains", filter));
  }

  constraints.push(orderBy("order", "desc"));

  if (cursor) {
    constraints.push(startAfter(cursor));
  }

  constraints.push(limit(PROJECTS_PAGE_SIZE));

  const q = query(collection(db, "projects"), ...constraints);
  const snapshot = await getDocs(q);

  const projects = await Promise.all(
    snapshot.docs.map(async (doc) => {
      const project = doc.data();

      return {
        ...project,
        coverImage: await resolveImage(project.coverImage),
        gallery: await Promise.all(
          (project.gallery ?? []).map(resolveImage)
        ),
      };
    })
  );

  return {
    projects,
    cursor: snapshot.docs[snapshot.docs.length - 1] ?? null,
    hasMore: snapshot.docs.length === PROJECTS_PAGE_SIZE,
  };
}