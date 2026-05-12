import { Box } from "@mui/material";

export default function FeaturedProjectCard({ project }) {
  return (
    <Box
      sx={{
        width: "78vw",
        height: "78vh",

        flexShrink: 0,

        borderRadius: "24px",

        overflow: "hidden",

        position: "relative",

        backgroundColor: project.color,
      }}
    />
  );
}