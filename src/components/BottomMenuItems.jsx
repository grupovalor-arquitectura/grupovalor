import { Box, Typography } from "@mui/material";

const items = [
  "GrupoValor",
  "Arquitectura Valor",
  "Constructora Valor",
  "Promotora Valor",
  "Estrategia Valor",
  "Banca Valor",
];

export default function BottomMenuItems() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        flexWrap: "wrap",
      }}
    >
      {items.map((item) => (
        <Box
          key={item}
          sx={{
            border: "1px solid rgba(255,255,255,0.4)",
            borderRadius: "999px",
            px: 2,
            py: 0.5,
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              color: "secondary.main",
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}