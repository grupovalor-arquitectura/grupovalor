import { Box } from "@mui/material";
import Tagline from "./Tagline";
import MenuTrigger from "./MenuTrigger";
import BottomMenuIcon from "./BottomMenuIcon";
import BottomMenuItems from "./BottomMenuItems";
import Divider from "./Divider";

import { useState } from "react";


export default function BottomBar({ tagline, isOpen, onMenuClick }) {

    const [activeSection, setActiveSection] = useState("default");

  return (
    <Box
        sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between", 
            alignItems: "flex-end",
            pb: { xs: 2, md: 4 },
        }}
        >
        {/* IZQUIERDA: icono + menu */}
        <Box
            sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            }}
        >
            <MenuTrigger
            onClick={onMenuClick}
            icon={<BottomMenuIcon isOpen={isOpen} />}
            />

            <Divider
            sx={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "scaleY(1)" : "scaleY(0)",
                transition: "all 0.3s ease",
            }}
            />

            <Box
            sx={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.4s ease",
            }}
            >
            <BottomMenuItems onSelect={setActiveSection} />
            </Box>
        </Box>

        {/* DERECHA: tagline */}
        <Box
            sx={{
            textAlign: "right",

            }}
        >
            <Tagline active={activeSection} />
        </Box>
        </Box>
  );
}