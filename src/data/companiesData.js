
import LogoAV from "../assets/LogoAV.svg?react";
import IllustrationAV from "../assets/IllustrationAV.svg?react";

import LogoGV from "../assets/LogoGV.svg?react";
import LogoCV from "../assets/LogoCV.svg?react";
import LogoPV from "../assets/LogoPV.svg?react";
import LogoEV from "../assets/LogoEV.svg?react";
import LogoBV from "../assets/LogoBV.svg?react";

import AVMono from "../assets/AVMono.svg?react";
import CVMono from "../assets/CVMono.svg?react";
import PVMono from "../assets/PVMono.svg?react";
import EVMono from "../assets/EVMono.svg?react";
import BVMono from "../assets/BVMono.svg?react";
import GVMono from "../assets/GVMono.svg?react";


export const companiesData = {

  "arquitectura-valor": {
    slug: "arquitectura-valor",
    name: "Arquitectura Valor",
    logo: LogoAV,
    monogram: AVMono,
    tagline: `Valor
              más allá
              del diseño`,

    intro:"Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    illustration: IllustrationAV,

    branding: {
      primary: "#13473f",
      secondary: "#9fc8c4",
      text: "#9fc8c4",

      heroBackground: "#13473f",
      servicesBackground: "#9fc8c4",

      leadersBackground: "#13473f",
      leadersText: "#9fc8c4",

      accent: "#c16242",
    },

    services: [
        {             
            id: 1,
            title: "Diseño arquitectónico",
            description: "Esquema básico, anteproyecto y proyecto definitivo",
        },
        {
            id: 2,
            title: "Coordinación técnica",
            description: "Coordinación de planos con los demás diseñadores del proyecto",
        },
        {
            id: 3,
            title: "Gestión de licencias",
            description: "Trámites ante entidades competentes",
        },
        {
            id: 4,
            title: "Gerencia de proyectos",
            description:
            "Dirección, administración y control de intereses del dueño del proyecto",
        },
        {
            id: 5,
            title: "Dotación de espacios",
            description: "Dirección, administración y control de intereses del dueño del proyecto",
        },
        {
            id: 6,
            title: "Comercialización VIS",
            description: "Dirección, administración y control de intereses del dueño del proyecto",
        },
    ],

    leaders: [
      {
        id: 1,
        name: "Mónica Casas",
        role: "Gerente General — COO",
        quote:
          "Detrás de cada proyecto exitoso existe mucho más que una buena idea, existe la disciplina de coordinar cada decisión para convertir una visión en resultados sostenibles.",
        },
        {
          id: 2,
          name: "Andrés Felipe Porras",
          role: "Gerente de Diseño",
          quote:
            "Transformamos el espacio en vida, en decisiones y en patrimonio, creando nuevas formas de vivir que evolucionan con quienes las habitan.",
        },
    ],
  },

  "constructora-valor": {
    slug: "constructora-valor",
    name: "Constructora Valor",
    logo: LogoCV,
    monogram: CVMono,
    tagline: `Valor
              más allá
              de la obra`,
    intro:"Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    illustration: IllustrationAV,

    branding: {
      primary: "#421b1e",
      secondary: "#c16242",
      text: "#c16242",

      heroBackground: "#421b1e",
      servicesBackground: "#c16242",

      leadersBackground: "#421b1e",
      leadersText: "#c16242",

      accent: "#c16242",
    },

    services: [
      {
        id: 1,
        title: "Ejecución de obras civiles",
        description:
          "Desarrollo y construcción de proyectos conforme a los diseños, especificaciones técnicas y requerimientos aprobados.",
      },
      {
        id: 2,
        title: "Planeación técnica de obra",
        description:
          "Gestión integral de recursos humanos, materiales y procesos necesarios para la ejecución eficiente de los proyectos.",
      },
      {
        id: 3,
        title: "Programación y control",
        description:
          "Planificación, seguimiento y control de cronogramas para garantizar el cumplimiento de tiempos y objetivos establecidos.",
      },
      {
        id: 4,
        title: "Supervisión y aseguramiento de calidad",
        description:
          "Monitoreo de procesos constructivos bajo estándares de calidad, seguridad y sostenibilidad.",
      },
      {
        id: 5,
        title: "Desarrollo de proyectos inmobiliarios e infraestructura",
        description:
          "Ejecución de proyectos inmobiliarios, institucionales y de infraestructura aplicando principios de ingeniería de valor.",
      },
    ],

    leaders: [
      {
        id: 1,
        name: "Juan Pablo Mutis",
        role: "Gerente Técnico",
        quote: "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat",
      },
      {
        id: 2,
        name: "Juan Pablo Mutis",
        role: "Gerente Técnico",
        quote: "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat",
      },
    ],
  },

  "promotora-valor": {
    slug: "promotora-valor",
    name: "Promotora Valor",
    logo: LogoPV,
    logo: LogoEV,
    monogram: PVMono,
    tagline:  `Valor
              más allá de
              la rentabilidad`,

    intro:"Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    illustration: IllustrationAV,

    branding: {
      primary: "#2f374a",
      secondary: "#b9afaf",

      text: "#b9afaf",

      heroBackground: "#2f374a",
      servicesBackground: "#b9afaf",
      leadersBackground: "#2f374a",

      leadersText: "#b9afaf",

      accent: "#c16242",
    },

   services: [
    {
      id: 1,
      title: "Desarrollo de proyectos de vivienda",
      description:
        "Estructuración y desarrollo de proyectos residenciales con criterios de innovación, sostenibilidad y generación de valor.",
    },
    {
      id: 2,
      title: "Vivienda en renta",
      description:
        "Desarrollo y participación en proyectos de vivienda destinados al mercado de renta, generalmente bajo esquemas asociativos.",
    },
    {
      id: 3,
      title: "Coordinación integral de actores",
      description:
        "Articulación entre propietarios de terrenos, constructores, gerentes, comercializadores, diseñadores e inversionistas para garantizar el éxito del proyecto.",
    },
    {
      id: 4,
      title: "Gestión integral de proyectos",
      description:
        "Administración de los componentes económicos, financieros, técnicos, jurídicos y comerciales durante todo el ciclo del proyecto.",
    },
    {
      id: 5,
      title: "Promoción inmobiliaria",
      description:
        "Diseño e implementación de estrategias para la promoción y comercialización de proyectos inmobiliarios.",
    },
  ],

    leaders: [
      {
        id: 1,
        name: "Francisco Mutis Ordóñez",
        role: "Presidente — CEO",
        quote:
          "Cada proyecto es una decisión sobre el futuro. Nosotros llevamos más de cuatro décadas tomando esas decisiones con rigor, propósito y la convicción de que un buen espacio cambia la vida de quienes lo habitan.",
      },
      {
        id: 2,
        name: "Francisco Mutis Ordóñez",
        role: "Presidente — CEO",
        quote:
          "Cada proyecto es una decisión sobre el futuro. Nosotros llevamos más de cuatro décadas tomando esas decisiones con rigor, propósito y la convicción de que un buen espacio cambia la vida de quienes lo habitan.",
      },
    ],
  },

  "estrategia-valor": {
    slug: "estrategia-valor",
    shortName: "ev.",
    logo: LogoEV,
    monogram: EVMono,
    name: "Estrategias Valor",
    logo: LogoEV,
    tagline:  `Valor
              más allá
              de las ventas`,

    intro:"Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    illustration: IllustrationAV,

    branding: {
      primary: "#f5d694",
      secondary: "#421b1e",

      text: "#421b1e",

      heroBackground: "#f5d694",
      servicesBackground: "#421b1e",
      leadersBackground: "#f5d694",

      leadersText: "#421b1e",

      accent: "#c16242",
    },

    services: [
      {
        id: 1,
        title: "Comercialización sobre planos",
        description:
          "Estrategias de venta y comercialización de proyectos no VIS desde etapas tempranas de desarrollo.",
      },
      {
        id: 2,
        title: "Inteligencia de mercado",
        description:
          "Uso de tecnología, análisis de datos e información de mercado para optimizar el desempeño comercial de los proyectos.",
      },
      {
        id: 3,
        title: "Asesoría comercial integral",
        description:
          "Acompañamiento estratégico desde la etapa de diseño del proyecto hasta la entrega final de los inmuebles.",
      },
      {
        id: 4,
        title: "Gestión de compradores",
        description:
          "Administración y seguimiento de clientes potenciales, garantizando el cumplimiento de sus procesos y obligaciones durante la comercialización.",
      },
    ],

    leaders: [
      {
        id: 1,
        name: "Ángela Gómez",
        role: "Líder EV",
        quote: "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
      },
      {
        id: 2,
        name: "Julián Arenas",
        role: "Líder EV",
        quote: "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
      },
    ],
  },

  "banca-valor": {
    slug: "banca-valor",
    name: "Banca Valor",
    logo: LogoBV,
    logo: LogoEV,
    monogram: BVMono,
    tagline:  `Valor
              más allá
              del dinero`,

    intro:"Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    illustration: IllustrationAV,

    branding: {
      primary: "#94a7c5",
      secondary: "#421b1e",

      text: "#421b1e",

      heroBackground: "#94a7c5",
      servicesBackground: "#421b1e",
      leadersBackground: "#94a7c5",

      leadersText: "#421b1e",

      accent: "#c16242",
    },

    services: [
      {
        id: 1,
        title: "Estructuración financiera inmobiliaria",
        description:
          "Diseño de esquemas financieros para proyectos inmobiliarios que optimizan la rentabilidad y gestionan el riesgo de inversión.",
      },
      {
        id: 2,
        title: "Modelación financiera",
        description:
          "Desarrollo de modelos financieros para evaluar la viabilidad, desempeño y proyección de proyectos inmobiliarios.",
      },
      {
        id: 3,
        title: "Avalúos",
        description:
          "Valoración técnica y financiera de activos inmobiliarios para procesos de inversión, financiación y toma de decisiones.",
      },
      {
        id: 4,
        title: "Estructuración fiduciaria",
        description:
          "Diseño y acompañamiento en esquemas fiduciarios que brindan seguridad y transparencia a los proyectos inmobiliarios.",
      },
      {
        id: 5,
        title: "Relación con fondos de inversión",
        description:
          "Articulación estratégica con fondos de inversión nacionales e internacionales para la financiación y desarrollo de proyectos.",
      },
      {
        id: 6,
        title: "Conexión de oportunidades de inversión",
        description:
          "Vinculación entre inversionistas y oportunidades inmobiliarias alineadas con sus objetivos financieros y de crecimiento patrimonial.",
      },
    ],

    leaders: [
      {
        id: 1,
        name: "Francisco Mutis Ordóñez",
        role: "Presidente — CEO / Líder BV",
        quote:
          "No construimos edificios. Construimos nuevas formas de vivir, invertir y dejar huella.",
      },
      {
        id:2,
        name: "Sergio Mutis Caballero",
        role: "Fundador — Presidente de Junta Directiva",
        quote:
          "Fundé Grupo Valor con la convicción de que construir ciudad es construir país; cuatro décadas después, esa sigue siendo nuestra mayor inversión.",
      },
    ],
  },
};