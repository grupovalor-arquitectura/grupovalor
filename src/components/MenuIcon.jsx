import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

// 🔥 Ya no usa íconos SVG: el trigger del menú mobile ahora es
// texto ("Menú" / "Cerrar"), animado con el mismo crossfade que
// tenían los íconos antes.

export default function MenuIcon({
  isOpen,
  onClick,
  branding,
}) {

    const theme = useTheme();

    const [isHovered, setIsHovered] = useState(false);

    const colors = {
      text: theme.palette.primary.main,
      activeText: theme.palette.secondary.main,
      ...branding,
    };

    const color =
      isOpen || isHovered
        ? colors.activeText || colors.text
        : colors.text;

    const textStyle = {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
    };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        minWidth: 74,
        height: 32,
        position: "relative",
        cursor: "pointer",
        color,
      }}
    >
      {/* MENÚ */}
      <motion.span
        initial={false}
        animate={{
          opacity: isOpen ? 0 : 1,
          scale: isOpen ? 0.85 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        style={textStyle}
      >
        Menú
      </motion.span>

      {/* CERRAR */}
      <motion.span
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.85,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        style={textStyle}
      >
        Cerrar
      </motion.span>
    </div>
  );
}