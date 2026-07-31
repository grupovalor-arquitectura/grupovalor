import { Box, Typography } from "@mui/material";

export default function AboutIntro({ title, description }) {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "background.default",

        px: {
          xs: 4,
          md: 8,
        },

        py: {
          xs: 10,
          md: 14,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: 760,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "background.default",
            mb: 4,
            lineHeight: 1,
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "background.default",
            opacity: 0.9,
            lineHeight: 1.8,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}