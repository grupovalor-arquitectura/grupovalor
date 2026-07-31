import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useEffect, useState } from "react";

import "./ScrollIndicator.css";

const ScrollIndicator = () => {
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