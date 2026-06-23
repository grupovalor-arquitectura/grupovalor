import image1984 from "../assets/Timeline1.png";
import image2000 from "../assets/Timeline2.png"



export const historyData = {
  moments: [
    {
      id: "inicio",
      label: "Inicios",
      title: "Una visión que comenzó con las personas",

      description: `
        Grupo Valor nació en 1984 con la convicción de que la arquitectura y el desarrollo inmobiliario podían generar un impacto positivo en la vida de las personas. Lo que comenzó como una empresa enfocada en vivienda evolucionó con el tiempo hasta convertirse en un grupo empresarial que ha contribuido a transformar ciudades y comunidades a través del diseño, la innovación y la calidad.
        
        Desde sus inicios, la búsqueda no fue únicamente construir edificios, sino crear espacios que respondieran a las necesidades reales de quienes los habitan y permanecieran vigentes a lo largo del tiempo.
      `,

      milestoneIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    },

    {
      id: "presente",
      label: "Presente",
      title: "Construir valor a través de cada decisión",

      description: `
        Hoy, Grupo Valor es una organización liderada por la segunda generación de la familia Mutis, que combina experiencia, visión de largo plazo y una cultura basada en la sostenibilidad, la excelencia y el desarrollo humano.
        Entendemos la construcción como un sistema de decisiones donde diseño, ingeniería, inversión y gestión trabajan de manera integrada para crear espacios que generen bienestar y reflejen la identidad de las personas y comunidades que los habitan.
        Más que desarrollar proyectos, construimos valor a través de cada decisión.
      `,

      milestoneIds: [12],
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

      milestoneIds: [13],
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
      year: 2013,
      title: "Compromiso con la sostenibilidad",
      image: image1984,
      description:
        "Ingreso al Consejo Colombiano de Construcción Sostenible, reafirmando una visión responsable del desarrollo urbano.",
    },

    {
      id: 5,
      year: 2013,
      image: image1984,
      title: "Apertura a capital institucional",
      description:
        "Inicio de inversiones con fondos especializados en real estate, ampliando la capacidad de estructuración y crecimiento del grupo.",
    },

    {
      id: 6,
      year: 2014,
      title: "Continuidad generacional",
      image: image1984,
      description:
        "Firma del protocolo de familia para asegurar la cohesión estratégica y la continuidad de la visión empresarial.",
    },

    {
      id: 7,
      year: 2015,
      title: "Innovación con metodología BIM",
      image: image1984,
      description:
        "Incorporación de herramientas avanzadas de diseño y construcción para optimizar la calidad y eficiencia de los proyectos.",
    },

    {
      id: 8,
      year: 2015,
      title: "Gobierno corporativo fortalecido",
      image: image1984,
      description:
        "Creación de una Junta Directiva externa que impulsa la profesionalización y sostenibilidad del grupo.",
    },

    {
      id: 9,
      year: 2017,
      title: "Liderazgo sectorial",
      image: image1984,
      description:
        "Participación en la Junta Directiva de la Cámara Colombiana del Acero, contribuyendo al desarrollo de la industria.",
    },

    {
      id: 10,
      year: 2018,
      title: "Consolidación empresarial",
      image: image1984,
      description:
        "Nacen Arquitectura Valor y Valor Promotora Inmobiliaria, fortaleciendo la capacidad de diseño, estructuración y desarrollo.",
    },

    {
      id: 11,
      year: 2024,
      title: "Reconocimiento a una trayectoria",
      image: image1984,
      description:
        "La Sociedad Colombiana de Arquitectos distingue a Sergio Mutis Caballero por su aporte a la arquitectura colombiana.",
    },

    {
      id: 12,
      year: 2026,
      title: "Legado para el país",
      image: image1984,
      description:
        "La Sociedad Colombiana de Ingenieros otorga el Premio Fundadores a Sergio Mutis Caballero por su contribución al desarrollo urbano, la infraestructura y la vivienda.",
    },

    {
      id: 13,
      year: "+2035",
      title: "Visión 10X",
      image: image1984,
      description:
        "Impulsar un crecimiento exponencial basado en la innovación, la rentabilidad sostenible, la autonomía y la creación de valor duradero para las ciudades y las personas.",
    },
  ],
};