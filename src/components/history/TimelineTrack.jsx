import { Box } from "@mui/material";

import { historyData } from "../../data/historyData";

import TimelineNode from "./TimelineNode";
import TimelineMarker from "./TimelineMarker";

export default function TimelineTrack({
  endRef,
  activeMilestone,
}) {

  const NODE_SPACING = 160;

  const anchorX =
    window.innerWidth * 0.318;

  const trackOffset =
    anchorX -
    activeMilestone *
      NODE_SPACING;

  const timeline2Section =
  historyData.sections.find(
    section => section.id === "timeline-2"
  );

  const timeline2Milestones =
    timeline2Section.milestoneIds.map(
      milestoneId =>
        historyData.milestones.find(
          milestone =>
            milestone.id === milestoneId
        )
    );

  return (
    <Box
      sx={{
        position: "relative",

        width: "100%",
        height: "100vh",

        overflow: "hidden",
      }}
    >
      {/* línea */}

      <Box
        sx={{
          position: "absolute",

          top: "33vh",
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
            timeline2Milestones.length *
            NODE_SPACING,

          height: "100%",

          transform: `translateX(${trackOffset}px)`,

          transition: "transform 0.6s cubic-bezier(.22,.61,.36,1)",
        }}
      >
        {timeline2Milestones.map(
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

                top: "calc(33vh - 42px)",

                left:
                  index *
                  NODE_SPACING,
              }}
            >
              <TimelineNode
                label={milestone.year}
                active={
                  index ===
                  activeMilestone
                }
              />
            </Box>
          )
        )}
      </Box>
    </Box>
  );
}