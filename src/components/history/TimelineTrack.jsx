import { Box } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";

import { useDrag } from "@use-gesture/react";

import TimelineNode from "./TimelineNode";
import TimelineMarker from "./TimelineMarker";

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

  const bind = useDrag(({ movement: [mx] }) => {
    setDragOffset(mx * 10);
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

        overflow: {
  xs: "visible",
  md: "hidden",
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

        {/* NODO FINAL (disparador) — siempre en fill, sin año.
            No participa de activeMilestone: su único trabajo es
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
              <TimelineNode label="" active />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
