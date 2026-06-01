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

import Fondo1 from "../assets/33DC-AEREAGENERAL.png";
import Fondo2 from "../assets/wacari.png"
import Fondo3 from "../assets/escritorio.png"

import useMenu from "../hooks/useMenu";

const heroBackgrounds = [
  Fondo1,
  Fondo2,
  Fondo3,
];

export default function HomeContainer() {

  const { isOpen: isHeaderOpen, toggleMenu: toggleHeader } = useMenu(false);

  const { isOpen: isBottomOpen, toggleMenu: toggleBottom } = useMenu(true);

  const [activeSection, setActiveSection] = useState(null);

  const [heroImage, setHeroImage] = useState(Fondo1);

  const muiTheme = useTheme();

  const theme =
    muiTheme.custom.brandTheme[activeSection] ||
    muiTheme.custom.brandTheme.default;

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {

    const randomImage =
      heroBackgrounds[
        Math.floor(
          Math.random() * heroBackgrounds.length
        )
      ];

    setHeroImage(randomImage);

    const timer = setTimeout(() => {
      setIsReady(true);
      setActiveSection("default");
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: theme.bg,
        transition: "background-color 0.6s ease",
      }}
    >
      {/* IMAGEN DE FONDO */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",

          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          opacity: 0.5,

          filter: `
            
            
            brightness(0.75)
          `,

          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* TINTE CORPORATIVO */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",

          backgroundColor: theme.bg,
          opacity: 1,
          mixBlendMode: "hue",

          zIndex: 1,
          pointerEvents: "none",

          transition:
            "background-color 0.6s ease, opacity 0.6s ease",
        }}
      />

      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
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
              textColor={theme.text}
            />
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
      </Box>

      {/* PANEL DERECHO */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 3,
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