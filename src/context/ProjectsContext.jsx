import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { getProjects } from "../services/projectsService";

const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();

        setProjects(data);
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

  const value = {
    projects,
    featuredProjects,
    loading,
  };

  const reloadProjects = async () => {
    setLoading(true);

    const data = await getProjects();

    setProjects(data);

    setLoading(false);
    };

  return (
    <ProjectsContext.Provider 
    
    value={{
        projects,
        featuredProjects,
        loading,
        reloadProjects,
      }}>
        
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  return useContext(ProjectsContext);
}