import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";



import { getProjects } from "../services/projectsService";
import { getSiteConfig } from "../services/siteConfigService";
import { getCompanies } from "../services/companiesService";
import { getHomeContent } from "../services/homeService";
import { getAboutContent } from "../services/aboutService";
import { getFooter } from "../services/footerService";


const ProjectsContext = createContext();

const PROJECTS_KEY = "gv_projects";
const VERSION_KEY = "gv_site_version";
const COMPANIES_KEY = "gv_companies";

const HOME_KEY = "gv_home";
const ABOUT_KEY = "gv_about";
const FOOTER_KEY = "gv_footer";

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [companies, setCompanies] = useState([]);

  const [home, setHome] = useState(null);
  const [about, setAbout] = useState(null);
  const [footer, setFooter] = useState(null);
  
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadProjects() {
      

      try {
        // Leer cache
        const cachedProjects = localStorage.getItem(PROJECTS_KEY);
        const cachedCompanies = localStorage.getItem(COMPANIES_KEY);

        const cachedHome = localStorage.getItem(HOME_KEY);
        const cachedAbout = localStorage.getItem(ABOUT_KEY);
        const cachedFooter = localStorage.getItem(FOOTER_KEY);

        // Cada pieza se hidrata de forma independiente, sin depender de
        // que las demás keys también existan.
        if (cachedProjects) setProjects(JSON.parse(cachedProjects));
        if (cachedCompanies) setCompanies(JSON.parse(cachedCompanies));
        if (cachedHome) setHome(JSON.parse(cachedHome));
        if (cachedAbout) setAbout(JSON.parse(cachedAbout));
        if (cachedFooter) setFooter(JSON.parse(cachedFooter));

        const hasAnyCache = Boolean(
          cachedProjects ||
            cachedCompanies ||
            cachedHome ||
            cachedAbout ||
            cachedFooter
        );

        const hasFullCache = Boolean(
          cachedProjects &&
            cachedCompanies &&
            cachedHome &&
            cachedAbout &&
            cachedFooter
        );

        // Mostrar cache inmediatamente (lo que exista)
        if (hasAnyCache) {
          setLoading(false);
        }
       
       
        const siteConfig = await getSiteConfig();
        const currentVersion = String(siteConfig.version);
        const cachedVersion = localStorage.getItem(VERSION_KEY);

        
       if (cachedVersion === currentVersion && hasFullCache) {
          setLoading(false);
          return;
        }

       const [
          companiesData,
          homeData,
          footerData,
        ] = await Promise.all([
          getCompanies(),
          getHomeContent(),
          getFooter(),
        ]);

        setCompanies(companiesData);
        setHome(homeData);
        setFooter(footerData);

        if (!hasAnyCache) {
            setLoading(false);
          }

        const [
          projectsData,
          aboutData,
        ] = await Promise.all([
          getProjects(),
          getAboutContent(),
        ]);

        setProjects(projectsData);
        setAbout(aboutData);

        
        localStorage.setItem(
          PROJECTS_KEY,
          JSON.stringify(projectsData)
        );

        localStorage.setItem(
          VERSION_KEY,
          currentVersion
        );

        localStorage.setItem(
          COMPANIES_KEY,
          JSON.stringify(companiesData)
        );

        localStorage.setItem(
          HOME_KEY,
          JSON.stringify(homeData)
        );

        localStorage.setItem(
          ABOUT_KEY,
          JSON.stringify(aboutData)
        );

        localStorage.setItem(
          FOOTER_KEY,
          JSON.stringify(footerData)
        );

        

      } catch (error) {
        console.error("❌", error);
      } finally {
        console.log("Terminó la carga");
}
    }

    loadProjects();
  }, []);

  const featuredProjects = useMemo(
    () =>
      projects
        .filter((project) => project.featured)
        .sort(
          (a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0)
        ),
    [projects]
  );

  const reloadProjects = async () => {
    setLoading(true);

    try {
      const siteConfig = await getSiteConfig();
      const currentVersion = String(siteConfig.version);

      const [
        projectsData,
        companiesData,
        homeData,
        aboutData,
        footerData,
      ] = await Promise.all([
        getProjects(),
        getCompanies(),
        getHomeContent(),
        getAboutContent(),
        getFooter(),
      ]);

      setProjects(projectsData);
      setCompanies(companiesData);

      setHome(homeData);
      setAbout(aboutData);
      setFooter(footerData);

      localStorage.setItem(
        PROJECTS_KEY,
        JSON.stringify(projectsData)
      );

      localStorage.setItem(
        VERSION_KEY,
        currentVersion
      );

      localStorage.setItem(
        COMPANIES_KEY,
        JSON.stringify(companiesData)
      );

      localStorage.setItem(
        HOME_KEY,
        JSON.stringify(homeData)
      );

      localStorage.setItem(
        ABOUT_KEY,
        JSON.stringify(aboutData)
      );

      localStorage.setItem(
        FOOTER_KEY,
        JSON.stringify(footerData)
      );
      
    } catch (error) {
      console.error("Error recargando proyectos:", error);
    } finally {
      console.log("setLoading(false)");
      setLoading(false);
    }
  };

  const value = {
    projects,
    featuredProjects,
    companies,
    home,
    about,
    footer,
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