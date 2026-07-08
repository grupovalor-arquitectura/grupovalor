import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Header from "./Header";
import Footer from "./Footer";

export default function InnerPageLayout({
  children,
  headerBackground = "background.default",
}) {
  const theme = useTheme();

  const headerBranding =
    headerBackground === "primary.main"
      ? {
          text: theme.palette.background.default,
          background: theme.palette.primary.main,
        }
      : {
          text: theme.palette.primary.main,
          background: theme.palette.background.default,
        };

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
          px: { xs: 2, md: 7 },
          pt: { xs: 2, md: 5 },
          bgcolor: headerBackground,
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