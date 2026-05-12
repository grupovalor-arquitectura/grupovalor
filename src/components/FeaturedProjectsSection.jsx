import { Box } from "@mui/material";

import FeaturedProjectsTrack from "./FeaturedProjectsTrack";
import FeaturedProjectInfo from "./FeaturedProjectInfo";

export default function FeaturedProjectsSection() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "320vh",
      }}
    >
      {/* VIEWPORT */}
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
        {/* 🔥 LAYOUT */}
        <Box
          sx={{
            width: "100%",

            display: "grid",
            gridTemplateColumns: "28vw 1fr",

            alignItems: "center",
          }}
        >
          {/* INFO FIJA */}
          <FeaturedProjectInfo />

          {/* TRACK */}
          <FeaturedProjectsTrack />
        </Box>
      </Box>
    </Box>
  );
}