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
import { getCompanies } from "../services/companiesService";
import { getHomeContent } from "../services/homeService";
import { getAboutContent } from "../services/aboutService";
import { getFooter } from "../services/footerService";


const ProjectsContext = createContext();

const PROJECTS_KEY = "gv_projects";
const ARCHIVE_KEY = "gv_archive";
const VERSION_KEY = "gv_site_version";
const COMPANIES_KEY = "gv_companies";

const HOME_KEY = "gv_home";
const ABOUT_KEY = "gv_about";
const FOOTER_KEY = "gv_footer";

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [archiveProjects, setArchiveProjects] = useState([]);
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
        const cachedArchive = localStorage.getItem(ARCHIVE_KEY);
        const cachedCompanies = localStorage.getItem(COMPANIES_KEY);

        const cachedHome = localStorage.getItem(HOME_KEY);
        const cachedAbout = localStorage.getItem(ABOUT_KEY);
        const cachedFooter = localStorage.getItem(FOOTER_KEY);

        const hasCache =
          cachedProjects &&
          cachedArchive &&
          cachedCompanies &&
          cachedHome &&
          cachedAbout &&
          cachedFooter;

        // Mostrar cache inmediatamente
        if (hasCache) {

          setProjects(JSON.parse(cachedProjects));
          setArchiveProjects(JSON.parse(cachedArchive));
          setCompanies(JSON.parse(cachedCompanies));

          setHome(JSON.parse(cachedHome));
          setAbout(JSON.parse(cachedAbout));
          setFooter(JSON.parse(cachedFooter));

          setLoading(false);
        }
       
       
        const siteConfig = await getSiteConfig();
        const currentVersion = String(siteConfig.version);
        const cachedVersion = localStorage.getItem(VERSION_KEY);

        
       if (cachedVersion === currentVersion && hasCache) {
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

        if (!hasCache) {
            setLoading(false);
          }

        const [
          projectsData,
          archiveData,
          aboutData,
        ] = await Promise.all([
          getProjects(),
          getArchive(),
          getAboutContent(),
        ]);

        setProjects(projectsData);
        setArchiveProjects(archiveData);
        setAbout(aboutData);

        
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
    () => projects.filter((project) => project.featured),
    [projects]
  );

  const reloadProjects = async () => {
    setLoading(true);

    try {
      const siteConfig = await getSiteConfig();
      const currentVersion = String(siteConfig.version);

      const [
        projectsData,
        archiveData,
        companiesData,
        homeData,
        aboutData,
        footerData,
      ] = await Promise.all([
        getProjects(),
        getArchive(),
        getCompanies(),
        getHomeContent(),
        getAboutContent(),
        getFooter(),
      ]);

      setProjects(projectsData);
      setArchiveProjects(archiveData);
      setCompanies(companiesData);

      setHome(homeData);
      setAbout(aboutData);
      setFooter(footerData);

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
      console.log("🟢 setLoading(false)");
      setLoading(false);
    }
  };

  const value = {
    projects,
    archiveProjects,
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