import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { defaultPartners, featuredClient } from "../../data/aboutDefaults";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPartners({ partners }) {
  // "??" (no "||"): si about.partners todavía no existe en Firestore
  // usamos el respaldo, pero si ya existe y está vacío (se borraron
  // todos) respetamos ese vacío.
  const items = partners ?? defaultPartners;

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,

        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      gridRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,

        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );
  }, []);

  if (!items.length) return null;

  return (
    <Box
      ref={sectionRef}
      sx={{
        bgcolor: "primary.main",
        color: "background.default",

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
      <Typography
        ref={titleRef}
        variant="h2"
        sx={{
          lineHeight: 1,
          fontWeight: 700,
          mb: {
            xs: 6,
            md: 8,
          },
        }}
      >
        Aliados
      </Typography>

      <Box
        ref={gridRef}
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
          },

          gap: {
            xs: 2,
            md: 3,
          },
        }}
      >
        {items.map((partner, index) => (
          <Box
            key={index}
            component="a"
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",

              aspectRatio: "16 / 9",

              // Evita que el grid ensanche la columna por el tamaño
              // natural del logo (bug clásico de CSS grid con <img>).
              minWidth: 0,
              minHeight: 0,
              overflow: "hidden",

              px: partner.cardPadding ?? 3,
              py: partner.cardPadding ?? 3,

              // Mismo tono que el fondo de la sección: los logos
              // quedan "flotando" sin ninguna caja visible.
              bgcolor: "primary.main",
              borderRadius: "12px",

              textDecoration: "none",
              color: "background.default",

              boxShadow: "0 0 0 0 rgba(0,0,0,0)",
              transition: "transform .25s ease, box-shadow .25s ease",

              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 10px 24px rgba(66, 27, 30, .18)",
              },
            }}
          >
            {partner.logo ? (
              <Box
                component="img"
                src={partner.logo}
                alt={partner.name}
                sx={{
                  maxWidth: "100%",
                  maxHeight: partner.logoMaxHeight ?? {
                    xs: 48,
                    md: 64,
                  },
                  objectFit: "contain",
                }}
              />
            ) : (
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                {partner.name}
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      {/* CLIENTE DESTACADO */}
      <Box
        sx={{
          mt: {
            xs: 8,
            md: 10,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "0.85rem",
            opacity: 0.6,
            mb: 1,
          }}
        >
          Cliente destacado
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: "1.1rem",
              md: "1.4rem",
            },
            fontWeight: 700,
          }}
        >
          {featuredClient}
        </Typography>
      </Box>
    </Box>
  );
}