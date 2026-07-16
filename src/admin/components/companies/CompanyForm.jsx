import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import AdminTextField from "../ui/AdminTextField";

export default function CompanyForm({
  formData,
  handleChange,
  onSave,
  onCancel,
}) {
  return (
    <Box>

      {/* =======================================================
          INFORMACIÓN GENERAL
      ======================================================= */}

      <Typography
        variant="h5"
        sx={{
          color: "background.default",
          mb: 4,
        }}
      >
        Información general
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          mb: 8,
        }}
      >
        <AdminTextField
            label="Nombre"
            value={formData.name}
            disabled
            />

        <AdminTextField
            label="Slug"
            value={formData.slug}
            disabled
            />
      </Box>

      {/* =======================================================
          HEADER
      ======================================================= */}

      <Typography
        variant="h5"
        sx={{
          color: "background.default",
          mb: 4,
        }}
      >
        Header
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          mb: 8,
        }}
      >
    
        <AdminTextField
          label="Introducción"
          multiline
          rows={6}
          value={formData.header?.intro || ""}
          onChange={(value) =>
            handleChange("header.intro", value)
          }
        />
      </Box>

      {/* =======================================================
          SERVICIOS
          (Lo construiremos después)
      ======================================================= */}

      {/* =======================================================
          LÍDERES
          (Lo construiremos después)
      ======================================================= */}

      {/* =======================================================
          BOTONES
      ======================================================= */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          mt: 8,
        }}
      >
        <Button
          variant="outlined"
          color="inherit"
          onClick={onCancel}
        >
          Cancelar
        </Button>

        <Button
          variant="contained"
          onClick={onSave}
        >
          Guardar cambios
        </Button>
      </Box>

    </Box>
  );
}