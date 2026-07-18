
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import { useProjects } from "../../context/ProjectsContext";
import saveProject from "../services/saveProject";

import ProjectForm from "../components/projects/ProjectForm";
import generateSlug from "../utils/generateSlug";

const emptyProject = {
  title: "",
  slug: "",
  id: 0,
  year: "",
  location: "",
  type: "",
  status: "",
  shortDescription: "",
  description: "",
  video: "",
  website: {
    label: "",
    url: "",
  },
  filters: [],
  gallery: [],
  coverImage: "",
  featured: false,
  order: 0,
};

export default function ProjectDetail() {

  const navigate = useNavigate();

  const location = useLocation();
  const { slug } = useParams();

  const isNew = location.pathname.endsWith("/new");

  const { projects, reloadProjects, } = useProjects();

  const project = isNew
    ? null
    : projects.find((item) => item.slug === slug);

  const [formData, setFormData] = useState(emptyProject);
  const [originalProject, setOriginalProject] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [saving, setSaving] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "title" && {
        slug: generateSlug(value),
      }),
    }));
  };

  const handleWebsiteChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      website: {
        ...prev.website,
        [field]: value,
      },
    }));
  };

  const handleCoverSelect = (file) => {
    setCoverFile(file);
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

    
      const updatedProject = await saveProject({
        isNew,
        originalProject: originalProject ?? emptyProject,
        project: {
          ...formData,
          slug: generateSlug(formData.title),
        },
        coverFile,
        galleryFiles,
      });

      await reloadProjects();

      setFormData(updatedProject);
      setCoverFile(null);
      setGalleryFiles([]);

      navigate("/admin/projects");
    } catch (error) {
      console.error("Error guardando proyecto:", error);
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    if (isNew) {
      setOriginalProject(emptyProject);
      setFormData(emptyProject);
    } else if (project) {
      setOriginalProject(project);
      setFormData(project);
    }
  }, [isNew, project]);

  return (
    <ProjectForm
      formData={formData}
      coverFile={coverFile}
      galleryFiles={galleryFiles}
      saving={saving}
      isNew={isNew}
      onChange={handleChange}
      onWebsiteChange={handleWebsiteChange}
      onCoverSelect={handleCoverSelect}
      onGallerySelect={handleGallerySelect}
      onSave={handleSave}
      onCancel={() => navigate("/admin/projects")}
      onDeleteGalleryImage={handleDeleteGalleryImage}
      onDeleteNewGalleryImage={handleDeleteNewGalleryImage}
    />
  );
}