import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";

import { useState, useRef, useEffect, useMemo } from "react";

import InnerPageLayout from "../components/InnerPageLayout";
import ProjectsHeader from "../components/projects/ProjectsHeader";
import ProjectsFilters from "../components/projects/ProjectsFilters";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ProjectCard from "../components/ProjectCard";
import SEO from "../components/SEO";

import { useProjects } from "../context/ProjectsContext";

// Antes esta página le pedía su propia página de resultados a
// Firestore en cada visita (getProjectsPage/projectsPageService.js),
// sin usar la cache que ProjectsContext ya arma para el resto del
// sitio (Home, etc.) — por eso cada recarga repetía la consulta y la
// resolución de cada imagen contra Storage, aunque no hubiera cambiado
// nada. SiteLayout ya revisa en cada navegación si esa cache quedó
// desactualizada (refreshIfStale — una sola lectura barata) y la
// vuelve a traer completa si hace falta; si no hace falta, esta
// página no debería volver a pedir nada — solo filtra y pagina en
// memoria la lista que el contexto ya tiene cargada.
const PAGE_SIZE = 20;

export default function Projects() {

  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Vuelve a la primera "página" cuando cambia el filtro. Ajustado
  // durante el render (patrón recomendado por React para resetear
  // estado a partir de otro estado que cambió) en vez de en un
  // useEffect, que dispararía un render de más para lo mismo.
  const [prevFilter, setPrevFilter] = useState(filter);
  if (filter !== prevFilter) {
    setPrevFilter(filter);
    setVisibleCount(PAGE_SIZE);
  }

  const { projects: allProjects } = useProjects();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const filteredProjects = useMemo(() => {
    const filtered =
      filter === "all"
        ? allProjects
        : allProjects.filter((project) =>
            project.filters?.includes(filter)
          );

    return [...filtered].sort(
      (a, b) => (b.order ?? 0) - (a.order ?? 0)
    );
  }, [allProjects, filter]);

  const projects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const sentinelRef = useRef(null);

  useEffect(() => {
    if (!hasMore) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) => prev + PAGE_SIZE);
        }
      },
      { rootMargin: "600px" }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <InnerPageLayout headerBackground="primary.main">
      <SEO
        title="Proyectos"
        description="Explora los proyectos inmobiliarios desarrollados por Grupo Valor."
        path="/proyectos"
      />

      <Box
        sx={{
          bgcolor: "primary.main",
        }}
      >
        <ProjectsHeader />

        <ProjectsFilters
          value={filter}
          onChange={setFilter}
        />

        {isMobile ? (
          <Box
            sx={{
              px: 2,
              pb: 8,
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                cardNumber={project.order}
                showDivider={index < projects.length - 1}
              />
            ))}
          </Box>
        ) : (
          <ProjectsGrid
            projects={projects}
          />
        )}

        {hasMore && (
          <Box
            ref={sentinelRef}
            sx={{
              height: 1,
            }}
          />
        )}
      </Box>
    </InnerPageLayout>
  );
}
