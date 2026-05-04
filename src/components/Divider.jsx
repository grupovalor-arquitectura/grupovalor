import { Box } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

export default function Divider({ orientation = "vertical", sx = {} }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: orientation === "vertical" ? "0.75px" : "100%",
        height: orientation === "vertical" ? 24 : "1px",

        // 🔥 color controlado sin opacity
        bgcolor: theme.palette.primary.main,

        alignSelf: "center",

        ...sx,
      }}
    />
  );
}