import { useRef, useState, useEffect } from "react";

import {
  useScroll,
  useTransform,
} from "framer-motion";

export default function useFeaturedProjectsScroll() {
  const sectionRef = useRef(null);

  const trackRef = useRef(null);

  const [maxTranslate, setMaxTranslate] = useState(0);

  // 🔥 medir distancia real
  useEffect(() => {
    const calculate = () => {
      if (!trackRef.current || !sectionRef.current) return;

      const trackWidth =
        trackRef.current.scrollWidth;

      const viewportWidth =
        window.innerWidth * 0.72;

      setMaxTranslate(
        trackWidth - viewportWidth
      );
    };

    calculate();

    window.addEventListener("resize", calculate);

    return () => {
      window.removeEventListener(
        "resize",
        calculate
      );
    };
  }, []);

  // 🔥 scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,

    offset: ["start end", "end start"],
  });

  // 🔥 translate REAL
  const x = useTransform(
    scrollYProgress,

    [0, 0.28, 1],

    [0, 0, -maxTranslate]
  );

  return {
    sectionRef,
    trackRef,
    x,
  };
}