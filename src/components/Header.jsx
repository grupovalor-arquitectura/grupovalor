import GVIcon from "../assets/GVIcon.svg?react";
import MenuIconOpen from "../assets/MenuIconOpen.svg?react";
import MenuIconClose from "../assets/MenuIconClose.svg?react";

import { Box } from "@mui/material";


export default function Header({ onMenuClick, isOpen }) {
  const Icon = isOpen ? MenuIconClose : MenuIconOpen;

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

      {/* Menú */}
      <Icon
        onClick={onMenuClick}
        style={{
          height: 20,
          width: "auto",
          cursor: "pointer",
        }}
      />
    </Box>
  );
}