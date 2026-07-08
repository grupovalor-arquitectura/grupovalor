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

  if (!footer) return null;

  return (
  <Box
    sx={{
      width: "100%",
      backgroundColor: colors.secondary,
      color: colors.primary,
      px: { xs: 4, md: 6, lg: 8 },
      py: { xs: 6, lg: 8 },
    }}
  >
    {/* =======================
        CONTENIDO SUPERIOR
    ======================== */}

    <Box
      sx={{
        display: {
          xs: "flex",
          lg: "grid",
        },

        flexDirection: "column",

        gridTemplateColumns: {
          lg: "180px 340px 1fr 320px",
        },

        rowGap: {
          xs: 5,
          lg: 0,
        },

        columnGap: {
          lg: 6,
        },

        alignItems: "start",
      }}
    >
      {/* LOGO */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
            mb: {
              xs: 1,
              lg: 0,
            },
        }}
      >
        <GVMono
          style={{
            width: 80,
            height: "auto",
            color: colors.primary,
          }}
        />
      </Box>

      {/* OFICINA */}

      <Box
        sx={{
          textAlign: {
            xs: "left",
            lg: "left",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 700,
            mb: 2,
          }}
        >
          Oficina Principal
        </Typography>

        <Typography
          sx={{
            fontSize: 16,
            lineHeight: 1.8,
          }}
        >
          {footer.office.address}
          <br />
          {footer.office.city}
          <br />
          {footer.office.phone}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "left",
              lg: "flex-start",
            },
            gap: 2,
            mt: 3,
          }}
        >
          {Object.entries(footer.social).map(([key, social]) => (
            <ButtonBase
              key={key}
              component="a"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography
                sx={{
                  color: colors.primary,
                }}
              >
                {social.label}
              </Typography>
            </ButtonBase>
          ))}
        </Box>
      </Box>

      {/* NAVEGACIÓN */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: {
            xs: "flex-start",
            lg: "flex-end",
          },
          textAlign: {
            xs: "left",
            lg: "right",
          },
          gap: 1,
        }}
      >
        {footerLinks.map((item) => (
          <ButtonBase
            key={item.path}
             sx={{
              justifyContent: {
                xs: "flex-start",
                lg: "flex-end",
              },
            }}
            onClick={() => navigate(item.path)}
          >
            <Typography
              sx={{
                color: colors.primary,
              }}
            >
              {item.label}
            </Typography>
          </ButtonBase>
        ))}
      </Box>

      {/* CTA */}

      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "flex-start",
            lg: "flex-end",
          },
          textAlign: {
            xs: "left",
            lg: "right",
          },
        }}
      >
        <ButtonBase
          onClick={() => navigate("/contacto")}
          sx={{
            justifyContent: {
              xs: "flex-start",
              lg: "flex-end",
            },
            textAlign: {
              xs: "left",
              lg: "right",
            },

            "&:hover .contact-title": {
              opacity: 0.7,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: 20,
                lg: 30,
              },
              lineHeight: 1.2,
              fontWeight: 700,
              color: colors.primary,
               whiteSpace: "pre-line",
            }}
          >
            {footer.contact.title}
          </Typography>
        </ButtonBase>
      </Box>
    </Box>

    {/* =======================
        DIVIDER
    ======================== */}

    <Box
      sx={{
        mt: {
          xs: 6,
          lg: 7,
        },
        mb: {
          xs: 4,
          lg: 3,
        },
        borderBottom: `1px solid ${colors.primary}66`,
      }}
    />

    {/* =======================
        FOOTER INFERIOR
    ======================== */}

    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: "space-between",
        alignItems: {
          xs: "flex-start",
          md: "center",
        },
        gap: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: 14,
        }}
      >
        © 2025 Grupo Valor. Todos los derechos reservados.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: {
            xs: 1,
            md: 4,
          },
        }}
      >
        <ButtonBase onClick={() => navigate("/privacidad")}>
          <Typography color={colors.text}>
            Políticas de privacidad
          </Typography>
        </ButtonBase>

        <ButtonBase onClick={() => navigate("/terminos")}>
          <Typography color={colors.text}>
            Términos y condiciones
          </Typography>
        </ButtonBase>
      </Box>
    </Box>
  </Box>
);


 }