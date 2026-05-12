import FeaturedProjectsSection from "./FeaturedProjectsSection";

import useFeaturedProjectsScroll from "../hooks/useFeaturedProjectsScroll";

export default function FeaturedProjects() {
  const {
    stickyRef,
    x,
  } = useFeaturedProjectsScroll();

  return (
    <FeaturedProjectsSection
      stickyRef={stickyRef}
      x={x}
    />
  );
}