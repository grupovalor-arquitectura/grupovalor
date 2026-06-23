import { Box, Typography } from "@mui/material";
import { historyData } from "../../data/historyData";

export default function TimelineContent({
  activeMilestone,
}) {
  const milestone =
    historyData.milestones[
      activeMilestone
    ];

  return (
   <Box
     sx={{
        position: "absolute",
        top: "145vh",
        left: "50%",
        transform: "translateX(-50%)",
        width: 320,
        zIndex: 20,
    }}
        >
      <Typography
        sx={{
            fontSize: {
                xs: "2rem",
                md: "2rem",
            },

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

            maxWidth: 280,
            }}
        >
        {milestone.description}
      </Typography>
    </Box>
  );
}