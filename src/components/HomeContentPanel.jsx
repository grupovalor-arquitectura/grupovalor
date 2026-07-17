import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomeContentPanel({
  active,
  content,
  ctaButton,
}) {

  if (!active || !content) return null;

  const navigate = useNavigate();

  const routes = {
    default: "/nosotros",
    arquitectura: "empresas/arquitectura-valor",
    constructora: "empresas/constructora-valor",
    promotora: "empresas/promotora-valor",
    estrategia: "empresas/estrategia-valor",
    banca: "empresas/banca-valor",
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: 0,
        right: 0,
        px: { xs: 2, md: 4 },
        display: "flex",
        justifyContent: "flex-end",
        pointerEvents: "none",
        zIndex: 5,
      }}
    >
      {/* BLOQUE DERECHO */}
      <Box
        sx={{
          maxWidth: 250,
          textAlign: "right",
          pointerEvents: "auto",
          opacity: 0,
          transform: "translateY(24px) translateX(12px)",
          animation: "panelEnter 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",

          "@keyframes panelEnter": {
            "0%": {
              opacity: 0,

              transform:
                "translateY(24px) translateX(12px)",
            },

            "100%": {
              opacity: 1,

              transform:
                "translateY(0px) translateX(0px)",
            },
          },
        }}
      >
        {/* TEXTO */}
        <Typography
          sx={{
            color: "primary.main",
            fontSize: { xs: 14, md: 16 },
            lineHeight: 1.6,
            whiteSpace: "pre-line",
            mb: 2,
            opacity: 0,
            transform: "translateY(10px)",
            animation: "fadeUp 0.55s ease-out 0.15s forwards",

            "@keyframes fadeUp": {
              from: {
                opacity: 0,
                transform: "translateY(10px)",
              },

              to: {
                opacity: 1,
                transform: "translateY(0px)",
              },
            },
          }}
        >
          {content.text}
        </Typography>

        {/* CTA */}
        <Typography
          onClick={() => navigate(routes[active])}
          sx={{
            color: "primary.main",
            opacity: 0,
            fontSize: { xs: 14, md: 15 },
            mb: 2,
            transform: "translateY(10px)",
            animation: "fadeUp 0.55s ease-out 0.28s forwards",

            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,

            cursor: "pointer",

           "&:hover": {
              color: "secondary.main",
            },
          }}
        >
          {content.cta} →
        </Typography>

        {/* BOTÓN */}
        <Box
          sx={{
            opacity: 0,
            transform: "translateY(10px)",
            animation: "fadeUp 0.55s ease-out 0.4s forwards",
          }}
        >
          {ctaButton}
        </Box>
        
      </Box>
    </Box>
  );
}