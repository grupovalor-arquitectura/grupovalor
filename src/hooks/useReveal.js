import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useReveal(
  ref,
  {
    y = 40,
    duration = 0.8,
    start = "top 85%",
    once = true,
  } = {}
) {
  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          y,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ref.current,
            start,
            once: false,
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);
}