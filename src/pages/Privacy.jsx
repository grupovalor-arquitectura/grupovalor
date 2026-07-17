import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import InnerPageLayout from "../components/InnerPageLayout";

export default function Privacy() {
  return (
    <InnerPageLayout headerBackground="primary.main">
      <Box
        sx={{
          bgcolor: "primary.main",
          width: "100%",
          py: { xs: 10, md: 16 },
            "& .MuiTypography-body1": {
              mb: 3,
          },
        }}
      >
        <Box
           sx={{
              maxWidth: 900,
              mx: "auto",
              px: {
                xs: 3,
                sm: 5,
                md: 0,
              },

              /* Capítulos */
              "& h3": {
                mt: 8,
                mb: 4,
              },

              /* Subtítulos */
              "& h5": {
                mt: 5,
                mb: 2,
              },

              /* Todos los párrafos */
              "& .MuiTypography-body1": {
                lineHeight: 1.8,
                mb: 2.5,
              },

              /* Listas */
              "& ul, & ol": {
                pl: 3,
                mb: 3,
              },

              "& li": {
                mb: 1.5,
              },
            }}
        >

          <Typography variant="h2" gutterBottom>
            Política de Privacidad
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.7, mb: 6 }}>
            Última actualización: 17 de julio de 2026
          </Typography>

          <Typography variant="body1">
            En <strong>[Razón social por confirmar]</strong> respetamos la privacidad de
            nuestros usuarios y nos comprometemos a proteger la información personal que
            nos sea suministrada a través de este sitio web, de conformidad con la
            Constitución Política de Colombia, la Ley 1581 de 2012, el Decreto 1074 de
            2015 y demás normas aplicables sobre protección de datos personales.
          </Typography>

          <Typography variant="body1">
            La presente Política de Privacidad describe la forma en que recopilamos,
            utilizamos, almacenamos, protegemos y tratamos la información suministrada por
            los usuarios que visitan nuestro sitio web.
          </Typography>

          <Typography variant="h3">
            1. Responsable del tratamiento
          </Typography>

          <Typography variant="body1">
            El responsable del tratamiento de los datos personales es{" "}
            <strong>[Razón social por confirmar]</strong>, quien administra la información
            recopilada a través de este sitio web y garantiza su tratamiento conforme a la
            legislación colombiana vigente.
          </Typography>

          <Typography variant="h3">
            2. Información que recopilamos
          </Typography>

          <Typography variant="body1">
            Podemos recopilar información personal cuando el usuario interactúa
            voluntariamente con nuestro sitio web, incluyendo:
          </Typography>

          <ul>
            <li>Nombre completo.</li>
            <li>Correo electrónico.</li>
            <li>Número telefónico.</li>
            <li>Empresa (cuando aplique).</li>
            <li>Ciudad.</li>
            <li>Información suministrada mediante formularios de contacto o mensajes.</li>
          </ul>

          <Typography variant="body1">
            Adicionalmente, el sitio puede recopilar información técnica de navegación,
            entre ella:
          </Typography>

          <ul>
            <li>Dirección IP.</li>
            <li>Tipo y versión del navegador.</li>
            <li>Sistema operativo.</li>
            <li>Tipo de dispositivo.</li>
            <li>Páginas visitadas.</li>
            <li>Fecha y hora de acceso.</li>
            <li>Tiempo de permanencia.</li>
            <li>Sitio web de origen.</li>
            <li>Información obtenida mediante cookies y tecnologías similares.</li>
          </ul>

          <Typography variant="h3">
            3. Finalidad del tratamiento
          </Typography>

          <Typography variant="body1">
            La información recopilada será utilizada exclusivamente para:
          </Typography>

          <ul>
            <li>Atender solicitudes de información.</li>
            <li>Responder consultas enviadas por los usuarios.</li>
            <li>Contactar personas interesadas en nuestros proyectos, empresas o servicios.</li>
            <li>Gestionar procesos comerciales y de atención al cliente.</li>
            <li>Mejorar la experiencia de navegación.</li>
            <li>Analizar el desempeño y funcionamiento del sitio web.</li>
            <li>Elaborar estadísticas de uso de forma agregada y anónima.</li>
            <li>Cumplir obligaciones legales y regulatorias.</li>
          </ul>

          <Typography variant="body1">
            <strong>[Razón social por confirmar]</strong> no comercializa, vende ni
            alquila los datos personales de sus usuarios.
          </Typography>

          <Typography variant="h3">
            4. Base legal del tratamiento
          </Typography>

          <Typography variant="body1">
            El tratamiento de los datos personales se realiza con fundamento en:
          </Typography>

          <ul>
            <li>La autorización otorgada por el titular.</li>
            <li>La ejecución de actividades solicitadas por el usuario.</li>
            <li>El cumplimiento de obligaciones legales.</li>
            <li>
              El interés legítimo de la compañía para mejorar sus servicios y el
              funcionamiento del sitio web, respetando siempre los derechos de los
              titulares.
            </li>
          </ul>

          <Typography variant="h3">
            5. Conservación de la información
          </Typography>

          <Typography variant="body1">
            Los datos personales serán conservados únicamente durante el tiempo necesario
            para cumplir las finalidades para las cuales fueron recopilados o mientras
            exista una obligación legal que requiera su conservación.
          </Typography>

          <Typography variant="body1">
            Una vez desaparezca dicha finalidad, la información será eliminada o
            anonimizada conforme a la legislación aplicable.
          </Typography>

          <Typography variant="h3">
            6. Compartir información
          </Typography>

          <Typography variant="body1">
            La compañía podrá compartir información únicamente cuando:
          </Typography>

          <ul>
            <li>Sea necesario para prestar un servicio solicitado por el usuario.</li>
            <li>Exista una obligación legal.</li>
            <li>Sea requerido por una autoridad competente.</li>
            <li>
              Sea necesario para la operación del sitio mediante proveedores tecnológicos
              que actúen bajo obligaciones de confidencialidad y seguridad.
            </li>
          </ul>

          <Typography variant="body1">
            En ningún caso la información personal será vendida o cedida con fines
            comerciales.
          </Typography>

          <Typography variant="h3">
            7. Derechos del titular
          </Typography>

          <Typography variant="body1">
            Los titulares de los datos personales podrán ejercer en cualquier momento los
            siguientes derechos:
          </Typography>

          <ul>
            <li>Conocer los datos personales que reposen en nuestras bases de datos.</li>
            <li>Solicitar la actualización, corrección o rectificación de su información.</li>
            <li>Solicitar la eliminación de sus datos cuando sea procedente.</li>
            <li>Revocar la autorización otorgada para el tratamiento de sus datos.</li>
            <li>Solicitar información sobre el uso que se ha dado a sus datos.</li>
            <li>
              Presentar consultas, peticiones o reclamaciones relacionadas con el
              tratamiento de su información.
            </li>
          </ul>

          <Typography variant="h3">
            8. Seguridad de la información
          </Typography>

          <Typography variant="body1">
            La compañía implementa medidas técnicas, administrativas y organizacionales
            razonables para proteger la información personal contra pérdida, acceso no
            autorizado, alteración, divulgación o destrucción.
          </Typography>

          <Typography variant="body1">
            Aunque adoptamos buenas prácticas de seguridad, ningún sistema de
            almacenamiento o transmisión de información a través de Internet puede
            garantizar una seguridad absoluta.
          </Typography>

          <Typography variant="h3">
            9. Cookies y herramientas de análisis
          </Typography>

          <Typography variant="body1">
            Este sitio web utiliza cookies propias y de terceros para garantizar su
            correcto funcionamiento, recordar preferencias de navegación y obtener
            información estadística sobre el uso del sitio.
          </Typography>

          <Typography variant="body1">
            Entre las herramientas utilizadas se encuentra <strong>Google Analytics</strong>,
            un servicio de análisis web proporcionado por Google LLC, que recopila
            información estadística de forma agregada sobre la interacción de los usuarios
            con el sitio.
          </Typography>

          <ul>
            <li>Número de visitantes.</li>
            <li>Páginas consultadas.</li>
            <li>Tiempo de permanencia.</li>
            <li>Navegador utilizado.</li>
            <li>Tipo de dispositivo.</li>
            <li>Sistema operativo.</li>
            <li>Ubicación geográfica aproximada.</li>
            <li>Fuente de tráfico.</li>
            <li>Interacciones generales con el sitio web.</li>
          </ul>

          <Typography variant="body1">
            Esta información es utilizada exclusivamente para analizar el rendimiento del
            sitio, mejorar la experiencia de navegación, optimizar contenidos y generar
            estadísticas de uso.
          </Typography>

          <Typography variant="body1">
            Los usuarios pueden configurar su navegador para aceptar, bloquear o eliminar
            las cookies en cualquier momento. No obstante, algunas funcionalidades del
            sitio podrían verse limitadas si las cookies son deshabilitadas.
          </Typography>

          <Typography variant="h3">
            10. Enlaces a sitios de terceros
          </Typography>

          <Typography variant="body1">
            Este sitio web puede contener enlaces a páginas externas administradas por
            terceros. La compañía no es responsable por las políticas de privacidad,
            contenidos o prácticas de dichos sitios.
          </Typography>

          <Typography variant="h3">
            11. Modificaciones de esta política
          </Typography>

          <Typography variant="body1">
            La presente Política de Privacidad podrá ser actualizada cuando resulte
            necesario para reflejar cambios normativos, tecnológicos o en los procesos
            internos de la compañía.
          </Typography>

          <Typography variant="body1">
            La versión vigente será siempre la publicada en este sitio web e indicará la
            fecha de su última actualización.
          </Typography>

          <Typography variant="h3">
            12. Contacto
          </Typography>

          <Typography variant="body1">
            Si desea ejercer cualquiera de los derechos relacionados con el tratamiento de
            sus datos personales, realizar consultas, presentar solicitudes o
            reclamaciones, podrá comunicarse con el responsable del tratamiento a través
            de los siguientes canales:
          </Typography>

          <Typography variant="body1">
            <strong>Responsable del tratamiento:</strong>
            <br />
            [Razón social por confirmar]
          </Typography>

          <Typography variant="body1">
            <strong>Correo electrónico:</strong>
            <br />
            atencionalcliente@grupovalor.com.co
          </Typography>

          <Typography variant="body1">
            <strong>Dirección:</strong>
            <br />
            Carrera 16 Nº 97 - 37
            <br />
            Bogotá, Colombia
          </Typography>

          <Typography variant="body1">
            <strong>Teléfono:</strong>
            <br />
            (+57) 601 404 09 84
          </Typography>

          <Typography variant="body1">
            Las solicitudes relacionadas con el tratamiento de datos personales serán
            atendidas conforme a los términos establecidos en la legislación colombiana
            vigente sobre protección de datos personales.
          </Typography>

        </Box>



      </Box>
    </InnerPageLayout>
  )
}
