import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 📊 Cifras de la franja "Grupo Valor en números".
// El dato de m² construidos queda marcado para validar con el
// área técnica antes de publicar — no se muestra ninguna nota al
// respecto en el sitio, es solo un recordatorio interno acá.
const stats = [
  {
    value: "+40",
    label: "Años de trayectoria",
    caption: "Desde 1984",
  },
  {
    value: "+70",
    label: "Proyectos propios",
    caption: "Más decenas de desarrollos en participación con terceros",
  },
  {
    value: "+760.000",
    label: "m² construidos",

  },
  {
    value: "+2.664",
    label: "Unidades bajo gestión",
    caption: "Corte junio 2026",
  },
];

export default function AboutStats() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((item) => {
      if (!item) return;

      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,

          ease: "power3.out",

          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        bgcolor: "background.default",
        color: "primary.main",

        px: {
          xs: 4,
          md: 8,
        },

        py: {
          xs: 10,
          md: 14,
        },
      }}
    >
      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr 1fr",
            md: "repeat(4, 1fr)",
          },

          columnGap: {
            xs: 3,
            md: 6,
          },

          rowGap: {
            xs: 6,
            md: 0,
          },
        }}
      >
        {stats.map((stat, index) => (
          <Box
            key={stat.label}
            ref={(el) => (itemsRef.current[index] = el)}
            sx={{
              position: "relative",

              textAlign: "center",

              px: {
                md: 3,
              },

              "&::after": {
                content: '""',

                display: {
                  xs: "none",
                  md: index < stats.length - 1 ? "block" : "none",
                },

                position: "absolute",
                top: 0,
                right: 0,

                width: "1px",
                height: "100%",

                bgcolor: "primary.main",
                opacity: 0.15,
              },
            }}
          >
            <Typography
              sx={{
                color: "secondary.main",
                fontSize: {
                  xs: "2.5rem",
                  md: "3.5rem",
                },
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              {stat.value}
            </Typography>

            <Typography
              sx={{
                mt: 1.5,
                fontSize: {
                  xs: "1rem",
                  md: "1.1rem",
                },
                fontWeight: 600,
                lineHeight: 1.3,
              }}
            >
              {stat.label}
            </Typography>

            {stat.caption && (
              <Typography
                sx={{
                  mt: 1,
                  fontSize: "0.85rem",
                  opacity: 0.7,
                  lineHeight: 1.4,
                }}
              >
                {stat.caption}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}