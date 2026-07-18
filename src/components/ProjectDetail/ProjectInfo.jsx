import { Box, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectInfo({ project }) {
  const theme = useTheme();

  const linesRef = useRef([]);

  useEffect(() => {
    const animations = [];

    linesRef.current.forEach((line) => {
        if (!line) return;

        const length = line.getTotalLength();

        gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: length,
        });

        const animation = gsap.to(line, {
        strokeDashoffset: 0,
        ease: "none",

        scrollTrigger: {
            trigger: line,
            start: "top 95%",
            end: "top 30%",
            scrub: 1,
        },
        });

        animations.push(animation);
    });

    ScrollTrigger.refresh();

    return () => {
        animations.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
        });
    };
    }, []);

  const rows = [
    {
      label: "Ubicación",
      value: project.location,
    },
    {
      label: "Año",
      value: project.year,
    },
    {
      label: "Tipo",
      value: project.type,
    },
    {
      label: "Estado",
      value: project.status,
    },
    {
      label: "Sitio web",
      value: project.website?.url ? (
        <Link
          href={project.website.url}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          color="inherit"
          sx={{
            cursor: "pointer",
            transition: ".3s",

            "&:hover": {
              color: "secondary.main",
            },
          }}
        >
          {project.website.label}
        </Link>
      ) : (
        "-"
      ),
    },
  ];

 return (
  <Box
    sx={{
      bgcolor: "primary.main",

      px: {
        xs: 3,
        md: 7,
      },

      py: {
        xs: 8,
        md: 12,
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

        alignItems: "flex-start",

        gap: {
          xs: 4,
          md: 10,
        },
      }}
    >
      {/* Columna izquierda */}

      <Box
        sx={{
          width: {
            xs: "100%",
            md: 220,
            lg: 260,
          },

          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            color: "background.default",

            fontSize: {
              xs: "3rem",
              md: "4.5rem",
            },

            fontWeight: 600,

            lineHeight: 1,
          }}
        >
          {project.title}
        </Typography>
      </Box>

      {/* Columna derecha */}

      <Box
        sx={{
          flex: 1,
          minWidth: 0,
        }}
      >
        {/* Descripción */}

        <Typography
          sx={{
            width: "100%",

            maxWidth: {
                md: 560,
                lg: 620,
                xl: 680,
            },
            color: "background.default",

            fontSize: {
              xs: "1rem",
              md: "1rem",
            },

            whiteSpace: "pre-line",
            overflowWrap: "break-word",
            wordBreak: "break-word",

            lineHeight: 1.35,
          }}
        >
          {project.description}
        </Typography>

        {/* Información */}

        <Box sx={{ mt: 8 }}>
          {rows.map((row, index) => (
            <Box key={row.label}>
              <Box
                sx={{
                  display: "flex",

                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },

                  gap: {
                    xs: 1,
                    md: 6,
                  },

                  py: 3,
                }}
              >
                {/* Label */}

                <Typography
                  sx={{
                    width: {
                      xs: "100%",
                      md: 220,
                    },

                    flexShrink: 0,

                    color: "background.default",

                    fontWeight: 600,

                    fontSize: "1rem",
                  }}
                >
                  {row.label}
                </Typography>

                {/* Valor */}

                <Box
                  sx={{
                    flex: 1,

                    display: "flex",

                    justifyContent: {
                      xs: "flex-start",
                      md: "flex-end",
                    },
                  }}
                >
                  <Typography
                    component="div"
                    sx={{
                      color: "background.default",

                      textAlign: {
                        xs: "left",
                        md: "right",
                      },

                      fontSize: {
                        xs: "1rem",
                        md: "1.15rem",
                      },
                    }}
                  >
                    {row.value}
                  </Typography>
                </Box>
              </Box>

              {index !== rows.length - 1 && (
                <Box
                  sx={{
                    mt: 3,
                    width: "100%",
                    height: "1px",
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
                    ref={(el) => (linesRef.current[index] = el)}
                    x1="0"
                    y1="1"
                    x2="100%"
                    y2="1"
                    stroke={theme.palette.background.default}
                    strokeWidth="0.25"
                    />
                  </svg>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
);
}