import { Box } from "@mui/material";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",

        top: 0,
        left: 0,

        width: "24px",
        height: "24px",

        borderRadius: "50%",

        backgroundColor: "#c16242",

        

        pointerEvents: "none",

        zIndex: 9999,

        transform: `
          translate3d(
            ${position.x - 12}px,
            ${position.y - 12}px,
            0
          )
        `,

        transition:
          "transform 0.08s linear",

        willChange: "transform",
      }}
    />
  );
}