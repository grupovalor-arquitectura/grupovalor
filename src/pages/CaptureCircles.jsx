import { useEffect } from "react";
import VisualCircles from "../components/VisualCircles";

// ========================================
// PÁGINA TEMPORAL DE CAPTURA
// ========================================
// Solo existe para grabar la animación de los círculos aislada,
// sin el nav, sin la foto de fondo del hero, sin nada más. Bórrala
// (y la ruta que la registra) una vez termines de capturar.

export default function CaptureCircles() {

  // Fuerza html/body/#root a transparente mientras esta página está
  // montada. Sin esto, el color de fondo que el tema de MUI le pone
  // al body (vía CssBaseline) sigue pintándose detrás de nuestro
  // div "transparente" — omitBackground de Puppeteer solo quita el
  // blanco por defecto del navegador, no un color que la página
  // misma está pintando.
  useEffect(() => {

    const style = document.createElement("style");

    style.id = "capture-transparent-override";

    style.innerHTML = `
      html, body, #root {
        background: transparent !important;
        background-color: transparent !important;
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.getElementById("capture-transparent-override")?.remove();
    };

  }, []);

  return (

    <div

      style={{

        width: "1600px",
        height: "600px",

        background: "transparent",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

      }}

    >

      <VisualCircles active="default" />

    </div>

  );

}