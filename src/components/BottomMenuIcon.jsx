import { Box } from "@mui/material";
import IconAllProjectsClose from "../assets/IconAllProjectsClose.svg?react"; // estrella
import IconAllProjectsOpen from "../assets/IconAllProjectsOpen.svg?react";   // círculo

export default function BottomMenuIcon({ isOpen }) {
  return (
    <Box
      sx={{
    position: "relative",
    width: 32,
    height: 32,

    ...( !isOpen && {
      animation: "pulse 2.5s ease-in-out infinite",
    }),

    "@keyframes pulse": {
      "0%": {
        transform: "scale(1)",
      },
      "50%": {
        transform: "scale(1.08)",
      },
      "100%": {
        transform: "scale(1)",
      },
    },
  }}
    >
      {/* ESTRELLA */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          opacity: isOpen ? 0 : 1,
          transform: isOpen
            ? "scale(0.6) rotate(-30deg)"
            : "scale(1) rotate(0deg)",

          transition: "all 0.3s ease",
        }}
      >
        <IconAllProjectsClose width={32} height={32} />
      </Box>

      {/* CÍRCULO (con fill) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          opacity: isOpen ? 1 : 0,
          transform: isOpen
            ? "scale(1)"
            : "scale(0.6)",

          transition: "all 0.3s ease",

          // 👇 esto fuerza el fill
          "& svg": {
            fill: "#c16242",
            stroke: "#c16242",
          },
        }}
      >
        <IconAllProjectsOpen width={32} height={32} />
      </Box>
    </Box>
  );
}