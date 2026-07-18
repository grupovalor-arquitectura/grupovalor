import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NavItem({
  label,
  to,
}) {
  return (
    <NavLink
      to={to}
      style={{
        textDecoration: "none",
      }}
    >
      {({ isActive }) => (
        <Box
          sx={{
            px: 4,
            py: 2,

            cursor: "pointer",

            transition: ".25s",

            bgcolor: isActive
              ? "background.default"
              : "transparent",

            "&:hover": {
              bgcolor: "background.default",
            },

            "&:hover .label": {
              color: "primary.main",
            },
          }}
        >
          <Typography
            className="label"
            sx={{
              color: isActive
                ? "primary.main"
                : "background.default",

              fontWeight: isActive
                ? 600
                : 400,

              transition: ".25s",
            }}
          >
            {label}
          </Typography>
        </Box>
      )}
    </NavLink>
  );
}