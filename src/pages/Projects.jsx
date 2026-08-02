import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";

import { useState, useRef, useEffect } from "react";
import { useProjects } from "../context/ProjectsContext";

import InnerPageLayout from "../components/InnerPageLayout";
import ProjectsHeader from "../components/projects/ProjectsHeader";
import ProjectsFilters from "../components/projects/ProjectsFilters";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ProjectCard from "../components/ProjectCard";

const BATCH_SIZE = 20;

export default function Projects() {

  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const { projects, loading } = useProjects();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.filters?.includes(filter));

  // Al cambiar de filtro, volvemos a mostrar solo el primer lote.
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [filter]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const sentinelRef = useRef(null);

  useEffect(() => {
    if (!hasMore) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(prev + BATCH_SIZE, filteredProjects.length)
          );
        }
      },
      { rootMargin: "600px" }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [hasMore, filteredProjects.length]);

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
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                cardNumber={index + 1}
                showDivider={index < visibleProjects.length - 1}
              />
            ))}
          </Box>
        ) : (
          <ProjectsGrid
            projects={visibleProjects}
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