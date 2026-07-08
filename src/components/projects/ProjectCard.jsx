import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useRef } from "react";
import useReveal from "../../hooks/useReveal";

export default function ProjectCard({ project }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const cardRef = useRef(null);

    useReveal(cardRef);

  return (
    <Box
      ref={cardRef}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
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

          bgcolor: project.coverImage
            ? "transparent"
            : "background.default",

          backgroundImage: project.coverImage
            ? `url(${project.coverImage})`
            : "none",

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

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