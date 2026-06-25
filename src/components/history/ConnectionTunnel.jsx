import { useRef } from "react";
import { Box } from "@mui/material";

import useTunnel from "../../hooks/useTunnel";
import TimelineTunnel from "./TimelineTunnel";

export default function ConnectionTunnel({
  startRef,
  endRef,
}) {
  const sectionRef = useRef(null);

  const {
    circles,
    visibleCircles,
  } = useTunnel({
    startRef,
    endRef,
    triggerRef: sectionRef,
  });

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "32%",
          top: 0,

          width: 84,
          height: "100%",
        }}
      >
        <TimelineTunnel
          circles={circles}
          visibleCircles={visibleCircles}
        />
      </Box>
    </Box>
  );
}