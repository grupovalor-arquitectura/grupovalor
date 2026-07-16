import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "../components/navigation/Header";
import Sidebar from "../components/navigation/Sidebar";

export default function AdminLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "primary.main",
      }}
    >
      <Header />

      <Box
        sx={{
          flex: 1,
          display: "flex",
        }}
      >
        <Sidebar />

        <Box
          component="main"
          sx={{
            flex: 1,
            px: 8,
            py: 6,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}