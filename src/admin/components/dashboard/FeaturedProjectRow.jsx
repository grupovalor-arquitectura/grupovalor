import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export default function FeaturedProjectRow({ project }) {
  const navigate = useNavigate();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: project.slug,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Box
      ref={setNodeRef}
      style={style}
      sx={{
        display: "grid",
        gridTemplateColumns: "40px 2fr 1fr auto",
        gap: 4,
        alignItems: "center",
        py: 2,
        borderBottom: "1px solid",
        borderColor: "background.default",
      }}
    >
      <Box
        {...attributes}
        {...listeners}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "grab",
          "&:active": {
            cursor: "grabbing",
          },
        }}
      >
        <DragIndicatorIcon
          fontSize="small"
          sx={{ color: "background.default" }}
        />
      </Box>

      <Typography sx={{ color: "background.default" }}>
        {project.title}
      </Typography>

      <Typography sx={{ color: "background.default" }}>
        {project.company}
      </Typography>

      <Typography
        onClick={() => navigate(`/admin/projects/${project.slug}`)}
        sx={{
          color: "background.default",
          cursor: "pointer",
          justifySelf: "end",

          "&:hover": {
            opacity: 0.6,
          },
        }}
      >
        Editar
      </Typography>
    </Box>
  );
}