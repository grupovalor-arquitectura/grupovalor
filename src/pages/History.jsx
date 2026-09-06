import { Box } from "@mui/material";
import { useRef } from "react";

import HistoryTimeline from "../components/history/HistoryTimeline";
import TimelineIntro from "../components/history/TimelineIntro";
import TimelineFuture from "../components/history/TimelineFuture";
import ConnectionTunnel from "../components/history/ConnectionTunnel";
import MobileMenu from "../components/MobileMenu";
import SEO from "../components/SEO";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator";

import Header from "../components/Header";
import Footer from "../components/Footer";

import useMenu from "../hooks/useMenu";

const mobileMenuBranding = {
  background: "background.default",
};

export default function History() {
  const { isOpen, toggleMenu, closeMenu } = useMenu(false);

  const introRef = useRef(null);
  const historyStartRef = useRef(null);

  return (
    <>
      <SEO
        title="Historia"
        description="Conoce la historia y trayectoria de Grupo Valor en el desarrollo de proyectos inmobiliarios."
        path="/historia"
      />

      <Box
        sx={{
          px: { xs: 2, md: 7 },
          pt: { xs: 2, md: 5 },
        }}
      >
       {!isOpen && (
          <Header
            isOpen={isOpen}
            onMenuClick={toggleMenu}
          />
        )}

        <MobileMenu
          branding={mobileMenuBranding}
          isOpen={isOpen}
          onClose={closeMenu}
        />
      </Box>

      <HistoryTimeline
        startRef={historyStartRef}
      />

      <Footer historyTheme />

      {/* El primer bloque de la historia empieza debajo del header
          (que aquí no es overlay, a diferencia de Contacto/Nosotros),
          así que el indicador no puede ir anidado ahí: quedaría fuera
          de la pantalla al cargar. Fijándolo a la ventana se ve desde
          el inicio y se oculta al hacer scroll, igual que en las
          otras páginas, y centrado igual que en Contacto/Nosotros. */}
      {!isOpen && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            pointerEvents: "none",
          }}
        >
          <ScrollIndicator />
        </Box>
      )}
    </>
  );
}