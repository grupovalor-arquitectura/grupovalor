import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ProjectGallery({ project }) {
  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("md")
  );

  const gallery = (project?.gallery ?? []).filter(
    (image) => typeof image === "string" && image.trim() !== ""
  );

  if (!gallery.length) {
    return (
      <Box
        sx={{
          bgcolor: "primary.main",

          px: {
            xs: 3,
            md: 7,
          },

          pb: {
            xs: 8,
            md: 12,
          },
        }}
      />
    );
  }

  return isMobile ? (
    <MobileGallery gallery={gallery} />
  ) : (
    <DesktopGallery gallery={gallery} />
  );
}

function DesktopGallery({ gallery }) {
  const rows = [];

  for (let i = 0; i < gallery.length; i += 2) {
    rows.push(gallery.slice(i, i + 2));
  }

  return (
    <Box
      sx={{
        bgcolor: "primary.main",

        px: 7,
        pb: 12,
      }}
    >
      {rows.map((row, rowIndex) => {
        const reverse = rowIndex % 2 === 1;

        return (
          <Box
            key={rowIndex}
            sx={{
              display: "grid",

              gridTemplateColumns: reverse
                ? "2fr 1fr"
                : "1fr 2fr",

              gap: 3,

              mb: 3,
            }}
          >
            {row.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image}
                alt={`Proyecto ${rowIndex}-${index}`}
                sx={{
                  width: "100%",
                  height: 520,

                  objectFit: "cover",

                  display: "block",
                }}
              />
            ))}
          </Box>
        );
      })}
    </Box>
  );
}

function MobileGallery({ gallery }) {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",

        px: 3,
        pb: 8,
      }}
    >
      {gallery.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image}
          alt={`Proyecto ${index}`}
          sx={{
            width: "100%",
            height: 260,

            objectFit: "cover",

            display: "block",

            mb: 2,
          }}
        />
      ))}
    </Box>
  );
}