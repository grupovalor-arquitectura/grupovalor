import { Box } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  getHasPlayedHeroIntro,
  setHasPlayedHeroIntro,
} from "../utils/heroIntro";

import LogoGV from "../assets/LogoGV.svg?react";
import LogoAV from "../assets/LogoAV.svg?react";
import LogoCV from "../assets/LogoCV.svg?react";
import LogoPV from "../assets/LogoPV.svg?react";
import LogoEV from "../assets/LogoEV.svg?react";
import LogoBV from "../assets/LogoBV.svg?react";

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const circles = [
  { pos: -3, key: "promotora" },
  { pos: -2, key: "constructora" },
  { pos: -1, key: "arquitectura" },
  { pos: 0, key: "default" },
  { pos: 1, key: "estrategia" },
  { pos: 2, key: "banca" },
  { pos: 3, key: null },
];

const logos = {
  default: LogoGV,
  arquitectura: LogoAV,
  constructora: LogoCV,
  promotora: LogoPV,
  estrategia: LogoEV,
  banca: LogoBV,
};

const companySlugs = {
  default: "/nosotros",
  arquitectura: "/empresas/arquitectura-valor",
  constructora: "/empresas/constructora-valor",
  promotora: "/empresas/promotora-valor",
  estrategia: "/empresas/estrategia-valor",
  banca: "/empresas/banca-valor",
};


export default function VisualCircles({
  active = null,
  color = "#b9afaf",
  textColor = "#421b1e",
  onTransitionEnd,
}) {
  const navigate = useNavigate();
  const circleColor = color;

  // "entered" controla si los círculos están desplegados en su
  // posición de onda o colapsados en el centro (estado inicial).
  // Arranca en false en CADA montaje y pasa a true un frame después,
  // de modo que la transición transform 0 -> target SIEMPRE tenga
  // un cambio real que animar, sin importar cuántas veces el
  // componente se haya montado/desmontado antes ni en qué estado
  // haya quedado la última vez. Esto reemplaza la dependencia de
  // que un @keyframes "forwards" se mantenga vivo indefinidamente.
  
  
  const [entered, setEntered] = useState(false);
  const [playIntro, setPlayIntro] = useState(!getHasPlayedHeroIntro());

  const hasFiredTransitionEnd = useRef(false);

  useEffect(() => {
    hasFiredTransitionEnd.current = false;

    if (!getHasPlayedHeroIntro()) {
      setEntered(false);

      const raf1 = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEntered(true);
          setHasPlayedHeroIntro(true);
          setTimeout(() => {
            onTransitionEnd?.();
          }, 3900);
        });
      });

      return () => cancelAnimationFrame(raf1);
    }

    setEntered(true);
  }, []);

  const glow = `
    drop-shadow(0 0 6px ${hexToRgba(circleColor, 0.45)})
    drop-shadow(0 0 12px ${hexToRgba(circleColor, 0.25)})
  `;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        transform: "scale(0.9)",
        transformOrigin: "center center",

        "@keyframes breath": {
          "0%": { scale: 1 },
          "50%": { scale: 1.03 },
          "100%": { scale: 1 },
        },

        "@keyframes fadeInLogo": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      <svg
        viewBox="0 0 1600 600"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* BASE */}
        {circles.map((c) => {
          const delay = 1.5 + Math.abs(c.pos) * 0.3;
          // "entered" se exige aquí a propósito: un círculo NUNCA debe
          // poder pintarse relleno/activo mientras todavía está en
          // camino a su posición. Si esto no estuviera, una carrera
          // entre "active" resolviéndose y "entered" pasando a true
          // deja un círculo con fillOpacity 1 pero transform: translateX(0),
          // es decir, relleno y atascado en el centro (el bug reportado).
          const isActive = entered && active === c.key && c.key !== null;
          const Logo = logos[c.key];
          const isLastCircle = c.pos === 3;

          // La posición ya NO depende de un keyframe que corrió una
          // vez: se recalcula en cada render a partir de "entered".
          const targetX = entered ? c.pos * 120 : 0;

          const breathAnimation = !entered
            ? "none"
            : c.pos === 0
              ? "breath 4s ease-in-out infinite"
              : `breath 4s ease-in-out infinite ${delay + 4}s`;

          return (
            <g key={c.pos}>
              <circle
                cx={800}
                cy={300}
                r={180}
                fill={circleColor}
                fillOpacity={isActive ? 1 : 0}
                stroke={circleColor}
                strokeWidth={1}
                style={{
                  transformOrigin: "800px 300px",
                  transform: `translateX(${targetX}px)`,
                 transition: playIntro
                    ? `
                        transform 1.4s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s,
                        fill-opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                        filter 0.4s ease
                      `
                    : `
                        fill-opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                        filter 0.4s ease
                      `,
                  animation: breathAnimation,
                  filter: isActive ? glow : "none",
                }}
                onTransitionEnd={(e) => {
                  if (
                    isLastCircle &&
                    e.propertyName === "transform" &&
                    !hasFiredTransitionEnd.current
                  ) {
                    hasFiredTransitionEnd.current = true;
                    onTransitionEnd?.();
                  }
                }}
              />

              {isActive && Logo && (
                <g
                  style={{
                    transform: `
                      translateX(${c.pos * 120}px)
                      scale(2)
                    `,
                    transformOrigin: "800px 300px",
                    opacity: 0,
                    animation: "fadeInLogo 0.6s ease-in forwards",
                  }}
                >
                  <Logo
                    x={800 - 90}
                    y={300 - 30}
                    width={180}
                    height={60}
                    style={{ color: "#421b1e" }}
                  />
                </g>
              )}
            </g>
          );
        })}

        {/* OVERLAY */}
        {entered && active && (
          (() => {
            const c = circles.find((c) => c.key === active);
            if (!c) return null;

            const Logo = logos[c.key];
            const translateX = c.pos * 120;

            return (
              <g
                onClick={() => {
                  const slug = companySlugs[active];

                  if (slug) {
                    navigate(`/${slug}`);
                  }
                }}
                style={{
                  cursor: "pointer",
                }}
              >
                <circle
                  cx={800}
                  cy={300}
                  r={180}
                  fill={circleColor}
                  stroke={circleColor}
                  strokeWidth={1}
                  style={{
                    transform: `translateX(${translateX}px)`,
                    transformOrigin: "800px 300px",
                    filter: glow,
                  }}
                />

                {Logo && (
                  <g
                    style={{
                      transform: `
                        translateX(${translateX}px)
                        scale(2)
                      `,
                      transformOrigin: "800px 300px",
                    }}
                  >
                    <Logo
                      x={800 - 90}
                      y={300 - 30}
                      width={180}
                      height={60}
                      style={{ color: "#421b1e" }}
                    />
                  </g>
                )}
              </g>
            );
          })()
        )}
      </svg>
    </Box>
  );
}
