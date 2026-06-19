import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CompanyHero({ company }) {

  const { primary, heroBackground, accent, text } = company.branding;

  const Logo = company.logo;
  const Illustration = company.illustration;

  const heroRef = useRef(null);
  const illustrationRef = useRef(null);

  const taglineRef = useRef(null);
  const introRef = useRef(null);
  const logoRef = useRef(null);
  const logoTitleRef = useRef(null);
  

  useEffect(() => {
    const element = illustrationRef.current;

    if (!element) return;

    const rays = element.querySelectorAll("line");

    rays.forEach((ray) => {
      if (typeof ray.getTotalLength !== "function") return;

      const length = ray.getTotalLength();

      ray.style.strokeDasharray = length;

      // visible aprox. 20% del rayo
      ray.style.strokeDashoffset = length * 0.999;
    });

    gsap.to(rays, {
      strokeDashoffset: 0,

      ease: "none",

      scrollTrigger: {
        trigger: heroRef.current,

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
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 75%",
      },
    });

    tl.fromTo(
      taglineRef.current,
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
        introRef.current,
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
      .fromTo(
        logoTitleRef.current,
        {
          opacity: 0,
          
        },
        {
          opacity: 1,
          
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .fromTo(
        logoRef.current,
        {
          opacity: 0,
          
          
        },
        {
          opacity: 1,
          
         
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.3"
      );

    gsap.to(logoRef.current, {
      y: -40,
      ease: "none",

      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Box
      ref={heroRef}
      sx={{
        minHeight: "90vh",
        bgcolor: heroBackground,

        position: "relative",
        overflow: "hidden",
        
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",

          gap: 8,

          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        {/* COLUMNA IZQUIERDA */}

        <Box
          sx={{
            maxWidth: 650,

            position: "relative",
            zIndex: 2,

            display: "flex",
            flexDirection: "column",

            gap: 4,
          }}
        >
          <Typography
            ref={taglineRef}
            sx={{
              fontSize: {
                xs: "42px",
                md: "50px",
              },

              color: text,

              lineHeight: 1,
              fontWeight: 700,

              whiteSpace: "pre-line",
            }}
          >
            {company.tagline}
          </Typography>

          <Typography
            ref={introRef}
            sx={{
              fontSize: {
                xs: "18px",
                md: "22px",
              },

              color: text,
              lineHeight: 1.4,
              maxWidth: 700,
            }}
          >
            {company.intro}
          </Typography>

         <Box
            ref={logoTitleRef}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              mt: 4,
             
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
              
                whiteSpace: "nowrap",
                color: text,
              }}
            >
              Nuestro logotipo
            </Typography>

            <Box
              ref={logoRef}
              sx={{
                width: {
                  xs: 220,
                  md: 300,
                  
                  
                },
                color: text,
                ml: -8,
                position: "relative",
                top: "10px",

                "& svg": {
                  width: "200%",
                  height: "auto",
                  display: "block",
                },
              }}
            >
              <Logo />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        ref={illustrationRef}
        sx={{
          position: "absolute",

          right: {
            xs: "-150px",
            md: "-600px",
          },

          top: {
            xs: "120px",
            md: "120px",
          },

          width: {
            xs: 600,
            md: 1200,
          },

          color: text,
          opacity: 0.2,

          pointerEvents: "none",

          zIndex: 0,

          transform: "rotate(0deg)",

          transformOrigin: "center center",

          "& svg": {
            width: "100%",
            height: "auto",
            display: "block",
          },
        }}
      >
        <Illustration />
      </Box>
    </Box>
  );
}