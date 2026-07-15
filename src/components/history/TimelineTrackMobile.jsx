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
            overflowX: "auto",
            overflowY: "hidden",
            zIndex: 2,

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