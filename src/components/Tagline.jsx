import { Box, Typography } from "@mui/material";

export default function Tagline() {
  const lineStyle = {
    fontSize: "20px",
    fontWeight: 300,
    lineHeight: "1.2",
    color: "#d6cfc9",
    whiteSpace: "nowrap",
  };

  return (
    <Box
      sx={{
        
        textAlign: "right",
      }}
    >
      <Typography sx={lineStyle}>
        valor
      </Typography>

      <Typography sx={lineStyle}>
        más allá
      </Typography>

      <Typography sx={lineStyle}>
        del espacio
      </Typography>
    </Box>
  );
}