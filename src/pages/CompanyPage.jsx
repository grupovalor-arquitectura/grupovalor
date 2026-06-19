import { useParams } from "react-router-dom";
import { companiesData } from "../data/companiesData";
import { Box, Typography } from "@mui/material";

import CompanyLayout from "../components/company/CompanyLayout";
import CompanyHeader from "../components/company/CompanyHeader";
import CompanyHero from "../components/company/CompanyHero";
import ServicesSection from "../components/company/ServicesSection";
import LeadersSection from "../components/company/LeadersSection";
import Footer from "../components/Footer";

export default function CompanyPage() {
  const { slug } = useParams();

  const company = companiesData[slug];

  if (!company) {
    return <h1>Empresa no encontrada</h1>;
  }

  return (
    <CompanyLayout>
      <CompanyHeader branding={company.branding} />
      <CompanyHero company={company} />
      <ServicesSection company={company} />
      <LeadersSection company={company} />
      <Footer branding={company.branding} />
    </CompanyLayout>
  );
}