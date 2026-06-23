import { Box } from "@mui/material";

import HistoryTimeline from "../components/history/HistoryTimeline";
import Header from "../components/Header";
import Footer from "../components/Footer"

import useMenu from "../hooks/useMenu";


export default function History() {

  const { isOpen, toggleMenu } = useMenu(false);

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

      <HistoryTimeline />

      <Footer />
    </>
}