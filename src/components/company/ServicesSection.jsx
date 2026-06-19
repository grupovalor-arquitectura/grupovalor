import { Box, Typography } from "@mui/material";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection({ company }) {
    const { primary, servicesBackground,  } = company.branding;

    const sectionRef = useRef(null);
    const circleRef = useRef(null);
    const linesRef = useRef([]);
    

    useEffect(() => {
        if (!circleRef.current) return;

        gsap.set(circleRef.current, {
            scale: 0,
        });

        gsap.to(circleRef.current, {
            scale: 1,

            ease: "power2.out",

            scrollTrigger: {
            trigger: sectionRef.current,

            start: "top 80%",
            end: "top 50%",

            scrub: 1,
            },
        });

        linesRef.current.forEach((line) => {
          if (!line) return;

          const length =
            line.getTotalLength();

          gsap.set(line, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          gsap.to(line, {
            strokeDashoffset: 0,

            ease: "none",

            scrollTrigger: {
              trigger: line,
              start: "top 95%",
              end: "top 30%",
              scrub: 1,
            },
          });
        });
        }, []);
        
return (
  <Box
    ref={sectionRef}
    sx={{
      position: "relative",
      backgroundColor: servicesBackground,
      minHeight: "500px",
       zIndex: 1,
      pt: 14,
      pb: 10,
      px: { xs: 4, md: 8 },
    }}
  >
    {/* Círculo */}
    <Box
      ref={circleRef}
      sx={{
        position: "absolute",

        top: 0,
        left: {
          xs: 32,
          md: 70,
        },

        transform: "translateY(-50%)",

        width: 36,
        height: 36,

        borderRadius: "50%",
        backgroundColor: servicesBackground,

        zIndex: 2,
      }}
    />

    {/* Contenido */}
    <Box
      sx={{
        display: "flex",
        alignItems: "baseline",
        gap: 8,
      }}
    >
      {/* Título */}
      <Typography
        sx={{
          color: primary,
          fontSize: "2rem",
          fontWeight: 600,
          minWidth: 180,
        }}
      >
        Servicios
      </Typography>

      {/* Lista */}
      <Box sx={{ flex: 1 }}>
        {company.services.map((service, index) => (
          <Box
            key={service.id}
            sx={{
              py: 2,
              
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "baseline",
              }}
            >
              <Typography
                sx={{
                  color: primary,
                  fontSize: "2rem",
                  fontWeight: 500,
                  minWidth: 60,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </Typography>

              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    color: primary,
                    fontSize: "1.5rem",
                    fontWeight: 600,
                   
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  sx={{
                    color: primary,
                    opacity: 0.9,
                    mb: "0px",
                  }}
                >
                  {service.description}
                </Typography>

                {index !== company.services.length - 1 && (
                  <Box
                    sx={{
                      mt: 3,
                      width: "100%",
                      height: "2px",
                    }}
                  >
                    <svg
                      width="100%"
                      height="1"
                      style={{
                        display: "block",
                        overflow: "visible",
                      }}
                    >
                      <line
                        ref={(el) =>
                          (linesRef.current[index] = el)
                        }
                        x1="0"
                        y1="1"
                        x2="100%"
                        y2="1"
                        stroke={primary}
                        strokeWidth="2"
                      />
                    </svg>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);
}