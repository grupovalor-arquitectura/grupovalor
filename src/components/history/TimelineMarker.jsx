import { Box, Typography } from "@mui/material";
import TimelineNode from "./TimelineNode";

export default function TimelineMarker({
  milestone,
  active,
}) {
  return (
    <Box
      sx={{
        position: "relative",

        width: 280,
      }}
    >
      <TimelineNode
        label={milestone.year}
        active={active}
      />

      <Box
        sx={{
          width: "1px",

          height: 120,

          backgroundColor: "#C76A45",

          mx: "auto",

          mt: 2,
          mb: 3,
        }}
      />

      <Box>
        <Typography
          sx={{
            fontSize: "2rem",

            fontWeight: 700,

            lineHeight: 1.05,

            color: "#D9C8C5",

            mb: 2,
          }}
        >
          {milestone.title}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.9rem",

            lineHeight: 1.45,

            color: "#D9C8C5",
          }}
        >
          {milestone.description}
        </Typography>
      </Box>
    </Box>
  );
}