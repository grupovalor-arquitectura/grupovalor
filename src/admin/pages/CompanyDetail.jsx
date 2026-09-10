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

  // =======================================================
  // SERVICIOS
  // =======================================================

  const handleServiceChange = (index, field, value) => {
    setFormData((prev) => {
      const services = [...(prev.services || [])];

      services[index] = {
        ...services[index],
        [field]: value,
      };

      return { ...prev, services };
    });
  };

  const handleAddService = () => {
    setFormData((prev) => ({
      ...prev,
      services: [
        ...(prev.services || []),
        {
          id: crypto.randomUUID(),
          title: "",
          description: "",
        },
      ],
    }));
  };

  const handleRemoveService = (index) => {
    setFormData((prev) => {
      const services = [...(prev.services || [])];
      services.splice(index, 1);
      return { ...prev, services };
    });
  };

  // =======================================================
  // LÍDERES
  // =======================================================

  const handleLeaderChange = (index, field, value) => {
    setFormData((prev) => {
      const leaders = [...(prev.leaders || [])];

      leaders[index] = {
        ...leaders[index],
        [field]: value,
      };

      return { ...prev, leaders };
    });
  };

  const handleAddLeader = () => {
    setFormData((prev) => ({
      ...prev,
      leaders: [
        ...(prev.leaders || []),
        {
          id: crypto.randomUUID(),
          name: "",
          role: "",
          quote: "",
        },
      ],
    }));
  };

  const handleRemoveLeader = (index) => {
    setFormData((prev) => {
      const leaders = [...(prev.leaders || [])];
      leaders.splice(index, 1);
      return { ...prev, leaders };
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
      onServiceChange={handleServiceChange}
      onAddService={handleAddService}
      onRemoveService={handleRemoveService}
      onLeaderChange={handleLeaderChange}
      onAddLeader={handleAddLeader}
      onRemoveLeader={handleRemoveLeader}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
}