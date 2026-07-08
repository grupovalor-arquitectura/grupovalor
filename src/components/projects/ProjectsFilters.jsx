import { Box, Typography } from "@mui/material";
import { useState } from "react";

import Divider from "../Divider";

const filters = [
  {
    id: "all",
    label: "Todos",
  },
  {
    id: "sale",
    label: "En venta | Renta",
  },
  {
    id: "construction",
    label: "En construcción",
  },
  {
    id: "planning",
    label: "En estructuración",
  },
  {
    id: "history",
    label: "Históricos",
  },
];

export default function ProjectsFilters({
  value,
  onChange,
}) {
  const [hovered, setHovered] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const renderChip = (filter, isTrigger = false) => {
    const active = isTrigger
      ? isExpanded
      : value === filter.id;

    return (
      <Box
        key={filter.id}
        onClick={() => {
          if (isTrigger) {
            setIsExpanded((prev) => !prev);
            return;
          }

          onChange(filter.id);
        }}
        onMouseEnter={() => setHovered(filter.id)}
        onMouseLeave={() => setHovered(null)}
        sx={{
          px: "18px",
          py: "6px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          borderRadius: "999px",

          border: "1px solid",
          borderColor: "background.default",

          bgcolor:
            active || hovered === filter.id
              ? "background.default"
              : "transparent",

          cursor: "pointer",

          whiteSpace: "nowrap",

          transition: "all .25s ease",

          "&:hover": {
            bgcolor: "background.default",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: active ? 600 : 500,

            color:
              active || hovered === filter.id
                ? "primary.main"
                : "background.default",

            transition: "color .25s ease",
          }}
        >
          {filter.label}
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        px: { xs: 2, md: 7 },
        pb: { xs: 6, md: 8 },

        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",

        gap: 2,
      }}
    >
      {renderChip(
        {
          id: "filters",
          label: "Filtros",
        },
        true
      )}

      {isExpanded && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,

            animation: "fadeIn .3s ease",

            "@keyframes fadeIn": {
              from: {
                opacity: 0,
              },
              to: {
                opacity: 1,
              },
            },
          }}
        >
          <Divider />

          {filters.map((filter) => renderChip(filter))}
        </Box>
      )}
    </Box>
  );
}