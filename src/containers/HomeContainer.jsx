import { Box } from "@mui/material";

import LayoutBase from "../layouts/LayoutBase";
import Header from "../components/Header";
import FooterStatic from "../components/FooterStatic";
import FooterDynamic from "../components/FooterDynamic";

import useMenu from "../hooks/useMenu";

export default function HomeContainer() {
  const { isOpen, toggleMenu } = useMenu();

  return (
    <LayoutBase
      header={
        <Header
          onMenuClick={toggleMenu}
          isOpen={isOpen}
        />
      }

      main={
        <Box
          sx={{
            height: "220vh",
          }}
        />
      }

      footer={
        <Box>
          <FooterStatic />
          <FooterDynamic />
        </Box>
      }
    />
  );
}