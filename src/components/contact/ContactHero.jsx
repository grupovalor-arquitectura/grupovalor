import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import contactHero from "../../assets/contact-hero.jpg";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";

export default function ContactHero() {
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
      <Box
        component="img"
        src={contactHero}
        alt="Contacto Grupo Valor"
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

      {/* Overlay */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,

          background: {
            xs: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,.6) 0%,
                rgba(0,0,0,.38) 12%,
                rgba(0,0,0,.18) 22%,
                rgba(0,0,0,0) 36%
              )
            `,
            md: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,.55) 0%,
                rgba(0,0,0,.35) 22%,
                rgba(0,0,0,.15) 45%,
                rgba(0,0,0,0) 68%
              )
            `,
          },
        }}
      />
       <ScrollIndicator />
    </Box>
  );
}