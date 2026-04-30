import { Box, Divider } from "@mui/material";
import Tagline from "./Tagline";
import MenuTrigger from "./MenuTrigger";
import BottomMenuIcon from "./BottomMenuIcon";
import BottomMenuItems from "./BottomMenuItems";

export default function BottomBar({ 
    tagline, 
    isOpen, 
    onMenuClick 
}) {

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
        {/* MENU TRIGGER (derecha) */}
      <MenuTrigger
        onClick={onMenuClick}
        icon={<BottomMenuIcon isOpen={isOpen} />}
      />

      {/* CONTENIDO DINÁMICO */}
      {isOpen ? (
        <>
          {/* DIVIDER */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: "rgba(255,255,255,0.3)",
            }}
          />

          {/* BOTONES */}
          <BottomMenuItems />
        </>
      ) : (
        <Tagline text={tagline} />
      )}
      
    </Box>
  );
}