import { Box } from "@mui/material";

export default function LayoutBase({ header, main, footer }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100dvh",
        bgcolor: "#421b1e",
        color: "#bfafaa",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: { xs: "16px", md: "32px" },
        overflow: "hidden",
      }}
    >
      {header}

      {/* MAIN */}

      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        {main}
      </Box>

      {footer}
    </Box>
  );
}