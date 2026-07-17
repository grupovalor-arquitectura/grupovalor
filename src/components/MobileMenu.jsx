import { Box, Typography, Collapse } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const items = [
  {
    label: "Proyectos",
    path: "/proyectos",
  },
  {
    label: "Historia",
    path: "/historia",
  },
  {
    label: "Nosotros",
    path: "/nosotros",
  },

  {
    label: "Grupo Valor",
    expandable: true,
  },

  {
    label: "Contacto",
    path: "/contacto",
  },
];

const companies = [
  {
    label: "Arquitectura Valor",
    path: "/empresas/arquitectura-valor",
  },
  {
    label: "Constructora Valor",
    path: "/empresas/constructora-valor",
  },
  {
    label: "Promotora Valor",
    path: "/empresas/promotora-valor",
  },
  {
    label: "Estrategias Valor",
    path: "/empresas/estrategia-valor",
  },
  {
    label: "Banca Valor",
    path: "/empresas/banca-valor",
  },
];

const defaultBranding = {
  text: "#bfafaa",
  background: "#421b1e",
  activeText: "#c16242"
};

export default function MobileMenu({

  isOpen,
  onClose,
  branding,

}) {

  const colors = branding || defaultBranding;
  const [companiesOpen, setCompaniesOpen] = useState(false);
  

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,

        display: {
          xs: "flex",
          md: "none",
        },

        flexDirection: "column",
        backgroundColor: colors.heroBackground || defaultBranding.background,
        visibility: isOpen ? "visible" : "hidden",
        opacity: isOpen ? 1 : 0,
        transition: "opacity .35s ease",
        pointerEvents: isOpen ? "auto" : "none",
        zIndex: 1200,
        pt: "96px",
      }}
    >
      <Box
        sx={{
          mt: 4,
        }}
      >
        {items.map((item) => {
          if (item.expandable) {
            return (
              <Box key={item.label}>
                <Box
                  onClick={() => setCompaniesOpen(!companiesOpen)}
                  sx={{
                    width: "100%",
                    py: 3,
                    px: 4,
                    display: "flex",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                    borderBottom: "1px solid rgba(255,255,255,.10)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 30,
                        sm: 36,
                      },
                      fontWeight: 600,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      color: colors.text ?? defaultBranding.text,
                    }}
                  >
                    Grupo Valor
                  </Typography>
                </Box>

                <Collapse in={companiesOpen}>
                  {companies.map((company) => (
                    <Box
                      key={company.path}
                      component={NavLink}
                      to={company.path}
                      onClick={onClose}
                      sx={{
                        width: "100%",
                        py: 2,
                        px: 4,
                        display: "flex",
                        justifyContent: "flex-end",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(255,255,255,.05)",
                      }}
                    >
                      {({ isActive }) => (
                        <Typography
                          sx={{
                            fontSize: 22,
                            fontWeight: 500,
                            color: isActive
                              ? (colors.activeText ?? defaultBranding.activeText)
                              : (colors.text ?? defaultBranding.text),
                          }}
                        >
                          {company.label}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Collapse>
              </Box>
            );
}

          return (
            <Box
              key={item.path}
              component={NavLink}
              to={item.path}
              onClick={onClose}
              sx={{
                width: "100%",
                py: 3,
                px: 4,
                display: "flex",
                justifyContent: "flex-end",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,.10)",
              }}
            >
              {({ isActive }) => (
                <Typography
                  sx={{
                    fontSize: {
                      xs: 30,
                      sm: 36,
                    },
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    color: isActive
                      ? (colors.activeText ?? defaultBranding.activeText)
                      : (colors.text ?? defaultBranding.text),
                    transition: "opacity .25s ease",
                    "&:hover": {
                      opacity: 0.65,
                    },
                  }}
                >
                  {item.label}
                </Typography>
              )}
            </Box>
          );
        })}
        
      </Box>
    </Box>
  );
}