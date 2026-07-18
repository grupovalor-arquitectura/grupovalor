import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";


import { useProjects } from "../../context/ProjectsContext";
import { useNavigate } from "react-router-dom";

import saveArchive from "../services/saveArchive";
import ArchiveForm from "../components/archive/ArchiveForm";


const emptyArchive = {
  id: "",
  order: "",
  year: "",
  title: "",
  location: "",
  type: "",
  category: "",
  scale: "",
  gallery: [],
};

export default function ArchiveDetail() {

    const navigate = useNavigate();
    const { id } = useParams();

    const { archiveProjects, reloadProjects } = useProjects();

    const isNew = id === "new";

     const archive = archiveProjects.find(
        (item) => item.id === Number(id)
    );

    const [formData, setFormData] = useState(
        isNew ? emptyArchive : archive
    );

    const [originalArchive, setOriginalArchive] = useState(null);
    const [galleryFiles, setGalleryFiles] = useState([]);
    const [saving, setSaving] = useState(false);

    const handleChange = (field, value) => {
        setFormData((prev) => ({
        ...prev,
        [field]: value,
        }));
    };

    const handleGallerySelect = (files) => {
        setGalleryFiles((prev) => [...prev, ...files]);
        };

    const handleDeleteGalleryImage = (image) => {
        setFormData((prev) => ({
            ...prev,
             gallery: prev.gallery.filter((item) => item !== image),
        }));
    };

    const handleDeleteNewGalleryImage = (fileToDelete) => {
        setGalleryFiles((prev) =>
             prev.filter((file) => file !== fileToDelete)
        );
    };

    const handleSave = async () => {
        try {
            setSaving(true);

            await saveArchive({
            originalArchive,
            archive: formData,
            galleryFiles,
        });

            await reloadProjects();

             navigate("/admin/archive");
            } catch (error) {
                console.error(error);
            } finally {
                setSaving(false);
            }
    };

    useEffect(() => {
        if (isNew) {
            setOriginalArchive(emptyArchive);
            setFormData(emptyArchive);
        } else if (archive) {
            setOriginalArchive(archive);
            setFormData(archive);
        }
        }, [archive, isNew]);

   

  return (
    <ArchiveForm
        formData={formData}
        handleChange={handleChange}
        isNew={isNew}
        galleryFiles={galleryFiles}
        onGallerySelect={handleGallerySelect}
        onDeleteGalleryImage={handleDeleteGalleryImage}
        onDeleteNewGalleryImage={handleDeleteNewGalleryImage}
        onSave={handleSave}
        onCancel={() => navigate("/admin/archive")}
        />
  );
}