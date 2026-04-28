import GVIcon from "../assets/GVIcon.svg?react";
import MenuIcon from "./MenuIcon";


import { Box } from "@mui/material";


export default function Header({ onMenuClick, isOpen }) {

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
          height: 30,
          width: "auto",
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