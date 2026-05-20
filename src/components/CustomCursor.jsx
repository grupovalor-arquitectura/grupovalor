import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
  document.body.style.cursor = "none";

  return () => {
    document.body.style.cursor = "auto";
  };
}, []);

  // none | down | right | up
  const [arrowDirection, setArrowDirection] =
    useState("none");

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const updateCursorState = () => {
      const bottomThreshold = 120;
      const topThreshold = 120;
      const rightThreshold = 140;

      // ↓ CERCA AL BORDE INFERIOR
      const nearBottom =
        window.innerHeight - mouseY <
        bottomThreshold;

      // ↑ CERCA AL BORDE SUPERIOR
      const nearTop =
        mouseY < topThreshold;

      // → CERCA AL BORDE DERECHO
      const nearRight =
        window.innerWidth - mouseX <
        rightThreshold;

      // ===== SCROLL REAL =====

      const scrollTop = window.scrollY;

      const windowHeight =
        window.innerHeight;

      const documentHeight =
        document.documentElement
          .scrollHeight;

      // ===== FINAL DEL SITIO =====

      const distanceToPageEnd =
        documentHeight -
        (scrollTop + windowHeight);

      const isAtPageEnd =
        distanceToPageEnd < 120;

      // ===== PUEDE SUBIR? =====

      const canScrollUp =
        scrollTop > 80;

      // ===== PUEDE IR A LA DERECHA? =====
      // Solo mostrar →
      // si existe scroll horizontal

      const canScrollRight =
        document.documentElement
          .scrollWidth >
        window.innerWidth + 40;

      // ===== PRIORIDADES =====

      // FOOTER = ↑
      if (
        isAtPageEnd &&
        canScrollUp
      ) {
        setArrowDirection("up");
      }

      // SLIDER HORIZONTAL = →
      else if (
        nearRight &&
        canScrollRight
      ) {
        setArrowDirection("right");
      }

      // SCROLL DOWN = ↓
      else if (nearBottom) {
        setArrowDirection("down");
      }

      // SCROLL UP = ↑
      else if (
        nearTop &&
        canScrollUp
      ) {
        setArrowDirection("up");
      }

      // DEFAULT = ○
      else {
        setArrowDirection("none");
      }
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      setPosition({
        x: mouseX,
        y: mouseY,
      });

      updateCursorState();
    };

    const handleScroll = () => {
      updateCursorState();
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",

        top: 0,
        left: 0,

        width: "80px",
        height: "80px",

        pointerEvents: "none",

        zIndex: 9999,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        // CENTRAR EL CURSOR
        transform: `
          translate3d(
            ${position.x - 40}px,
            ${position.y - 40}px,
            0
          )
        `,

        transition:
          "transform 0.08s linear",

        willChange: "transform",
      }}
    >
      <Box
        sx={{
          position: "absolute",

          // TAMAÑO
          width:
            arrowDirection !== "none"
              ? "60px"
              : "80px",

          height:
            arrowDirection !== "none"
              ? "60px"
              : "80px",

          // FORMA
          borderRadius:
            arrowDirection !== "none"
              ? "0%"
              : "50%",

          // STROKE
          border: "2px solid #c16242",

          // MORPH
          borderTop:
            arrowDirection !== "none"
              ? "none"
              : "2px solid #c16242",

          borderRight:
            arrowDirection !== "none"
              ? "none"
              : "2px solid #c16242",

          // ROTACIONES
          transform:
            arrowDirection === "down"
              ? "rotate(-45deg)"
              : arrowDirection ===
                "right"
              ? "rotate(225deg)"
              : arrowDirection ===
                "up"
              ? "rotate(135deg)"
              : "rotate(0deg)",

          transition:
            "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </Box>
  );
}