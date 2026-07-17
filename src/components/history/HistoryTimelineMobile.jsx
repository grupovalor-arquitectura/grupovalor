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

      {/* TIMELINE 1 */}
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

      {/* CONSOLIDACIÓN */}
      <TimelineHeader moment={consolidationMoment} />

      {/* TIMELINE 2 */}
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

      {/* FUTURO */}
      <TimelineMoment moment={futureMoment} />
    </Box>
  );
}