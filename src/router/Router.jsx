import { BrowserRouter, Routes, Route, } from "react-router-dom";



import SiteLayout from "../components/SiteLayout";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import History from "../pages/History";
import Contact from "../pages/Contact";
import About from "../pages/About"
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import CompanyPage from "../pages/CompanyPage";





export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* SITIO */}
        <Route path="/" element={<SiteLayout />}>

          {/* HOME */}
          <Route index element={<Home />}/>

          {/* PROYECTOS */}
          <Route path="proyectos" element={<Projects />}/>

          {/* DETALLE */}
          <Route path="proyectos/:slug" element={<ProjectDetail />}/>

            {/* EMPRESAS */}
          <Route path="empresas/:slug" element={<CompanyPage />}/>

          {/* HISTORIA */}
          <Route path="historia" element={<History />}/>

          {/* CONTACTO */}
          <Route path="contacto" element={<Contact />}/>

          {/* NOSOTROS */}
          <Route path="nosotros" element={<About />} />

          <Route path="terminos" element={<Terms />}/>

          <Route path="privacidad" element={<Privacy />}/>

   

        </Route>
      </Routes>
    </BrowserRouter>
  );
}