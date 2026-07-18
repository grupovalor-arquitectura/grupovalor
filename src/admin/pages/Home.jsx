import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

import { useProjects } from "../../context/ProjectsContext";

import HomeForm from "../components/home/HomeForm";
import updateHome from "../services/firestore/updateHome";

export default function Home() {
  const { home, reloadProjects } = useProjects();

  const [formData, setFormData] = useState(null);

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (home) {
      setFormData(home);
    }
  }, [home]);

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
      await updateHome(formData);

      await reloadProjects();

      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 2000);

    } finally {
      setSaving(false);
    }
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
    <HomeForm
      formData={formData}
      handleChange={handleChange}
      onSave={handleSave}
      saving={saving}
      saved={saved}
    />
  );
}