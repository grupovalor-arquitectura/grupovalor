import { Box } from "@mui/material";
import { useState, useEffect } from "react";

import { homeContentMap } from "../data/homeContent";

import LayoutBase from "../components/LayoutBase";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import VisualCircles from "../components/VisualCircles";
import Footer from "../components/Footer";
import HomeContentPanel from "../components/HomeContentPanel";

import useMenu from "../hooks/useMenu";

export default function HomeContainer() {
  const { isOpen: isHeaderOpen, toggleMenu: toggleHeader } = useMenu(false);
  const { isOpen: isBottomOpen, toggleMenu: toggleBottom } = useMenu(true);

  const [activeSection, setActiveSection] = useState(null);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ position: "relative" }}>

      <LayoutBase
        header={
          <Header
            onMenuClick={toggleHeader}
            isOpen={isHeaderOpen}
          />
        }

        visual={
          <VisualCircles active={activeSection} /> // 🔥 SIN wrapper
        }

        bottom={
          <BottomBar
            active={activeSection}
            onSelect={setActiveSection}
            isOpen={isBottomOpen}
            onMenuClick={toggleBottom}
            isReady={isReady}
          />
        }
      />

      {/* 🔥 CAPA SUPERIOR CORRECTA */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh", // 🔥 viewport real
          pointerEvents: "none",
        }}
      >
        <HomeContentPanel
          active={activeSection}
          content={homeContentMap[activeSection]}
        />
      </Box>

      <Footer />
    </Box>
  );
}