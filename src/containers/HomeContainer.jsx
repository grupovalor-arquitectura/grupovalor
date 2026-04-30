import { Box } from "@mui/material";
import { useState } from "react";

import LayoutBase from "../components/LayoutBase";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import VisualCircles from "../components/VisualCircles";

import useMenu from "../hooks/useMenu";

export default function HomeContainer() {
  const { isOpen: isHeaderOpen, toggleMenu: toggleHeader } = useMenu();
  const { isOpen: isBottomOpen, toggleMenu: toggleBottom } = useMenu();

  const [activeSection, setActiveSection] = useState(null);

  return (
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
          active={activeSection}          // 🔥 conexión
          onSelect={setActiveSection}     // 🔥 conexión
          isOpen={isBottomOpen}
          onMenuClick={toggleBottom}
        />
      }
    />
  );
}