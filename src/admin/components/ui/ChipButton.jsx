import { Box, Typography } from "@mui/material";
import { useState } from "react";

export default function ChipButton({
  label,
  onClick,
  active = false,
  disabled = false,
  sx = {},
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        px: "28px",
        py: "10px",

        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",

        borderRadius: "999px",

        border: "1px solid",
        borderColor: "background.default",

        bgcolor:
          active || hovered
            ? "background.default"
            : "transparent",

        cursor: disabled ? "default" : "pointer",

        transition: "all .25s ease",

        opacity: disabled ? 0.5 : 1,

        userSelect: "none",

        ...sx,
      }}
    >
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: "0.06em",

          color:
            active || hovered
              ? "primary.main"
              : "background.default",

          transition: "color .25s ease",

          textTransform: "uppercase",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}