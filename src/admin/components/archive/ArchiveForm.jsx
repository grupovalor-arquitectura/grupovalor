import {
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";


import AdminTextField from "../ui/AdminTextField";
import AdminSelect from "../ui/AdminSelect";
import ImageUploadButton from "../ui/ImageUploadButton";

const projectTypes = [
  "Vivienda",
  "Vivienda VIS",
  "Vivienda unifamiliar",
  "Vivienda para renta",
  "Vivienda estudiantil para renta",
  "Vivienda / Comercio",
  "Vivienda lujo / operación mixta hotel",
  "Comercio",
  "Oficinas / Comercio",
  "Hotelería",
  "Educativo",
  "Institucional",
  "Institucional / Diseño arquitectónico",
  "Bienestar / Hospitalidad",
];

const projectCategories = [
  "residential",
  "commercial",
  "hospitality",
  "institutional",
  "educational",
  "mixed",
];

export default function ArchiveForm({
  formData,
  handleChange,
  isNew,
  galleryFiles,
  onGallerySelect,
  onDeleteGalleryImage,
  onDeleteNewGalleryImage,
  onSave,
  onCancel,
}) {


  if (!formData) return null;
  

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 1200,
      }}
    >
      {/* ==========================
          Título
      ========================== */}

      <Typography
        variant="h3"
        sx={{
          color: "background.default",
          mb: 6,
        }}
      >
        {isNew ? "Nuevo registro" : formData.title}
      </Typography>

      {/* ==========================
          Información general
      ========================== */}

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
          gridTemplateColumns: "1fr 1fr",
          gap: 4,
          mb: 4,
        }}
      >

        <AdminTextField
          label="Nombre"
          value={formData.title}
          onChange={(value) =>
            handleChange("title", value)
          }
        />
        <AdminTextField
          label="Año"
          value={formData.year}
          onChange={(value) =>
            handleChange("year", value)
          }
        />

        
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 4,
          mb: 4,
        }}
      >
        <AdminTextField
          label="Ubicación"
          value={formData.location}
          onChange={(value) =>
            handleChange("location", value)
          }
        />

        <AdminSelect
            label="Tipo"
            value={formData.type}
            onChange={(value) => handleChange("type", value)}
            options={projectTypes.map((type) => ({
                value: type,
                label: type,
            }))}
            />

      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 4,
          mb: 6,
        }}
      >
        <AdminSelect
          label="Categoría"
          value={formData.category}
          onChange={(value) => handleChange("category", value)}
          options={projectCategories.map((category) => ({
              value: category,
              label: category,
          }))}
        />

        <AdminTextField
          label="Escala"
          value={formData.scale}
          onChange={(value) =>
            handleChange("scale", value)
          }
        />

      </Box>

      {/* ==========================
          Galería
      ========================== */}

      <Typography
  variant="h5"
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
            mb: 6,
        }}
        >
        {formData.gallery?.map((image, index) => (
            <Box
            key={index}
            sx={{
                position: "relative",
                aspectRatio: "1",
                overflow: "hidden",
                borderRadius: 1,
            }}
            >
            <Box
                component="img"
                src={image}
                alt={`Imagen ${index + 1}`}
                sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                }}
            />

            <Button
                size="small"
                variant="contained"
                color="error"
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

        {galleryFiles.map((file) => (
            <Box
            key={file.name}
            sx={{
            position: "relative",
            aspectRatio: "1",
            overflow: "hidden",
            borderRadius: 1,
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
            size="small"
            variant="contained"
            color="error"
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
      {/* ==========================
          Acciones
      ========================== */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          mt: 2,
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
          {isNew ? "Crear registro" : "Guardar cambios"}
        </Button>
      </Box>
    </Box>
  );
}