import { useRef } from "react";

import {
  useScroll,
  useTransform,
} from "framer-motion";

export default function useFeaturedProjectsScroll() {
  const stickyRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: stickyRef,

    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-55%"]
  );

  return {
    stickyRef,
    x,
  };
}