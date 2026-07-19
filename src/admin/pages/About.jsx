import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

import { useProjects } from "../../context/ProjectsContext";

import AboutForm from "../components/about/AboutForm";

import updateAbout from "../services/firestore/updateAbout";
import uploadImage from "../services/storage/uploadImage";
import saveWithVersion from "../../services/saveWithVersion";

export default function About() {
  const { about, reloadProjects } = useProjects();

  const [formData, setFormData] = useState(null);

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (about) {
      setFormData(about);
    }
  }, [about]);

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

  const handleTeamChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = structuredClone(prev);

      updated.team[index][field] = value;

      return updated;
    });
  };

  const handleTeamIntroImageSelect = async (file) => {
    try {
        const imageUrl = await uploadImage({
            file,
            folder: "images/about/intro",
            });

            handleChange("teamIntro.image", imageUrl);
    } catch (error) {
        console.error("Error al subir la imagen:", error);
    }
    };

  const handleTeamImageSelect = async (index, file) => {
    try {
      const imageUrl = await uploadImage({
        file,
        folder: "images/about/team",
        });

        handleTeamChange(index, "image", imageUrl);
    } catch (error) {
        console.error("Error al subir la imagen:", error);
    }
    };

  const handleSave = async () => {
    setSaving(true);

    try {
      await saveWithVersion(() =>
        updateAbout(formData)
      );

      await reloadProjects();

      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 2000);

    } catch (error) {
      console.error(error);
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
    <AboutForm
      formData={formData}
      handleChange={handleChange}
      handleTeamChange={handleTeamChange}
      onSave={handleSave}
      saving={saving}
      saved={saved}
      handleTeamIntroImageSelect={handleTeamIntroImageSelect}
      handleTeamImageSelect={handleTeamImageSelect}
    />
  );
}