import { Box, Divider, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import IllustrationAV from "../../assets/IllustrationAV.svg?react";

export default function ProjectsHeader() {
  const headerRef = useRef(null);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
 

  const illustrationRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 120,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    )
      .fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.6"
      )
      
    return () => tl.kill();
  }, []);

  useEffect(() => {
    const element = illustrationRef.current;

    if (!element) return;

    const rays = element.querySelectorAll("line");

    rays.forEach((ray) => {
        if (typeof ray.getTotalLength !== "function") return;

        const length = ray.getTotalLength();

        ray.style.strokeDasharray = length;
        ray.style.strokeDashoffset = length * 0.999;
    });

  gsap.to(rays, {
    strokeDashoffset: 0,

    ease: "none",

    scrollTrigger: {
      trigger: headerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
  }, []);

  useEffect(() => {
    const element = illustrationRef.current;

    if (!element) return;

    gsap.to(element, {
        y: -80,

        ease: "none",

        scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        },
    });
    }, []);

  return (
    <Box
      ref={headerRef}
      sx={{
        position: "relative",
        overflow: "hidden",

        bgcolor: "primary.main",

        minHeight: {
          xs: 320,
          md: 630,
        },

        px: { xs: 2, md: 7 },

        pt: {
          xs: 12,
          md: 30,
        },

        pb: {
          xs: 4,
          md: 6,
        },
      }}
    >
      {/* CONTENIDO */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          display: "flex",
          flexDirection: "column",

          gap: {
            xs: 3,
            md: 4,
          },

          maxWidth: 720,
        }}
      >
        <Typography
          ref={titleRef}
          sx={{
            fontSize: {
              xs: "42px",
              md: "50px",
            },

            fontWeight: 700,
            lineHeight: 1,

            color: "background.default",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse potenti. 
        </Typography>

        <Typography
          ref={descriptionRef}
          sx={{
            fontSize: {
              xs: "18px",
              md: "22px",
            },

            lineHeight: 1.4,

            color: "background.default",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse potenti. Integer dictum, lorem vitae ullamcorper
          feugiat, velit lacus consequat sapien, sed facilisis ligula
          augue vitae tortor.
        </Typography>

     
      </Box>

      {/* ILUSTRACIÓN */}

      <Box
        ref={illustrationRef}
        sx={{
          position: "absolute",

          right: {
            xs: -180,
            md: -520,
          },

          top: {
            xs: 40,
            md: 20,
          },

          width: {
            xs: 600,
            md: 1100,
          },

          color: "background.default",

          opacity: 1,

          pointerEvents: "none",

          zIndex: 0,

          "& svg": {
            width: "100%",
            height: "auto",
            display: "block",
          },
        }}
      >
        <IllustrationAV />
      </Box>
    </Box>
  );
}