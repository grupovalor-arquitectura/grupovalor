import { Box } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";

import { useDrag } from "@use-gesture/react";

import TimelineNode from "./TimelineNode";
import TimelineMarker from "./TimelineMarker";
import TimelineNodeArrow from "./TimelineNodeArrow";

export default function TimelineTrack({
  endRef,
  milestones,
  activeMilestone,
  onNodeClick,
  onEndNodeClick,
}) {

  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("md")
  );

  const NODE_SPACING = isMobile ? 120 : 160;

  const anchorX = isMobile
    ? window.innerWidth * 0.1
    : window.innerWidth * 0.318;

  const trackOffset =
    anchorX -
    activeMilestone *
      NODE_SPACING;

  const [dragOffset, setDragOffset] = useState(0);

  const currentOffset = isMobile
    ? trackOffset + dragOffset
    : trackOffset;

  const bind = useDrag(({ movement: [mx], last }) => {
    // Este bind sólo debe afectar la navegación en mobile — en
    // desktop currentOffset ni siquiera usa dragOffset, pero sin este
    // guard el handler igual dispararía onNodeClick con un
    // click-and-drag de mouse.
    if (!isMobile) return;

    if (last) {
      // Cuántos nodos "saltó" el gesto. Negativo porque arrastrar
      // hacia la izquierda (mx negativo) debe avanzar al siguiente
      // nodo (índice mayor) — como en cualquier carrusel.
      const steps = Math.round(-mx / NODE_SPACING);

      if (steps !== 0) {
        const nextIndex = Math.min(
          Math.max(activeMilestone + steps, 0),
          milestones.length - 1
        );

        onNodeClick?.(nextIndex);
      }

      // Soltamos: la posición vuelve a depender pura y simplemente de
      // activeMilestone (vía trackOffset). Antes dragOffset se quedaba
      // pegado en el último valor arrastrado — sin resetear acá, cada
      // gesto posterior (o incluso un click en un nodo) quedaba
      // desplazado por ese resto sin relación con nada.
      setDragOffset(0);
      return;
    }

    // Mientras el gesto está en curso: 1:1 con el dedo, sin
    // multiplicador. Es sólo la vista previa en vivo del arrastre; el
    // salto de nodo real se decide al soltar, arriba.
    setDragOffset(mx);
  });

  return (
    <Box
      sx={{
        position: "relative",

        width: "100%",
        height: {
          xs: "100px",
          md: "100vh",
        },

        // clip-path en vez de overflow: a diferencia de overflowX/
        // overflowY (que están acopladas por spec — fijar una en
        // "hidden" fuerza a la otra a comportarse como "auto", nunca
        // queda un eje 100% intacto), inset() permite recortar cada
        // lado por separado. Acá recortamos los costados (para que
        // el track ancho no desborde la página) sin tocar arriba/
        // abajo en absoluto, así el círculo sale completo y se
        // superpone a la imagen de abajo gracias al z-index que ya
        // tenía (track z:3 por encima de la imagen z:1).
        clipPath: {
          xs: "inset(0 0 -300px 0)",
          md: "none",
        },
      }}
    >
      {/* línea */}

      <Box
        sx={{
          position: "absolute",

          top: {
            xs: 100,
            md: "33vh",
          },
          left: 0,

          width: "100%",

          borderTop:
            "1px solid #C76A45",
        }}
      />

      {/* track móvil */}

      <Box
        {...bind()}
        sx={{
          position: "absolute",

           zIndex: 3,

          top: 0,
          left: 0,

          width:
            (milestones.length + 1) *
            NODE_SPACING,

          height: "100%",

          transform: `translateX(${currentOffset}px)`,

          transition: "transform 0.6s cubic-bezier(.22,.61,.36,1)",
        }}

      >
        {milestones.map(
          (milestone, index) => (
            <Box
              key={milestone.id}
              ref={
                index === activeMilestone
                  ? endRef
                  : null
              }
              sx={{
                position: "absolute",

                top: {
                  xs: 58,
                  md: "calc(33vh - 42px)",
                },

                left:
                  index *
                  NODE_SPACING,
              }}
            >
              <Box
                onClick={() => {
                 
                  onNodeClick?.(index);
                }}
                sx={{
                  cursor: "pointer",
                }}
              >
                <TimelineNode
                  label={milestone.year}
                  active={index === activeMilestone}
                />
              </Box>
            </Box>
          )
        )}

        {/* NODO FINAL (disparador) — en fill, con flecha en vez de
            año. No participa de activeMilestone: su único trabajo es
            llevar al usuario al siguiente momento de la historia. */}
        {onEndNodeClick && (
          <Box
            sx={{
              position: "absolute",

              top: {
                xs: 58,
                md: "calc(33vh - 42px)",
              },

              left:
                milestones.length *
                NODE_SPACING,
            }}
          >
            <Box
              onClick={onEndNodeClick}
              sx={{
                cursor: "pointer",
              }}
            >
              <TimelineNode active>
                <TimelineNodeArrow />
              </TimelineNode>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}