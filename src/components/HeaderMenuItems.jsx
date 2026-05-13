import { Box, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";

import { useState } from "react";

const items = [
  {
    label: "Proyectos",
    path: "/proyectos",
  },

  {
    label: "Historia",
    path: "/historia",
  },

  {
    label: "Contacto",
    path: "/contacto",
  },
];

export default function HeaderMenuItems() {
  const [hovered, setHovered] =
    useState(null);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
      }}
    >
      {items.map((item) => (
        <Box
          key={item.path}

          component={NavLink}

          to={item.path}

          onMouseEnter={() =>
            setHovered(item.path)
          }

          onMouseLeave={() =>
            setHovered(null)
          }

          sx={{
            borderRadius: "999px",

            px: "16px",
            py: "4px",

            textDecoration: "none",

            border: "1px solid rgba(255,255,255,0.4)",

            transition: "all 0.25s ease",

            "&.active": {
              backgroundColor: "#c16242",

              borderColor: "#c16242",
            },

            "&:hover": {
              borderColor: "#c16242",
            },
          }}
        >
          {({ isActive }) => (
            <Typography
              sx={{
                fontSize: "14px",

                color: isActive
                  ? "#0f0f0f"
                  : hovered === item.path
                  ? "#c16242"
                  : "#ffffff",

                transition:
                  "color 0.25s ease",
              }}
            >
              {item.label}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}