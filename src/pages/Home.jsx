import HomeContainer from "../containers/HomeContainer";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        rawTitle="Grupo Valor | Arquitectura, construcción y gestión inmobiliaria – Colombia"
        description="Grupo Valor es un grupo empresarial dedicado al desarrollo de proyectos inmobiliarios en Colombia, con empresas especializadas en arquitectura, construcción, banca, estrategia y promoción."
        path="/"
      />
      <HomeContainer />
    </>
  );
}