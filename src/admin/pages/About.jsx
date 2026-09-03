import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

import { useProjects } from "../../context/ProjectsContext";

import AboutForm from "../components/about/AboutForm";

import updateAbout from "../services/firestore/updateAbout";
import uploadImage from "../services/storage/uploadImage";
import saveWithVersion from "../../services/saveWithVersion";

import {
  defaultCertifications,
  defaultPartners,
} from "../../data/aboutDefaults";

// Si el logo de un aliado todavía no vive en Firebase Storage (por
// ejemplo, los aliados "de fábrica", cuyo logo hoy es un asset
// empaquetado por Vite), lo sube una sola vez y devuelve la URL de
// Storage. Así no dependemos de un nombre de archivo con hash que
// puede cambiar entre builds. Si ya es una URL de Storage, no hace
// nada.
async function ensureStorageLogo(logoUrl) {
  if (!logoUrl) return logoUrl;
  if (logoUrl.includes("firebasestorage.googleapis.com")) return logoUrl;

  const response = await fetch(logoUrl);
  const blob = await response.blob();
  const extension = blob.type.split("/")[1] || "png";
  const file = new File([blob], `logo.${extension}`, { type: blob.type });

  return uploadImage({ file, folder: "images/about/partners" });
}

export default function About() {
  const { about, reloadProjects } = useProjects();

  const [formData, setFormData] = useState(null);

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (about) {
      setFormData({
        ...about,
        // "certifications"/"partners" todavía no existen en
        // documentos viejos de Firestore — se precargan con lo que
        // ya está publicado hoy, para migrarlos con un solo guardado.
        certifications: about.certifications ?? defaultCertifications,
        partners: about.partners ?? defaultPartners,
      });
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

  const handleCertificationChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = structuredClone(prev);

      updated.certifications[index][field] = value;

      return updated;
    });
  };

  const handleAddCertification = () => {
    setFormData((prev) => ({
      ...prev,
      certifications: [
        ...(prev.certifications || []),
        { title: "", year: "" },
      ],
    }));
  };

  const handleRemoveCertification = (index) => {
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index),
    }));
  };

  const handlePartnerChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = structuredClone(prev);

      updated.partners[index][field] = value;

      return updated;
    });
  };

  const handleAddPartner = () => {
    setFormData((prev) => ({
      ...prev,
      partners: [
        ...(prev.partners || []),
        { name: "", url: "", logo: "" },
      ],
    }));
  };

  const handleRemovePartner = (index) => {
    setFormData((prev) => ({
      ...prev,
      partners: prev.partners.filter((_, i) => i !== index),
    }));
  };

  const handlePartnerLogoSelect = async (index, file) => {
    try {
      const imageUrl = await uploadImage({
        file,
        folder: "images/about/partners",
      });

      handlePartnerChange(index, "logo", imageUrl);
    } catch (error) {
      console.error("Error al subir el logo:", error);
    }
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
      // Antes de guardar, cualquier logo de aliado que todavía sea un
      // asset local (los "de fábrica") se sube a Firebase Storage.
      // Para los aliados agregados desde el panel esto no hace nada,
      // porque su logo ya es una URL de Storage.
      const migratedPartners = await Promise.all(
        (formData.partners || []).map(async (partner) => ({
          ...partner,
          logo: await ensureStorageLogo(partner.logo),
        }))
      );

      const dataToSave = {
        ...formData,
        partners: migratedPartners,
      };

      await saveWithVersion(() =>
        updateAbout(dataToSave)
      );

      await reloadProjects();

      setFormData(dataToSave);
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
      handleCertificationChange={handleCertificationChange}
      handleAddCertification={handleAddCertification}
      handleRemoveCertification={handleRemoveCertification}
      handlePartnerChange={handlePartnerChange}
      handleAddPartner={handleAddPartner}
      handleRemovePartner={handleRemovePartner}
      handlePartnerLogoSelect={handlePartnerLogoSelect}
    />
  );
}