import { Box, Typography } from "@mui/material";
import { useState } from "react";

const items = [
  { label: "Proyectos", key: "proyectos" },
  { label: "Historia", key: "historia" },
  { label: "Contacto", key: "contacto" },
];

export default function HeaderMenuItems({ active, onSelect }) {
  const [hovered, setHovered] = useState(null);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
      }}
    >
      {items.map((item) => {
        const isActive = active === item.key;
        const isHovered = hovered === item.key;

        return (
          <Box
            key={item.key}
            onClick={() => onSelect?.(item.key)}
            onMouseEnter={() => setHovered(item.key)}
            onMouseLeave={() => setHovered(null)}
            sx={{
              borderRadius: "999px",
              px: "16px",
              py: "4px",
              cursor: "pointer",

              border: "1px solid",
              borderColor: isActive
                ? "#c16242"
                : "rgba(255,255,255,0.4)",

              backgroundColor: isActive
                ? "#c16242"
                : "transparent",

              transition: "all 0.25s ease",

              "&:hover": {
                borderColor: "#c16242",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: isActive
                  ? "#0f0f0f"
                  : isHovered
                  ? "#c16242"
                  : "#ffffff",

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