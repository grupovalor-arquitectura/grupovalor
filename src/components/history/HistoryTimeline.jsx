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

  // Mismo criterio que en TimelineTrack/TimelineTrackStart: el 32%
  // deja demasiado hueco en anchos tipo iPad (900-1200px). Sin este
  // ajuste acá, el túnel queda desalineado del texto/círculo que sí
  // usan el criterio nuevo.
  const isTablet = useMediaQuery(
    theme.breakpoints.between("md", "lg")
  );

  const anchorX = window.innerWidth * (isTablet ? 0.10 : 0.318);

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
      // "auto" en tablet: con block1/block2/futuro ya achicados para
      // este breakpoint, este mínimo (pensado sólo para desktop) se
      // quedó forzando espacio vacío de más al final. En desktop el
      // contenido real siempre superó los 410vh igual, así que ahí
      // nunca se notó.
      minHeight: {
        md: "auto",
        lg: "410vh",
      },
    }}
  >
    {/* BLOQUE INICIO + TIMELINE 1 */}

    <Box
    ref={block1Ref}
      sx={{
      
        position: "relative",
        width: "100%",
        // 128vh en tablet (momento 55vh + track 100vh, con la imagen
        // recortada a 40vh en vez de 67vh) vs 200vh en desktop.
        height: {
          md: "128vh",
          lg: "200vh",
        },
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
            md: "88vh",
            lg: "133vh",
          },
          left: 0,

          width: "100%",
          height: {
            xs: "92vh",
            md: "40vh",
            lg: "67vh",
          },

          backgroundImage: `url(${timeline1Milestones[activeMilestoneStart].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          opacity: 0.4,

          zIndex: 1,
        }}
      />

      {!isTablet && (
        <NavigationButton
          sx={{
            position: "absolute",
            left: 50,
            top: {
              xs: "140vh",
              lg: "170vh",
            },
            zIndex: 30,
          }}
          direction="prev"
          disabled={activeMilestoneStart === 0}
          onClick={handlePreviousStart}
        />
      )}

      {!isTablet && (
        <NavigationButton
          sx={{
            position: "absolute",
            right: 50,
            top: {
              xs: "140vh",
              lg: "170vh",
            },
            zIndex: 30,
          }}
          direction="next"
          onClick={handleNextStart}
        />
      )}
    </Box>

      {/* BLOQUE CONSOLIDACIÓN + TIMELINE 2 */}

    <Box
        ref={block2Ref}
        sx={{
          position: "relative",
          mt: "0vh",
          // Sin esto, la altura real del bloque sale del flujo normal
          // (header 55vh + track 100vh = 155vh), pero la foto sólo
          // llega a 128vh (88vh + 40vh) — quedaban 27vh de espacio
          // vacío de más antes de que empezara la siguiente sección.
          // OJO: los breakpoints de MUI cascan hacia arriba — poner
          // sólo "md" también afectaba a "lg" (desktop), rompiendo el
          // layout ahí. "lg: auto" lo resetea explícitamente para que
          // el bloque vuelva a sacar su altura del contenido normal.
          height: {
            md: "128vh",
            lg: "auto",
          },
        }}
      >

        {/* Fondo claro del bloque de consolidación. Llega hasta la
            línea de nodos, que es justo donde empieza la imagen, así
            que no la tapa. En tablet el header mide 55vh (no 100vh),
            así que la línea de nodos cae en 88vh en vez de 133vh.
            zIndex 0 lo deja por debajo de imagen (1), nodos (3) y
            contenido (20). */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: {
              md: "88vh",
              lg: "133vh",
            },
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
            top: {
              md: "88vh",
              lg: "133vh",
            },
            left: 0,
            width: "100%",
            height: {
              md: "40vh",
              lg: "67vh",
            },
            backgroundImage: `url(${milestone.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
            zIndex: 1,
          }}
        />

        {!isTablet && (
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
        )}

        {!isTablet && (
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
        )}
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