import { Helmet } from "react-helmet-async";

const SITE_URL = "https://grupovalor.com.co";
const SITE_NAME = "Grupo Valor";

/**
 * Componente de SEO reutilizable.
 *
 * Uso en cualquier página:
 *   <SEO
 *     title="Proyectos"
 *     description="Conoce los proyectos inmobiliarios de Grupo Valor."
 *     path="/proyectos"
 *   />
 *
 * `path` debe ser la ruta actual, empezando con "/" (ej. "/proyectos/edificio-el-rosal").
 */
export default function SEO({ title, description, path = "/", rawTitle }) {
  // rawTitle permite fijar el <title> completo tal cual, sin aplicar
  // el patrón "Título | Grupo Valor" (útil para el Home, donde el
  // cliente pidió un formato distinto: "Grupo Valor | tagline").
  const fullTitle = rawTitle || (title ? `${title} | ${SITE_NAME}` : SITE_NAME);
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}