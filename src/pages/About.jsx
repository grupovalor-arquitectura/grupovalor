import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import InnerPageLayout from "../components/InnerPageLayout";

import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import AboutTeam from "../components/about/AboutTeam";
import AboutTextSection from "../components/about/AboutTextSection";

import { useProjects } from "../context/ProjectsContext";

export default function About() {
  
  const { about, loading } = useProjects();
  const location = useLocation();

  useEffect(() => {
    if (!about) return;

    if (location.hash === "#manifiesto") {
      const element = document.getElementById("manifiesto");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [about, location.hash]);

  if (loading || !about) return null;

return (
<InnerPageLayout
      overlayHeader
      headerBackground="primary.main"
    >
      <AboutHero heroImage={about.teamIntro.image} />
      
      <AboutIntro
        title={about.teamIntro.title}
        description={about.teamIntro.description}
      />

      <AboutTeam team={about.team} />

      <AboutTextSection
        id="manifiesto"
        title={about.manifesto.title}
        content={about.manifesto.content}
      />

      <AboutTextSection
          title={about.mission.title}
          content={about.mission.content}
      />

      <AboutTextSection
          title={about.vision.title}
          content={about.vision.content}
      />

      
    </InnerPageLayout>
  );
}