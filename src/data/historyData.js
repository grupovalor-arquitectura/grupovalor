import image1984 from "../assets/Timeline1.png";
import image2000 from "../assets/Timeline2.png";

export const historyData = {
  sections: [
    {
      id: "inicio",
      type: "moment",
      momentId: "inicio",
    },

    {
      id: "timeline-1",
      type: "timeline",

      milestoneIds: [
        1, // 1984
        2, // 2000
        3, // 2005
        4, // 2012
        5, // 2013
      ],
    },

    {
      id: "consolidacion",
      type: "moment",
      momentId: "consolidacion",
    },

    {
      id: "timeline-2",
      type: "timeline",

      milestoneIds: [
        7,  // 2014
        8,  // 2015
        9,  // 2016
        10, // 2017
        11, // 2018
        12, // 2024
        13, // 2026
        14, // ref
      ],
    },

    {
      id: "futuro",
      type: "moment",
      momentId: "futuro",
    },
  ],

  moments: [
    {
      id: "inicio",
      label: "Orígenes",
      title: "Una visión que comenzó con las personas",
      description: `
        Grupo Valor nació en 1984 con la convicción de que la arquitectura y el desarrollo inmobiliario podían generar un impacto positivo en la vida de las personas. Lo que comenzó como una empresa enfocada en vivienda evolucionó con el tiempo hasta convertirse en un grupo empresarial que ha contribuido a transformar ciudades y comunidades a través del diseño, la innovación y la calidad.

        Desde sus inicios, la búsqueda no fue únicamente construir edificios, sino crear espacios que respondieran a las necesidades reales de quienes los habitan y permanecieran vigentes a lo largo del tiempo.
      `,
    },

    {
      id: "consolidacion",
      label: "Consolidación",
      title: "Construir valor a través de cada decisión",
      description: `
        Hoy, Grupo Valor es una organización liderada por la segunda generación de la familia Mutis, que combina experiencia, visión de largo plazo y una cultura basada en la sostenibilidad, la excelencia y el desarrollo humano.

        Entendemos la construcción como un sistema de decisiones donde diseño, ingeniería, inversión y gestión trabajan de manera integrada para crear espacios que generen bienestar y reflejen la identidad de las personas y comunidades que los habitan.

        Más que desarrollar proyectos, construimos valor a través de cada decisión.
      `,
    },

    {
      id: "futuro",
      label: "Futuro",
      title: "Diseñar espacios que trascienden",
      description: `
        Miramos hacia adelante con una visión clara: ser referentes en Colombia y Latinoamérica por nuestra capacidad de crear valor más allá de lo construido.

        Aspiramos a desarrollar proyectos que integren sostenibilidad, diseño consciente y rentabilidad responsable, generando un impacto duradero en las ciudades y en las personas.

        Nuestro futuro está impulsado por una visión de crecimiento que combina innovación, propósito y la convicción de que los mejores espacios son aquellos que continúan creando valor con el paso del tiempo.
      `,
    },
  ],

  milestones: [
    {
      id: 1,
      year: 1984,
      title: "Nace una visión",
      image: image1984,
      description:
        "Fundación de la primera empresa del grupo y comienzo de una trayectoria basada en la calidad, el diseño y la creación de valor a largo plazo.",
    },

    {
      id: 2,
      year: 2000,
      image: image2000,
      title: "Expansión comercial",
      description:
        "Se crea Estrategias Comerciales y de Mercadeo S.A., fortaleciendo la capacidad de comercialización y acompañamiento de proyectos inmobiliarios.",
    },

    {
      id: 3,
      year: 2005,
      title: "Pioneros en vivienda para renta",
      image: image1984,
      description:
        "Desarrollo del primer proyecto multifamiliar para renta, anticipando una tendencia que transformaría el mercado inmobiliario colombiano.",
    },

    {
      id: 4,
      year: 2012,
      title: "Compromiso con la sostenibilidad",
      image: image1984,
      description:
        "Ingreso al Consejo Colombiano de Construcción Sostenible. Reafirmación del compromiso con el desarrollo responsable y ambientalmente consciente.",
    },

    {
      id: 5,
      year: 2013,
      image: image1984,
      title: "Apertura a capital institucional",
      description:
        "Inicio de inversiones con fondos de capital privado especializados en real estate. Consolidación de la capacidad de estructuración y atracción de capital institucional.",
    },

 

    {
      id: 7,
      year: 2014,
      title: "Continuidad generacional",
      image: image1984,
      description:
        "Firma del protocolo de familia. Se asegura la continuidad generacional y la cohesión estratégica del grupo hacia el futuro.",
    },

    {
      id: 8,
      year: 2015,
      title: "Innovación con metodología BIM",
      image: image1984,
      description:
        "Implementación de la metodología BIM en los procesos de diseño y construcción. Fortalecimiento de la eficiencia y la calidad técnica de los proyectos.",
    },

    {
      id: 9,
      year: 2016,
      title: "Gobierno corporativo fortalecido",
      image: image1984,
      description:
        "Creación de una Junta Directiva externa. Estrategia de gobierno corporativo orientada a la sostenibilidad y profesionalización del grupo.",
    },

    {
      id: 10,
      year: 2017,
      title: "Liderazgo sectorial",
      image: image1984,
      description:
        "Participación en la Junta Directiva de la Cámara Colombiana del Acero.",
    },

    {
      id: 11,
      year: 2018,
      title: "Consolidación empresarial",
      image: image1984,
      description:
        "Fundación de Arquitectura Valor y Valor Promotora Inmobiliaria. Consolidación de la estructura operativa del grupo con enfoque en diseño, estructuración y desarrollo de proyectos.",
    },

    {
      id: 12,
      year: 2024,
      title: "Reconocimiento a una trayectoria",
      image: image1984,
      description:
        "La Sociedad Colombiana de Arquitectos (SCA) otorga a Sergio Mutis Caballero reconocimiento por su sobresaliente contribución a la arquitectura colombiana.",
    },

    {
      id: 13,
      year: 2026,
      title: "Legado para el país",
      image: image1984,
      description:
        "La Sociedad Colombiana de Ingenieros (SCI) concede a Sergio Mutis Caballero la condecoración Premio Fundadores por sus aportes a las políticas públicas de desarrollo urbano, infraestructura y vivienda.",
    },

   

    {
      id: 14,
      year: "+2035",
      title: "Visión 10X",
      image: image1984,
      description:
        "Impulsar un crecimiento exponencial basado en la innovación, la rentabilidad sostenible, la autonomía y la creación de valor duradero para las ciudades y las personas.",
    },
  ],
};