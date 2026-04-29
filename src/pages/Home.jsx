import LayoutBase from "../components/LayoutBase";
import Header from "../components/Header";
import FooterContainer from "../containers/FooterContainer";
import { Box } from "@mui/material";

import useMenu from "../hooks/useMenu";

export default function HomeContainer() {

  const { isOpen, toggleMenu } = useMenu();

  const data = {
    title: "GrupoValor",
    brand: "gv°",
    tagline: (
      <>
        valor <br />
        más allá <br />
        del espacio
      </>
    ),
  };

  return (
    <LayoutBase 
    
        header={
            <Header
                title={data.title}
                isOpen={isOpen}
                onMenuClick={toggleMenu}
            />}
        main={
            <Box
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
        }
        footer={<FooterContainer />}
    />
  );
}