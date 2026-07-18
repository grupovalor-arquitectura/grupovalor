import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";



// ===========================
// SITIO
// ===========================

import SiteLayout from "../components/SiteLayout";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import History from "../pages/History";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import CompanyPage from "../pages/CompanyPage";


// ===========================
// CMS
// ===========================

import Login from "../admin/pages/Login";
import Dashboard from "../admin/pages/Dashboard";
import ProjectsAdmin from "../admin/pages/Projects";
import ProjectDetailAdmin from "../admin/pages/ProjectDetail";
import Archive from "../admin/pages/Archive";
import ArchiveDetail from "../admin/pages/ArchiveDetail"
import Companies from "../admin/pages/Companies";
import HomeAdmin from "../admin/pages/Home";
import FooterAdmin from "../admin/pages/Footer";
import CompanyDetail from "../admin/pages/CompanyDetail";
import AboutAdmin from "../admin/pages/About"


import AdminLayout from "../admin/layouts/AdminLayout";
import ProtectedRoute from "../admin/routes/ProtectedRoute";
import ScrollManager from "./ScrollManager";

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollManager />
        <Routes>

        {/* ===========================
            LOGIN
        =========================== */}

        <Route path="/login" element={<Login />} />

        {/* ===========================
            CMS
        =========================== */}

        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/admin"
            element={<Dashboard />}
          />

          <Route
            path="/admin/projects"
            element={<ProjectsAdmin />}
          />

          <Route
            path="/admin/projects/new"
            element={<ProjectDetailAdmin />}
          />

          <Route
            path="/admin/projects/:slug"
            element={<ProjectDetailAdmin />}
          />

          <Route
            path="/admin/archive"
            element={<Archive />}
          />

          <Route
            path="/admin/archive/:id"
            element={<ArchiveDetail />}
          />

          <Route
            path="/admin/archive/new"
            element={<ArchiveDetail />}
          />

          <Route
            path="/admin/companies"
            element={<Companies />}
          />

          <Route
            path="/admin/companies/:slug"
            element={<CompanyDetail />}
          />

          <Route
            path="/admin/about"
            element={<AboutAdmin />}
          />

          <Route
            path="/admin/home"
            element={<HomeAdmin />}
          />

          <Route
            path="/admin/footer"
            element={<FooterAdmin />}
          />
        </Route>

        {/* ===========================
            SITIO
        =========================== */}

        <Route
          path="/"
          element={<SiteLayout />}
        >
          <Route
            index
            element={<Home />}
          />

          <Route
            path="proyectos"
            element={<Projects />}
          />

          <Route
            path="proyectos/:slug"
            element={<ProjectDetail />}
          />

          <Route
            path="empresas/:slug"
            element={<CompanyPage />}
          />

          <Route
            path="historia"
            element={<History />}
          />

          <Route
            path="contacto"
            element={<Contact />}
          />

          <Route
            path="nosotros"
            element={<About />}
          />

          <Route
            path="terminos"
            element={<Terms />}
          />

          <Route
            path="privacidad"
            element={<Privacy />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}