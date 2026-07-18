import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ActionButton({ title, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        flex: 1,
        height: 180,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        border: "1px solid",
        borderColor: "background.default",

        cursor: "pointer",

        transition: "all .25s ease",

        "&:hover": {
          bgcolor: "background.default",
        },

        "&:hover .title": {
          color: "primary.main",
        },
      }}
    >
      <Typography
        className="title"
        variant="h5"
        sx={{
          color: "background.default",
          transition: "color .25s ease",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default function DashboardActions() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 4,
        mb: 8,
      }}
    >
      <ActionButton
        title="Agregar proyecto"
        onClick={() => navigate("/admin/projects/new")}
      />

      <ActionButton
        title="Agregar archivo"
        onClick={() => navigate("/admin/archive/new")}
      />
    </Box>
  );
}