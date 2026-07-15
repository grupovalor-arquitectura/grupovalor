import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";



import TimelineTunnel from "./TimelineTunnel";

export default function TimelineHeader({ 
  
  moment, 
  startRef,
  circles, 
  visibleCircles,

}) {

    const theme = useTheme();

    const isMobile = useMediaQuery(
      theme.breakpoints.down("md")
    );

    const labelRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    
    useLayoutEffect(() => {
        if (
            !labelRef.current ||
            !titleRef.current ||
            !descriptionRef.current
        ) {
            return;
        }

        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(labelRef.current, {
            x: 40,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power3.out",
            })

            .from(
                titleRef.current,
                {
                y: 80,
                autoAlpha: 0,
                duration: 1,
                ease: "power4.out",
                },
                "-=0.3"
            )

            .from(
                descriptionRef.current,
                {
                y: 40,
                autoAlpha: 0,
                duration: 0.8,
                ease: "power2.out",
                },
                "-=0.5"
            );
        });

        return () => ctx.revert();
        }, []);

  return (

  <Box
    sx={{
      width: "100%",
      height: {
        xs: "70vh",
        md: "100vh",
      },
      display: "flex",
      alignItems: "center",
      pl: {
        xs: 4,
        md: "32%",
      },

      "@keyframes breath": {
        "0%": {
            transform: "scale(1)",
        },

        "50%": {
            transform: "scale(1.10)",
        },

        "100%": {
            transform: "scale(1)",
        },
        },
    }}
  >
    <Box
      sx={{
        width: "650px",
      }}
    >
      {/* CÍRCULO + MOMENTO */}

      <Box
        sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "40px",
            gap: {
              xs: 0,
              md: "40px",
            },
        }}
        >
        {!isMobile && (
          <Box
              ref={startRef}
              sx={{
                  position: "relative",
                  width: 84,
                  height: 84,
                  flexShrink: 0,
              }}
          >
              <TimelineTunnel
                  originRef={startRef}
                  circles={circles}
                  visibleCircles={visibleCircles}
              />
          </Box>
      )}

        <Typography
            ref={labelRef}
            sx={{
            fontSize: {
                xs: "3rem",
                md: "4rem",
            },

            mb: {
              xs: 4,
              md: 0,
            },

            fontWeight: 700,
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1px #C76A45",
            textTransform: "lowercase",
            }}
        >
            {moment.label}
        </Typography>
        </Box>

      {/* TITULO */}

      <Typography
        ref={titleRef}
        sx={{
            
          ml: {
            xs: 0,
            md: "124px",
          },

          fontSize: {
            xs: "3rem",
            md: "4.5rem",
          },

          fontWeight: 700,
          lineHeight: 0.95,

          color: "#D9C8C5",

          maxWidth: {
            xs: "85%",
            md: "500px",
          },

          mb: 4,
        }}
      >
        {moment.title}
      </Typography>

      {/* DESCRIPCION */}

      <Typography
        ref={descriptionRef}
        sx={{
          ml: {
            xs: 0,
            md: "124px",
          },

          maxWidth: {
            xs: "85%",
            md: "460px",
          },

          color: "#D9C8C5",

          fontSize: "0.95rem",
          lineHeight: 1.6,

          whiteSpace: "pre-line",
        }}
      >
        {moment.description}
      </Typography>
    </Box>
  </Box>
);
}