import { Box } from "@mui/material";

/**
 * Flecha del nodo disparador de cada timeline.
 *
 * Replica la misma construcción de NavigationButton (dos líneas de 1px
 * rotadas ±45°) para que sea visualmente idéntica, en vez de un ícono
 * distinto que se parezca.
 *
 * Usa currentColor a propósito: TimelineNode ya define el color según
 * su estado (#421B1E cuando está en fill), así que la flecha hereda el
 * mismo contraste que tiene el año en un nodo activo.
 */
export default function TimelineNodeArrow() {
  return (
    <Box
      sx={{
        width: 28,
        height: 28,

        position: "relative",

        zIndex: 2,
      }}
    >
      <Box
        sx={{
          position: "absolute",

          width: 20,
          height: "1px",

          backgroundColor: "currentColor",

          top: 8,
          left: 6,

          transform: "rotate(45deg)",
        }}
      />

      <Box
        sx={{
          position: "absolute",

          width: 20,
          height: "1px",

          backgroundColor: "currentColor",

          top: 20,
          left: 6,

          transform: "rotate(-45deg)",
        }}
      />
    </Box>
  );
}