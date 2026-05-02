import { Box } from "@mui/material";
import { useState } from "react";

import LayoutBase from "../components/LayoutBase";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import VisualCircles from "../components/VisualCircles";
import Footer from "../components/Footer";

import useMenu from "../hooks/useMenu";

export default function HomeContainer() {
  const { isOpen: isHeaderOpen, toggleMenu: toggleHeader } = useMenu(false); // cerrado
  const { isOpen: isBottomOpen, toggleMenu: toggleBottom } = useMenu(true);  // abierto

  const [activeSection, setActiveSection] = useState(null);

  return (
    <Box>
      {/* HERO */}
      <LayoutBase
        header={
          <Header
            onMenuClick={toggleHeader}
            isOpen={isHeaderOpen}
          />
        }

        visual={
          <VisualCircles active={activeSection} />
        }

        bottom={
          <BottomBar
            active={activeSection}
            onSelect={setActiveSection}
            isOpen={isBottomOpen}
            onMenuClick={toggleBottom}
          />
        }
      />

      {/* 🔥 FOOTER (FUERA DEL LAYOUT) */}
      <Footer />
    </Box>
  );
}