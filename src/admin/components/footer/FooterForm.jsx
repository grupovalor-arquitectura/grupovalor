import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import AdminTextField from "../ui/AdminTextField";

export default function FooterForm({
  formData,
  handleChange,
  onSave,
  onCancel,
  saving,
  saved,
}) { 
  const socialEntries = Object.entries(formData.social || {});

  return (
    <Box>

      {/* =======================================================
          OFFICE
      ======================================================= */}

      <Typography
        variant="h5"
        sx={{
          color: "background.default",
          mb: 4,
        }}
      >
        Office
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          mb: 8,
        }}
      >
        <AdminTextField
          label="Address"
          value={formData.office?.address || ""}
          onChange={(value) =>
            handleChange("office.address", value)
          }
        />

        <AdminTextField
          label="City"
          value={formData.office?.city || ""}
          onChange={(value) =>
            handleChange("office.city", value)
          }
        />

        <AdminTextField
          label="Email"
          value={formData.office?.email || ""}
          onChange={(value) =>
            handleChange("office.email", value)
          }
        />

        <AdminTextField
          label="Phone"
          value={formData.office?.phone || ""}
          onChange={(value) =>
            handleChange("office.phone", value)
          }
        />
      </Box>

      {/* =======================================================
          SOCIAL
      ======================================================= */}

      <Typography
        variant="h5"
        sx={{
          color: "background.default",
          mb: 4,
        }}
      >
        Social
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 6,
          mb: 8,
        }}
      >
        {socialEntries.map(([key, social]) => (
          <Box
            key={key}
            sx={{
              display: "grid",
              gap: 3,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "background.default",
                textTransform: "capitalize",
                fontWeight: 600,
              }}
            >
              {key}
            </Typography>

            <AdminTextField
              label="Label"
              value={social.label || ""}
              onChange={(value) =>
                handleChange(
                  `social.${key}.label`,
                  value
                )
              }
            />

            <AdminTextField
              label="URL"
              value={social.url || ""}
              onChange={(value) =>
                handleChange(
                  `social.${key}.url`,
                  value
                )
              }
            />
          </Box>
        ))}
      </Box>

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