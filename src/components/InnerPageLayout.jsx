import { Box } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

export default function InnerPageLayout({
  content,
}) {
  return (
    <Box
      sx={{
        minHeight: "100vh",

        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          px: { xs: 2, md: 4 },
          pt: { xs: 2, md: 4 },
        }}
      >
        <Header />
      </Box>

      {/* CONTENT */}
      <Box sx={{ flex: 1 }}>
        {content}
      </Box>

      {/* FOOTER */}
      <Footer />
    </Box>
  );
}