import { motion } from "framer-motion";

import FeaturedProjectImage from "./FeaturedProjectImage";

import { featuredProjects } from "../data/featuredProjects";

export default function FeaturedProjectsTrack({
  currentIndex,
}) {
  // 🔥 ancho aproximado total de cada proyecto
const CARD_WIDTH =
  (window.innerWidth * 0.58) +  // image
  56 +                          // meta
  (window.innerWidth * 0.015) + // internal gap
  (window.innerWidth * 0.015) + // track gap
  30;                            // visual correction

  return (
    <motion.div
      animate={{
        x: -(CARD_WIDTH * currentIndex),
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        display: "flex",
        alignItems: "center",

        gap: "1.5vw",

        paddingLeft: "3vw",
        paddingRight: "20vw",

        flexShrink: 0,

        width: "max-content",

        willChange: "transform",
      }}
    >
      {featuredProjects.map((project) => (
        <FeaturedProjectImage
          key={project.id}
          project={project}
        />
      ))}
    </motion.div>
  );
}