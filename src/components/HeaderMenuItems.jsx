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

const defaultBranding = {
  text: "#b9afaf",
  background: "#0f0f0f",
};

export default function HeaderMenuItems({
  branding,
}) {
  const [hovered, setHovered] =
    useState(null);

  const colors =
    branding || defaultBranding;

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

            border: `1px solid ${colors.text}`,

            transition: "all 0.25s ease",

            "&.active": {
              backgroundColor:
                colors.text,

              borderColor:
                colors.text,
            },

            "&:hover": {
              backgroundColor:
                colors.text,

              borderColor:
                colors.text,
            },
          }}
        >
          {({ isActive }) => (
            <Typography
              sx={{
                fontSize: "14px",

                color: isActive
                  ? colors.background
                  : hovered ===
                    item.path
                  ? colors.background
                  : colors.text,

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