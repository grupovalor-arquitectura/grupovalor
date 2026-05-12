import { Box } from "@mui/material";
import Tagline from "./Tagline";
import MenuTrigger from "./MenuTrigger";
import BottomMenuIcon from "./BottomMenuIcon";
import BottomMenuItems from "./BottomMenuItems";
import Divider from "./Divider";

export default function BottomBar({ active, onSelect, isOpen, onMenuClick, isReady}) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        pb: { xs: 2, md: 4 },
      }}
    >
      {/* IZQUIERDA */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <MenuTrigger
          onClick={onMenuClick}
          icon={<BottomMenuIcon isOpen={isOpen} />}
        />

        <Box
          sx={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.4s ease",
          }}
        >
          {/* 🔥 usa el onSelect del padre */}
          <BottomMenuItems 
            onSelect={onSelect} 
            isReady={isReady}
          />
        </Box>
      </Box>

      {/* DERECHA */}
      <Box sx={{ textAlign: "right" }}>
        <Tagline active={active} />
      </Box>
    </Box>
  );
}