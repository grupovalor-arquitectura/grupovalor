import { Box } from "@mui/material";
import Tagline from "./Tagline";
import MenuTrigger from "./MenuTrigger";
import BottomMenuIcon from "./BottomMenuIcon";
import BottomMenuItems from "./BottomMenuItems";
import Divider from "./Divider";

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
        alignItems: "center",
        pb: { xs: 2, md: 4 },
        gap: 4,
    }}
    >
    {/* GRUPO IZQUIERDA (icono + divider) */}
    <Box
        sx={{
        display: "flex",
        alignItems: "center",
        gap: 3, // 👈 gap ENTRE icono y divider
        }}
    >
        <MenuTrigger
        onClick={onMenuClick}
        icon={<BottomMenuIcon isOpen={isOpen} />}
        />

        {isOpen && <Divider />}
    </Box>

    {/* CONTENIDO DERECHO */}
    {isOpen ? (
        <BottomMenuItems />
    ) : (
        <Tagline text={tagline} />
    )}
    </Box>
  );
}