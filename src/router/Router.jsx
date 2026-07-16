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

import Login from "../admin/pages/Login";
import Dashboard from "../admin/pages/Dashboard";

import ProtectedRoute from "../admin/routes/ProtectedRoute";


export default function Router() {
return (
  <BrowserRouter>
    <Routes>
      {/* ===========================
          CMS
      =========================== */}

      <Route path="/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* ===========================
          SITIO
      =========================== */}

      <Route path="/" element={<SiteLayout />}>
        {/* HOME */}
        <Route index element={<Home />} />

        {/* PROYECTOS */}
        <Route path="proyectos" element={<Projects />} />

        {/* DETALLE */}
        <Route
          path="proyectos/:slug"
          element={<ProjectDetail />}
        />

        {/* EMPRESAS */}
        <Route
          path="empresas/:slug"
          element={<CompanyPage />}
        />

        {/* HISTORIA */}
        <Route path="historia" element={<History />} />

        {/* CONTACTO */}
        <Route path="contacto" element={<Contact />} />

        {/* NOSOTROS */}
        <Route path="nosotros" element={<About />} />

        {/* TÉRMINOS */}
        <Route path="terminos" element={<Terms />} />

        {/* PRIVACIDAD */}
        <Route path="privacidad" element={<Privacy />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
}