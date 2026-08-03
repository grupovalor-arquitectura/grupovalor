import { useMemo } from "react";
import { useProjects } from "../context/ProjectsContext";
import { firestoreIdMap } from "../services/companyService";

/**
 * Antes hacía su propio fetch a Firestore (getCompany) cada vez que se
 * visitaba una página de empresa, sin cache, bloqueando el render.
 * Las compañías ya se cargan y cachean una sola vez en ProjectsContext
 * (gv_companies) apenas se entra a cualquier página del sitio, así que
 * acá solo hace falta buscar dentro de esa lista que ya está en memoria.
 */
export default function useCompany(slug) {
  const { companies, loading } = useProjects();

  const company = useMemo(() => {
    const documentId = firestoreIdMap[slug];
    if (!documentId) return null;

    return companies.find((item) => item.id === documentId) ?? null;
  }, [companies, slug]);

  const error =
    !loading && companies.length > 0 && !company
      ? new Error("La empresa no existe.")
      : null;

  return {
    company,
    loading,
    error,
  };
}