import { useRef } from "react";

import {
  useScroll,
  useTransform,
} from "framer-motion";

export default function useFeaturedProjectsScroll() {
  const sectionRef = useRef(null);

  //  progreso de scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,

    offset: ["start start", "end end"],
  });

  // translate horizontal
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-55%"]
  );

  return {
    sectionRef,
    scrollYProgress,
    x,
  };
}