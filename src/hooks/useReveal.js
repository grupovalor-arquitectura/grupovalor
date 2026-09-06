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
    // Para tarjetas que ya están a la vista al cargar la página (por
    // ejemplo, la primera fila de proyectos): según las pruebas de
    // usabilidad, arrancar en opacity:0 ahí se lee como "la página no
    // cargó", en vez de como una animación. Con disabled=true el hook
    // no toca el elemento y queda visible desde el primer render.
    disabled = false,
  } = {}
) {
  useLayoutEffect(() => {
    if (disabled) return;
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