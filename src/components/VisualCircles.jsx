import { Box } from "@mui/material";

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

export default function VisualCircles({
  active = null,
  color = "#b9afaf",
  textColor = "#421b1e",
}) {
  
  const circleColor = color;

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

        "@keyframes breath": {
          "0%": { scale: 1 },
          "50%": { scale: 1.03 },
          "100%": { scale: 1 },
        },

        "@keyframes fadeInLogo": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },

        ...Object.fromEntries(
          [-3, -2, -1, 1, 2, 3].map((pos) => [
            `@keyframes waveMove-${pos}`,
            {
              "0%": { transform: "translateX(0)" },
              "100%": {
                transform: `translateX(${pos * 120}px)`,
              },
            },
          ])
        ),
      }}
    >
      <svg
        viewBox="0 0 1600 600"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* 🔹 BASE */}
        {circles.map((c, i) => {
          const delay = 1.5 + Math.abs(c.pos) * 0.3;
          const isActive = active === c.key && c.key !== null;
          const Logo = logos[c.key];

          return (
            <g key={i}>
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

                  animation:
                    c.pos === 0
                      ? "breath 4s ease-in-out infinite"
                      : `
                        waveMove-${c.pos} 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards ${delay}s,
                        breath 4s ease-in-out infinite ${delay + 4}s
                      `,

                  transition:
                   "fill-opacity 0.5 cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease",

                  filter: isActive ? glow : "none",
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

                    // 🔥 NUEVO: fade-in suave
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

        {/* 🔥 OVERLAY */}
        {active && (
          (() => {
            const c = circles.find((c) => c.key === active);
            if (!c) return null;

            const Logo = logos[c.key];
            const translateX = c.pos * 120;

            return (
              <g>
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