import { Box } from "@mui/material";

import FeaturedProjectsTrack from "./FeaturedProjectsTrack";
import FeaturedProjectInfo from "./FeaturedProjectInfo";

export default function FeaturedProjectsSection({
  sectionRef,
  currentIndex,
  activeProject,
}) {
  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        height: "320vh",
      }}
    >
      {/* STICKY VIEWPORT */}
      <Box
        sx={{
          position: "sticky",
          
          top: 0,

          width: "100%",
          height: "100vh",

          overflow: "hidden",

          backgroundColor: "#d6cfc9",

          display: "flex",
          alignItems: "center",
        }}
      >
        {/* GRID LAYOUT */}
        <Box
          sx={{
            width: "100%",

            display: "grid",

            gridTemplateColumns: "28vw 1fr",

            alignItems: "center",
          }}
        >
          {/* FIXED PANEL */}
          <FeaturedProjectInfo
            project={activeProject}
            currentIndex={currentIndex}
          />

          {/* TRACK VIEWPORT */}
          <Box
            sx={{
              position: "relative",

              width: "100%",
              minWidth: 0,

              height: "100%",

              overflow: "hidden",

              display: "flex",
              alignItems: "center",
            }}
          >
            <FeaturedProjectsTrack
              currentIndex={currentIndex}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}