import { Box, Typography } from "@mui/material";

import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutTextSection({

  id,
  title,
  content,
  background = "primary.main",
  color = "background.default", 

}) {

    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 45%",
            scrub: 1,
            },
        });

        tl.fromTo(
            titleRef.current,
            {
            opacity: 0,
            y: 40,
            },
            {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            }
        ).fromTo(
            textRef.current,
            {
            opacity: 0,
            y: 70,
            },
            {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            },
            "-=0.2"
        );
    }, []);

  return (
    <Box
      id={id}
      ref={sectionRef}
      sx={{
        bgcolor: background,
        color,

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

          gap: {
            xs: 5,
            md: 10,
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
            {title}
          </Typography>
        </Box>

        {/* Texto */}

        <Box
          sx={{
            maxWidth: 900,
          }}
        >
          <Typography
            ref={textRef}
            sx={{
              whiteSpace: "pre-line",

              lineHeight: 1.8,

              fontSize: {
                xs: "1rem",
                md: "1.15rem",
              },

              opacity: 0.92,
            }}
          >
            {content}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}