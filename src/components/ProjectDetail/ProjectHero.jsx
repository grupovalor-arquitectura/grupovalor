import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ScrollIndicator from "../ScrollIndicator/ScrollIndicator"

export default function ProjectHero({ project }) {
  const theme = useTheme();

  const hasCover = Boolean(project?.coverImage);

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
      {hasCover && (
        <Box
          component="img"
          src={project.coverImage}
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