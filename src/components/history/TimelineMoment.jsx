import { Box, Typography } from "@mui/material";

export default function TimelineMoment({ moment, circleRef }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",

        display: "flex",
        alignItems: "center",

        pl: {
          xs: 4,
          md: "32%",
        },
      }}
    >
      <Box
        sx={{
          width: "650px",
        }}
      >
        {/* CÍRCULO + LABEL */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            mb: 4,
          }}
        >
          <Box
            ref={circleRef || null}
            sx={{
              width: 84,
              height: 84,
              borderRadius: "50%",
              backgroundColor: "#C76A45",
              flexShrink: 0,
            }}
          />

          <Typography
            sx={{
              fontSize: {
                xs: "3rem",
                md: "4rem",
              },

              fontWeight: 700,
              lineHeight: 1,

              color: "transparent",

              WebkitTextStroke: "1px #C76A45",

              textTransform: "lowercase",
            }}
          >
            {moment.label}
          </Typography>
        </Box>

        {/* TÍTULO */}

        <Typography
          sx={{
            ml: "124px",

            fontSize: {
              xs: "3rem",
              md: "4.5rem",
            },

            fontWeight: 700,

            lineHeight: 0.95,

            color: "#D9C8C5",

            maxWidth: "500px",

            mb: 4,
          }}
        >
          {moment.title}
        </Typography>

        {/* DESCRIPCIÓN */}

        <Typography
          sx={{
            ml: "124px",

            maxWidth: "460px",

            color: "#D9C8C5",

            fontSize: "0.95rem",

            lineHeight: 1.6,

            whiteSpace: "pre-line",
          }}
        >
          {moment.description}
        </Typography>
      </Box>
    </Box>
  );
}