import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState, Fragment } from "react";

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
    // Link externo: esta empresa no tiene página interna, va directo
    // al sitio de Estrategias Comerciales.
    path: "https://www.estrategiascomerciales.co/",
    external: true,
  },
  {
    label: "Banca Valor",
    path: "/empresas/banca-valor",
  },
];

const defaultBranding = {
  text: "#b9afaf",
  background: "#421b1e",
  activeText: "#421b1e",
};

export default function HeaderMenuItems({
  branding,
}) {
  const [hovered, setHovered] = useState(null);
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [companiesOpen, setCompaniesOpen] =
    useState(false);

  const colors = {
    ...defaultBranding,
    ...branding,
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
      }}
    >
      {items.map((item) => (
        <Fragment key={item.path}>
          {/* ITEM PRINCIPAL */}
          <Box
            component={NavLink}
            to={item.path}
            onMouseEnter={() =>
              setHovered(item.path)
            }
            onMouseLeave={() =>
              setHovered(null)
            }
            sx={{
              borderRadius: "999px",
              px: "16px",
              py: "4px",
              textDecoration: "none",

              border: `1px solid ${colors.text}`,

              transition:
                "all 0.25s ease",

              "&.active": {
                backgroundColor:
                  colors.text,

                borderColor:
                  colors.text,
              },

              "&:hover": {
                backgroundColor:
                  colors.text,

                borderColor:
                  colors.text,
              },
            }}
          >
            {({ isActive }) => (
              <Typography
                sx={{
                  fontSize: "14px",

                  color:
                    isActive ||
                    hovered === item.path
                      ? colors.activeText
                      : colors.text,

                  transition:
                    "color 0.25s ease",
                }}
              >
                {item.label}
              </Typography>
            )}
          </Box>

          {/* COMPAÑÍAS: justo después de Nosotros */}
          {item.path === "/nosotros" && (
            <Box
              sx={{
                position: "relative",
              }}
              onMouseEnter={() => {
                setHovered("companies");
                setCompaniesOpen(true);
              }}
              onMouseLeave={() => {
                setHovered(null);
                setCompaniesOpen(false);
              }}
            >
              <Box
                sx={{
                  borderRadius: "999px",
                  px: "16px",
                  py: "4px",

                  cursor: "pointer",

                  border: `1px solid ${colors.text}`,

                  backgroundColor:
                    companiesOpen
                      ? colors.text
                      : "transparent",

                  transition:
                    "all 0.25s ease",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",

                    color:
                      companiesOpen ||
                      hovered === "companies"
                        ? colors.activeText
                        : colors.text,

                    transition:
                      "color 0.25s ease",
                  }}
                >
                  Empresas
                </Typography>
              </Box>

              {/* SUBMENU: anclado a la derecha para no salirse del viewport */}
              {companiesOpen && (
                <Box
                  sx={{
                    position: "absolute",

                    top: "100%",
                    right: 0,

                    pt: "12px",

                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",

                    zIndex: 1000,

                    whiteSpace: "nowrap",
                  }}
                >
                  {companies.map((company) => {
                    const chipSx = {
                      borderRadius: "999px",

                      px: "12px",
                      py: "4px",

                      textDecoration: "none",

                      border: `1px solid ${colors.text}`,

                      transition:
                        "all 0.25s ease",

                      "&:hover": {
                        backgroundColor:
                          colors.text,
                      },

                      "&.active": {
                        backgroundColor:
                          colors.text,
                      },
                    };

                    // Empresa con link externo (sin página interna):
                    // <a> normal en vez de NavLink, abre en pestaña nueva.
                    if (company.external) {
                      return (
                        <Box
                          key={company.path}
                          component="a"
                          href={company.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() =>
                            setHoveredCompany(company.path)
                          }
                          onMouseLeave={() =>
                            setHoveredCompany(null)
                          }
                          sx={chipSx}
                        >
                          <Typography
                            sx={{
                              fontSize: "13px",

                              color:
                                hoveredCompany === company.path
                                  ? colors.activeText
                                  : colors.text,

                              transition:
                                "color 0.25s ease",
                            }}
                          >
                            {company.label}
                          </Typography>
                        </Box>
                      );
                    }

                    return (
                      <Box
                        key={company.path}
                        component={NavLink}
                        to={company.path}
                        onMouseEnter={() =>
                          setHoveredCompany(company.path)
                        }
                        onMouseLeave={() =>
                          setHoveredCompany(null)
                        }
                        sx={chipSx}
                      >
                        {({ isActive }) => (
                          <Typography
                            sx={{
                              fontSize: "13px",

                              color:
                                isActive ||
                                hoveredCompany === company.path
                                  ? colors.activeText
                                  : colors.text,

                              transition:
                                "color 0.25s ease",
                            }}
                          >
                            {company.label}
                          </Typography>
                        )}
                      </Box>
                    );
                  })}
                </Box>
              )}
            </Box>
          )}
        </Fragment>
      ))}
    </Box>
  );
}