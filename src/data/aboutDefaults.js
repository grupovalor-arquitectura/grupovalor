// Contenido con el que arrancaron "Certificaciones" y "Alianzas" en
// AboutCertifications.jsx / AboutPartners.jsx antes de que fueran
// editables desde el admin. Se usa en dos lugares:
//
// 1. Como respaldo en el sitio público (AboutCertifications /
//    AboutPartners), por si about.certifications / about.partners
//    todavía no existen en Firestore.
// 2. Como contenido inicial en el panel de admin (About), para que al
//    abrir la sección por primera vez ya aparezca lo que hoy está
//    publicado, y con un solo "Guardar cambios" quede migrado a la
//    base de datos.

import logoAlianza from "../assets/logos/Alianza.png";
import logoCredicorp from "../assets/logos/Credicorp.svg";
import logoPaladin from "../assets/logos/Paladin.webp";
import logoDavivienda from "../assets/logos/Davivienda.png";
import logoBancoOccidente from "../assets/logos/Banco de Occidente.png";
import logoBBVA from "../assets/logos/bbva-logo-png_seeklogo-352321.png";
import logoBancoCajaSocial from "../assets/logos/logo-bcs.svg";
import logoConstructoraExperta from "../assets/logos/cropped-LOGO-ALARGADO-01.png";
import logoConvel from "../assets/logos/Convel.png";
import logoMQI from "../assets/logos/merquimia.jpg";

export const defaultCertifications = [
  {
    title: "Miembro del Consejo Colombiano de Construcción Sostenible (CCCS)",
    year: "Desde 2013",
  },
  {
    title: "Metodología BIM",
    year: "Desde 2015",
  },
  {
    title: "Reconocimiento Sociedad Colombiana de Arquitectos",
    year: "2024",
  },
  {
    title: "Premio Fundadores — Sociedad Colombiana de Ingenieros",
    year: "2026",
  },
];

export const defaultPartners = [
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
  },
  {
    name: "MQI Inversiones",
    url: "https://merquimiagroup.com/en/home/",
    logo: logoMQI,
  },
];

export const featuredClient = "Embajada de la República Popular China en Colombia";
