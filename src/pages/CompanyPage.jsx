import { Box, Typography } from "@mui/material";
import { useState } from "react";

import { useParams } from "react-router-dom";
import useCompany from "../hooks/useCompany";
import { companyAssets } from "../data/companyAssets";

import CompanyLayout from "../components/company/CompanyLayout";
import Header from "../components/Header";
import CompanyHero from "../components/company/CompanyHero";
import ServicesSection from "../components/company/ServicesSection";
import LeadersSection from "../components/company/LeadersSection";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

export default function CompanyPage() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setIsMenuOpen((prev) => !prev);
    };

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


  return (

    <CompanyLayout>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1500,
          px: {
            xs: 3,
            md: 7,
          },
          py: {
            xs: 2,
            md: 5,
          },
        }}
      >
        <Header
          branding={companyData.branding}
          isOpen={isMenuOpen}
          onMenuClick={handleMenuClick}
        />
      </Box>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        branding={companyData.branding}
      />

      <CompanyHero company={companyData} />
      <ServicesSection company={companyData} />
      <LeadersSection company={companyData} />
      <Footer branding={companyData.branding} />

    </CompanyLayout>
  );
}