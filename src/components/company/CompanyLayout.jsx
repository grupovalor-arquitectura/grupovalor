import { Box } from "@mui/material";

export default function CompanyLayout({ children }) {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
}