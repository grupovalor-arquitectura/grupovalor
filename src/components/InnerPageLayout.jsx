import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

import Header from "./Header";
import Footer from "./Footer";

export default function InnerPageLayout({
  children,
  headerBackground = "background.default",
  overlayHeader = false,
}) {
  const theme = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const headerBranding = overlayHeader
  ? {
      text: theme.palette.primary.main,
       background: theme.palette.background.default,
      activeText: theme.palette.background.default,
    }
  : {
      text: theme.palette.background.default,
      background: theme.palette.primary.main,
      activeText: theme.palette.primary.main,
    };

    const mobileMenuBranding = {
        background: theme.palette.background.default,
        
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

          zIndex: 1,

          px: { xs: 2, md: 7 },
          pt: { xs: 2, md: 5 },

          bgcolor: overlayHeader
            ? "transparent"
            : headerBackground,
        }}
      >
        <Header
          branding={headerBranding}
          isOpen={isMenuOpen}
          onMenuClick={handleMenuClick}
        />
      </Box>

      {/* MOBILE MENU */}
      <MobileMenu
         branding={mobileMenuBranding}
        onClose={() => setIsMenuOpen(false)}
        isOpen={isMenuOpen}
      />

      {/* CONTENT */}
      <Box sx={{ flex: 1 }}>
        {children}
      </Box>

      {/* FOOTER */}
      <Footer />
    </Box>
  );
}