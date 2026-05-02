import { Box, Typography } from "@mui/material";
import { useState } from "react";

const items = [
  { label: "Grupo Valor", key: "default" },
  { label: "Arquitectura Valor", key: "arquitectura" },
  { label: "Constructora Valor", key: "constructora" },
  { label: "Promotora Valor", key: "promotora" },
  { label: "Estrategia Valor", key: "estrategia" },
  { label: "Banca Valor", key: "banca" },
];

export default function BottomMenuItems({ onSelect, isReady }) {
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
        const isSelected = selected === item.key;

        return (
          <Box
            key={item.key}
            onClick={() => {

              if (!isReady) return;

              const newValue = selected === item.key ? null : item.key;

              setSelected(newValue);
              onSelect?.(newValue);
            }}
            sx={{
              borderRadius: "999px",
              px: 2,
              py: 0.5,

              cursor: isReady ? "pointer" : "default",
              opacity: isReady ? 1 : 0.4,
              pointerEvents: isReady ? "auto" : "none",
              
              border: "1px solid",
              borderColor: isSelected
                ? "secondary.main"
                : "rgba(255,255,255,0.4)",

              backgroundColor: isSelected
                ? "secondary.main"
                : "transparent",

              transition: "all 0.25s ease",

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
                color: isSelected ? "primary.main" : "primary.main",
                transition: "color 0.25s ease",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}