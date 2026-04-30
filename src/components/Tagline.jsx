import { Typography } from "@mui/material";

export default function Tagline({ text }) {
  return (
    <Typography
      sx={{
        fontSize: { xs: 14, md: 18 },
        lineHeight: 1.2,
      }}
    >
      {text}
    </Typography>
  );
}