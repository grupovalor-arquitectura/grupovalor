import { Box, Typography } from "@mui/material";

import { useParams } from "react-router-dom";
import useCompany from "../hooks/useCompany";
import { companyAssets } from "../data/companyAssets";

import CompanyLayout from "../components/company/CompanyLayout";
import CompanyHeader from "../components/company/CompanyHeader";
import CompanyHero from "../components/company/CompanyHero";
import ServicesSection from "../components/company/ServicesSection";
import LeadersSection from "../components/company/LeadersSection";
import Footer from "../components/Footer";

export default function CompanyPage() {
  const { slug } = useParams();

  const { company, loading, error } = useCompany(slug);

  if (loading) {
    return null;
  }

  if (error) {
    return <h1>Error cargando la empresa.</h1>;
  }

  if (!company) {
    return <h1>Empresa no encontrada.</h1>;
  }

  const assets = companyAssets[slug];

  const companyData = {
    ...company,
    ...assets,
  };

  console.log("Objeto:", company);

    for (const key of Object.keys(company)) {
      console.log(
        `Clave: >${key}<`,
        "Longitud:",
        key.length,
        "Valor:",
        company[key]
      );
    }

    console.log(company[" leaders"]);

  return (
    <CompanyLayout>
    <CompanyHeader branding={companyData.branding} />
    <CompanyHero company={companyData} />
    <ServicesSection company={companyData} />
    <LeadersSection company={companyData} />
    <Footer branding={companyData.branding} />
  </CompanyLayout>
  );
}