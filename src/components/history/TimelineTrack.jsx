import { Box } from "@mui/material";
import { useRef } from "react";

import TimelineNode from "./TimelineNode";

export default function TimelineTrack({ nodeRef }) {

  return (
    <Box
      sx={{
        position: "relative",

        width: "100%",
        height: "100vh",
      }}
    >
      {/* línea */}

      <Box
        sx={{
          position: "absolute",
          top: "33vh",
          left: 0,
          width: "100%",
          borderTop: "1px solid #C76A45",
        }}
      />

      {/* nodo */}

      <Box
        ref={nodeRef}
        sx={{
          position: "absolute",
          top: "calc(33vh - 42px)",
          left: "32%",
        }}
      >
        <TimelineNode
          label="1984"
          active
        />
      </Box>
    </Box>
  );
}