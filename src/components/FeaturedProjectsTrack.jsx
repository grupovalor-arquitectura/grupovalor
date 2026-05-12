import { motion } from "framer-motion";

import FeaturedProjectImage from "./FeaturedProjectImage";

import { featuredProjects } from "../data/featuredProjects";

export default function FeaturedProjectsTrack({ x }) {
  return (
    <motion.div
      style={{
        x,

        display: "flex",
        alignItems: "center",

        gap: "4vw",

        paddingLeft: "4vw",
        paddingRight: "20vw",

        width: "fit-content",

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