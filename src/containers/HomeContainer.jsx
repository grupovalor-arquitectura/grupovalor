import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

import { homeContentMap } from "../data/homeContent";

import LayoutBase from "../components/LayoutBase";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import VisualCircles from "../components/VisualCircles";
import Footer from "../components/Footer";
import HomeContentPanel from "../components/HomeContentPanel";
import FeaturedProjects from "../components/FeaturedProjects";

import useMenu from "../hooks/useMenu";



export default function HomeContainer() {

  const { isOpen: isHeaderOpen, toggleMenu: toggleHeader } = useMenu(false);
  const { isOpen: isBottomOpen, toggleMenu: toggleBottom } = useMenu(true);

  const [activeSection, setActiveSection] = useState(null);
  const muiTheme = useTheme();

  const theme =
    muiTheme.custom.brandTheme[activeSection] ||
    muiTheme.custom.brandTheme.default;

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
      setActiveSection("default");
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ 
      position: "relative", 
      backgroundColor: theme.bg,
      transition: "background-color 0.6s ease",
    }}>

      <LayoutBase
        header={
          <Header
            onMenuClick={toggleHeader}
            isOpen={isHeaderOpen}
          />
        }

        visual={
          <VisualCircles 
          active={activeSection}
          color={theme.circle}
          textColor={theme.text} /> // 🔥 SIN wrapper
        }

        bottom={
          <BottomBar
            active={activeSection}
            onSelect={(key) =>
              setActiveSection((prev) =>
                prev === key ? "default" : key
              )
            }
            isOpen={isBottomOpen}
            onMenuClick={toggleBottom}
            isReady={isReady}
          />
        }
      />

    
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

      <FeaturedProjects />

      <Footer />
    </Box>
  );
}