import { Box, Typography, TextField, Button, ButtonBase } from "@mui/material";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getFooter } from "../services/footerService";

import GVMono from "../assets/GVMono.svg?react";

const defaultBranding = {
  primary: "#d6cfc9",
  secondary: "#421b1e",
  text: "#d6cfc9",
};

export default function Footer({ branding }) {

  const navigate = useNavigate();
  const colors = branding || defaultBranding;

  const [footer, setFooter] = useState(null);

  useEffect(() => {
    const loadFooter = async () => {
      try {
        const data = await getFooter();

        console.log("Footer:", data);

        setFooter(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadFooter();
  }, []);

  const footerLinks = [
    {
      label: "Términos y condiciones",
      path: "/terminos",
    },
    {
      label: "Políticas de privacidad",
      path: "/privacidad",
    },
    {
      label: "Manifiesto",
      path: "/nosotros",
    },
  ];

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
              
              Carrera 16 Nº 97 - 37{" "}
              <br />
              Bogotá, Colombia.
              <br />
              (+57) 601 404 09 84
            </Typography>
          </Box>
        </Box>

        {/* LINKS */}
     
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {footerLinks.map((item) => (
            <ButtonBase
              key={item.path}
              onClick={() => navigate(item.path)}
              sx={{
                justifyContent: "flex-start",
                py: 0.4,

                "&:hover .footer-link": {
                  opacity: 0.7,
                },
              }}
            >
              <Typography
                className="footer-link"
                sx={{
                  fontSize: 14,
                  color: colors.text,
                  transition: "opacity .2s ease",
                }}
              >
                {item.label}
              </Typography>
            </ButtonBase>
          ))}
        </Box>

        {/* CONTACTO */}
        <ButtonBase
          onClick={() => navigate("/contacto")}
          sx={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            textAlign: "left",

            "&:hover .contact-title": {
              opacity: 0.7,
            },
          }}
        >
          <Typography
            className="contact-title"
            sx={{
              fontSize: 20,
              fontWeight: 800,
              mb: 1,
              color: colors.text,
              transition: "opacity .2s ease",
            }}
          >
            ¿Quieres invertir o <br />
            tienes alguna consulta?
          </Typography>
        </ButtonBase>

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