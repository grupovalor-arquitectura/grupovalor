import { Box, Typography } from "@mui/material";

export default function TimelineMilestoneMobile({
  milestone,
}) {
  if (!milestone) return null;

  return (
    <Box
      sx={{
        position: "relative",

        width: "100%",
        height: 480,

        mt: 0,

        backgroundImage: `url(${milestone.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        zIndex: 1,
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(66,27,30,0.45)",
        }}
      />

      {/* Contenido */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 2,

          left: 32,
          right: 32,
          bottom: 48,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#E8DDD8",
            fontWeight: 700,
            mb: 2,
          }}
        >
          {milestone.title}
        </Typography>

        <Typography
          sx={{
            color: "#E8DDD8",
            lineHeight: 1.7,
          }}
        >
          {milestone.description}
        </Typography>
      </Box>
    </Box>
  );
}