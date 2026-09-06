import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useEffect, useState } from "react";

import "./ScrollIndicator.css";

const ScrollIndicator = ({ style }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      className={`scroll-indicator ${hidden ? "hidden" : ""}`}
      // "style" (no "sx") a propósito: necesita más especificidad que
      // la regla de posición del CSS ("left"/"right") para poder
      // reubicarlo en páginas donde el centro inferior de la pantalla
      // no queda libre, sin tocar el look-and-feel donde ya se usa.
      style={style}
      sx={{
        bgcolor: "primary.main",
        color: "secondary.main",
      }}
    >
      <KeyboardArrowDownIcon />
    </Box>
  );
};

export default ScrollIndicator;