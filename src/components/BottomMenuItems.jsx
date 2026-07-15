import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

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

  // 🔥 controla apertura submenu
  const [isExpanded, setIsExpanded] =
    useState(false);

  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (isReady) {
      onSelect?.("default");
    }
  }, [isReady]);

  const renderChip = (item) => {
    // 🔥 Grupo Valor depende del menu abierto
    const isSelected =
      item.key === "default"
        ? isExpanded
        : selected === item.key;

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

          // 🔥 Grupo Valor
          if (item.key === "default") {
            const nextExpanded =
              !isExpanded;

            setIsExpanded(nextExpanded);

            // 🔥 cerrar menu
            if (!nextExpanded) {
              setSelected(null);

              onSelect?.("default");
            }

            return;
          }

          // 🔥 toggle submarcas
          if (selected === item.key) {
            setSelected(null);

            onSelect?.("default");

            return;
          }

          // 🔥 nueva selección
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

        flexDirection: {
          xs: "column-reverse",
          md: "row",
        },

        alignItems: {
          xs: "flex-start",
          md: "center",
        },

        gap: 1.5,
      }}
        >
      {/* 🔹 PROYECTOS */}
      {!isMobile && renderChip(items[1])}

      {/* 🔹 GRUPO VALOR */}
      {renderChip(items[0])}

      {/* 🔥 SUBMARCAS */}
      {isExpanded && (
        <Box
          sx={{
            display: "flex",

            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },

            alignItems: {
              xs: "flex-start",
              md: "center",
            },

            gap: 1.5,

            opacity: isExpanded ? 1 : 0,

            transition: "opacity 0.25s ease",
          }}
        >
          {!isMobile && <Divider sx={{ mx: 1 }} />}

          {items.slice(2).map(renderChip)}
        </Box>
      )}
    </Box>
  );
}