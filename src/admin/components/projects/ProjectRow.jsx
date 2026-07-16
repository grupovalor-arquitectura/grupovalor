import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProjectRow({ project }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "80px 80px 1fr 100px 100px",
        gap: 4,
        alignItems: "center",
        py: 2,
        borderBottom: "1px solid",
        borderColor: "background.default",
      }}
    >
      <Typography color="background.default">
        {project.id}
      </Typography>

      <Typography color="background.default">
        {project.order}
      </Typography>

      <Typography color="background.default">
        {project.title}
      </Typography>

      <Typography
        onClick={() =>
          navigate(`/admin/projects/${project.slug}`)
        }
        sx={{
          color: "background.default",
          cursor: "pointer",
          textAlign: "center",

          "&:hover": {
            opacity: 0.6,
          },
        }}
      >
        Editar
      </Typography>

      <Typography
        sx={{
          color: "background.default",
          cursor: "pointer",
          textAlign: "center",

          "&:hover": {
            opacity: 0.6,
          },
        }}
      >
        Eliminar
      </Typography>
    </Box>
  );
}