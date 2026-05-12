import FeaturedProjectsSection from "./FeaturedProjectsSection";

import useFeaturedProjectsScroll from "../hooks/useFeaturedProjectsScroll";

export default function FeaturedProjects() {
  const {
    sectionRef,
    x,
  } = useFeaturedProjectsScroll();

  return (
    <FeaturedProjectsSection
      sectionRef={sectionRef}
      x={x}
    />
  );
}