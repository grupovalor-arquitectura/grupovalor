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
          gridTemplateColumns: "80px 80px 1fr 100px 100px",
          gap: 4,
          alignItems: "center",
          pb: 2,
          borderBottom: "1px solid",
          borderColor: "background.default",
        }}
      >
        <Typography color="background.default">
          ID
        </Typography>

        <Typography color="background.default">
          Orden
        </Typography>

        <Typography color="background.default">
          Nombre
        </Typography>

        <Typography color="background.default" textAlign="center">
          Editar
        </Typography>

        <Typography color="background.default" textAlign="center">
          Eliminar
        </Typography>
      </Box>

      {/* Filas */}

      {[...projects]
        .sort((a, b) => a.order - b.order)
        .map((project) => (
          <ProjectRow
            key={project.slug}
            project={project}
          />
        ))}
    </Box>
  );
}