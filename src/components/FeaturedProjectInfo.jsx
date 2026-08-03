import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function FeaturedProjectInfo({
  project,
}) {
return (
  <motion.div
    initial={{
      opacity: 0,
      y: 60,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
      amount: 0.4,
    }}
    transition={{
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    }}
    style={{
      height: "100%",
    }}
  >
    <Box
      sx={{
        px: { xs: 2, md: 7 },
        height: "90vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* TOP */}
      <Box sx={{ mb: 1 }}>
        <Typography
          sx={{
            fontSize: {
              xs: "20px",
              md: "25px",
            },
            lineHeight: 1,
            fontWeight: 300,
            color: "background.default",
            marginBottom: 0,
          }}
        >
          Proyectos destacados
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: {
              xs: "40px",
              md: "48px",
            },
            lineHeight: 1,
            fontWeight: 700,
            color: "background.default",
          }}
        >
          {project.title}
        </Typography>
      </Box>

      {/* BOTTOM */}
      <Box sx={{ mt: "auto" }}>
        <Typography
          sx={{
            maxWidth: 340,
            fontSize: "16px",
            lineHeight: 1.7,
            color: "background.default",
          }}
        >
          {project.shortDescription}
        </Typography>
      </Box>
    </Box>
  </motion.div>
  );
}