import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FeaturedProjectsMobile({
  projects,
}) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        px: 2,
        py: 8,
        bgcolor: "primary.main",
        minHeight: "100vh",
      }}
    >
      {projects.map((project, index) => (
        <Box
          key={project.id}
          sx={{
            mb: 8,
          }}
        >
          {/* Número */}
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "background.default",
              mb: 1,
            }}
          >
            {String(project.id).padStart(2, "0")}
          </Typography>

          {/* Título */}
          <Typography
            sx={{
              fontSize: 34,
              lineHeight: 1,
              fontWeight: 700,
              color: "background.default",
              mb: 1,
            }}
          >
            {project.title}
          </Typography>

          {/* Ciudad */}
          <Typography
            sx={{
              fontSize: 16,
              color: "background.default",
              opacity: 0.75,
              mb: 3,
            }}
          >
            {project.location}
          </Typography>

          {/* Imagen */}
          <Box
            onClick={() => navigate(`/proyectos/${project.slug}`)}
            sx={{
              width: "100%",
              aspectRatio: "4 / 3",
              overflow: "hidden",
              cursor: "pointer",
              mb: 3,
            }}
          >
            {project.coverImage && (
              <Box
                component="img"
                src={project.coverImage}
                alt={project.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            )}
          </Box>

          {/* Descripción */}
          <Typography
            sx={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "background.default",
            }}
          >
            {project.shortDescription}
          </Typography>

          {/* Divider */}
          {index < projects.length - 1 && (
            <Box
              sx={{
                width: "100%",
                height: "1px",
                bgcolor: "background.default",
                opacity: 0.2,
                mt: 6,
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
}