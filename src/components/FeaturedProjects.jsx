import { useEffect, useRef, useState } from "react";

import FeaturedProjectsSection from "./FeaturedProjectsSection";
import FeaturedProjectsMobile from "./FeaturedProjectsMobile";

import { useProjects } from "../context/ProjectsContext";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";



export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { featuredProjects, loading } = useProjects();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sectionRef = useRef(null);
  const wheelAccumulator = useRef(0);
  const isAnimating = useRef(false);

 

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

      if (isAnimating.current) return;

      wheelAccumulator.current += e.deltaY;

      // DOWN
      if (wheelAccumulator.current > THRESHOLD) {
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
      if (wheelAccumulator.current < -THRESHOLD) {
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
  }, [featuredProjects.length]);

  useEffect(() => {
    if (
      currentIndex >
      featuredProjects.length - 1
    ) {
      setCurrentIndex(
        Math.max(0, featuredProjects.length - 1)
      );
    }
  }, [featuredProjects, currentIndex]);

  if (loading || featuredProjects.length === 0) {
    return null;
  }

  const activeProject =
    featuredProjects[currentIndex] ?? null;

  if (isMobile) {
    return (
      <FeaturedProjectsMobile
        projects={featuredProjects}
      />
    );
  }

  return (
    <FeaturedProjectsSection
      sectionRef={sectionRef}
      currentIndex={currentIndex}
      activeProject={activeProject}
      featuredProjects={featuredProjects}
    />
  );
}