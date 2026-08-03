import { Box } from "@mui/material";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import { useProjects } from "../context/ProjectsContext";

// Escala global del loader. 1 = tamaño original. Baja este número para
// achicarlo (ej. 0.6 = 60% del tamaño original), todo lo demás se
// recalcula proporcionalmente.
const SCALE = 0.6;

const CIRCLE_SIZE = 100 * SCALE;
const CIRCLE_OFFSET = -85 * SCALE;
const CONTAINER_WIDTH = 900 * SCALE;
const CONTAINER_HEIGHT = 220 * SCALE;
const OPEN = [-100, -50, 0, 50, 100].map((v) => v * SCALE);

export default function GlobalLoader() {

  const { loading } = useProjects();

  
  
  const container = useRef(null);

  

  useLayoutEffect(() => {
    if (!loading) return null;

    const ctx = gsap.context(() => {
        const circles = gsap.utils.toArray(".loader-circle");

        gsap.set(circles, {
        x: 0,
        scale: 0.98,
        });

        gsap.to(circles, {
        x: (i) => OPEN[i],

        duration: 1.2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
            each: 0.04,
            from: "center",
        },

        scale: (i) => (i === 2 ? 1 : 1.02),
        });
    }, container);

    return () => ctx.revert();
    }, []);

    if (!loading) return null;

  return (
    <Box
      ref={container}
      sx={{
        position: "fixed",
        inset: 0,
        bgcolor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: CONTAINER_WIDTH,
          height: CONTAINER_HEIGHT,
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Box
            key={i}
            className="loader-circle"
            sx={{
              position: "absolute",

              left: "50%",
              top: "50%",

              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,

              marginLeft: `${CIRCLE_OFFSET}px`,
              marginTop: `${CIRCLE_OFFSET}px`,

              borderRadius: "50%",
              border: "1.5px solid",

              borderColor: "secondary.main",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}