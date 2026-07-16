import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProjectRow({ project }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "2fr auto auto",
        gap: 4,

        alignItems: "center",

        py: 2,

        borderBottom: "1px solid",
        borderColor: "background.default",
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
        onClick={() =>
            navigate(`/admin/projects/${project.slug}`)
        }
        sx={{
            color: "background.default",
            cursor: "pointer",

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