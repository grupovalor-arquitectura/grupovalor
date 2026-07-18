import { Box, Typography } from "@mui/material";

import { useProjects } from "../../../context/ProjectsContext";

import ArchiveRow from "./ArchiveRow";

export default function ArchiveTable() {
  const { archiveProjects } = useProjects();

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          color: "background.default",
          mb: 5,
        }}
      >
        Archivo
      </Typography>

      {/* Header */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "80px 80px 160px 1fr 100px 100px",
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
          Año
        </Typography>

        <Typography color="background.default">
          Nombre
        </Typography>

        <Typography
          color="background.default"
          sx={{ justifySelf: "end" }}
        >
          Editar
        </Typography>

        <Typography
          color="background.default"
          sx={{ justifySelf: "end" }}
        >
          Eliminar
        </Typography>
      </Box>

      {/* Filas */}

      {[...archiveProjects]
        .sort((a, b) => a.order - b.order)
        .map((archive) => (
          <ArchiveRow
            key={archive.id}
            archive={archive}
          />
        ))}
    </Box>
  );
}