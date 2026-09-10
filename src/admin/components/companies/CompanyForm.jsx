import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import AdminTextField from "../ui/AdminTextField";

export default function CompanyForm({
  formData,
  handleChange,
  onServiceChange,
  onAddService,
  onRemoveService,
  onLeaderChange,
  onAddLeader,
  onRemoveLeader,
  onSave,
  onCancel,
}) {
  const leaders = formData.leaders || [];
  const services = formData.services || [];

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
      ======================================================= */}

      <Typography
        variant="h5"
        sx={{
          color: "background.default",
          mb: 4,
        }}
      >
        Servicios
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          mb: 8,
        }}
      >
        {services.map((service, index) => (
          <Box
            key={service.id ?? index}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,

              p: 4,

              borderRadius: 2,
              border: "1px solid",
              borderColor: "rgba(0,0,0,0.15)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "background.default",
                  fontWeight: 600,
                }}
              >
                Servicio {index + 1}
              </Typography>

              <Button
                size="small"
                color="error"
                onClick={() => onRemoveService(index)}
                sx={{
                  minWidth: "auto",
                }}
              >
                Eliminar
              </Button>
            </Box>

            <AdminTextField
              label="Título"
              value={service.title || ""}
              onChange={(value) =>
                onServiceChange(index, "title", value)
              }
            />

            <AdminTextField
              label="Descripción"
              multiline
              rows={4}
              value={service.description || ""}
              onChange={(value) =>
                onServiceChange(index, "description", value)
              }
            />
          </Box>
        ))}

        <Button
          variant="outlined"
          color="inherit"
          onClick={onAddService}
          sx={{
            alignSelf: "flex-start",
          }}
        >
          + Agregar servicio
        </Button>
      </Box>

      {/* =======================================================
          LÍDERES
      ======================================================= */}

      <Typography
        variant="h5"
        sx={{
          color: "background.default",
          mb: 4,
        }}
      >
        Líderes
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          mb: 8,
        }}
      >
        {leaders.map((leader, index) => (
          <Box
            key={leader.id ?? index}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,

              p: 4,

              borderRadius: 2,
              border: "1px solid",
              borderColor: "rgba(0,0,0,0.15)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "background.default",
                  fontWeight: 600,
                }}
              >
                Líder {index + 1}
              </Typography>

              <Button
                size="small"
                color="error"
                onClick={() => onRemoveLeader(index)}
                sx={{
                  minWidth: "auto",
                }}
              >
                Eliminar
              </Button>
            </Box>

            <AdminTextField
              label="Nombre"
              value={leader.name || ""}
              onChange={(value) =>
                onLeaderChange(index, "name", value)
              }
            />

            <AdminTextField
              label="Cargo"
              value={leader.role || ""}
              onChange={(value) =>
                onLeaderChange(index, "role", value)
              }
            />

            <AdminTextField
              label="Quote"
              multiline
              rows={4}
              value={leader.quote || ""}
              onChange={(value) =>
                onLeaderChange(index, "quote", value)
              }
            />
          </Box>
        ))}

        <Button
          variant="outlined"
          color="inherit"
          onClick={onAddLeader}
          sx={{
            alignSelf: "flex-start",
          }}
        >
          + Agregar líder
        </Button>
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
        >
          Guardar cambios
        </Button>
      </Box>

    </Box>
  );
}