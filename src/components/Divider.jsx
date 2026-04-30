import { Box } from "@mui/material";

export default function Divider({ orientation = "vertical", sx = {} }) {
  return (
    <Box
      sx={{
        width: orientation === "vertical" ? "1px" : "100%",
        height: orientation === "vertical" ? 24 : "1px",
        bgcolor: "primary.main",
        opacity: 0.3,
        alignSelf: "center",
        ...sx, // 👈 permite extender estilos desde afuera
      }}
    />
  );
}