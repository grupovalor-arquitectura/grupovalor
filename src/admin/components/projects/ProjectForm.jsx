import {
  Box,
  Typography,
  Button,
  FormControlLabel,
  Switch,
} from "@mui/material";

import AdminTextField from "../ui/AdminTextField";
import AdminSelect from "../ui/AdminSelect";
import ImageUploadButton from "../ui/ImageUploadButton";
import AdminCheckboxGroup from "../ui/AdminCheckboxGroup";


export default function ProjectForm({
  formData,
  coverFile,
  galleryFiles,
  saving,
  isNew,

  onChange,
  onWebsiteChange,
  onCoverSelect,
  onGallerySelect,
  onSave,
  onCancel,
  onDeleteGalleryImage,
  onDeleteNewGalleryImage,
}) {

  
    const getImageName = (url) => {
        if (!url) return "";

        return decodeURIComponent(url)
            .split("/")
            .pop()
            .split("?")[0];
        };

    const typeOptions = [
        { value: "Mixto", label: "Mixto" },
        { value: "Residencial", label: "Residencial" },
        { value: "Vivienda", label: "Vivienda" },
        { value: "Vivienda VIS", label: "Vivienda VIS" },
        { value: "Club Residencial", label: "Club Residencial" },
        { value: "Co-living", label: "Co-living" },
        { value: "Desarrollo de uso mixto", label: "Desarrollo de uso mixto" },
        { value: "Remodelación Residencial", label: "Remodelación Residencial" },
    ];

    const statusOptions = [
        { value: "En venta | Renta", label: "En venta | Renta" },
        { value: "En construcción", label: "En construcción" },
        { value: "En estructuración", label: "En estructuración" },
        { value: "Histórico", label: "Histórico" },
    ];

    const filterOptions = [
        { value: "sale", label: "En venta | Renta" },
        { value: "construction", label: "En construcción" },
        { value: "planning", label: "En estructuración" },
        { value: "history", label: "Históricos" },
    ];

return (
  <Box
    sx={{
      width: "100%",
      maxWidth: 1200,
    }}
  >
    <Typography
      variant="h3"
      sx={{
        color: "background.default",
        mb: 6,
      }}
    >
      {isNew ? "Nuevo proyecto" : formData.title}
    </Typography>

    {/* =======================
        INFORMACIÓN GENERAL
    ======================= */}

    <Box sx={{ mb: 8 }}>
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
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 4,
            }}
        >
            <AdminTextField
                label="Nombre"
                value={formData.title}
                onChange={(value) => onChange("title", value)}
            />

            <AdminTextField
                label="Slug"
                value={formData.slug}
                disabled
            />

            <AdminTextField
                label="Año"
                type="number"
                value={formData.year}
                onChange={(value) => onChange("year", value)}
            />

            <AdminTextField
                label="Ubicación"
                value={formData.location}
                onChange={(value) => onChange("location", value)}
            />

            <AdminSelect
                label="Tipo"
                value={formData.type}
                options={typeOptions}
                onChange={(value) => onChange("type", value)}
            />

            <AdminSelect
                label="Estado"
                value={formData.status}
                options={statusOptions}
                onChange={(value) => onChange("status", value)}
            />

            <AdminCheckboxGroup
                label="Filtros"
                value={formData.filters ?? []}
                options={filterOptions}
                onChange={(value) => onChange("filters", value)}
            />
        </Box>
    </Box>

   {/* =======================
    CONTENIDO
    ======================= */}

    <Box sx={{ mb: 8 }}>
    <Typography
        variant="h5"
        sx={{
        color: "background.default",
        mb: 4,
        }}
    >
        Contenido
    </Typography>

    <Box
        sx={{
        display: "grid",
        gap: 4,
        }}
    >
        <AdminTextField
        label="Descripción corta"
        multiline
        rows={3}
        value={formData.shortDescription}
        onChange={(value) =>
            onChange("shortDescription", value)
        }
        />

        <AdminTextField
        label="Descripción"
        multiline
        rows={8}
        value={formData.description}
        onChange={(value) =>
        onChange("description", value)
        }
        />

        <AdminTextField
        label="Video (YouTube)"
        value={formData.video}
        onChange={(value) =>
            onChange("video", value)
        }
        />

        <Box
        sx={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 4,
        }}
        >
        <AdminTextField
            label="Texto del botón"
            value={formData.website?.label ?? ""}
            onChange={(value) =>
            onWebsiteChange("label", value)
            }
        />

        <AdminTextField
            label="URL del sitio web"
            value={formData.website?.url ?? ""}
            onChange={(value) =>
            onWebsiteChange("url", value)
            }
        />
        </Box>
    </Box>
    </Box>

    {/* =======================
        IMÁGENES
    ======================= */}

    <Box sx={{ mb: 8 }}>
    <Typography
        variant="h5"
        sx={{
        color: "background.default",
        mb: 5,
        }}
    >
        Imágenes
    </Typography>

    {/* COVER */}

    <Typography
        variant="h6"
        sx={{
        color: "background.default",
        mb: 3,
        }}
    >
        Imagen de portada
    </Typography>

    <Box
        sx={{
        display: "grid",
        gridTemplateColumns: "360px 1fr",
        gap: 6,
        mb: 8,
        alignItems: "start",
        }}
    >
        {(coverFile || formData.coverImage) ? (
            <Box
                component="img"
                src={
                coverFile
                    ? URL.createObjectURL(coverFile)
                    : formData.coverImage
                }
                alt="Portada"
                sx={{
                width: "100%",
                aspectRatio: "16 / 10",
                objectFit: "cover",
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "grey.100",
                }}
            />
            ) : (
            <Box
                sx={{
                width: "100%",
                aspectRatio: "16 / 10",
                border: "1px dashed",
                borderColor: "divider",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "text.secondary",
                bgcolor: "grey.100",
                }}
            >
                No hay imagen de portada
            </Box>
            )}

        <Box>
        <Typography
            sx={{
            color: "background.default",
            mb: 3,
            }}
        >
            {coverFile
            ? coverFile.name
            : formData.coverImage
                ? getImageName(formData.coverImage)
                : "No hay imagen de portada"}
        </Typography>

        <ImageUploadButton
            onSelect={onCoverSelect}
        >
            Cambiar portada
        </ImageUploadButton>
        </Box>
    </Box>

    

    {/* GALLERY */}

<Typography
  variant="h6"
  sx={{
    color: "background.default",
    mb: 2,
  }}
>
  Galería
</Typography>

    <Box
        sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
        }}
        >
        <Typography
            variant="body2"
            sx={{
            color: "text.secondary",
            }}
        >
            Agrega una o varias imágenes para la galería del proyecto.
        </Typography>

        <ImageUploadButton
            multiple
            onSelect={onGallerySelect}
        >
            Agregar imágenes
        </ImageUploadButton>
        </Box>

        <Box
        sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 3,
        }}
        >
        {/* Imágenes existentes */}

        {formData.gallery?.map((image) => (
            <Box
            key={image}
            sx={{
                position: "relative",
                aspectRatio: "1",
                overflow: "hidden",
                borderRadius: 2,
            }}
            >
            <Box
                component="img"
                src={image}
                sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                }}
            />

            <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => onDeleteGalleryImage(image)}
                sx={{
                position: "absolute",
                top: 8,
                right: 8,
                minWidth: 36,
                width: 36,
                height: 36,
                borderRadius: "50%",
                p: 0,
                }}
            >
                ×
            </Button>
            </Box>
        ))}

        {/* Imágenes nuevas */}

       {galleryFiles.map((file) => (
            <Box
                key={file.name}
                sx={{
                position: "relative",
                aspectRatio: "1",
                overflow: "hidden",
                borderRadius: 2,
                }}
            >
                <Box
                component="img"
                src={URL.createObjectURL(file)}
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
                />

                <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => onDeleteNewGalleryImage(file)}
                sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    minWidth: 36,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    p: 0,
                }}
                >
                ×
                </Button>

                <Box
                sx={{
                    position: "absolute",
                    left: 8,
                    bottom: 8,
                    bgcolor: "success.main",
                    color: "#fff",
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: 12,
                }}
                >
                Nueva
                </Box>
            </Box>
            ))}

        
        </Box>
    </Box>


   {/* =======================
        CONFIGURACIÓN
    ======================= */}

    <Box sx={{ mb: 8 }}>
    <Typography
        variant="h5"
        sx={{
        color: "background.default",
        mb: 4,
        }}
    >
        Configuración
    </Typography>

    <FormControlLabel
        control={
        <Switch
            checked={formData.featured}
            onChange={(event) =>
                onChange("featured", event.target.checked)
            }
        />
        }
        label="Mostrar en proyectos destacados"
        sx={{
        color: "background.default",

        "& .MuiSwitch-switchBase.Mui-checked": {
            color: "background.default",
        },

        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "background.default",
        },
        }}
    />
    </Box>

   {/* =======================
        ACCIONES
    ======================= */}

   <Box
        sx={{
            mt: 10,
            pt: 4,
            borderTop: "1px solid",
            borderColor: "divider",
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
        }}
        >
        <Button
            variant="outlined"
            onClick={onCancel}
            sx={{
            minWidth: 180,
            color: "background.default",
            borderColor: "background.default",

            "&:hover": {
                borderColor: "background.default",
                backgroundColor: "transparent",
                opacity: 0.7,
            },
            }}
        >
            Descartar cambios
        </Button>

        <Button
            variant="contained"
            onClick={onSave}
            disabled={saving}
            sx={{
            minWidth: 180,
            }}
        >
            {saving ? "Guardando..." : "Guardar cambios"}
        </Button>
        </Box>
  </Box>
);
}