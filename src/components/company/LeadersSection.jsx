
import { Box, Typography } from "@mui/material";
import Comillas from "../../assets/comillas.svg?react";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LeadersSection({ company }) {

    const leaders = company.leaders;

    const { leadersBackground, leadersText, } = company.branding;

    const sectionRef = useRef(null);
    const circleRef = useRef(null);
    const contentRef = useRef(null);
    const leadersRef = useRef([]);

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
    }, []);

  useEffect(() => {
        if (!contentRef.current) return;

        gsap.fromTo(
            contentRef.current,
            {
            y: 120,
            },
            {
            y: 0,

            ease: "none",

            scrollTrigger: {
                trigger: sectionRef.current,

                start: "top bottom",
                end: "top center",

                scrub: true,
            },
            }
        );
        }, []);

  useEffect(() => {
    leadersRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
        item,
        {
            opacity: 0,
            y: 80,
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
        position: "relative",
        
         zIndex: 10,

        backgroundColor: leadersBackground,

        px: {
          xs: 4,
          md: 8,
        },

        pt: 16,
        pb: 20,

        overflow: "visible",
      }}
    >

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

                backgroundColor: leadersBackground,

                zIndex: 5,
            }}
            />
      {/* COMILLAS SUPERIOR IZQUIERDA */}

        {/* CAPA DECORATIVA DE COMILLAS */}
        <Box
        sx={{
            position: "absolute",
            inset: 0,

            overflow: "hidden",

            pointerEvents: "none",

            zIndex: 1,
        }}
        >
        {/* COMILLA SUPERIOR IZQUIERDA */}

        <Box
            sx={{
            position: "absolute",

            top: -20,
            left: -100,

            width: {
                xs: 140,
                md: 500,
            },

            color: leadersText,

            "& svg": {
                width: "100%",
                height: "auto",
                display: "block",
            },
            }}
        >
            <Comillas />
        </Box>

        {/* COMILLA INFERIOR DERECHA */}

        <Box
            sx={{
            position: "absolute",

            right: -100,
            bottom: -20,

            width: {
                xs: 140,
                md: 500,
            },

            color: leadersText,

            transform: "rotate(180deg)",

            "& svg": {
                width: "100%",
                height: "auto",
                display: "block",
            },
            }}
        >
            <Comillas />
        </Box>
        </Box>

        

            <Box
        ref={contentRef}
        sx={{
            position: "relative",
            zIndex: 2,
        }}
        >

        {leaders.map((leader, index) => (
        <Box
            ref={(el) => (leadersRef.current[index] = el)}
            key={leader.name}
            sx={{
            display: "flex",

            justifyContent:
                index % 2 === 0
                ? "flex-end"
                : "flex-start",

            mb: index === leaders.length - 1 ? 0 : 16,
            }}
        >
            <Box
            sx={{
                width: {
                md: 900,
                },

                maxWidth: "100%",
            }}
            >
            <Box
                sx={{
                display: "flex",

                alignItems: "flex-start",

                gap: 6,
                }}
            >
                {/* NOMBRE + CARGO */}

                <Box
                sx={{

                    flexShrink: 0,
                }}
                >
                <Typography
                    sx={{
                    color: leadersText,

                    fontSize: {
                        xs: "2rem",
                        md: "4rem",
                    },

                    width: {
                        xs: "100%",
                        md: 420,
                        },

                    fontWeight: 600,

                    lineHeight: 1,
                    }}
                >
                    {leader.name}
                </Typography>

                <Typography
                    sx={{
                    color: leadersText,

                    mt: 1,

                    fontSize: {
                        xs: "1rem",
                        md: "1.25rem",
                    },

                    opacity: 0.9,
                    }}
                >
                    {leader.role}
                </Typography>
                </Box>

                {/* DIVISOR */}

                <Box
                sx={{
                    width: "2px",
                    minHeight: 200,
                    backgroundColor: leadersText,
                    
                    flexShrink: 0,
                }}
                />

                {/* TESTIMONIO */}

                <Box
                sx={{
                    width: "55%",
                }}
                >
                <Typography
                    sx={{
                    color: leadersText,

                    fontSize: {
                        xs: "1rem",
                        md: "1.15rem",
                    },

                    lineHeight: 1.45,

                     width: 420,

                    height: 200,

                    display: "flex",

                    alignItems: "flex-end",
                    }}

                    
                >
                    { leader.quote}
                </Typography>
                </Box>
            </Box>
            </Box>
        </Box>
   ))}
  </Box>

</Box>
);
}
