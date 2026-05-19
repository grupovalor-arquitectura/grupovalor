import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Divider from "./Divider";

const items = [
  { label: "Grupo Valor", key: "default" },

  {
    label: "Proyectos",
    path: "/proyectos",
    isLink: true,
  },

  { label: "Arquitectura Valor", key: "arquitectura" },
  { label: "Constructora Valor", key: "constructora" },
  { label: "Promotora Valor", key: "promotora" },
  { label: "Estrategia Valor", key: "estrategia" },
  { label: "Banca Valor", key: "banca" },
];

export default function BottomMenuItems({
  onSelect,
  isReady,
}) {
  const [selected, setSelected] =
  useState(null);

  // 🔥 controla submarcas
  const [isExpanded, setIsExpanded] =
    useState(false);

  const navigate = useNavigate();

  useEffect(() => {
  if (isReady) {
    onSelect?.("default");
  }
}, [isReady]);

  const renderChip = (item) => {
    const isSelected =
      selected === item.key;

    return (
      <Box
        key={item.label}
        onClick={() => {
          if (!isReady) return;

          // 🔥 navegación
          if (item.isLink) {
            navigate(item.path);
            return;
          }

          // 🔥 Grupo Valor:
          // solo expande/cierra submenu
          // PERO mantiene el estado default
          if (item.key === "default") {
            setIsExpanded((prev) => !prev);

            onSelect?.("default");

            return;
}

          // 🔥 submarcas
          setSelected(item.key);

          onSelect?.(item.key);
        }}
        sx={{
          borderRadius: "999px",

          px: 2,
          py: 0.5,

          cursor: isReady
            ? "pointer"
            : "default",

          opacity: isReady ? 1 : 0.4,

          pointerEvents: isReady
            ? "auto"
            : "none",

          border: "1px solid",

          borderColor: isSelected
            ? "primary.main"
            : "rgba(255,255,255,0.4)",

          backgroundColor: isSelected
            ? "primary.main"
            : "transparent",

          transition:
            "all 0.25s ease",

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

            fontWeight: isSelected
              ? 600
              : 400,

            transition:
              "color 0.25s ease",
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
      {/* 🔹 PROYECTOS */}
      {renderChip(items[1])}


      {/* 🔹 GRUPO VALOR */}
      {renderChip(items[0])}

      {/* 🔥 SUBMARCAS */}
      {isExpanded && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,

            opacity: isExpanded ? 1 : 0,

            transition:
              "opacity 0.25s ease",
          }}
        >
          <Divider sx={{ mx: 1 }} />

          {items.slice(2).map(renderChip)}
        </Box>
      )}
    </Box>
  );
}