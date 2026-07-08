import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { getProjects } from "../services/projectsService";
import { getArchive } from "../services/archiveService";


const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [archiveProjects, setArchiveProjects] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    async function loadProjects() {
        try {
        const [projectsData, archiveData] = await Promise.all([
            getProjects(),
            getArchive(),
        ]);

        setProjects(projectsData);
        setArchiveProjects(archiveData);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    loadProjects();
    }, []);

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    [projects]
  );

  const reloadProjects = async () => {
    setLoading(true);

    try {
        const [projectsData, archiveData] = await Promise.all([
        getProjects(),
        getArchive(),
        ]);

        setProjects(projectsData);
        setArchiveProjects(archiveData);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
    };


  const value = {
    projects,
    archiveProjects,
    featuredProjects,
    loading,
    reloadProjects,
  };

  
  return (
    <ProjectsContext.Provider value={value}>
        {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  return useContext(ProjectsContext);
}