import { Box } from "@mui/material";

import ProjectCard from "./ProjectCard";

import { useRef } from "react";



const ROW_HEIGHT = {
  xs: "auto",
  md: "clamp(420px, 42vw, 700px)",
  lg: "clamp(520px, 44vw, 820px)",
  xl: "clamp(620px, 46vw, 920px)",
};

export default function ProjectsGrid({
  projects = [],
}) {
  const rows = [];

  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }


  return (
    <Box
      
      sx={{
        px: { xs: 2, md: 7 },
        pb: { xs: 8, md: 12 },

        display: "flex",
        flexDirection: "column",
        
        minHeight: {
            xs: "60vh",
            md: "100vh",
            },

        gap: { xs: 6, md: 10 },
      }}
    >
      {rows.map((row, rowIndex) => {
        const reverse = rowIndex % 2 !== 0;

        return (
          <Box
            key={rowIndex}
            sx={{
              display: "flex",

              flexDirection: {
                xs: "column",
                md: "row",
              },

              alignItems: "stretch",

              gap: { xs: 6, md: 4 },

              height: ROW_HEIGHT,
            }}
          >
            {row.map((project, index) => {
              const flex =
                reverse
                  ? index === 0
                    ? 2
                    : 1
                  : index === 0
                  ? 1
                  : 2;

              return (
                <Box
                  key={project.id}
                  sx={{
                    flex,

                    display: "flex",

                    minHeight: 0,
                  }}
                >
                  <ProjectCard
                    project={project}
                  />
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
}