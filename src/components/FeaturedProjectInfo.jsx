import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function FeaturedProjectInfo({
  project,
  currentIndex,
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
    >
      <Box
        sx={{
          px: { xs: 2, md: 4 },

          display: "flex",
          flexDirection: "column",

          justifyContent: "space-between",

          height: "90vh",
        }}
      >
        {/* TOP */}
        <Box>
          <Typography
            sx={{
              fontSize: "48px",
              lineHeight: 1,

              color: "#421b1e",
              fontWeight: 700,
            }}
          >
            {project.title}
          </Typography>
        </Box>

        {/* BOTTOM */}
        <Box>
          <Typography
            sx={{
              color: "#421b1e",

              fontSize: "16px",

              lineHeight: 1.7,

              maxWidth: "320px",
            }}
          >
            {project.description}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}