import LayoutBase from "../components/LayoutBase";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
            <div>
            {/* placeholder visual del centro */}
            </div>
        }
        footer={
            <Footer 
                brand={data.brand} 
                tagline={data.tagline} 
            />
        }
    />
  );
}