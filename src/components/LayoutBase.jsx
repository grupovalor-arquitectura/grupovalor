import { Box } from "@mui/material";

export default function LayoutBase({ header, visual, bottom, footer}) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        px: { xs: 2, md: 7 },
        pt: { xs: 2, md: 5 },
      }}
    >
      {header}

      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {visual}
      </Box>

      {bottom}
    </Box>
  );
}