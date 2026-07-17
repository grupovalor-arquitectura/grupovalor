import { Box } from "@mui/material";
import { useRef } from "react";

import HistoryTimeline from "../components/history/HistoryTimeline";
import TimelineIntro from "../components/history/TimelineIntro";
import TimelineFuture from "../components/history/TimelineFuture";
import ConnectionTunnel from "../components/history/ConnectionTunnel";
import MobileMenu from "../components/MobileMenu";

import Header from "../components/Header";
import Footer from "../components/Footer";

import useMenu from "../hooks/useMenu";

const mobileMenuBranding = {
  background: "background.default",
};

export default function History() {
  const { isOpen, toggleMenu, closeMenu } = useMenu(false);

  const introRef = useRef(null);
  const historyStartRef = useRef(null);

  return (
    <>
      <Box
        sx={{
          px: { xs: 2, md: 7 },
          pt: { xs: 2, md: 5 },
        }}
      >
       {!isOpen && (
          <Header
            isOpen={isOpen}
            onMenuClick={toggleMenu}
          />
        )}

        <MobileMenu
          branding={mobileMenuBranding}
          isOpen={isOpen}
          onClose={closeMenu}
        />
      </Box>

      <HistoryTimeline
        startRef={historyStartRef}
      />

      <Footer />
    </>
  );
}