import { Box, Typography } from "@mui/material";

const TAGLINES = {
  default: ["valor", "más allá", "del espacio"],
  arquitectura: ["valor", "más allá", "de la rentabilidad"],
  constructora: ["valor", "más allá", "de la obra"],
  promotora: ["valor", "más allá", "de la rentabilidad"],
  estrategia: ["valor", "más allá", "de las ventas"],
  banca: ["valor", "más allá", "del capital"],
};

export default function Tagline({ active = "default" }) {
  const lineStyle = {
    fontSize: "20px",
    fontWeight: 300,
    lineHeight: "1.2",
    color: "#d6cfc9",
    whiteSpace: "nowrap",
  };

  const lines = TAGLINES[active] || TAGLINES.default;

  return (
    <Box sx={{ textAlign: "right" }}>
      {lines.map((line, i) => (
        <Typography key={i} sx={lineStyle}>
          {line}
        </Typography>
      ))}
    </Box>
  );
}