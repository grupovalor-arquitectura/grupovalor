import { Box } from "@mui/material";

import { historyData } from "../../data/historyData";

import TimelineMoment from "./TimelineMoment";
import TimelineHeader from "./TimelineHeader";
import TimelineTrack from "./TimelineTrack";
import TimelineMilestoneMobile from "./TimelineMilestoneMobile";

export default function HistoryTimelineMobile({
  timeline1Milestones,
  timeline2Milestones,

  activeMilestoneStart,
  activeMilestone,

  activeTimeline1,
  activeTimeline2,

  setActiveMilestoneStart,
  setActiveMilestone,
}) {
  const startMoment = historyData.moments[0];
  const consolidationMoment = historyData.moments[1];
  const futureMoment = historyData.moments[2];

  return (
    <Box
      sx={{
        backgroundColor: "#421B1E",
      }}
    >
      {/* ORÍGENES */}
      <TimelineMoment moment={startMoment} />

      <Box
        sx={{
          position: "relative",
          mt: {
            xs: 8,
            md: 0,
          },
        }}
      >
        <TimelineTrack
          endRef={null}
          milestones={timeline1Milestones}
          activeMilestone={activeMilestoneStart}
          onNodeClick={(index) => {
            setActiveMilestoneStart(index);
          }}
        />

        <TimelineMilestoneMobile
          milestone={activeTimeline1}
        />
      </Box>


      {/* CONSOLIDACIÓN */}

      <Box
        sx={{ mt: 15 }}
      >
        <TimelineHeader moment={consolidationMoment} />
      </Box>

      <Box
        sx={{
          position: "relative",
          mt: {
            xs: 6,
            md: 0,
          },
        }}
      >
        <TimelineTrack
          endRef={null}
          milestones={timeline2Milestones}
          activeMilestone={activeMilestone}
          onNodeClick={(index) => {
            setActiveMilestone(index);
          }}
        />

        <TimelineMilestoneMobile
          milestone={activeTimeline2}
        />
      </Box>

      {/* FUTURO */}
      <TimelineMoment moment={futureMoment} />
    </Box>
  );
}