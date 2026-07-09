import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { getProjects } from "../services/projectsService";
import { getArchive } from "../services/archiveService";
import { getSiteConfig } from "../services/siteConfigService";


const ProjectsContext = createContext();

const PROJECTS_KEY = "gv_projects";
const ARCHIVE_KEY = "gv_archive";
const VERSION_KEY = "gv_site_version";

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [archiveProjects, setArchiveProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      

      try {
        // Leer cache
        const cachedProjects = localStorage.getItem(PROJECTS_KEY);
        const cachedArchive = localStorage.getItem(ARCHIVE_KEY);

        // Mostrar cache inmediatamente
        if (cachedProjects && cachedArchive) {
          setProjects(JSON.parse(cachedProjects));
          setArchiveProjects(JSON.parse(cachedArchive));
        }

      

        const siteConfig = await getSiteConfig();
       

        const currentVersion = String(siteConfig.version);
        const cachedVersion = localStorage.getItem(VERSION_KEY);

      

        if (
          cachedVersion === currentVersion &&
          cachedProjects &&
          cachedArchive
        ) {
       
          return;
        }

        const [projectsData, archiveData] = await Promise.all([
          getProjects(),
          getArchive(),
        ]);

       

        setProjects(projectsData);
        setArchiveProjects(archiveData);

        localStorage.setItem(
          PROJECTS_KEY,
          JSON.stringify(projectsData)
        );

        localStorage.setItem(
          ARCHIVE_KEY,
          JSON.stringify(archiveData)
        );

        localStorage.setItem(
          VERSION_KEY,
          currentVersion
        );

        

      } catch (error) {
        console.error("❌", error);
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
      const siteConfig = await getSiteConfig();
      const currentVersion = String(siteConfig.version);

      const [projectsData, archiveData] = await Promise.all([
        getProjects(),
        getArchive(),
      ]);

      setProjects(projectsData);
      setArchiveProjects(archiveData);

      localStorage.setItem(
        PROJECTS_KEY,
        JSON.stringify(projectsData)
      );

      localStorage.setItem(
        ARCHIVE_KEY,
        JSON.stringify(archiveData)
      );

      localStorage.setItem(
        VERSION_KEY,
        currentVersion
      );
    } catch (error) {
      console.error("Error recargando proyectos:", error);
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