import GVIcon from "../../assets/GVIcon.svg?react";
import HeaderMenuItems from "../HeaderMenuItems";

import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

export default function CompanyHeader({ branding }) {
  const theme = useTheme();
  const [active, setActive] = useState(null);

  return (
    <Box
      sx={{
        width: "100%",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        px: {
          xs: 3,
          md: 7,
        },

        py: {
          xs: 2,
          md: 5,
        },

        position: "absolute",
        top: 0,
        left: 0,

        zIndex: 100,
      }}
    >
      {/* LOGO */}

      <Box
        component={Link}
        to="/"
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <GVIcon
          style={{
            height: window.innerWidth < 900 ? 30 : 42,
            width: "auto",
            color:
              branding?.text ??
              theme.palette.primary.main,
          }}
        />
      </Box>

      {/* MENU (solo escritorio) */}

      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <HeaderMenuItems
          branding={branding}
          active={active}
          onSelect={setActive}
        />
      </Box>
    </Box>
  );
}