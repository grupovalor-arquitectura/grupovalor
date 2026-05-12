import { useEffect, useRef, useState } from "react";

import FeaturedProjectsSection from "./FeaturedProjectsSection";

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const sectionRef = useRef(null);

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
          Math.min(prev + 1, 2)
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
    />
  );
}