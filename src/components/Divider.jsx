import { Box } from "@mui/material";

export default function Divider({ orientation = "vertical" }) {
  return (
    <Box
      sx={{
        ...(orientation === "vertical"
          ? {
              width: "1px",
              height: 40, // 👈 CLAVE
            }
          : {
              height: "1px",
              width: "100%",
            }),

        bgcolor: "primary.main",
        alignSelf: "center", // 👈 centra con icono
      }}
    />
  );
}