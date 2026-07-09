import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import GVMono from "../assets/GVMono.svg?react";

const circles = [
  { duration: 2.5, scale: 1.012, opacity: 0.28 },
  { duration: 3.0, scale: 1.017, opacity: 0.34 },
  { duration: 2.8, scale: 1.014, opacity: 0.40 },
  { duration: 3.2, scale: 1.016, opacity: 0.30 },
  { duration: 2.7, scale: 1.013, opacity: 0.36 },
  { duration: 3.1, scale: 1.015, opacity: 0.32 },
];

export default function VisualCirclesMobile({
  color = "#c16242",
  logoColor = "#421b1e",
}) {
  const circlesRef = useRef([]);
  const centerRef = useRef(null);

  useEffect(() => {
    circlesRef.current.forEach((circle, index) => {
      gsap.to(circle, {
        scale: circles[index].scale,
        duration: circles[index].duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    gsap.to(centerRef.current, {
      scale: 1.006,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "55vh",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        overflow: "hidden",
      }}
    >
      {/* Contornos */}

      {circles.map((circle, index) => (
        <Box
          key={index}
          ref={(el) => (circlesRef.current[index] = el)}
          sx={{
            position: "absolute",

            width: 180,
            height: 180,

            borderRadius: "50%",

            border: `1px solid ${color}`,

            opacity: circle.opacity,
          }}
        />
      ))}

      {/* Círculo principal */}

      <Box
        ref={centerRef}
        sx={{
          width: 170,
          height: 170,

          borderRadius: "50%",

          backgroundColor: color,

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          boxShadow: `0 0 30px ${color}30`,
        }}
      >
        <Box
          sx={{
            width: 72,
            color: logoColor,

            "& svg": {
              width: "100%",
              height: "auto",
              display: "block",
            },
          }}
        >
          <GVMono />
        </Box>
      </Box>
    </Box>
  );
}