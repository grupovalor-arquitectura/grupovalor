import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { defaultCertifications } from "../../data/aboutDefaults";

gsap.registerPlugin(ScrollTrigger);

export default function AboutCertifications({ certifications }) {
  // "??" (no "||"): si about.certifications todavía no existe en
  // Firestore usamos el respaldo, pero si ya existe y está vacío
  // (la persona borró todas) respetamos ese vacío.
  const items = certifications ?? defaultCertifications;

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

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
          end: "top 45%",
          scrub: 1,
        },
      }
    );

    itemsRef.current.forEach((item) => {
      if (!item) return;

      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,

          ease: "power3.out",

          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 65%",
            scrub: 1,
          },
        }
      );
    });
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

        pt: {
          xs: 8,
          md: 10,
        },

        pb: {
          xs: 6,
          md: 8,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",

          flexDirection: {
            xs: "column",
            md: "row",
          },

          alignItems: {
            xs: "flex-start",
            md: "baseline",
          },

          gap: {
            xs: 6,
            md: 20,
          },
        }}
      >
        {/* Título */}
        <Box
          sx={{
            width: {
              xs: "100%",
              md: 320,
            },

            flexShrink: 0,
          }}
        >
          <Typography
            ref={titleRef}
            variant="h2"
            sx={{
              lineHeight: 1,
              fontWeight: 700,
            }}
          >
            Certificaciones
          </Typography>
        </Box>

        {/* Lista */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
          }}
        >
          {items.map((cert, index) => (
            <Box key={index} ref={(el) => (itemsRef.current[index] = el)}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 3,

                  py: 3,
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      md: "1.1rem",
                    },
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}
                >
                  {cert.title}
                </Typography>

                <Typography
                  sx={{
                    flexShrink: 0,
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "secondary.main",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cert.year}
                </Typography>
              </Box>

              {index < items.length - 1 && (
                <Box
                  sx={{
                    height: "1px",
                    width: "100%",
                    bgcolor: "background.default",
                    opacity: 0.2,
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}