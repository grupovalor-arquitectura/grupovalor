import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

import gsap from "gsap";

export default function ProjectsHeader() {
  const headerRef = useRef(null);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

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
    ).fromTo(
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
    );

    return () => tl.kill();
  }, []);

  return (
    <Box
      ref={headerRef}
      sx={{
        bgcolor: "primary.main",

        minHeight: {
          xs: 260,
          md: 630,
        },

        px: {
          xs: 2,
          md: 7,
        },

        pt: {
          xs: 10,
          md: 30,
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
          flexDirection: "column",

          gap: {
            xs: 2,
            md: 4,
          },

          maxWidth: {
            xs: "100%",
            md: 720,
          },
        }}
      >
        <Typography
          ref={titleRef}
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "50px",
            },

            fontWeight: 700,

            lineHeight: {
              xs: 1.05,
              md: 1,
            },

            color: "background.default",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse potenti.
        </Typography>

        <Typography
          ref={descriptionRef}
          sx={{
            maxWidth: {
              xs: "100%",
              md: 560,
            },

            fontSize: {
              xs: "1rem",
              md: "22px",
            },

            lineHeight: 1.5,

            color: "background.default",

            opacity: 0.9,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse potenti. Integer dictum, lorem vitae ullamcorper
          feugiat, velit lacus consequat sapien, sed facilisis ligula
          augue vitae tortor.
        </Typography>
      </Box>
    </Box>
  );
}