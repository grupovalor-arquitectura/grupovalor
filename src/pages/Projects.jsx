import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";

import { useState, useRef, useEffect, useCallback } from "react";

import InnerPageLayout from "../components/InnerPageLayout";
import ProjectsHeader from "../components/projects/ProjectsHeader";
import ProjectsFilters from "../components/projects/ProjectsFilters";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ProjectCard from "../components/ProjectCard";

import { getProjectsPage } from "../services/projectsPageService";

export default function Projects() {

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // Ref, no state: evita duplicar el fetch si el observer dispara varias
  // veces mientras la página anterior todavía está en camino.
  const fetchingRef = useRef(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Primera página cada vez que cambia el filtro.
  useEffect(() => {
    let cancelled = false;

    async function loadFirstPage() {
      fetchingRef.current = true;

      setProjects([]);
      setCursor(null);
      setHasMore(true);

      const result = await getProjectsPage({ filter });

      if (cancelled) return;

      setProjects(result.projects);
      setCursor(result.cursor);
      setHasMore(result.hasMore);
      fetchingRef.current = false;
    }

    loadFirstPage();

    return () => {
      cancelled = true;
    };
  }, [filter]);

  const loadMore = useCallback(async () => {
    if (fetchingRef.current || !hasMore) return;
    fetchingRef.current = true;

    const result = await getProjectsPage({ filter, cursor });

    setProjects((prev) => [...prev, ...result.projects]);
    setCursor(result.cursor);
    setHasMore(result.hasMore);
    fetchingRef.current = false;
  }, [filter, cursor, hasMore]);

  const sentinelRef = useRef(null);

  useEffect(() => {
    if (!hasMore) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "600px" }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  return (
    <InnerPageLayout headerBackground="primary.main">
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