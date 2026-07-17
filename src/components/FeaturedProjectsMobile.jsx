import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjectsMobile({
  projects,
}) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        px: 2,
        py: 8,
        bgcolor: "primary.main",
        minHeight: "100vh",
      }}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          cardNumber={index + 1}
          showDivider={index < projects.length - 1}
        />
      ))}
    </Box>
  );
}