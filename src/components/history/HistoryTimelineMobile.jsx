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
          // Fuerza a que el z-index del track (3) vs. el de la
          // imagen (1) se resuelva ENTRE ELLOS DOS exclusivamente,
          // sin depender de qué contexto de apilamiento gane más
          // arriba en el árbol — que era por lo que la imagen se
          // seguía pintando encima del nodo pese al z-index.
          isolation: "isolate",
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
        sx={{
          position: "relative",
          isolation: "isolate",
          // Sin esto, el margin-top del primer hijo (la caja del
          // header) colapsa hacia afuera y empuja a ESTE wrapper
          // completo hacia abajo, en vez de crear espacio adentro —
          // el fondo claro (posicionado relativo a este wrapper)
          // nunca llegaba a cubrir ese margen, así que quedaba oscuro
          // y el texto se veía "pegado" al borde de lo claro sin
          // importar cuánto subiera el margin.
          display: "flow-root",
        }}
      >
        {/* Fondo claro, mismo criterio que en desktop: llega hasta la
            línea de nodos (no hasta la imagen). La altura es la suma
            de todo lo que hay ANTES de esa línea en mobile:
            mt:15 (120px) + alto del header (70vh) + mt:6 (48px) +
            alto del box del track (100px) = 268px + 70vh. */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            // mt:24 (192px) + alto del header (70vh) + mt:6 (48px) +
            // alto del box del track (100px) = 340px + 70vh.
            height: "calc(70vh + 340px)",
            backgroundColor: "primary.main",
            zIndex: -1,
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{ mt: 24 }}
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
            isolation: "isolate",
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
      </Box>

      {/* FUTURO */}
      <TimelineMoment moment={futureMoment} />
    </Box>
  );
}