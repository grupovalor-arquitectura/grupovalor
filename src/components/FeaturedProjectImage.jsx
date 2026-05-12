import { Box, Typography } from "@mui/material";

export default function FeaturedProjectImage({
  project,
  projectRef,
}) {
  return (
    <Box
      ref={projectRef}
      sx={{
        display: "flex",
        alignItems: "stretch",

        gap: "1.5vw",

        flexShrink: 0,

        // 🔥 ancho consistente
        width: "calc(58vw + 56px + 1.5vw)",
      }}
    >
      {/* META COLUMN */}
      <Box
        sx={{
          width: "56px",

          display: "flex",
          flexDirection: "column",

          justifyContent: "space-between",
          alignItems: "flex-end",

          height: "90vh",

          flexShrink: 0,
        }}
      >
        {/* NUMBER */}
        <Typography
          sx={{
            fontSize: "18px",
            lineHeight: 1,

            color: "#421b1e",
            fontWeight: 500,
          }}
        >
          {project.number}
        </Typography>

        {/* LABEL */}
        <Typography
          sx={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",

            fontSize: "18px",
            lineHeight: 1,
            fontWeight: 500,

            color: "#421b1e",

            letterSpacing: "0.02em",
          }}
        >
          {project.label}
        </Typography>
      </Box>

      {/* IMAGE */}
      <Box
        sx={{
          width: "58vw",
          height: "90vh",

          overflow: "hidden",

          flexShrink: 0,

          position: "relative",
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.label}
          sx={{
            width: "100%",
            height: "100%",

            objectFit: "cover",

            display: "block",

            transition:
              "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",

            transform: "scale(1)",

            willChange: "transform",

            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
      </Box>
    </Box>
  );
}