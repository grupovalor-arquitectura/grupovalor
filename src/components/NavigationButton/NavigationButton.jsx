import { Box } from "@mui/material";

export default function NavigationButton({
  direction = "next",
  onClick,
  disabled = false,
  sx = {},

}) {
  const isPrev =
    direction === "prev";

  return (
    <Box
      onClick={onClick}
      sx={{
        width: 84,
        height: 84,

        borderRadius: "50%",

        border: "1px solid #C76A45",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        cursor: "pointer",

        transition: "all .3s ease",

        "&:hover": {
          backgroundColor: "#C76A45",

          "& .arrow-line": {
            backgroundColor: "#421B1E",
          },

          transform: "scale(1.05)",

          opacity: disabled ? 0.3 : 1,

          pointerEvents:
            disabled
                ? "none"
                : "auto",
                
        },

        ...sx,
      }}
    >
      <Box
        sx={{
          width: 28,
          height: 28,

          position: "relative",

          transform: isPrev
            ? "rotate(180deg)"
            : "none",
        }}
      >
        <Box
          className="arrow-line"
          sx={{
            position: "absolute",

            width: 20,
            height: "1px",

            backgroundColor: "#C76A45",

            top: 8,
            left: 6,

            transform: "rotate(45deg)",

            transition: "all .3s ease",
          }}
        />

        <Box
          className="arrow-line"
          sx={{
            position: "absolute",

            width: 20,
            height: "1px",

            backgroundColor: "#C76A45",

            top: 20,
            left: 6,

            transform: "rotate(-45deg)",

            transition: "all .3s ease",
          }}
        />
      </Box>
    </Box>
  );
}