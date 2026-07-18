import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ArchiveTable from "../components/archive/ArchiveTable";

export default function Archive() {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mb: 6,
        }}
      >
        <Button
          variant="contained"
          onClick={() => navigate("/admin/archive/new")}
        >
          Nuevo registro
        </Button>
      </Box>

      <ArchiveTable />
    </Box>
  );
}