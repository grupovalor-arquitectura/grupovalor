import { useEffect } from "react";

import { useProjects } from "../../context/ProjectsContext";
import ProjectsTable from "../components/projects/ProjectsTable";

export default function Projects() {
  const { reloadProjects } = useProjects();

  useEffect(() => {
    reloadProjects();
  }, []);

  return <ProjectsTable />;
}