import { Box, Typography } from "@mui/material";

export default function FeaturedProjectInfo({
  project,
}) {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "90vh",
      }}
    >
      {/* TOP */}
      <Box>
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: 1,

            color: "#421b1e",
            fontWeight: 700,
          }}
        >
          {project.title}
        </Typography>
      </Box>

      {/* BOTTOM */}
      <Box>
        <Typography
          sx={{
            color: "#421b1e",
            fontSize: "14px",
            lineHeight: 1.7,
            maxWidth: "320px",
          }}
        >
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
}