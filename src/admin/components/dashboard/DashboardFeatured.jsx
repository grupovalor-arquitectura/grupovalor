import {
  Box,
  Typography,
} from "@mui/material";

import { useProjects } from "../../../context/ProjectsContext";

export default function DashboardFeatured() {
  const { featuredProjects } = useProjects();

  return (
    <Box
      sx={{
        mt: 8,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          color: "background.default",
        }}
      >
        Proyectos destacados
      </Typography>

      {featuredProjects.map((project) => (
        <Box
          key={project.id}
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr auto",

            py: 2,

            borderBottom: "1px solid",
            borderColor: "background.default",

            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "background.default",
            }}
          >
            {project.title}
          </Typography>

          <Typography
            sx={{
              color: "background.default",
            }}
          >
            {project.company}
          </Typography>

          <Typography
            sx={{
              color: "background.default",
              cursor: "pointer",
            }}
          >
            Editar
          </Typography>
        </Box>
      ))}
    </Box>
  );
}