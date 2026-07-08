import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import InnerPageLayout from "../components/InnerPageLayout";

import ProjectsHeader from "../components/projects/ProjectsHeader";
import ProjectsFilters from "../components/projects/ProjectsFilters";
import ProjectsGrid from "../components/projects/ProjectsGrid";

import { getProjects } from "../services/projectsService";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadProjects();
  }, []);

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

        <ProjectsGrid
          projects={filteredProjects}
        />
      </Box>
    </InnerPageLayout>
  );
}