import { Box } from "@mui/material";

import FeaturedProjectImage from "./FeaturedProjectImage";

import { featuredProjects } from "../data/featuredProjects";

export default function FeaturedProjectsTrack() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",

        gap: "4vw",

        pl: "4vw",
        pr: "20vw",

        width: "fit-content",
      }}
    >
      {featuredProjects.map((project) => (
        <FeaturedProjectImage
          key={project.id}
          project={project}
        />
      ))}
    </Box>
  );
}