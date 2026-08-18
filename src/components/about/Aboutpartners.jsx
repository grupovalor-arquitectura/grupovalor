import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 🖼️ Logos de aliados, ya conectados desde src/assets/logos/.
// El de Constructora Experta quedó mapeado por eliminación
// (cropped-LOGO-ALARGADO-01.png era el único archivo sin nombre de
// empresa) — confirmar que sea el correcto.
import logoAlianza from "../../assets/logos/Alianza.png";
import logoCredicorp from "../../assets/logos/Credicorp.svg";
import logoPaladin from "../../assets/logos/Paladin.webp";
import logoDavivienda from "../../assets/logos/Davivienda.png";
import logoBancoOccidente from "../../assets/logos/Banco de Occidente.png";
import logoBBVA from "../../assets/logos/bbva-logo-png_seeklogo-352321.png";
import logoBancoCajaSocial from "../../assets/logos/logo-bcs.svg";
import logoConstructoraExperta from "../../assets/logos/cropped-LOGO-ALARGADO-01.png";
import logoConvel from "../../assets/logos/Convel.png";
import logoMQI from "../../assets/logos/merquimia.jpg";

const partners = [
  {
    name: "Alianza Fiduciaria",
    url: "https://www.alianza.com.co",
    logo: logoAlianza,
  },
  {
    name: "Credicorp Capital",
    url: "https://www.credicorpcapital.com",
    logo: logoCredicorp,
  },
  {
    name: "Paladin Realty Partners",
    url: "https://paladinrealty.com",
    logo: logoPaladin,
  },
  {
    name: "Davivienda",
    url: "https://www.davivienda.com",
    logo: logoDavivienda,
  },
  {
    name: "Banco de Occidente",
    url: "https://www.bancodeoccidente.com.co",
    logo: logoBancoOccidente,
  },
  {
    name: "BBVA Colombia",
    url: "https://www.bbva.com.co",
    logo: logoBBVA,
  },
  {
    name: "Banco Caja Social",
    url: "https://www.bancocajasocial.com",
    logo: logoBancoCajaSocial,
  },
  {
    name: "Constructora Experta",
    url: "https://www.constructoraexperta.com",
    logo: logoConstructoraExperta,
  },
  {
    name: "Constructora Convel",
    url: "https://www.convel.co",
    logo: logoConvel,
    // Su archivo trae más "aire" (padding transparente) alrededor
    // del isotipo que el resto de los logos, así que a igual
    // maxHeight se ve más chico. Se compensa con un tamaño mayor.
    logoMaxHeight: { xs: 110, md: 150 },
    // Menos padding en la card para darle más aire disponible al logo.
    cardPadding: { xs: 1, md: 1.5 },
  },
  {
    name: "MQI Inversiones",
    url: "https://merquimiagroup.com/en/home/",
    logo: logoMQI,
  },
];

const featuredClient = "Embajada de la República Popular China en Colombia";

export default function AboutPartners() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,

        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      gridRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,

        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        bgcolor: "primary.main",
        color: "background.default",

        px: {
          xs: 4,
          md: 8,
        },

        py: {
          xs: 10,
          md: 14,
        },
      }}
    >
      <Typography
        ref={titleRef}
        variant="h2"
        sx={{
          lineHeight: 1,
          fontWeight: 700,
          mb: {
            xs: 6,
            md: 8,
          },
        }}
      >
        Aliados
      </Typography>

      <Box
        ref={gridRef}
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
          },

          gap: {
            xs: 2,
            md: 3,
          },
        }}
      >
        {partners.map((partner) => (
          <Box
            key={partner.name}
            component="a"
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",

              aspectRatio: "16 / 9",

              // Evita que el grid ensanche la columna por el tamaño
              // natural del logo (bug clásico de CSS grid con <img>).
              minWidth: 0,
              minHeight: 0,
              overflow: "hidden",

              px: partner.cardPadding ?? 3,
              py: partner.cardPadding ?? 3,

              // Mismo tono que el fondo de la sección: los logos
              // quedan "flotando" sin ninguna caja visible.
              bgcolor: "primary.main",
              borderRadius: "12px",

              textDecoration: "none",
              color: "background.default",

              boxShadow: "0 0 0 0 rgba(0,0,0,0)",
              transition: "transform .25s ease, box-shadow .25s ease",

              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 10px 24px rgba(66, 27, 30, .18)",
              },
            }}
          >
            {partner.logo ? (
              <Box
                component="img"
                src={partner.logo}
                alt={partner.name}
                sx={{
                  maxWidth: "100%",
                  maxHeight: partner.logoMaxHeight ?? {
                    xs: 48,
                    md: 64,
                  },
                  objectFit: "contain",
                }}
              />
            ) : (
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                {partner.name}
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      {/* CLIENTE DESTACADO */}
      <Box
        sx={{
          mt: {
            xs: 8,
            md: 10,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "0.85rem",
            opacity: 0.6,
            mb: 1,
          }}
        >
          Cliente destacado
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: "1.1rem",
              md: "1.4rem",
            },
            fontWeight: 700,
          }}
        >
          {featuredClient}
        </Typography>
      </Box>
    </Box>
  );
}