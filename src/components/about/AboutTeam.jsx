import { useEffect, useRef } from "react";

import { Box, Typography } from "@mui/material";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutTeam({ team }) {
    const leaders = team;

    const leadersBackground = "background.default";
    const leadersText = "primary.main";

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
            key={leader.id}
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

                    flexDirection: {
                    xs: "column",
                    md: "row",
                    },

                    alignItems: "flex-start",

                    gap: {
                    xs: 2,
                    md: 6,
                    },
                                }}
            >
                {/* NOMBRE + CARGO */}

                <Box
                    sx={{
                        flexShrink: 0,

                        width: {
                        xs: "100%",
                        md: 420,
                        },

                        display: "flex",
                        flexDirection: "column",

                        alignItems: {
                        xs: "flex-start",
                        md: "flex-end",
                        },

                        textAlign: {
                        xs: "left",
                        md: "right",
                        },
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
                    display: {
                    xs: "none",
                    md: "block",
                    },

                    width: "2px",

                    alignSelf: "stretch",

                    backgroundColor: leadersText,

                    opacity: 0.25,

                    flexShrink: 0,
                }}
                />

                {/* FOTO + BIO */}

                    <Box
                    sx={{
                        width: {
                        xs: "100%",
                        md: "55%",
                        },

                        display: "flex",
                        flexDirection: "column",

                        gap: 3,
                    }}
                    >
                    {/* Foto */}

                    {leader.image ? (
                        <Box
                        component="img"
                        src={leader.image}
                        alt={leader.name}
                        sx={{
                            width: {
                            xs: "100%",
                            md: 220,
                            },

                            aspectRatio: "3 / 4",

                            objectFit: "cover",

                            display: "block",

                            bgcolor: "primary.main",
                        }}
                        />
                    ) : (
                        <Box
                        sx={{
                            width: {
                            xs: "100%",
                            md: 220,
                            },

                            aspectRatio: "3 / 4",

                            bgcolor: "primary.main",
                        }}
                        />
                    )}

                    {/* Bio */}

                    <Typography
                        sx={{
                        color: leadersText,

                        fontSize: {
                            xs: "1rem",
                            md: "1.15rem",
                        },

                        lineHeight: 1.45,

                        width: {
                            xs: "100%",
                            md: 420,
                        },
                        }}
                    >
                        {leader.bio}
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
