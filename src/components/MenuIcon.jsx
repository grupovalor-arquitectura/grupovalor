import { motion } from "framer-motion";
import MenuIconOpen from "../assets/MenuIconOpen.svg?react";
import MenuIconClose from "../assets/MenuIconClose.svg?react";

export default function MenuIcon({ isOpen, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 32,
        height: 32,
        position: "relative",
        cursor: "pointer",
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
        <MenuIconOpen width={18} height={18} />
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
        <MenuIconClose width={18} height={18} />
      </motion.div>
    </div>
  );
}