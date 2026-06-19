import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import GVMono from "../assets/GVMono.svg?react";

const defaultBranding = {
  background: "#421b1e",
  text: "#d6cfc9",
};

export default function Footer({
  branding,
}) {
  const colors =
    branding || defaultBranding;

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: colors.secondary,
        color: colors.primary,
        px: { xs: 2, md: 7 },
        pt: { xs: 5, md: 12 },
        pb: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent:
            "space-between",
          flexWrap: "wrap",
          gap: 4,
          alignItems: "stretch",
        }}
      >
        {/* LOGO + DIVIDER + DIRECCIÓN */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 3,
          }}
        >
          <GVMono
            style={{
              height: 90,
              width: "auto",
              color: colors.primary,
            }}
          />

          <Box
            sx={{
              width: "2px",
              height: "auto",
              alignSelf: "stretch",
              backgroundColor:
                colors.text,
              opacity: 0.3,
              mx: "20px",
            }}
          />

          <Box>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 800,
                mb: 1,
              }}
            >
              Oficina Principal
            </Typography>

            <Typography
              sx={{
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              Edificio Monserrate <br />
              Calle 3 Sur # 43 A - 52.{" "}
              <br />
              Oficina 1122 <br />
              Bogotá, Colombia.
            </Typography>
          </Box>
        </Box>

        {/* LINKS */}
        <Box>
          <Typography
            sx={{
              fontSize: 14,
              lineHeight: 2,
            }}
          >
            Términos y condiciones <br />
            Políticas de privacidad <br />
            Manifiesto <br />
            Línea ética
          </Typography>
        </Box>

        {/* CONTACTO */}
        <Box>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 800,
              mb: 1,
            }}
          >
            ¿Quieres invertir o <br />
            tienes alguna consulta?
          </Typography>
        </Box>

        {/* FORMULARIO */}
        <Box
          sx={{
            minWidth: 280,
            textAlign: "right",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Typography
            sx={{
              mb: 2,
              fontSize: 20,
              fontWeight: 800,
            }}
          >
            Suscríbete a nuestro boletín{" "}
            <br />
            y entérate de nuestros
            proyectos
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <TextField
              placeholder="example@email.com"
              size="small"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root":
                  {
                    borderRadius:
                      "999px",

                    color:
                      colors.text,

                    "& fieldset": {
                      borderColor:
                        `${colors.text}66`,
                    },

                    "&:hover fieldset":
                      {
                        borderColor:
                          colors.text,
                      },

                    "&.Mui-focused fieldset":
                      {
                        borderColor:
                          colors.text,
                      },
                  },

                "& input::placeholder":
                  {
                    color:
                      colors.text,
                    opacity: 0.5,
                  },
              }}
            />

            <Button
              variant="outlined"
              sx={{
                borderRadius:
                  "999px",
                px: 3,

                color: colors.text,

                borderColor:
                  `${colors.text}66`,

                "&:hover": {
                  borderColor:
                    colors.text,
                  color:
                    colors.text,
                },
              }}
            >
              enviar
            </Button>
          </Box>

          <Typography
            sx={{
              fontSize: 12,
              mt: 1.5,
              color: colors.text,
            }}
          >
            Formulario enviado.
            Revisa tu bandeja.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}