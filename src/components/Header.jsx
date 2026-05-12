import GVIcon from "../assets/GVIcon.svg?react";
import MenuIcon from "./MenuIcon";
import HeaderMenuItems from "./HeaderMenuItems";

import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

export default function Header({ onMenuClick, isOpen }) {
  const theme = useTheme();
  const [active, setActive] = useState(null);

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
      <GVIcon
        style={{
          height: 40,
          width: "auto",
          color: theme.palette.primary.main,
          stroke: "none",
        }}
      />

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
          <HeaderMenuItems
            active={active}
            onSelect={setActive}
          />
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
          <HeaderMenuItems
            active={active}
            onSelect={setActive}
          />
        </Box>

        {/* ICONO SOLO MOBILE */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <MenuIcon
            isOpen={isOpen}
            onClick={onMenuClick}
          />
        </Box>
      </Box>
    </Box>
  );
}