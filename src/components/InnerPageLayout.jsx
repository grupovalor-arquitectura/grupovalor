import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Header from "./Header";
import Footer from "./Footer";

export default function InnerPageLayout({
  children,
  headerBackground = "background.default",
  overlayHeader = false,
}) {
  const theme = useTheme();

  const headerBranding = overlayHeader
  ? {
      text: theme.palette.primary.main,
      background: "transparent",
      activeText: theme.palette.background.default,
    }
  : {
      text: theme.palette.background.default,
      background: theme.palette.primary.main,
      activeText: theme.palette.primary.main,
    };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          position: overlayHeader ? "absolute" : "relative",
          top: 0,
          left: 0,
          width: "100%",

          zIndex: 100,

          px: { xs: 2, md: 7 },
          pt: { xs: 2, md: 5 },

          bgcolor: overlayHeader
            ? "transparent"
            : headerBackground,
        }}
      >
        <Header branding={headerBranding} />
      </Box>

      {/* CONTENT */}
      <Box sx={{ flex: 1 }}>
        {children}
      </Box>

      {/* FOOTER */}
      <Footer />
    </Box>
  );
}