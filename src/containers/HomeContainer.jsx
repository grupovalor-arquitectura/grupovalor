import { Box } from "@mui/material";

import LayoutBase from "../components/LayoutBase";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import VisualCircles from "../components/VisualCircles";


import circles from "../assets/Circle_2.svg";

import useMenu from "../hooks/useMenu";

export default function HomeContainer() {
  // 🔹 estado header
  const { isOpen: isHeaderOpen, toggleMenu: toggleHeader, } = useMenu();

  // 🔹 estado bottom (independiente)
  const { isOpen: isBottomOpen, toggleMenu: toggleBottom, } = useMenu();

  return (
    <LayoutBase
      header={
        <Header
          onMenuClick={toggleHeader}
          isOpen={isHeaderOpen}
        />
      }

      visual={<VisualCircles />}  // 🔥 AQUÍ VA

      bottom={
        <BottomBar
          tagline="valor más allá del espacio"
          isOpen={isBottomOpen}
          onMenuClick={toggleBottom}
        />
      }
    />
  );
}