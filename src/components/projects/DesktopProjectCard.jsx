import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useReveal from "../../hooks/useReveal";

export default function ProjectCard({ project }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const cardRef = useRef(null);

    useReveal(cardRef);

  return (
    <Box
        ref={cardRef}
        onClick={() => navigate(`/proyectos/${project.slug}`)}
        sx={{
          width: "100%",
          height: "100%",

          display: "flex",
          flexDirection: "column",

          cursor: "pointer",

          transition: "transform .35s ease",

          "&:hover": {
            transform: {
              xs: "none",
              md: "translateY(-6px)",
            },
          },

          "&:hover img": {
            transform: {
              xs: "scale(1)",
              md: "scale(1.08)",
            },
          },
        }}
      >
      {/* HEADER */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: isMobile
              ? "36px"
              : "clamp(42px,4vw,50px)",

            fontWeight: 700,
            lineHeight: 1,

            color: "background.default",
          }}
        >
          {String(project.id).padStart(2, "0")}
        </Typography>

        <Typography
          sx={{
            fontSize: isMobile
              ? "16px"
              : "clamp(18px,1.2vw,20px)",

            fontWeight: 600,

            color: "background.default",
          }}
        >
          {project.title}
        </Typography>
      </Box>

      {/* COVER */}

      <Box
        sx={{
          width: "100%",

          ...(isMobile
            ? {
                aspectRatio: "1 / 1",
              }
            : {
                flex: 1,
              }),

          overflow: "hidden",
          position: "relative",
          bgcolor: "background.default",
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

              transition: "transform .9s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: "scale(1)",
            }}
          />
        )}
      </Box>

      {/* DESKTOP */}

      {!isMobile && (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",

              gap: 2,

              mt: 2,
              mb: 2,
            }}
          >
            <Typography
              sx={{
                flex: 1,

                fontSize: "clamp(18px,1.2vw,20px)",

                fontWeight: 600,

                color: "background.default",

                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {project.title}
            </Typography>

            <Typography
              sx={{
                flexShrink: 0,

                fontSize: "clamp(13px,0.9vw,16px)",

                color: "background.default",

                whiteSpace: "nowrap",

                textAlign: "right",
              }}
            >
              {project.location}
            </Typography>
          </Box>

          <Divider
            sx={{
              borderColor: "background.default",
            }}
          />
        </>
      )}
    </Box>
  );
}