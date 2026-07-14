import GVIcon from "../assets/GVIcon.svg?react";
import MenuIcon from "./MenuIcon";
import HeaderMenuItems from "./HeaderMenuItems";

import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";


export default function Header({
  onMenuClick,
  isOpen,
  branding,
}) {
  const theme = useTheme();

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
        zIndex: 1300,
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
          gap: {
            xs: 1,
            md: 3,
          },
        }}
      >
        {/* MENÚ DESKTOP */}
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <HeaderMenuItems
           
            branding={colors}
          />
        </Box>

        {/* HAMBURGUESA MOBILE */}
        <Box
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            width: 48,
            height: 48,
            alignItems: "center",
            justifyContent: "center",
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