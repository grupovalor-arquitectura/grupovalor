import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { useProjects } from "../../context/ProjectsContext";

import CompanyForm from "../components/companies/CompanyForm";
import updateCompany from "../services/firestore/updateCompany";
import saveWithVersion from "../../services/saveWithVersion";

export default function CompanyDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { companies, reloadProjects } = useProjects();

  const [formData, setFormData] = useState(null);

   useEffect(() => {
    const company = companies.find(
      (item) => item.slug === slug
    );


    if (company) {
      setFormData(company);
    }
  }, [companies, slug]);


  const handleChange = (field, value) => {
    setFormData((prev) => {
      const updated = { ...prev };

      if (field.includes(".")) {
        const [parent, child] = field.split(".");

        updated[parent] = {
          ...updated[parent],
          [child]: value,
        };
      } else {
        updated[field] = value;
      }

      return updated;
    });
  };

  const handleSave = async () => {
    
    await saveWithVersion(() =>
      updateCompany(formData)
    );


    await reloadProjects();

    navigate("/admin/companies");
    };

  const handleCancel = () => {
    navigate("/admin/companies");
  };

  if (!formData) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 10,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  
  return (
    <CompanyForm
      formData={formData}
      handleChange={handleChange}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
}