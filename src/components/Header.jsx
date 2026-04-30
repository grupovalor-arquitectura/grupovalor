import GVIcon from "../assets/GVIcon.svg?react";
import MenuIcon from "./MenuIcon";


import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";



export default function Header({ onMenuClick, isOpen }) {
   const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <GVIcon
        style={{
          height: 40,
          width: "auto",
          color: theme.palette.primary.main,
          stroke: "none", 
        }}
      />

      {/* Menú animado */}
      <MenuIcon
        isOpen={isOpen}
        onClick={onMenuClick}
      />

    </Box>
  );
}