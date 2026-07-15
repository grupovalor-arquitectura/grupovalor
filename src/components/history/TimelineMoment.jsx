import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

export default function TimelineMoment({ 
  moment, 
  circleRef }) {


  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("md")
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: {
          xs: "75vh",
          md: "100vh",
        },

        display: "flex",
        alignItems: "center",

        pt: {
      xs: 20,   // prueba primero con este valor
      md: 0,
    },

        pl: {
          xs: 4,
          md: "32%",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "650px",
          },
        }}
      >
        {/* CÍRCULO + LABEL */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: {
              xs: 0,
              md: "40px",
          },
            mb: 4,
          }}
        >
        {!isMobile && (
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
        )}

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
            ml: {
              xs: 0,
              md: "124px",
            },

            fontSize: {
              xs: "3rem",
              md: "4.5rem",
            },

            fontWeight: 700,

            lineHeight: 0.95,

            color: "#D9C8C5",

            maxWidth: {
              xs: "100%",
              md: "500px",
            },

            mb: 4,
          }}
        >
          {moment.title}
        </Typography>

        {/* DESCRIPCIÓN */}

        <Typography
          sx={{
             ml: {
              xs: 0,
              md: "124px",
            },

            maxWidth: {
              xs: "80%",
              md: "460px",
            },

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