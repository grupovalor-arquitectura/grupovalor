import {
  Box,
  Typography,
} from "@mui/material";

import ChipButton from "../ui/ChipButton";
import useAuth from "../../hooks/useAuth";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <Box
      sx={{
        height: 90,

        px: 6,

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        borderBottom: "1px solid",

        borderColor: "background.default",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "background.default",
        }}
      >
        Dashboard
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography
          sx={{
            color: "background.default",
          }}
        >
          {user?.email}
        </Typography>

        <ChipButton
          label="Salir"
          onClick={logout}
        />
      </Box>
    </Box>
  );
}