import { useMemo } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ScrollIndicator from "../ScrollIndicator/ScrollIndicator"
import { pickFallbackImage } from "../../utils/fallbackProjectImage";

export default function ProjectHero({ project }) {
  const theme = useTheme();

  // Misma imagen de respaldo (determinística por proyecto) que usan
  // las tarjetas de "Proyectos": si el proyecto no tiene coverImage,
  // el hero ya no queda vacío y además coincide con lo que el
  // usuario vio en la tarjeta antes de entrar al detalle.
  const heroImage = useMemo(
    () => project?.coverImage || pickFallbackImage(project?.slug || project?.id),
    [project?.coverImage, project?.slug, project?.id]
  );

  return (
    <Box
      sx={{
        position: "relative",

        width: "100%",

        height: {
          xs: "60vh",
          md: "100vh",
        },

        minHeight: {
          xs: 420,
          md: "100vh",
        },

        overflow: "hidden",

        backgroundColor: theme.palette.background.default,
      }}
    >
      {heroImage && (
        <Box
          component="img"
          src={heroImage}
          alt={project.title}
          sx={{
            width: "100%",
            height: "100%",

            objectFit: "cover",
            objectPosition: "center",

            display: "block",

            userSelect: "none",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Overlay */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,

          background: {
            xs: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,.85) 0%,
                rgba(0,0,0,.6) 12%,
                rgba(0,0,0,.3) 22%,
                rgba(0,0,0,0) 36%
              )
            `,
            md: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,.8) 0%,
                rgba(0,0,0,.55) 18%,
                rgba(0,0,0,.25) 34%,
                rgba(0,0,0,0) 52%
              )
            `,
          },
        }}
      />
      <ScrollIndicator />
    </Box>
  );
}