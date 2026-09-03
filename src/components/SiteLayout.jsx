import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import CustomCursor from "./CustomCursor";
import { useProjects } from "../context/ProjectsContext";

export default function SiteLayout() {
  const location = useLocation();
  const { refreshIfStale } = useProjects();

  // El Provider de proyectos solo carga datos una vez, al montar la
  // app (y los cachea en localStorage). Si el sitio público llevaba
  // rato abierto y mientras tanto se editó un proyecto desde el
  // admin (por ejemplo el nombre de uno vecino, que se ve en la
  // franja de "proyecto anterior/siguiente"), esa pestaña se queda
  // con datos viejos hasta que se recarga a mano. Por eso, cada vez
  // que se navega a una página pública se revisa si hay una versión
  // más nueva y, si la hay, se refresca.
  useEffect(() => {
    refreshIfStale();
  }, [location.pathname, refreshIfStale]);

  return (
    <>
      <CustomCursor />

      <Outlet />

    </>
  );
}