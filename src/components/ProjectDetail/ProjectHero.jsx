import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
                rgba(0,0,0,.45) 0%,
                rgba(0,0,0,.28) 10%,
                rgba(0,0,0,.12) 18%,
                rgba(0,0,0,0) 30%
              )
            `,
            md: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,.38) 0%,
                rgba(0,0,0,.22) 20%,
                rgba(0,0,0,.08) 50%,
                rgba(0,0,0,0) 70%
              )
            `,
          },
        }}
      />
    </Box>
  );
}