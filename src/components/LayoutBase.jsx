import { Box } from "@mui/material";

export default function LayoutBase({ header, main, footer }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100dvh",
        bgcolor: "background.default",
        color: "primary.main",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        px: { xs: 2, md: 4 },
        pt: { xs: 2, md: 4 },
        pb: 2, 
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