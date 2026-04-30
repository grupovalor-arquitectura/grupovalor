import { Box } from "@mui/material";

export default function LayoutBase({ header, visual, bottom }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        px: { xs: 2, md: 4 },
        pt: { xs: 2, md: 4 },
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