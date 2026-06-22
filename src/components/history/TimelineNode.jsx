import { Box, Typography } from "@mui/material";

export default function TimelineNode({
  label,
  active = false,
}) {
  return (
    <Box
      sx={{
        width: 84,
        height: 84,

        borderRadius: "50%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        border: "1px solid #C76A45",

        backgroundColor: active
          ? "#C76A45"
          : "transparent",

        color: active
          ? "#421B1E"
          : "#C76A45",

        fontWeight: 700,

        position: "relative",
        zIndex: 2,
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}