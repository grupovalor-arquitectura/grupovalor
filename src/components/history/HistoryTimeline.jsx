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
import TimelineTunnel from "./TimelineTunnel";
import HistoryTimelineMobile from "./HistoryTimelineMobile";

import { Box, useTheme, useMediaQuery } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

export default function HistoryTimeline({startRef}) {

  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("md")
  );

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
  
  const sectionRef = useRef(null);

  const originMomentRef = useRef(null);
  const timeline1StartRef = useRef(null);

  const block1Ref = useRef(null);
  const block2Ref = useRef(null);

  const consolidationMomentRef = useRef(null);
  const timeline2StartRef = useRef(null);

  const futureMomentRef = useRef(null);
  const futureBlockRef = useRef(null);

  // Los nodos finales de cada timeline llevan al siguiente momento
  // de la historia. Usamos scrollIntoView con behavior smooth para
  // que el desplazamiento se sienta continuo con el resto de la
  // página, en vez de un salto.
  const scrollToBlock = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const tunnel1 = useTunnel({
    startRef: originMomentRef,
    endRef: timeline1StartRef,
    triggerRef: block1Ref,
  });

  const tunnel2 = useTunnel({
    startRef: consolidationMomentRef,
    endRef: timeline2StartRef,
    triggerRef: block2Ref,
  });

  
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [activeMilestoneStart, setActiveMilestoneStart] = useState(0);
  const [tunnelTop, setTunnelTop] = useState(0);

  const milestone = timeline2Milestones[activeMilestone];

  const activeTimeline1 =
  timeline1Milestones[activeMilestoneStart];

  const activeTimeline2 =
    timeline2Milestones[activeMilestone];

  const handlePrevious = () => {
    setActiveMilestone((prev) =>
      Math.max(prev - 1, 0)
    );
  };

  const handleNext = () => {
    // Estando en el último año, la flecha hace lo mismo que el nodo
    // trigger: baja al siguiente momento. El índice no avanza, así
    // que el contenido del último año sigue visible.
    if (activeMilestone === timeline2Milestones.length - 1) {
      scrollToBlock(futureBlockRef);
      return;
    }

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
    if (activeMilestoneStart === timeline1Milestones.length - 1) {
      scrollToBlock(block2Ref);
      return;
    }

    setActiveMilestoneStart(prev =>
      Math.min(
        prev + 1,
        timeline1Milestones.length - 1
      )
    );
  };

  const TUNNEL_SIZE = 84;
  const anchorX = window.innerWidth * 0.318;

  useLayoutEffect(() => {
    if (!originMomentRef.current) return;

    const updatePosition = () => {
      const rect =
        originMomentRef.current.getBoundingClientRect();

      const parentRect =
        block1Ref.current.getBoundingClientRect();

      setTunnelTop(rect.top - parentRect.top);
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);

    return () =>
      window.removeEventListener(
        "resize",
        updatePosition
      );
  }, []);

  if (isMobile) {
  return (
    <HistoryTimelineMobile
      timeline1Milestones={timeline1Milestones}
      timeline2Milestones={timeline2Milestones}

      activeMilestoneStart={activeMilestoneStart}
      activeMilestone={activeMilestone}

      activeTimeline1={activeTimeline1}
      activeTimeline2={activeTimeline2}

      setActiveMilestoneStart={setActiveMilestoneStart}
      setActiveMilestone={setActiveMilestone}
    />
  );
}

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
    ref={block1Ref}
      sx={{
      
        position: "relative",
        width: "100%",
        height: "200vh",
      }}
    >
     <TimelineMoment
        moment={startMoment}
        circleRef={originMomentRef}
        backgroundColor="background.default"
      />

    {!isMobile && (
        <Box
          sx={{
            position: "absolute",
            left: anchorX,
            top: tunnelTop,
            zIndex: 2,
          }}
        >
          <TimelineTunnel
            circles={tunnel1.circles}
            visibleCircles={tunnel1.visibleCircles}
          />
        </Box>
      )}

      <TimelineTrackStart
        startAnchorRef={timeline1StartRef}
        activeMilestone={activeMilestoneStart}
        onNodeClick={setActiveMilestoneStart}
        onEndNodeClick={() => scrollToBlock(block2Ref)}
      />

      <TimelineContentStart
        milestone={timeline1Milestones[activeMilestoneStart]}
        tunnelComplete={tunnel1.tunnelComplete}
      />

      {/* Imagen Timeline 1 */}

      <Box
        sx={{
          position: "absolute",

          top: {
            xs: "108vh",
            md: "133vh",
          },
          left: 0,

          width: "100%",
          height: {
            xs: "92vh",
            md: "67vh",
          },

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
          top: {
            xs: "140vh",
            md: "170vh",
          },
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
          top: {
            xs: "140vh",
            md: "170vh",
          },
          zIndex: 30,
        }}
        direction="next"
        onClick={handleNextStart}
      />
    </Box>

      {/* BLOQUE CONSOLIDACIÓN + TIMELINE 2 */}

    <Box
        ref={block2Ref}
        sx={{
          position: "relative",
          mt: "0vh",
        }}
      >

        {/* Fondo claro del bloque de consolidación. Llega hasta la
            línea de nodos (100vh del header + 33vh del track = 133vh),
            que es justo donde empieza la imagen, así que no la tapa.
            zIndex 0 lo deja por debajo de imagen (1), nodos (3) y
            contenido (20). */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "133vh",
            backgroundColor: "primary.main",
            zIndex: 0,
          }}
        />

        <TimelineHeader
          moment={consolidationMoment}
          startRef={consolidationMomentRef}
          circles={tunnel2.circles}
          visibleCircles={tunnel2.visibleCircles}
        />

        <TimelineTrack
          endRef={timeline2StartRef}
          milestones={timeline2Milestones}
          activeMilestone={activeMilestone}
          onNodeClick={setActiveMilestone}
          onEndNodeClick={() => scrollToBlock(futureBlockRef)}
        />

        <TimelineContent
          milestone={milestone}
          tunnelComplete={tunnel1.tunnelComplete}
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
          onClick={handleNext}
        />
    </Box>

    {/* BLOQUE FUTURO */}

    <Box ref={futureBlockRef}>
      <TimelineMoment
        moment={futureMoment}
        circleRef={futureMomentRef}
      />
    </Box>
  </Box>
);
}