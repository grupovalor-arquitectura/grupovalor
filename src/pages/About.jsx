import { useEffect, useState } from "react";

import InnerPageLayout from "../components/InnerPageLayout";

import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import AboutTeam from "../components/about/AboutTeam";
import AboutTextSection from "../components/about/AboutTextSection";

import { getAboutContent } from "../services/aboutService";



export default function About() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAbout() {
      try {
        const data = await getAboutContent();
        setAbout(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadAbout();
  }, []);

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