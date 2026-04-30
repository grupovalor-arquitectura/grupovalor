import { Box, Typography } from "@mui/material";
import { useState } from "react";

const items = [
  "GrupoValor",
  "Arquitectura Valor",
  "Constructora Valor",
  "Promotora Valor",
  "Estrategia Valor",
  "Banca Valor",
];

export default function BottomMenuItems() {
  const [selected, setSelected] = useState(null);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        flexWrap: "wrap",
      }}
    >
      {items.map((item) => {
        const isSelected = selected === item;

        return (
          <Box
            key={item}
            onClick={() => setSelected(item)}
            sx={{
              borderRadius: "999px",
              px: 2,
              py: 0.5,
              cursor: "pointer",

              // estado base
              border: "1px solid",
              borderColor: isSelected
                ? "secondary.main"
                : "rgba(255,255,255,0.4)",

              backgroundColor: isSelected
                ? "secondary.main"
                : "transparent",

              transition: "all 0.25s ease",

              // hover SOLO del item
              "&:hover": {
                borderColor: "secondary.main",

                "& .label": {
                  color: isSelected
                    ? "primary.main"
                    : "secondary.main",
                },
              },
            }}
          >
            <Typography
              className="label"
              sx={{
                fontSize: 14,
                color: isSelected
                  ? "primary.main"   // texto oscuro sobre fondo naranja
                  : "primary.main", // gris base (#bfafaa)

                transition: "color 0.25s ease",
              }}
            >
              {item}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}