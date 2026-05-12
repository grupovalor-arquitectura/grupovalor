import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import FeaturedProjectImage from "./FeaturedProjectImage";
import { featuredProjects } from "../data/featuredProjects";

export default function FeaturedProjectsTrack({
  currentIndex,
}) {
  const projectRef = useRef(null);

  const [projectWidth, setProjectWidth] =
    useState(0);

  // 🔥 medir ancho REAL renderizado
  useEffect(() => {
    if (!projectRef.current) return;

    const gap =
      window.innerWidth * 0.015;

    const width =
      projectRef.current
        .getBoundingClientRect().width;

    setProjectWidth(width + gap);
  }, []);

  return (
    <motion.div
      animate={{
        x: -(projectWidth * currentIndex),
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        display: "flex",
        alignItems: "center",

        gap: "1.5vw",

        paddingRight: "20vw",

        width: "max-content",

        willChange: "transform",
      }}
    >
      {featuredProjects.map((project, index) => (
        <FeaturedProjectImage
          key={project.id}
          project={project}

          // 🔥 medir solo la primera
          projectRef={
            index === 0 ? projectRef : null
          }
        />
      ))}
    </motion.div>
  );
}