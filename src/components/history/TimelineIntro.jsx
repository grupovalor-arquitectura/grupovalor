import { Box, Typography } from "@mui/material";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

import { historyData } from "../../data/historyData";
import useTunnel from "../../hooks/useTunnel";
import TimelineTunnel from "./TimelineTunnel";

export default function TimelineIntro({
  circleRef,
  endRef,
}) { 
  const moment = historyData.moments[0];

  const labelRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const sectionRef = useRef(null);

  const { circles, visibleCircles } = useTunnel({
    startRef: circleRef,
    endRef,
    triggerRef: sectionRef,
    });

    console.log("circles", circles);
  

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
     ref={sectionRef}
      sx={{

        width: "100%",
        height: "100vh",
        border: "5px solid lime",
        position: "relative",
        display: "flex",
        alignItems: "center",

        pl: {
          xs: 4,
          md: "32%",
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
            display: "flex",
            alignItems: "center",
            gap: "40px",

            mb: 4,
          }}
        >
        <Box
            ref={circleRef}
            sx={{
                position: "relative",
                width: 84,
                height: 84,
                flexShrink: 0,
            }}
            >
            <TimelineTunnel
                circles={circles}
                visibleCircles={visibleCircles}
                />
        </Box>

          <Typography
            ref={labelRef}
            sx={{
              fontSize: {
                xs: "3rem",
                md: "4rem",
              },

              fontWeight: 700,
              lineHeight: 1,

              color: "transparent",

              WebkitTextStroke:
                "1px #C76A45",

              textTransform: "lowercase",
            }}
          >
            {moment.label}
          </Typography>
        </Box>

        {/* TÍTULO */}

        <Typography
          ref={titleRef}
          sx={{
            ml: "124px",

            fontSize: {
              xs: "3rem",
              md: "4.5rem",
            },

            fontWeight: 700,

            lineHeight: 0.95,

            color: "#D9C8C5",

            maxWidth: "500px",

            mb: 4,
          }}
        >
          {moment.title}
        </Typography>

        {/* DESCRIPCIÓN */}

        <Typography
          ref={descriptionRef}
          sx={{
            ml: "124px",

            maxWidth: "460px",

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