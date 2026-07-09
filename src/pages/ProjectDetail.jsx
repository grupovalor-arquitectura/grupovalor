import { useMemo } from "react";
import { useParams } from "react-router-dom";

import InnerPageLayout from "../components/InnerPageLayout";

import ProjectHero from "../components/ProjectDetail/ProjectHero";
import ProjectInfo from "../components/ProjectDetail/ProjectInfo";
import ProjectGallery from "../components/ProjectDetail/ProjectGallery";
import ProjectNavigation from "../components/ProjectDetail/ProjectNavigation";

import { useProjects } from "../context/ProjectsContext";

export default function ProjectDetail() {
  const { slug } = useParams();

  const { projects, loading } = useProjects();

  const project = useMemo(
    () =>
      projects.find(
        (item) => item.slug === slug
      ),
    [projects, slug]
  );

  if (loading || !project) return null;

  return (
    <InnerPageLayout
      overlayHeader
      headerBackground="primary.main"
    >
      <ProjectHero project={project} />

      <ProjectInfo project={project} />

      <ProjectGallery project={project} />

      <ProjectNavigation project={project} />
    </InnerPageLayout>
  );
}