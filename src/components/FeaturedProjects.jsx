import { useEffect, useRef, useState } from "react";

import FeaturedProjectsSection from "./FeaturedProjectsSection";
import { featuredProjects } from "../data/featuredProjects";

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const sectionRef = useRef(null);

  // 🔥 proyecto activo
  const activeProject =
    featuredProjects[currentIndex];

  useEffect(() => {
    const handleWheel = (e) => {
      if (!sectionRef.current) return;

      const rect =
        sectionRef.current.getBoundingClientRect();

      const isInView =
        rect.top <= 0 &&
        rect.bottom >= window.innerHeight;

      if (!isInView) return;

      // DOWN
      if (e.deltaY > 0) {
        setCurrentIndex((prev) =>
          Math.min(
            prev + 1,
            featuredProjects.length - 1
          )
        );
      }

      // UP
      if (e.deltaY < 0) {
        setCurrentIndex((prev) =>
          Math.max(prev - 1, 0)
        );
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel
      );
    };
  }, []);

  return (
    <FeaturedProjectsSection
      sectionRef={sectionRef}
      currentIndex={currentIndex}
      activeProject={activeProject}
    />
  );
}