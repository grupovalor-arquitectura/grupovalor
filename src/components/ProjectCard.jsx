import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({

  project,
  index,
  showDivider = true,
  imageAspectRatio = "4 / 3",

}) {

  const navigate = useNavigate();

  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            once: false,
            toggleActions: "play none none reverse",
        },
    });
    }, []);

return (
  <Box
    ref={cardRef}
    sx={{
      mt: index === 0 ? 0 : 6,
    }}>

    {/* HEADER */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        mb: 4,
      }}
    >
      <Typography
        sx={{
          fontSize: "34px",
          lineHeight: 1,
          fontWeight: 700,
          color: "background.default",
          maxWidth: "70%",
        }}
      >
        {project.title}
      </Typography>

      <Typography
        sx={{
          fontSize: "18px",
          lineHeight: 1,
          fontWeight: 700,
          color: "background.default",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </Typography>
    </Box>

    {/* IMAGE */}
    <Box
      onClick={() => navigate(`/proyectos/${project.slug}`)}
      sx={{
        width: "100%",
        aspectRatio: imageAspectRatio,
        overflow: "hidden",
        cursor: "pointer",
        mb: 3,
      }}
    >
      {project.coverImage && (
        <Box
          component="img"
          src={project.coverImage}
          alt={project.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform .8s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
      )}
    </Box>

    {/* LOCATION */}
    <Typography
      sx={{
        mb: 2,
        fontSize: "18px",
        lineHeight: 1.3,
        fontWeight: 700,
        color: "background.default",
      }}
    >
      {project.location}
    </Typography>

    {/* DESCRIPTION */}
    <Typography
      sx={{
        fontSize: "16px",
        lineHeight: 1.7,
        color: "background.default",
      }}
    >
      {project.shortDescription}
    </Typography>

    {/* DIVIDER */}
    {showDivider && (
      <Box
        sx={{
          width: "100%",
          height: "1px",
          bgcolor: "background.default",
          opacity: 0.2,
          mt: 5,
        }}
      />
    )}
  </Box>
);
}