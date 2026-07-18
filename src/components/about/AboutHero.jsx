import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function AboutHero({ heroImage }) {
  const theme = useTheme();

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
          alt="Equipo Grupo Valor"
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
            zIndex: 1,

            background: {
            xs: `
                linear-gradient(
                to bottom,
                rgba(0,0,0,.65) 0%,
                rgba(0,0,0,.45) 12%,
                rgba(0,0,0,.22) 28%,
                rgba(0,0,0,.08) 42%,
                rgba(0,0,0,0) 58%
                )
            `,
            md: `
                linear-gradient(
                to bottom,
                rgba(0,0,0,.60) 0%,
                rgba(0,0,0,.18) 24%,
                rgba(0,0,0,.06) 50%,
                rgba(0,0,0,0) 90%
                )
            `,
            },
        }}
        />
    </Box>
  );
}