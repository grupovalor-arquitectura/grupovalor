import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useEffect, useRef } from "react";

import { useProjects } from "../../context/ProjectsContext";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsHistorical() {
  const theme = useTheme();
  const { archiveProjects } = useProjects();

  const sectionRef = useRef(null);
  const linesRef = useRef([]);

    useEffect(() => {
    if (!archiveProjects.length) return;


   linesRef.current.forEach((line, index) => {
        if (!line) return;

        const length = line.getTotalLength();

    
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

    ScrollTrigger.refresh();

    }, [archiveProjects]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        bgcolor: "primary.main",

        pt: 10,
        pb: 12,

        px: {
          xs: 2,
          md: 7,
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

            alignItems: "baseline",

            gap: 8,
        }}
        >
        {/* Columna izquierda */}

       <Typography
            sx={{
                width: {
                md: 220,
                lg: 260,
                },

                flexShrink: 0,

                color: "background.default",

                fontSize: "2rem",

                fontWeight: 600,

                lineHeight: 1.1,
            }}
            >
            Trayectoria
        </Typography>
        {/* Columna derecha */}

        <Box sx={{ flex: 1 }}>
          {archiveProjects.map((project, index) => (
            <Box key={project.id}>
              <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        md: "row",
                        },

                    alignItems: {
                        xs: "flex-start",
                        md: "baseline",
                        },

                    gap: {
                        xs: 1,
                        md: 6,
                        },

                    py: 3,
                }}
              >
                {/* Número */}

                <Typography
                  sx={{
                    width: {
                        xs: "auto",
                        md: 60,
                    },

                    fontSize: {
                        xs: "1.2rem",
                        md: "1.5rem",
                    },

                    flexShrink: 0,
                    fontWeight: 600,

                    color: "background.default",
                  }}
                >
                  {String(project.id).padStart(2, "0")}
                </Typography>

                {/* Proyecto */}

                <Box
                  sx={{
                    flex: 2,
                    flex: {
                        xs: "unset",
                        md: 2,
                    },

                    width: {
                        xs: "100%",
                        md: "auto",
                    },

                    minWidth: 0,
                  }}
                >
                  <Typography
                    sx={{
                     fontSize: {
                        xs: "1.5rem",
                        md: "2rem",
                    },

                      fontWeight: 600,

                      lineHeight: 1.1,

                      color: "background.default",
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.5,

                      color: "background.default",

                      opacity: 0.8,
                    }}
                  >
                    {project.location}
                  </Typography>
                </Box>

                {/* Información */}

                <Box
                  sx={{
                    flex: 1.2,

                    minWidth: 0,

                    display: "flex",

                    flexDirection: "column",

                    alignItems: "flex-end",

                    textAlign: "right",
                  }}
                >
                  <Typography
                    sx={{
                      color: "background.default",
                    }}
                  >
                    {project.type}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.5,

                      color: "background.default",

                      opacity: 0.8,
                    }}
                  >
                    {project.scale}
                  </Typography>
                </Box>

                {/* Año */}

                <Typography
                  sx={{
                    flex: 0.45,

                    textAlign: "right",

                    whiteSpace: "nowrap",

                    color: "background.default",
                  }}
                >
                  {project.year}
                </Typography>
              </Box>

              {index !== archiveProjects.length - 1 && (
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
  );
}