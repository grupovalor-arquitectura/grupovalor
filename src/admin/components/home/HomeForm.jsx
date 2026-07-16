import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import AdminTextField from "../ui/AdminTextField";

const sectionOrder = [
  "default",
  "promotoraValor",
  "constructoraValor",
  "arquitecturaValor",
  "estrategiasValor",
  "bancaValor",
];

const sectionTitles = {
  default: "Grupo Valor",
  promotoraValor: "Promotora Valor",
  constructoraValor: "Constructora Valor",
  arquitecturaValor: "Arquitectura Valor",
  estrategiasValor: "Estrategias Valor",
  bancaValor: "Banca Valor",
};

export default function HomeForm({
  formData,
  handleChange,
  onSave,
  saving,
  saved,
}) {
  return (
    <Box>
      {sectionOrder.map((key) => {
        const section = formData[key];

        if (!section) return null;

        return (
          <Box key={key} sx={{ mb: 8 }}>
            {/* =======================================================
                SECCIÓN
            ======================================================= */}

            <Typography
              variant="h5"
              sx={{
                color: "background.default",
                mb: 4,
              }}
            >
              {sectionTitles[key]}
            </Typography>

            <Box
              sx={{
                display: "grid",
                gap: 4,
              }}
            >
              <AdminTextField
                label="Descripción"
                multiline
                rows={4}
                value={section.text || ""}
                onChange={(value) =>
                  handleChange(`${key}.text`, value)
                }
              />

              <AdminTextField
                label="CTA"
                value={section.cta || ""}
                onChange={(value) =>
                  handleChange(`${key}.cta`, value)
                }
              />
            </Box>
          </Box>
        );
      })}

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
          variant="contained"
          onClick={onSave}
          disabled={saving}
        >
          {saving
            ? "Guardando..."
            : saved
              ? "✓ Guardado"
              : "Guardar cambios"}
        </Button>
      </Box>
    </Box>
  );
}