import { Box } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";


import TimelineNode from "./TimelineNode";
import TimelineMarker from "./TimelineMarker";

export default function TimelineTrack({
  endRef,
  milestones,
  activeMilestone,
  onNodeClick,
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



  return (
    <Box
      sx={{
        position: "relative",

        width: "100%",
        height: {
          xs: "400px",
          md: "100vh",
        },

        overflow: "hidden",
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
        sx={{
          position: "absolute",

           zIndex: 3,

          top: 0,
          left: 0,

          width:
            milestones.length *
            NODE_SPACING,

          height: "100%",

          transform: `translateX(${trackOffset}px)`,

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
                  console.log("🚨 TIMELINE TRACK NUEVO", index);
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
      </Box>
    </Box>
  );
}