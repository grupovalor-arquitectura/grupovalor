import { Box } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";

import { useDrag } from "@use-gesture/react";

import TimelineNode from "./TimelineNode";
import TimelineMarker from "./TimelineMarker";
import TimelineNodeArrow from "./TimelineNodeArrow";

export default function TimelineTrack({
  endRef,
  milestones = [],
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
  }, {
    axis: "x",
  });

  return (
    <Box
      sx={{
        // Esta caja define el LAYOUT: su altura (100px en mobile) es
        // lo que determina dónde arranca el siguiente elemento
        // hermano (la imagen). No lleva overflow — así nunca empuja
        // ni recorta nada por su cuenta.
        position: "relative",
        width: "100%",
        height: {
          xs: "100px",
          md: "100vh",
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

      {/* Caja de RECORTE: posicionada absoluta (no afecta el layout
          del padre ni empuja a la imagen), con altura real (150px)
          suficiente para contener el nodo completo (top 58 + 84 =
          142px). Al tener overflowX: hidden CON una altura que ya
          contiene todo su contenido, el acoplamiento overflow-x/
          overflow-y de CSS no tiene nada que recortar en Y — el
          círculo sale completo, y el ancho del track (muy grande)
          queda genuinamente fuera del área scrolleable de la página. */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: {
            xs: 150,
            md: "100%",
          },
          overflowX: {
            xs: "hidden",
            md: "visible",
          },
          zIndex: 3,
        }}
      >
        {/* track móvil */}

        <Box
          {...bind()}
          sx={{
            position: "absolute",

            top: 0,
            left: 0,

            width:
              (milestones.length + 1) *
              NODE_SPACING,

            height: "100%",

            // Sin esto, en un dispositivo táctil real el navegador
            // interpreta el arrastre como un intento de scroll de la
            // página y nunca se lo entrega a useDrag como gesto — por
            // eso el click funcionaba pero el swipe no hacía nada.
            // "pan-y" deja pasar el scroll vertical normal; el gesto
            // horizontal lo captura la librería (reforzado por
            // axis:"x" en useDrag).
            touchAction: "pan-y",

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
    </Box>
  );
}