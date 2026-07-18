import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";

import { useState } from "react";
import { useProjects } from "../context/ProjectsContext";

import InnerPageLayout from "../components/InnerPageLayout";
import ProjectsHeader from "../components/projects/ProjectsHeader";
import ProjectsFilters from "../components/projects/ProjectsFilters";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ProjectsHistorical from "../components/projects/ProjectsHistorical";
import ProjectCard from "../components/ProjectCard";


export default function Projects() {

  const [filter, setFilter] = useState("all");

  const { projects, loading } = useProjects();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.filters.includes(filter)
        );

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
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                cardNumber={index + 1}
                showDivider={index < filteredProjects.length - 1}
              />
            ))}
          </Box>
        ) : (
          <ProjectsGrid
            projects={filteredProjects}
          />
        )}

        {filter === "history" && (
          <ProjectsHistorical />
        )}

        
      </Box>
    </InnerPageLayout>
  );
}