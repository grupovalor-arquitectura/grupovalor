import {
  Box,
  Button,
  Typography,
} from "@mui/material";



import AdminTextField from "../ui/AdminTextField";
import ImageUploadButton from "../ui/ImageUploadButton";

const deleteButtonSx = {
  minWidth: 36,
  width: 36,
  height: 36,
  borderRadius: "50%",
  p: 0,
  flexShrink: 0,
};

const addButtonSx = {
  minWidth: 220,
  color: "background.default",
  borderColor: "background.default",

  "&:hover": {
    borderColor: "background.default",
    backgroundColor: "transparent",
    opacity: 0.7,
  },
};

export default function AboutForm({
  formData,
  handleChange,
  handleTeamChange,
  onSave,
  saving,
  saved,
  handleTeamIntroImageSelect,
  handleTeamImageSelect,
  handleCertificationChange,
  handleAddCertification,
  handleRemoveCertification,
  handlePartnerChange,
  handleAddPartner,
  handleRemovePartner,
  handlePartnerLogoSelect,
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
          CERTIFICACIONES
      ======================================================= */}

      <Typography
        variant="h5"
        sx={{
          color: "background.default",
          mb: 4,
          mt: 4,
        }}
      >
        Certificaciones
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          mb: 3,
        }}
      >
        {formData.certifications?.map((cert, index) => (
          <Box
            key={index}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 160px 44px" },
              gap: 2,
              alignItems: "start",
            }}
          >
            <AdminTextField
              label="Título"
              value={cert.title || ""}
              onChange={(value) =>
                handleCertificationChange(index, "title", value)
              }
            />

            <AdminTextField
              label="Año"
              value={cert.year || ""}
              onChange={(value) =>
                handleCertificationChange(index, "year", value)
              }
            />

            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => handleRemoveCertification(index)}
              sx={deleteButtonSx}
            >
              ×
            </Button>
          </Box>
        ))}
      </Box>

      <Box sx={{ mb: 8 }}>
        <Button
          variant="outlined"
          onClick={handleAddCertification}
          sx={addButtonSx}
        >
          + Agregar certificación
        </Button>
      </Box>

      {/* =======================================================
          ALIANZAS
      ======================================================= */}

      <Typography
        variant="h5"
        sx={{
          color: "background.default",
          mb: 4,
        }}
      >
        Alianzas
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          mb: 3,
        }}
      >
        {formData.partners?.map((partner, index) => (
          <Box
            key={index}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "100px 1fr 44px" },
              gap: 3,
              alignItems: "start",

              pb: 4,
              borderBottom: "1px solid",
              borderColor: "background.default",
              opacity: 1,
              "&:not(:last-of-type)": {
                borderBottomColor: "background.default",
              },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: 100 },
                height: 70,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                border: "1px dashed",
                borderColor: "background.default",
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              {partner.logo ? (
                <Box
                  component="img"
                  src={partner.logo}
                  alt={partner.name}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <Typography
                  variant="caption"
                  sx={{ color: "background.default", opacity: 0.6 }}
                >
                  Sin logo
                </Typography>
              )}
            </Box>

            <Box
              sx={{
                display: "grid",
                gap: 2,
              }}
            >
              <AdminTextField
                label="Nombre"
                value={partner.name || ""}
                onChange={(value) =>
                  handlePartnerChange(index, "name", value)
                }
              />

              <AdminTextField
                label="Link"
                value={partner.url || ""}
                onChange={(value) =>
                  handlePartnerChange(index, "url", value)
                }
              />

              <Box>
                <ImageUploadButton
                  onSelect={(file) =>
                    handlePartnerLogoSelect(index, file)
                  }
                >
                  {partner.logo ? "Cambiar logo" : "Subir logo"}
                </ImageUploadButton>
              </Box>
            </Box>

            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => handleRemovePartner(index)}
              sx={deleteButtonSx}
            >
              ×
            </Button>
          </Box>
        ))}
      </Box>

      <Box sx={{ mb: 8 }}>
        <Button
          variant="outlined"
          onClick={handleAddPartner}
          sx={addButtonSx}
        >
          + Agregar aliado
        </Button>
      </Box>

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