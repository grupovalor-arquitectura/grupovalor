import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Divider from "./Divider";

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

   useEffect(() => {
    if (isReady) {
      setSelected("default");
    }
  }, [isReady]);

  // 🔥 Separación jerárquica
  const first = items[0];
  const rest = items.slice(1);

  // 🔥 Reutilizamos tu lógica original sin romper nada
  const renderChip = (item) => {
    const isSelected = selected === item.key;

    return (
      <Box
        key={item.key}
        onClick={() => {
          if (!isReady) return;

          const newValue = isSelected ? null : item.key;

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
            ? "primary.main"
            : "rgba(255,255,255,0.4)",

          backgroundColor: isSelected
            ? "primary.main"
            : "transparent",

          transition: "all 0.25s ease",

          "&:hover": {
            borderColor: "primary.main",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            color: isSelected
              ? "background.default"
              : "primary.main",
            fontWeight: isSelected ? 600 : 400,
            transition: "color 0.25s ease",
          }}
        >
          {item.label}
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        flexWrap: "wrap",
      }}
    >
      {/* 🔹 Grupo Valor */}
      {renderChip(first)}

      {/* 🔥 Divider jerárquico */}
      <Divider
        sx={{
          mx: 1,         
          transition: "opacity 0.3s ease",
        }}
      />

      {/* 🔹 Submarcas */}
      {rest.map(renderChip)}
    </Box>
  );
}