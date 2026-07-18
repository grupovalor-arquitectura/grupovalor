import { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useProjects } from "../../context/ProjectsContext";

import FooterForm from "../components/footer/FooterForm";
import updateFooter from "../services/firestore/updateFooter";

export default function Footer() {
  const navigate = useNavigate();

  const { footer, reloadProjects } = useProjects();

  const [formData, setFormData] = useState(null);

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (footer) {
      setFormData(footer);
    }
  }, [footer]);

  const handleChange = (field, value) => {
    setFormData((prev) => {
      const updated = structuredClone(prev);

      const keys = field.split(".");
      let current = updated;

      while (keys.length > 1) {
        current = current[keys.shift()];
      }

      current[keys[0]] = value;

      return updated;
    });
  };

 const handleSave = async () => {
  setSaving(true);

    try {
      await updateFooter(formData);

      await reloadProjects();

      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 2000);

    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    navigate("/admin");
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
      <FooterForm
      formData={formData}
      handleChange={handleChange}
      onSave={handleSave}
      onCancel={handleCancel}
      saving={saving}
      saved={saved}
    />
  );
}