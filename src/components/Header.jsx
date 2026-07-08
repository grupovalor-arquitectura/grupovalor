import GVIcon from "../assets/GVIcon.svg?react";
import MenuIcon from "./MenuIcon";
import HeaderMenuItems from "./HeaderMenuItems";

import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

export default function Header({
  onMenuClick,
  isOpen,
  branding,
}) {
  const theme = useTheme();
  const [active, setActive] = useState(null);

  const colors = branding || {
    text: theme.palette.primary.main,
    background: theme.palette.background.default,
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* LOGO */}
      <Box
        component={Link}
        to="/"
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          cursor: "none",
        }}
      >
        <GVIcon
          style={{
            height: 40,
            width: "auto",
            color: colors.text,
            stroke: "none",
            cursor: "pointer",
          }}
        />
      </Box>

      {/* DERECHA */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {/* MENÚ DESKTOP */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <HeaderMenuItems branding={colors} />
        </Box>

        {/* MENÚ MOBILE */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },

            opacity: isOpen ? 1 : 0,
            transform: isOpen
              ? "translateY(0)"
              : "translateY(-16px)",

            pointerEvents: isOpen ? "auto" : "none",

            transition: "all 0.3s ease",
          }}
        >
          <HeaderMenuItems branding={colors} />
        </Box>

        {/* ICONO MOBILE */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <MenuIcon
            isOpen={isOpen}
            onClick={onMenuClick}
            branding={colors}
          />
        </Box>
      </Box>
    </Box>
  );
}