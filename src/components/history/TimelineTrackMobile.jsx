import { Box } from "@mui/material";

import TimelineNode from "./TimelineNode";

export default function TimelineTrackMobile({
  milestones,
  activeMilestone,
}) {
  return (
    <Box
      sx={{
        py: 8,
        px: 3,
        display: "flex",
        flexDirection: "column",
        gap: 5,

        // Red de seguridad: si algún ancestro más arriba tiene el
        // mismo problema de flex que arreglamos abajo, esto evita que
        // el desborde se propague hasta la página.
        overflowX: "hidden",
        maxWidth: "100%",
      }}
    >
      {/* TIMELINE */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 84,
          display: "flex",
          alignItems: "center",

          // Este Box es hijo de un flex (el wrapper de arriba). Sin
          // minWidth: 0, un flex item nunca se encoge por debajo del
          // ancho intrínseco de su contenido — y el contenido de acá
          // adentro (el track de nodos) es "width: max-content", muy
          // ancho. Eso empujaba a este contenedor a estirarse y
          // desbordar la página en vez de quedarse acotado a 100%.
          minWidth: 0,
        }}
      >
        {/* Línea */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "1px",
            bgcolor: "#C76A45",
          }}
        />

        {/* Track desplazable */}
        <Box
          sx={{
            width: "100%",
            minWidth: 0,
            overflowX: "auto",
            overflowY: "hidden",
            zIndex: 2,

            // -webkit-overflow-scrolling: touch da inercia nativa en
            // iOS Safari — sin esto, el scroll táctil se siente
            // "duro" y puede cortarse a mitad de gesto.
            WebkitOverflowScrolling: "touch",

            "&::-webkit-scrollbar": {
              display: "none",
            },

            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              width: "max-content",
              px: 4,
            }}
          >
            {milestones.map((milestone) => (
              <TimelineNode
                key={milestone.year}
                label={milestone.year}
                active={activeMilestone?.year === milestone.year}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Imagen */}
      <Box>
        Imagen
      </Box>

      {/* Contenido */}
      <Box>
        Contenido
      </Box>

      {/* Navegación */}
      <Box>
        Navegación
      </Box>
    </Box>
  );
}