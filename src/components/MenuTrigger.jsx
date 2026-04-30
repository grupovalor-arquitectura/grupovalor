import { Box } from "@mui/material";

export default function MenuTrigger({ icon, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        p: 1, // mejor área clickeable
      }}
    >
      {icon}
    </Box>
  );
}