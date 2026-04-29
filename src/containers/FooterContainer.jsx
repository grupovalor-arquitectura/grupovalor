import LayoutBase from "../components/LayoutBase"
import FooterStatic from "../components/FooterStatic"
import { Box } from "@mui/material";


export default function FooterContainer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        bgcolor: "background.default", 
      }}
    >
      <FooterStatic />
    </Box>
  );
}