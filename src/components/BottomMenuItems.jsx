import { Box, Chip } from "@mui/material";

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
        alignItems: "center",
      }}
    >
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          variant="outlined"
          sx={{
            borderColor: "rgba(255,255,255,0.4)",
            color: "secondary.main",
            borderRadius: "30px",
            px: 1,
          }}
        />
      ))}
    </Box>
  );
}