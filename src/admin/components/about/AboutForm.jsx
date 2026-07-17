import {
  Box,
  Button,
  Typography,
} from "@mui/material";



import AdminTextField from "../ui/AdminTextField";
import ImageUploadButton from "../ui/ImageUploadButton";

export default function AboutForm({
  formData,
  handleChange,
  handleTeamChange,
  onSave,
  saving,
  saved,
  handleTeamIntroImageSelect,
  handleTeamImageSelect,
}) {

    
  return (
    <Box>

      {/* =======================================================
          MANIFIESTO
      ======================================================= */}

      <Typography
        variant="h5"
        sx={{
          color: "background.default",
          mb: 4,
        }}
      >
        Manifiesto
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          mb: 8,
        }}
      >
        <AdminTextField
            label="Título"
            value={formData.manifesto?.title || ""}
            onChange={(value) =>
                handleChange("manifesto.title", value)
            }
        />


        <AdminTextField
          label="Contenido"
          multiline
          rows={8}
          value={formData.manifesto?.content || ""}
          onChange={(value) =>
            handleChange("manifesto.content", value)
          }
        />
      </Box>

      {/* =======================================================
          MISIÓN
      ======================================================= */}

      <Typography
        variant="h5"
        sx={{
          color: "background.default",
          mb: 4,
        }}
      >
        Misión
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          mb: 8,
        }}
      >
        <AdminTextField
          label="Título"
          value={formData.mission?.title || ""}
          onChange={(value) =>
            handleChange("mission.title", value)
          }
        />

        <AdminTextField
          label="Contenido"
          multiline
          rows={6}
          value={formData.mission?.content || ""}
          onChange={(value) =>
            handleChange("mission.content", value)
          }
        />
      </Box>

      {/* =======================================================
          VISIÓN
      ======================================================= */}

      <Typography
        variant="h5"
        sx={{
          color: "background.default",
          mb: 4,
        }}
      >
        Visión
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          mb: 8,
        }}
      >
        <AdminTextField
          label="Título"
          value={formData.vision?.title || ""}
          onChange={(value) =>
            handleChange("vision.title", value)
          }
        />

        <AdminTextField
          label="Contenido"
          multiline
          rows={6}
          value={formData.vision?.content || ""}
          onChange={(value) =>
            handleChange("vision.content", value)
          }
        />
      </Box>

      {/* =======================================================
          TEAM INTRO
      ======================================================= */}

      <Typography
        variant="h5"
        sx={{
          color: "background.default",
          mb: 4,
        }}
      >
        Introducción del equipo
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          mb: 8,
        }}
      >
        <AdminTextField
          label="Título"
          value={formData.teamIntro?.title || ""}
          onChange={(value) =>
            handleChange("teamIntro.title", value)
          }
        />

        <AdminTextField
          label="Contenido"
          multiline
          rows={6}
          value={formData.teamIntro?.description || ""}
          onChange={(value) =>
          handleChange("teamIntro.description", value)
          }
        />

        <Typography
            variant="subtitle2"
            sx={{
                color: "background.default",
                fontWeight: 600,
                mt: 2,
            }}
            >
            Fotografía
            </Typography>

            <Typography
            variant="body2"
            sx={{
                color: "text.secondary",
                mb: 2,
            }}
            >
            {formData.teamIntro?.image || "Sin fotografía"}
            </Typography>

            <ImageUploadButton
                onSelect={handleTeamIntroImageSelect}
            >
                Seleccionar fotografía
            </ImageUploadButton>
      </Box>

      {/* =======================================================
          TEAM
      ======================================================= */}

      <Typography
        variant="h5"
        sx={{
          color: "background.default",
          mb: 4,
        }}
      >
        Equipo
      </Typography>

      {formData.team?.map((member, index) => (
        <Box
          key={index}
          sx={{
            display: "grid",
            gap: 4,
            mb: 8,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
                color: "background.default",
                fontWeight: 600,
            }}
            >
            {member.name || `Integrante ${index + 1}`}
            </Typography>

          <AdminTextField
            label="Nombre"
            value={member.name || ""}
            onChange={(value) =>
              handleTeamChange(index, "name", value)
            }
          />

          <AdminTextField
            label="Cargo"
            value={member.role || ""}
            onChange={(value) =>
              handleTeamChange(index, "role", value)
            }
          />

          <AdminTextField
            label="Biografía"
            multiline
            rows={6}
            value={member.bio || ""}
            onChange={(value) =>
              handleTeamChange(index, "bio", value)
            }
          />

         <Typography
            variant="subtitle2"
            sx={{
                color: "background.default",
                fontWeight: 400,
                mt: 2,
            }}
            >
            Fotografía
            </Typography>

            <Typography
            variant="body2"
            sx={{
                color: "text.secondary",
                mb: 2,
            }}
            >
            {member.image || "Sin fotografía"}
            </Typography>

            <ImageUploadButton
                onSelect={(file) =>
                    handleTeamImageSelect(index, file)
                }
            >
                Seleccionar fotografía
            </ImageUploadButton>
        </Box>
      ))}

      {/* =======================================================
          BOTÓN
      ======================================================= */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
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
              ? "✓ Cambios guardados"
              : "Guardar cambios"}
        </Button>
      </Box>

    </Box>
  );
}