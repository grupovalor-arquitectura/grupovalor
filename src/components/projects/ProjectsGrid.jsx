import { useRef } from "react";
import { Box } from "@mui/material";

import DesktopProjectCard from "./DesktopProjectCard";

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
        px: 7,
        pb: 12,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        gap: 10,
      }}
    >
      {rows.map((row, rowIndex) => {

        const reverse = rowIndex % 2 !== 0;

        return (
          <Box
            key={rowIndex}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              gap: 4,
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
                  <DesktopProjectCard
                    project={project}
                    cardNumber={rowIndex * 2 + index + 1}
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