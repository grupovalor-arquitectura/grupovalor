import { Box, Typography } from "@mui/material";

export default function HomeContentPanel({ active, content, ctaButton }) {
  if (!active || !content) return null;

  return (
    <Box
    sx={{
        position: "absolute",

        top: "50%",
        transform: "translateY(-50%)",

        left: 0,
        right: 0,

        px: { xs: 2, md: 4 }, // 🔥 EXACTAMENTE IGUAL a LayoutBase

        display: "flex",
        justifyContent: "flex-end",

        pointerEvents: "none",
        zIndex: 5,

        opacity: active ? 1 : 0,
        transition: "opacity 0.4s ease",
    }}
    >
      {/* 🔹 BLOQUE DERECHO (texto + botón) */}
      <Box
        sx={{
          maxWidth: 200,
          textAlign: "right",
          pointerEvents: "auto",
        }}
      >
        <Typography
          sx={{
            color: "primary.main",
            fontSize: { xs: 14, md: 16 },
            lineHeight: 1.6,
            mb: 2,
          }}
        >
          {content.text}
        </Typography>

        {/* CTA pequeño */}
        <Typography
          sx={{
            color: "primary.main",
            opacity: 0.8,
            fontSize: { xs: 14, md: 15 },
            mb: 2,
          }}
        >
          {content.cta} →
        </Typography>

        {/* 🔹 BOTÓN */}
        {ctaButton}
      </Box>
    </Box>
  );
}