import { Box } from "@mui/material";
import { useRef } from "react";

import HistoryTimeline from "../components/history/HistoryTimeline";
import TimelineIntro from "../components/history/TimelineIntro";
import TimelineFuture from "../components/history/TimelineFuture";
import ConnectionTunnel from "../components/history/ConnectionTunnel";

import Header from "../components/Header";
import Footer from "../components/Footer"

import useMenu from "../hooks/useMenu";


export default function History() {

  const { isOpen, toggleMenu } = useMenu(false);

  const introRef = useRef(null);
  const historyStartRef = useRef(null);

  return  <>
      <Box
        sx={{
          px: { xs: 2, md: 7 },
          pt: { xs: 2, md: 5 },
        }}
      >
        <Header
          onMenuClick={toggleMenu}
          isOpen={isOpen}
        />
      </Box>

      <HistoryTimeline
        startRef={historyStartRef}
      />


      <Footer />
    </>
}