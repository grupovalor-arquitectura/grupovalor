import { historyData } from "../../data/historyData";

import { useRef, useState, useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import useTunnel from "../../hooks/useTunnel";

import TimelineHeader from "./TimelineHeader";
import TimelineTrack from "./TimelineTrack";
import TimelineContent from "./TimelineContent";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import TimelineMoment from "./TimelineMoment";
import TimelineTrackStart from "./TimelineTrackStart"
import TimelineContentStart from "./TimelineContentStart";

import { Box } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

export default function HistoryTimeline({startRef}) {

  const startMoment = historyData.moments[0]; 
  const consolidationMoment = historyData.moments[1];
  const futureMoment = historyData.moments[2];

  const timeline1Section = historyData.sections.find(
    section => section.id === "timeline-1"
  );

  const timeline1Milestones = timeline1Section.milestoneIds.map(
    milestoneId =>
      historyData.milestones.find(
        milestone => milestone.id === milestoneId
      )
  );
  
  const timeline2Section = historyData.sections.find(
    section => section.id === "timeline-2"
  );

  const timeline2Milestones = timeline2Section.milestoneIds.map(
    milestoneId =>
      historyData.milestones.find(
        milestone => milestone.id === milestoneId
      )
  );
  
  const endRef = useRef(null);

  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const startAnchorRef = useRef(null);
  const startMomentRef = useRef(null);

  const { circles, visibleCircles } = useTunnel({
    startRef,
    endRef,
    triggerRef: sectionRef,
});
  
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [activeMilestoneStart, setActiveMilestoneStart] = useState(0);

  const milestone = timeline2Milestones[activeMilestone];

  const handlePrevious = () => {
    setActiveMilestone((prev) =>
      Math.max(prev - 1, 0)
    );
  };

  const handleNext = () => {
    setActiveMilestone(prev =>
      Math.min(
        prev + 1,
        timeline2Milestones.length - 1
      )
    );
  };

  const handlePreviousStart = () => {
    setActiveMilestoneStart(prev =>
      Math.max(prev - 1, 0)
    );
  };

  const handleNextStart = () => {
    setActiveMilestoneStart(prev =>
      Math.min(
        prev + 1,
        timeline1Milestones.length - 1
      )
    );
  };

 return (
  <Box
    ref={sectionRef}
    sx={{
      position: "relative",
      overflow: "hidden",
      minHeight: "410vh", // Lo ajustaremos cuando terminemos toda la estructura
    }}
  >
    {/* BLOQUE INICIO + TIMELINE 1 */}

    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "200vh",
      }}
    >
      <TimelineMoment
        moment={startMoment}
        circleRef={startMomentRef}
      />

      <TimelineTrackStart
        activeMilestone={activeMilestoneStart}
      />

      <TimelineContentStart
        milestone={
          timeline1Milestones[activeMilestoneStart]
        }
        tunnelComplete={true}
      />

      {/* Imagen Timeline 1 */}

      <Box
        sx={{
          position: "absolute",

          top: "133vh",
          left: 0,

          width: "100%",
          height: "67vh",

          backgroundImage: `url(${timeline1Milestones[activeMilestoneStart].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          opacity: 0.4,

          zIndex: 1,
        }}
      />

      <NavigationButton
        sx={{
          position: "absolute",
          left: 50,
          top: "170vh",
          zIndex: 30,
        }}
        direction="prev"
        disabled={activeMilestoneStart === 0}
        onClick={handlePreviousStart}
      />

      <NavigationButton
        sx={{
          position: "absolute",
          right: 50,
          top: "170vh",
          zIndex: 30,
        }}
        direction="next"
        disabled={
          activeMilestoneStart ===
          timeline1Milestones.length - 1
        }
        onClick={handleNextStart}
      />
    </Box>

      {/* BLOQUE CONSOLIDACIÓN + TIMELINE 2 */}

    <Box
        sx={{
          position: "relative",
          mt: "0vh",
        }}
      >
        <TimelineHeader
          moment={consolidationMoment}
          startRef={startRef}
          circles={circles}
          visibleCircles={visibleCircles}
        />

        <TimelineTrack
          startAnchorRef={startAnchorRef}
          endRef={endRef}
          circles={circles}
          visibleCircles={visibleCircles}
          activeMilestone={activeMilestone}
        />

        <TimelineContent
          milestone={milestone}
          tunnelComplete={visibleCircles >= circles}
        />

        <Box
          sx={{
            position: "absolute",
            top: "133vh",
            left: 0,
            width: "100%",
            height: "67vh",
            backgroundImage: `url(${milestone.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
            zIndex: 1,
          }}
        />

        <NavigationButton
          sx={{
            position: "absolute",
            left: 50,
            top: "170vh",
            zIndex: 30,
          }}
          direction="prev"
          disabled={activeMilestone === 0}
          onClick={handlePrevious}
        />

        <NavigationButton
          sx={{
            position: "absolute",
            right: 50,
            top: "170vh",
            zIndex: 30,
          }}
          direction="next"
          disabled={
            activeMilestone ===
            timeline2Milestones.length - 1
          }
          onClick={handleNext}
        />
    </Box>

    {/* BLOQUE FUTURO */}

    <TimelineMoment
      moment={futureMoment}
    />
  </Box>
);
}