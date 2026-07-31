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
  const lockUntil = useRef(0);

  // Fuente de verdad SÍNCRONA del índice. No se puede depender de un
  // ref actualizado vía useEffect: los eventos de wheel llegan decenas
  // de veces por segundo y leerían un valor viejo durante la ventana
  // entre el setState y el efecto que sincroniza el ref. Ese desfase
  // era la causa del comportamiento errático (a veces salta al footer,
  // a veces al home, a veces se queda a mitad).
  const indexRef = useRef(0);

  useEffect(() => {
    const THRESHOLD = 220;
    const LOCK_MS = 900;

    const handleWheel = (e) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const isInView =
        rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!isInView) return;

      const lastIndex = featuredProjects.length - 1;
      const scrollingDown = e.deltaY > 0;

      // ¿Ya recorrimos la galería en esta dirección? Se lee del ref
      // síncrono, que se actualiza en el mismo instante en que
      // cambiamos de card (no un frame después).
      const releaseToPage =
        (scrollingDown && indexRef.current >= lastIndex) ||
        (!scrollingDown && indexRef.current <= 0);

      if (releaseToPage) {
        // Soltamos el scroll nativo: la página sigue hacia el footer
        // (o hacia arriba) con normalidad.
        wheelAccumulator.current = 0;
        return;
      }

      // Todavía quedan cards: la página no se mueve.
      e.preventDefault();

      // Durante el bloqueo de la animación ignoramos el input en vez
      // de acumularlo. Acumular durante el lock hacía que la inercia
      // del trackpad se guardara y disparara varios saltos de card
      // encadenados apenas terminaba el lock.
      if (performance.now() < lockUntil.current) return;

      wheelAccumulator.current += e.deltaY;

      if (Math.abs(wheelAccumulator.current) < THRESHOLD) return;

      const direction = wheelAccumulator.current > 0 ? 1 : -1;

      wheelAccumulator.current = 0;
      lockUntil.current = performance.now() + LOCK_MS;

      // El clamp y la escritura del ref ocurren juntos y de forma
      // síncrona, así que el próximo evento de wheel (que puede llegar
      // en el mismo frame) ya ve el índice correcto.
      const next = Math.min(
        Math.max(indexRef.current + direction, 0),
        lastIndex
      );

      indexRef.current = next;
      setCurrentIndex(next);
    };

    // passive: false es obligatorio para poder llamar preventDefault().
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [featuredProjects.length]);

  // Si la lista cambia y el índice queda fuera de rango, lo corregimos
  // en ambos lugares para que no se desincronicen.
  useEffect(() => {
    const lastIndex = Math.max(0, featuredProjects.length - 1);

    if (currentIndex > lastIndex) {
      indexRef.current = lastIndex;
      setCurrentIndex(lastIndex);
    }
  }, [featuredProjects, currentIndex]);

  if (loading || featuredProjects.length === 0) {
    return null;
  }

  const activeProject = featuredProjects[currentIndex] ?? null;

  if (isMobile) {
    return <FeaturedProjectsMobile projects={featuredProjects} />;
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
