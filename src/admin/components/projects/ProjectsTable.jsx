import { Box, Typography } from "@mui/material";

import { useProjects } from "../../../context/ProjectsContext";
import ProjectRow from "./ProjectRow";

export default function ProjectsTable() {
  const { projects } = useProjects();

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          color: "background.default",
          mb: 5,
        }}
      >
        Proyectos
      </Typography>

      {/* Header */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr auto auto",
          gap: 4,

          pb: 2,

          borderBottom: "1px solid",
          borderColor: "background.default",
        }}
      >
        <Typography color="background.default">
          Nombre
        </Typography>

        <Typography color="background.default">
          Editar
        </Typography>

        <Typography color="background.default">
          Eliminar
        </Typography>
      </Box>

      {/* Filas */}

      {projects.map((project) => (
        <ProjectRow
          key={project.slug}
          project={project}
        />
      ))}
    </Box>
  );
}