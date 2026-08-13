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

  // En visitas repetidas (playIntro = false) no hay ninguna animación
  // que esperar, así que "entered" arranca directamente en true desde
  // el primer render. Antes arrancaba siempre en false y dependía de
  // que el useEffect de abajo corriera para desplegar los círculos —
  // si ese re-render se demoraba o no llegaba a tiempo, los círculos
  // se quedaban colapsados en el centro (targetX 0) sin transición de
  // transform que los sacara de ahí, ocultos detrás del círculo activo.
  const [entered, setEntered] = useState(() => getHasPlayedHeroIntro());
  const hasFiredTransitionEnd = useRef(false);

  // Se congela UNA sola vez al montar, por la misma razón que "entered":
  // debe reflejar el estado del flag en el momento del montaje, no
  // recalcularse después de que el propio efecto lo mute.
  const [playIntro] = useState(() => !getHasPlayedHeroIntro());

  useEffect(() => {
    hasFiredTransitionEnd.current = false;

    if (!getHasPlayedHeroIntro()) {
      setEntered(false);

      const raf1 = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEntered(true);
          setHasPlayedHeroIntro(true);
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

  const renderCircle = (c, { keyPrefix = "" } = {}) => {
    const delay = 1.5 + Math.abs(c.pos) * 0.3;

    // Único punto de verdad: toda la lógica de un círculo vive acá,
    // una sola vez. La "segunda capa" (el círculo activo repetido al
    // final para que pinte encima) llama a esta MISMA función con los
    // mismos valores — nunca hay un cálculo independiente que se
    // pueda desincronizar.
    const isActive = entered && active === c.key && c.key !== null;

    const Logo = logos[c.key];
    const isLastCircle = c.pos === 3;
    const slug = companySlugs[c.key];

    const targetX = entered ? c.pos * 120 : 0;

    const breathAnimation = !entered
      ? "none"
      : c.pos === 0
        ? `breath-0 4s ease-in-out infinite`
        : `breath-${c.pos} 4s ease-in-out infinite ${delay + 4}s`;

    return (
      <g
        key={`${keyPrefix}${c.pos}`}
        onClick={isActive && slug ? () => navigate(`/${slug}`) : undefined}
        style={{
          cursor: isActive && slug ? "pointer" : "default",
        }}
      >
        <circle
          cx={800}
          cy={300}
          r={180}
          fill={circleColor}
          fillOpacity={isActive ? 1 : 0}
          stroke={circleColor}
          strokeWidth={1}
          strokeOpacity={1}
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
            <g transform={`translate(${800 - 90}, ${300 - 30})`}>
              <Logo
                width={180}
                height={60}
                style={{ color: "#421b1e" }}
              />
            </g>
          </g>
        )}
      </g>
    );
  };

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

        "@keyframes fadeInLogo": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },

        // Un @keyframes por posición, generado una sola vez (no
        // depende de props/estado, así que Emotion lo cachea igual
        // en cada render). Cada uno anima translateX + scale JUNTOS
        // dentro de la misma propiedad "transform" — nunca mezclamos
        // la propiedad CSS "scale" por separado con un "transform"
        // puesto por fuera, que era lo que hacía que el navegador
        // perdiera la composición correcta después de varios minutos
        // de animación infinita y el círculo se volviera invisible.
        ...Object.fromEntries(
          circles.map((c) => [
            `@keyframes breath-${c.pos}`,
            {
              "0%": { transform: `translateX(${c.pos * 120}px) scale(1)` },
              "50%": {
                transform: `translateX(${c.pos * 120}px) scale(1.03)`,
              },
              "100%": { transform: `translateX(${c.pos * 120}px) scale(1)` },
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
        {circles.map((c) => renderCircle(c))}
        {/* El círculo activo se pinta una SEGUNDA vez, al final,
            usando exactamente la misma función que arriba — no hay
            ningún cálculo independiente que se pueda desincronizar.
            Esto es lo único que logra que su stroke y su logo queden
            por encima del stroke de los círculos vecinos, sin mover
            ni aislar ningún nodo del DOM (las dos técnicas que ya
            confirmamos que traían problemas). */}
        {circles
          .filter((c) => entered && active === c.key && c.key !== null)
          .map((c) => renderCircle(c, { keyPrefix: "top-" }))}
      </svg>
    </Box>
  );
}
