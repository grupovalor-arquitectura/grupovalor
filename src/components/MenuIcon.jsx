import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";


import MenuIconOpen from "../assets/MenuIconOpen.svg?react";
import MenuIconClose from "../assets/MenuIconClose.svg?react";

export default function MenuIcon({ isOpen, onClick }) {

    const theme = useTheme(); 

    const [isHovered, setIsHovered] = useState(false);

    const color =
    isOpen || isHovered
      ? theme.palette.secondary.main
      : theme.palette.primary.main;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: 32,
        height: 32,
        position: "relative",
        cursor: "pointer",
        color,
      }}
    >
      {/* OPEN */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 0 : 1,
          scale: isOpen ? 0.8 : 1,
          rotate: isOpen ? -20 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MenuIconOpen
            width={25}
            height={25}
            style={{ color }}
        />
      </motion.div>

      {/* CLOSE */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.8,
          rotate: isOpen ? 0 : 20,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MenuIconClose
            width={25}
            height={25}
            style={{ color }}
        />
      </motion.div>
    </div>
  );
}