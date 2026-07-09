import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useProjects } from "../../context/ProjectsContext";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectNavigation({ project }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const { projects } = useProjects();

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

  const { previousProject, nextProject } = useMemo(() => {
    const currentIndex = projects.findIndex(
      (item) => item.slug === project.slug
    );

    return {
      previousProject:
        currentIndex > 0
          ? projects[currentIndex - 1]
          : null,

      nextProject:
        currentIndex < projects.length - 1
          ? projects[currentIndex + 1]
          : null,
    };
  }, [projects, project]);

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
      {/* Línea superior */}

      <Box
        sx={{
          width: "100%",
          height: "1px",
          mb: 5,
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
            ref={(el) => (linesRef.current[0] = el)}
            x1="0"
            y1="1"
            x2="100%"
            y2="1"
            stroke={theme.palette.background.default}
            strokeWidth="0.25"
          />
        </svg>
      </Box>

      <Box
        sx={{
          display: "flex",

          flexDirection: {
            xs: "column",
            md: "row",
          },

          gap: {
            xs: 6,
            md: 0,
          },
        }}
      >
        {/* Proyecto anterior */}

        <Box
          onClick={() =>
            previousProject &&
            navigate(`/proyectos/${previousProject.slug}`)
          }
          sx={{
            flex: 1,

            cursor: previousProject ? "pointer" : "default",

            transition: ".3s",

            "&:hover .title": {
              opacity: .7,
            },
          }}
        >
          <Typography
            sx={{
              color: "background.default",

              opacity: .7,

              mb: 1,

              fontSize: ".9rem",
            }}
          >
            ← Proyecto anterior
          </Typography>

          <Typography
            className="title"
            sx={{
              color: "background.default",

              fontSize: {
                xs: "1rem",
                md: "2rem",
              },

              fontWeight: 600,

              transition: ".3s",
            }}
          >
            {previousProject?.title || "—"}
          </Typography>
        </Box>

        {/* Proyecto siguiente */}

        <Box
          onClick={() =>
            nextProject &&
            navigate(`/proyectos/${nextProject.slug}`)
          }
          sx={{
            flex: 1,

            textAlign: {
              xs: "left",
              md: "right",
            },

            cursor: nextProject ? "pointer" : "default",

            transition: ".3s",

            "&:hover .title": {
              opacity: .7,
            },
          }}
        >
          <Typography
            sx={{
              color: "background.default",

              opacity: .7,

              mb: 1,

              fontSize: ".9rem",
            }}
          >
            Proyecto siguiente →
          </Typography>

          <Typography
            className="title"
            sx={{
              color: "background.default",

              fontSize: {
                xs: "1rem",
                md: "2rem",
              },

              fontWeight: 600,

              transition: ".3s",
            }}
          >
            {nextProject?.title || "—"}
          </Typography>
        </Box>
      </Box>

    

     
    </Box>
  );
}