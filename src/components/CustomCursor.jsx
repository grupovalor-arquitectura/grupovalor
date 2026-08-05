import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {

  const [enabled, setEnabled] = useState(false);

  // La posición ya no vive en estado de React — se escribe directo en
  // el DOM vía esta ref en cada mousemove. En Safari, el ciclo
  // "setState -> re-render -> paint" combinado con una transition CSS
  // de suavizado generaba un delay perceptible entre el mouse real y
  // el cursor. Escribir el transform directo, sin transition, hace que
  // el cursor siga al mouse 1:1 en los tres navegadores.
  const containerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const update = () => {
      const active = mediaQuery.matches;

      setEnabled(active);
      document.body.style.cursor = active ? "none" : "auto";
    };

    update();

    mediaQuery.addEventListener("change", update);

    return () => {
      document.body.style.cursor = "auto";
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  // none | down | right | up
  const [arrowDirection, setArrowDirection] =
    useState("none");

  useEffect(() => {

    if (!enabled) return;

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

      // Escritura directa al DOM, sin setState ni transition — sigue
      // al mouse en el mismo frame, sin el delay que se veía en Safari.
      if (containerRef.current) {
        containerRef.current.style.transform =
          `translate3d(${mouseX - 40}px, ${mouseY - 40}px, 0)`;
      }

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
  }, [enabled]);

  if (!enabled) return null;

  return (
    <Box
      ref={containerRef}
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

        // Posición inicial fuera de pantalla hasta el primer
        // mousemove, para no mostrar un flash en la esquina (0,0).
        transform: "translate3d(-100px, -100px, 0)",

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
              : "48px",

          height:
            arrowDirection !== "none"
              ? "60px"
              : "48px",

          // FORMA
          borderRadius:
            arrowDirection !== "none"
              ? "0%"
              : "50%",

          // STROKE
          border:
            arrowDirection !== "none"
              ? "2px solid #c16242"
              : "none",

          backgroundColor:
            arrowDirection === "none"
              ? "#c16242"
              : "transparent",

          // MORPH
          borderTop:
            arrowDirection !== "none"
              ? "none"
              : "none",

          borderRight:
            arrowDirection !== "none"
              ? "none"
              : "none",

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