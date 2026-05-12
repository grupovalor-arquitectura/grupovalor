import { Box, Typography } from "@mui/material";

export default function FeaturedProjectImage({ project }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",

        gap: "1.5vw",

        flexShrink: 0,
      }}
    >
      {/* COLUMN */}
      <Box
        sx={{
          width: "48px",

          display: "flex",
          flexDirection: "column",
         
          justifyContent: "space-between",
          alignItems: "flex-end",

          height: "90vh",
        }}
      >
        {/* NUMBER */}
        <Typography
          sx={{
            fontSize: "2rem",
            lineHeight: 1,

            color: "#421b1e",
            fontWeight: 500,
          }}
        >
          {project.number}
        </Typography>

        {/* VERTICAL LABEL */}
        <Typography
          sx={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",

            fontSize: "1rem",
            lineHeight: 1,

            color: "#421b1e",

            letterSpacing: "0.02em",
          }}
        >
          {project.label}
        </Typography>
      </Box>

      {/* 🔥 IMAGE */}
      <Box
        sx={{
          width: "50vw",
          height: "90vh",

          overflow: "hidden",

          backgroundColor: project.color,

          flexShrink: 0,
        }}
      >
        {/* image later */}
      </Box>
    </Box>
  );
}