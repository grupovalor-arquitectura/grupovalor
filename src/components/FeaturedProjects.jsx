import { useEffect, useRef, useState } from "react";

import FeaturedProjectsSection from "./FeaturedProjectsSection";
import { featuredProjects } from "../data/featuredProjects";

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const sectionRef = useRef(null);

  // 🔥 acumulador de scroll
  const wheelAccumulator = useRef(0);

  // 🔥 lock para evitar spam
  const isAnimating = useRef(false);

  const activeProject =
    featuredProjects[currentIndex];

  useEffect(() => {
    const THRESHOLD = 220;

    const handleWheel = (e) => {
      if (!sectionRef.current) return;

      const rect =
        sectionRef.current.getBoundingClientRect();

      const isInView =
        rect.top <= 0 &&
        rect.bottom >= window.innerHeight;

      if (!isInView) return;

      // 🔥 evita múltiples cambios seguidos
      if (isAnimating.current) return;

      // 🔥 acumular scroll
      wheelAccumulator.current += e.deltaY;

      // DOWN
      if (
        wheelAccumulator.current >
        THRESHOLD
      ) {
        isAnimating.current = true;

        setCurrentIndex((prev) =>
          Math.min(
            prev + 1,
            featuredProjects.length - 1
          )
        );

        wheelAccumulator.current = 0;

        setTimeout(() => {
          isAnimating.current = false;
        }, 900);
      }

      // UP
      if (
        wheelAccumulator.current <
        -THRESHOLD
      ) {
        isAnimating.current = true;

        setCurrentIndex((prev) =>
          Math.max(prev - 1, 0)
        );

        wheelAccumulator.current = 0;

        setTimeout(() => {
          isAnimating.current = false;
        }, 900);
      }
    };

    window.addEventListener(
      "wheel",
      handleWheel,
      { passive: true }
    );

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