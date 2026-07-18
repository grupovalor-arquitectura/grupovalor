import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import FeaturedProjectImage from "./FeaturedProjectImage";

export default function FeaturedProjectsTrack({
  currentIndex,
  projects,

}) {
  const projectRef = useRef(null);

  const [projectWidth, setProjectWidth] = useState(0);

  useEffect(() => {
    if (!projectRef.current) return;

    const updateWidth = () => {
      const gap = window.innerWidth * 0.015;

      const width =
        projectRef.current.getBoundingClientRect().width;

      setProjectWidth(width + gap);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
    
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
      {projects.map((project, index) => (
        <FeaturedProjectImage
          key={project.id}
          project={project}
          index={index}
          projectRef={ index === 0 ? projectRef : null }
        />
      ))}
    </motion.div>
  );
}