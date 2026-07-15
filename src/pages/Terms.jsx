import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import InnerPageLayout from "../components/InnerPageLayout";

export default function Terms() {
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
          <Typography variant="h2">
            POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES
          </Typography>

          <section>
            <Typography variant="h3" gutterBottom>
              I. INTRODUCCIÓN
            </Typography>

            <Typography variant="body1" paragraph>
              Su privacidad es de suma importancia para ARQUITECTURA VALOR S.A.S.
              identificada con NIT. 900.751.345-2 (en adelante, "Arquitectura Valor",
              la "Compañía").
            </Typography>

            <Typography variant="body1" paragraph>
              La presente Política de Tratamiento de Datos Personales (en adelante, la
              "Política de Privacidad" o la "Política de Tratamiento") aplica a todos
              los productos y servicios ofrecidos por Arquitectura Valor y a cualquier
              sitio web de la Compañía.
            </Typography>

            <Typography variant="body1" paragraph>
              Esta política establece las bases sobre las que trataremos los Datos
              Personales que recolectemos de usted, o que usted nos proporcione. En
              concreto, en esta Política presentamos nuestras disposiciones generales
              para la protección de la información personal, los fines con los que
              tratamos los Datos Personales, las partes con las que podremos
              compartirlos y las medidas que adoptamos para proteger la seguridad de sus
              Datos. En esta Política, también informamos los derechos que tiene como
              Titular de sus Datos Personales y las opciones con las que cuenta para
              ejercerlos. Finalmente, presentamos el modo en que puede contactarse con
              nosotros en caso de tener alguna solicitud relacionada con sus Datos
              Personales.
            </Typography>

            <Typography variant="body1" paragraph>
              En lo sucesivo el término "Datos Personales" significa cualquier
              información vinculada o que pueda asociarse a una o varias personas
              naturales determinadas o determinables.
            </Typography>

            <Typography variant="body1" paragraph>
              Al realizar negocios con nosotros o proporcionarnos Datos Personales,
              declara haber revisado esta Política de Privacidad y ha acordado
              someterse a ella y aceptar que sus Datos Personales sean tratados de
              acuerdo con sus términos y la autorización que haya otorgado para que
              Arquitectura Valor proceda con el Tratamiento de sus Datos Personales.
            </Typography>

            <Typography variant="body1">
              En relación con el Tratamiento de sus Datos Personales, la Compañía
              actuará como Responsable del Tratamiento de conformidad con lo dispuesto
              en el artículo 3 de la Ley 1581 de 2012.
            </Typography>
          </section>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h3" gutterBottom>
              II. DEFINICIONES
            </Typography>

            <Typography variant="body1" paragraph>
              Para efectos de la presente Política, se tendrán en cuenta las
              definiciones señaladas en la Ley 1581 de 2012 y el Decreto 1074 de 2015,
              tal como se transcriben a continuación:
            </Typography>

            <Box component="ul" sx={{ pl: 3 }}>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Autorización:</strong> Es el consentimiento previo, expreso e
                  informado que otorga el Titular para que los Responsables lleven a
                  cabo el Tratamiento de sus Datos Personales.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Aviso de Privacidad:</strong> En virtud del numeral 1 del
                  artículo 2.2.2.25.1.3 del Decreto 1074 de 2015, el Aviso de Privacidad
                  es una de las opciones de comunicación verbal o escrita que brinda la
                  ley para darle a conocer a los Titulares de los Datos Personales la
                  existencia y las formas de acceder a la Política de Privacidad y el
                  objetivo de su recolección y uso.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Base de Datos:</strong> Conjunto organizado de Datos
                  Personales que sea objeto de Tratamiento, de conformidad con el
                  literal b) del artículo 3 de la Ley 1581 de 2012.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Dato Personal:</strong> Cualquier información vinculada o que
                  pueda asociarse a una o varias personas naturales determinadas o
                  determinables.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Titular:</strong> Persona natural cuyos Datos Personales sean
                  objeto de Tratamiento.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Dato Sensible:</strong> Aquellos Datos Personales que afectan
                  la intimidad del Titular o cuyo uso indebido puede generar su
                  discriminación, tales como aquellos que revelen el origen racial o
                  étnico, la orientación política, las convicciones religiosas o
                  filosóficas, la pertenencia a sindicatos, organizaciones sociales, de
                  derechos humanos o que promuevan intereses de cualquier partido
                  político, o que garanticen los derechos y garantías de partidos
                  políticos de oposición, así como los datos relativos a la salud, a la
                  vida sexual, la identidad de género y los datos biométricos.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Encargado del Tratamiento:</strong> Es la persona natural o
                  jurídica, pública o privada, que por sí misma o en asocio con otros,
                  realice el Tratamiento de Datos Personales por cuenta del Responsable
                  del Tratamiento.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Registro Nacional de Bases de Datos:</strong> Es el directorio
                  público de las Bases de Datos sujetas a Tratamiento y que es operado
                  por la Superintendencia de Industria y Comercio.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Responsable del Tratamiento:</strong> Corresponde a la persona
                  natural o jurídica, pública o privada, que por sí misma o en asocio
                  con otros, decida sobre la Base de Datos y/o el Tratamiento de los
                  Datos Personales. En este caso, se trata de Arquitectura Valor.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Tratamiento:</strong> Cualquier operación o conjunto de
                  operaciones sobre Datos Personales, tales como la recolección,
                  almacenamiento, uso, circulación o supresión, así como también su
                  Transferencia y/o Transmisión a terceros.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Transferencia:</strong> Corresponde al Tratamiento que tiene
                  lugar cuando el Responsable y/o Encargado del Tratamiento de Datos
                  Personales, ubicado en Colombia, envía los Datos Personales a un
                  receptor que, a su vez, es Responsable del Tratamiento y se encuentra
                  dentro o fuera del país.
                </Typography>
              </li>

              <li>
                <Typography variant="body1">
                  <strong>Transmisión:</strong> Tratamiento de Datos Personales que
                  implica la comunicación a un tercero dentro o fuera del territorio de
                  la República de Colombia, cuando dicha comunicación tenga por objeto
                  la realización de un Tratamiento por el Encargado en nombre y por
                  cuenta del Responsable, para cumplir con las finalidades de este
                  último.
                </Typography>
              </li>
            </Box>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h3" gutterBottom>
              III. PRINCIPIOS A LOS QUE ESTÁ SUJETO EL TRATAMIENTO DE LOS DATOS PERSONALES
            </Typography>

            <Typography variant="body1" paragraph>
              Arquitectura Valor estructura su Política de Privacidad con base en los
              siguientes principios:
            </Typography>

            <Box component="ol" sx={{ pl: 3 }}>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Principio de Legalidad:</strong> El Tratamiento es una
                  actividad reglada que debe sujetarse a lo establecido en el régimen de
                  protección de Datos Personales.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Principio de Finalidad:</strong> El Tratamiento de los Datos
                  Personales realizado por Arquitectura Valor obedece a una finalidad
                  legítima de acuerdo con la Constitución y la Ley, el cual se
                  enmarcará en el manejo de la información para actividades relacionadas
                  con su objeto social.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Principio de Libertad:</strong> El Tratamiento sólo puede
                  ejercerse con el consentimiento, previo, expreso e informado del
                  Titular. Los Datos Personales no podrán ser obtenidos o divulgados sin
                  previa autorización, o en ausencia de mandato legal o judicial que
                  releve el consentimiento.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Principio de Veracidad o Calidad:</strong> La información
                  sujeta a Tratamiento debe ser veraz, completa, exacta, actualizada,
                  comprobable y comprensible. Se prohíbe el Tratamiento de Datos
                  parciales, incompletos, fraccionados o que induzcan a error.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Principio de Transparencia:</strong> En el Tratamiento debe
                  garantizarse el derecho del Titular a obtener del Responsable del
                  Tratamiento o del Encargado del Tratamiento, en cualquier momento y
                  sin restricciones, información sobre los Datos que reposen en sus
                  Bases de Datos.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Principio de Acceso y Circulación Restringida:</strong> El
                  Tratamiento se sujeta a los límites que se derivan de la naturaleza de
                  los Datos Personales, de las disposiciones de Ley y la Constitución.
                  En este sentido, el Tratamiento sólo podrá hacerse por personas
                  autorizadas por el Titular.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Principio de Seguridad:</strong> La información sujeta a
                  Tratamiento se maneja con las medidas técnicas, humanas y
                  administrativas que sean necesarias para otorgar seguridad a los
                  registros, evitando su adulteración, pérdida, consulta, uso o acceso
                  no autorizado o fraudulento.
                </Typography>
              </li>

              <li>
                <Typography variant="body1">
                  <strong>Principio de Confidencialidad:</strong> Todas las personas que
                  intervengan en el Tratamiento de Datos Personales que no tengan la
                  naturaleza de públicos están obligadas a garantizar la reserva de la
                  información, inclusive después de finalizada su relación con alguna de
                  las labores que comprende el Tratamiento, pudiendo sólo realizar
                  suministro o comunicación de Datos Personales cuando ello corresponda
                  al desarrollo de las actividades autorizadas por ley.
                </Typography>
              </li>
            </Box>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h3" gutterBottom>
              IV. DERECHOS DE LOS TITULARES
            </Typography>

            <Typography variant="body1" paragraph>
              De conformidad con lo establecido en el artículo 8 de la Ley 1581 de 2012,
              el Titular de los Datos Personales tiene los siguientes derechos:
            </Typography>

            <Box component="ol" sx={{ pl: 3 }}>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Derecho a conocer, actualizar, consultar o rectificar sus Datos
                  Personales:</strong> El Titular de Datos Personales podrá ejercer este
                  derecho, en cualquier momento, frente a Arquitectura Valor, respecto a
                  aquellos datos que considere parciales, inexactos, incompletos,
                  fraccionados y/o que induzcan a error o aquellos cuyo Tratamiento esté
                  expresamente prohibido o no haya sido autorizado.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Derecho a solicitar prueba de la Autorización:</strong> Los
                  Titulares podrán solicitar prueba de la Autorización otorgada para el
                  Tratamiento de sus Datos, de conformidad con lo previsto en el artículo
                  9 de la Ley 1581 de 2013.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Derecho a ser informado frente al uso que se le ha dado a sus
                  Datos Personales:</strong> Los Titulares de Datos Personales tienen
                  derecho a conocer en cualquier momento el uso que se les ha dado a sus
                  Datos Personales previa solicitud dirigida al Responsable del
                  Tratamiento.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Derecho a presentar quejas:</strong> Los Titulares de Datos
                  Personales tienen el derecho a presentar ante la Superintendencia de
                  Industria y Comercio las quejas que consideren pertinentes para hacer
                  valer su derecho al Habeas Data.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  <strong>Derecho a revocar la Autorización y/o solicitar la supresión de
                  los Datos Personales:</strong> Los Titulares podrán revocar la
                  Autorización otorgada a Arquitectura Valor para el Tratamiento de sus
                  Datos Personales, si evidencian que no han sido respetados los
                  principios, derechos y garantías constitucionales y legales.
                </Typography>
              </li>

              <li>
                <Typography variant="body1">
                  <strong>Derecho a acceder a sus Datos Personales:</strong> Los
                  Titulares de Datos Personales podrán acceder de forma gratuita a sus
                  Datos Personales que hayan sido objeto de Tratamiento.
                </Typography>
              </li>
            </Box>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h3" gutterBottom>
              V. ¿POR QUÉ RECOLECTAMOS SUS DATOS PERSONALES?
            </Typography>

            <Typography variant="body1" paragraph>
              A continuación, se describen las finalidades para las cuales Arquitectura
              Valor realiza el Tratamiento de Datos Personales.
            </Typography>

            <Typography variant="h5" gutterBottom>
              1. Prospectos
            </Typography>

            <Typography variant="body1" paragraph>
              Arquitectura Valor tratará los datos personales de las personas que se
              registren en campañas comerciales, páginas web, formularios, eventos,
              ferias, redes sociales, chats, líneas de atención, sala de ventas y
              canales análogos, para las siguientes finalidades:
            </Typography>

            <Box component="ul" sx={{ pl: 3 }}>
              <li>
                <Typography variant="body1" paragraph>
                  Gestionar el registro, atender solicitudes de información y brindar
                  acompañamiento comercial sobre el proyecto específico en el que se
                  inscribieron, incluyendo envío de fichas técnicas, cotizaciones,
                  simulaciones, brochures, cronogramas, listas de precios, cambios de
                  etapas y disponibilidad.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  Realizar seguimiento comercial, incluyendo recordatorios,
                  confirmación de citas, invitaciones a recorridos, eventos y
                  actividades de relacionamiento.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  Enviar comunicaciones publicitarias, promocionales o de mercadeo
                  relacionadas con oportunidades de inversión, compra o productos y
                  servicios complementarios de otros proyectos, líneas de negocio o
                  marcas de Arquitectura Valor, por canales físicos y/o electrónicos.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  Elaborar perfiles comerciales y de consumo con fines exclusivamente
                  de segmentación, análisis de afinidad, mejora de la experiencia,
                  medición de satisfacción, definición de audiencias y optimización de
                  campañas.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  Gestionar la relación precontractual y contractual en caso de
                  separación, promesa o compraventa de unidades inmobiliarias,
                  incluyendo validación de identidad, análisis de riesgo crediticio
                  cuando aplique, verificación de referencias y consulta en listas de
                  prevención de fraude y lavado de activos, en los términos de la ley.
                </Typography>
              </li>

              <li>
                <Typography variant="body1" paragraph>
                  Atender peticiones, quejas, reclamos, garantías y solicitudes de
                  habeas data; gestionar seguridad de la información y prevenir fraudes
                  o suplantaciones.
                </Typography>
              </li>

              <li>
                <Typography variant="body1">
                  Cumplir obligaciones legales, contables, regulatorias y de reporte
                  ante autoridades competentes.
                </Typography>
              </li>
            </Box>

            <Typography variant="body1" paragraph sx={{ mt: 3 }}>
              Cuando corresponda, los Datos Personales podrán ser compartidos con
              aliados comerciales que presten servicios complementarios al negocio
              inmobiliario (por ejemplo, entidades financieras, aseguradoras,
              operadores de beneficios, firmas de avalúos y fiduciarias)
              exclusivamente para atender la solicitud del Titular o para ejecutar
              actividades derivadas de su interés en un proyecto.
            </Typography>

            <Typography variant="body1" paragraph>
              Es importante aclarar que, siempre que otorguen la autorización para
              tales efectos, los clientes, proveedores, contratistas,
              subcontratistas, candidatos y empleados también podrán ser considerados
              como prospectos de acuerdo con esta Política de Tratamiento de Datos
              Personales.
            </Typography>

            <Typography variant="h5" gutterBottom>
              2. Clientes
            </Typography>

            <Typography variant="body1" paragraph>
              Para titulares que celebren negocios jurídicos con Arquitectura Valor,
              los Datos Personales se tratarán para:
            </Typography>

            <Box component="ul" sx={{ pl: 3 }}>
              <li><Typography variant="body1" paragraph>Formalizar y ejecutar contratos de promesa, compraventa, fiducia, leasing u otros vinculados al proyecto; gestionar desembolsos y pagos; emitir facturación, soportes y certificados.</Typography></li>
              <li><Typography variant="body1" paragraph>Cumplir obligaciones postcontractuales, de garantías, atención postventa, reparaciones, servicio al cliente y gestión de PQRS.</Typography></li>
              <li><Typography variant="body1" paragraph>Gestionar recaudo de cartera, conciliaciones, reportes y, de ser necesario, adelantar gestiones de cobro judicial o extrajudicial.</Typography></li>
              <li><Typography variant="body1" paragraph>Realizar mediciones de satisfacción, encuestas de calidad y ejecutar programas de fidelización.</Typography></li>
              <li><Typography variant="body1">Cumplir con obligaciones legales en materia contable, fiscal, urbanística, de protección al consumidor, de prevención de lavado de activos y financiación del terrorismo, y demás regulaciones aplicables.</Typography></li>
            </Box>

            <Typography variant="h5" gutterBottom sx={{ mt: 5 }}>
              3. Proveedores, contratistas o subcontratistas
            </Typography>

            <Typography variant="body1" paragraph>
              Se tratarán los datos personales de personas naturales que actúen como
              proveedores, contratistas o subcontratistas para:
            </Typography>

            <Box component="ul" sx={{ pl: 3 }}>
              <li><Typography variant="body1" paragraph>Gestionar procesos de invitación, evaluación, selección, debida diligencia, celebración y ejecución de contratos de obra, servicios o suministro.</Typography></li>
              <li><Typography variant="body1" paragraph>Verificar identidad, idoneidad, experiencia, cumplimiento de requisitos técnicos, laborales, de seguridad social y de seguridad y salud en el trabajo.</Typography></li>
              <li><Typography variant="body1" paragraph>Ejecutar la relación contractual.</Typography></li>
              <li><Typography variant="body1" paragraph>Realizar pagos, facturación, reportes tributarios y certificaciones; gestionar garantías, seguros y cumplimiento contractual.</Typography></li>
              <li><Typography variant="body1">Cumplir con obligaciones legales de auditoría, control interno, prevención de fraude, lavado de activos y financiación del terrorismo, así como de requerimientos de autoridades.</Typography></li>
            </Box>

            <Typography variant="h5" gutterBottom sx={{ mt: 5 }}>
              4. Candidatos y empleados
            </Typography>

            <Typography variant="body1" paragraph>
              Arquitectura Valor tratará los datos de candidatos, empleados y
              exempleados para:
            </Typography>

            <Box component="ul" sx={{ pl: 3 }}>
              <li><Typography variant="body1" paragraph>Gestionar procesos de atracción, recepción de hojas de vida, evaluación y selección de personal, incluyendo validación de referencias personales y laborales, verificación de antecedentes en fuentes permitidas por la ley y ejecutar evaluaciones de idoneidad y competencias.</Typography></li>
              <li><Typography variant="body1" paragraph>Formalizar y ejecutar el contrato de trabajo; administrar nómina y prestaciones sociales, parafiscales, beneficios, dotación, bienestar y programas de calidad de vida.</Typography></li>
              <li><Typography variant="body1" paragraph>Gestionar la seguridad y salud en el trabajo.</Typography></li>
              <li><Typography variant="body1" paragraph>Administrar el desempeño, formación, capacitación, evaluaciones, reconocimientos, disciplina y terminación de la relación laboral.</Typography></li>
              <li><Typography variant="body1" paragraph>Administrar accesos físicos y lógicos a instalaciones, obras, sistemas, redes y activos tecnológicos; gestionar controles de seguridad, videovigilancia, registros de ingreso y salida, geo-localización o telemetría de activos cuando aplique y de acuerdo con políticas internas previamente informadas.</Typography></li>
              <li><Typography variant="body1" paragraph>Atender requerimientos de autoridades y cumplir obligaciones legales, tributarias, laborales y de archivo. Conservar los expedientes laborales conforme a los plazos legales aplicables.</Typography></li>
              <li><Typography variant="body1">Mantener el contacto con exempleados para elaborar y expedir certificaciones, o referencias laborales y ejecutar programas de relacionamiento cuando proceda.</Typography></li>
            </Box>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h3" gutterBottom>
              VI. ¿CUÁL ES EL TRATAMIENTO QUE LE DAMOS A SUS DATOS PERSONALES?
            </Typography>

            <Typography variant="h5" gutterBottom>
              1. Autorización
            </Typography>

            <Typography variant="body1" paragraph>
              Arquitectura Valor únicamente adelantará el Tratamiento de los Datos
              Personales que el Titular voluntariamente suministre.
            </Typography>

            <Typography variant="body1" paragraph>
              En general, la Compañía recolectará, almacenará, usará, circulará,
              transmitirá y transferirá los Datos Personales que trate.
            </Typography>

            <Typography variant="body1" paragraph>
              Los Datos Personales podrán ser utilizados únicamente por Arquitectura
              Valor, sus empleados, consultores, asesores, socios comerciales y
              estratégicos, autorizados expresamente por la Compañía, que requieran
              acceso a esta información. En todo caso, la Compañía, previa solicitud
              del Titular, le suministrará la información completa de las personas que
              realizan el Tratamiento de sus Datos Personales.
            </Typography>

            <Typography variant="body1" paragraph>
              La Autorización del Titular no será necesaria cuando se trate de:
            </Typography>

            <Box component="ol" sx={{ pl: 3 }}>
              <li><Typography variant="body1">Datos de naturaleza pública.</Typography></li>
              <li><Typography variant="body1">Casos de urgencia médica o sanitaria.</Typography></li>
              <li><Typography variant="body1">Tratamiento de información autorizado por la ley para fines históricos, estadísticos o científicos.</Typography></li>
              <li><Typography variant="body1">Datos relacionados con el registro civil de las personas.</Typography></li>
            </Box>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h5" gutterBottom>
              2. Tratamiento de Datos Sensibles
            </Typography>

            <Typography variant="body1" paragraph>
              Arquitectura Valor podrá solicitar en cualquier momento Datos Sensibles,
              informándole al momento de la recolección que los datos solicitados tienen
              este carácter y qué tipo de Datos Sensibles se recolectarán.
            </Typography>

            <Typography variant="body1" paragraph>
              Arquitectura Valor podrá tratar datos sensibles en los siguientes casos:
            </Typography>

            <Box component="ol" sx={{ pl: 3 }}>
              <li>
                <Typography variant="body1">
                  Cuando el Titular haya dado su consentimiento explícito y voluntario con
                  fines específicos.
                </Typography>
              </li>

              <li>
                <Typography variant="body1">
                  Si el Tratamiento es necesario para cumplir obligaciones legales.
                </Typography>
              </li>

              <li>
                <Typography variant="body1">
                  Si el Tratamiento es necesario para proteger los intereses vitales del
                  Titular o los de otra persona natural.
                </Typography>
              </li>

              <li>
                <Typography variant="body1">
                  Si el Tratamiento es necesario para la formulación, el ejercicio o la
                  defensa de reclamaciones o cuando jueces o tribunales actúen en
                  ejercicio de su función judicial.
                </Typography>
              </li>

              <li>
                <Typography variant="body1">
                  Si el Tratamiento es obligatorio en virtud de la ley.
                </Typography>
              </li>
            </Box>

            <Typography variant="body1" paragraph sx={{ mt: 3 }}>
              Arquitectura Valor no condicionará, en ningún caso, ninguna actividad a la
              entrega de Datos Sensibles e informará al Titular que su entrega es
              facultativa. Los Datos Sensibles serán tratados con la mayor diligencia
              posible y con los estándares de seguridad más altos.
            </Typography>

            <Typography variant="body1">
              El acceso limitado a los Datos Sensibles será un principio rector para
              salvaguardar la privacidad de estos y, por lo tanto, sólo el personal
              autorizado podrá tener acceso a ese tipo de información.
            </Typography>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h3" gutterBottom>
              VII. TRANSFERENCIA Y TRANSMISIÓN
            </Typography>

            <Typography variant="body1" paragraph>
              Los Datos Personales sobre los que la Compañía actúe como Responsable del
              Tratamiento podrán ser transferidos o transmitidos tanto dentro como fuera
              del territorio de la República de Colombia.
            </Typography>

            <Typography variant="body1" paragraph>
              En caso de que sus datos sean transferidos o transmitidos fuera del
              territorio de la República de Colombia, estas operaciones únicamente se
              realizarán a países que cuenten con un nivel adecuado de protección de
              Datos Personales, de acuerdo con lo establecido por la Superintendencia de
              Industria y Comercio. Lo anterior, sin perjuicio de que el o los terceros
              con quienes se ejecuten operaciones de Transferencia puedan definir otras
              finalidades, en atención a su calidad de Responsables del Tratamiento, de
              conformidad con lo establecido en la ley.
            </Typography>

            <Typography variant="body1" paragraph>
              Las operaciones de Transferencia se realizarán en los términos del artículo
              26 de la Ley 1581 de 2012 y el Título V de la Circular Única de la
              Superintendencia de Industria y Comercio y, además, se encuentran
              reguladas, cuando ello sea posible, por un Acuerdo de Transferencia
              suscrito entre Arquitectura Valor y el tercero. Por su parte, en las
              operaciones de Transmisión la Compañía suscribirá con el Encargado del
              Tratamiento un contrato de Transmisión de Datos Personales en los términos
              del artículo 25 del Decreto 1377 de 2013.
            </Typography>

            <Typography variant="body1" paragraph>
              Las Transferencias y Transmisiones serán realizadas por la Compañía a
              efectos de remitir Datos Personales a sus filiales, subsidiarias,
              accionistas, aliados comerciales y contratistas.
            </Typography>

            <Typography variant="body1" paragraph>
              Las Transferencias o Transmisiones, según corresponda, se realizarán para
              las mismas finalidades descritas en esta Política de Privacidad y aquellas
              finalidades específicas que se hayan informado al Titular en la
              Autorización, o cuando estas sean requeridas por la ley u ordenadas por
              autoridad competente.
            </Typography>

            <Typography variant="body1">
              Para proteger los Datos Personales que sean objeto de Transferencias o
              Transmisiones, Arquitectura Valor toma las medidas razonables para asegurar
              que los terceros a quienes transfiera o transmita Datos Personales operen
              bajo políticas y procedimientos que permitan proteger los datos personales
              de los Titulares.
            </Typography>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h3" gutterBottom>
              VIII. PROCEDIMIENTO PARA HACER EFECTIVOS LOS DERECHOS
            </Typography>

            <Typography variant="h5" gutterBottom>
              1. Consultas
            </Typography>

            <Typography variant="body1" paragraph>
              El Titular podrá realizar en todo momento consultas sobre los Datos
              Personales que reposen en las Bases de Datos de la Compañía, con el fin de
              solicitar prueba de la Autorización, conocer los Datos Personales que han
              sido recolectados y conocer el Tratamiento que se les ha dado.
            </Typography>

            <Typography variant="body1" paragraph>
              Todas las consultas serán atendidas en un término máximo de diez (10) días
              hábiles contados a partir de la fecha de recibo de esta. Cuando no fuere
              posible atender la consulta dentro de dicho término, se informará al
              interesado, expresando los motivos de la demora y señalando la fecha en que
              se atenderá su consulta, la cual en ningún caso podrá superar los cinco (5)
              días hábiles siguientes al vencimiento del primer término.
            </Typography>

            <Typography variant="h5" gutterBottom>
              2. Reclamaciones
            </Typography>

            <Typography variant="body1" paragraph>
              Así mismo, el Titular tiene el derecho de presentar reclamaciones cuando
              considere que la información contenida en las Bases de Datos debe ser
              objeto de corrección, actualización o supresión, o cuando advierta el
              presunto incumplimiento de cualquiera de los deberes de los Responsables
              del Tratamiento de conformidad con lo establecido en el artículo 17 de la
              Ley 1581 de 2012.
            </Typography>

            <Typography variant="body1" paragraph>
              Todas las reclamaciones serán atendidas en un término máximo de quince (15)
              días hábiles contados a partir del día siguiente a la fecha de su recibo.
              Cuando no fuere posible atender el reclamo dentro de dicho término, la
              Compañía informará al interesado los motivos de la demora y la fecha en que
              se atenderá su reclamo, la cual en ningún caso podrá superar los ocho (8)
              días hábiles siguientes al vencimiento del primer término.
            </Typography>

            <Typography variant="body1" paragraph>
              Una vez cumplidos los términos señalados por la Ley 1581 de 2012 y las
              demás normas que la reglamenten o complementen, el Titular al que se
              deniegue, total o parcialmente, el ejercicio de los derechos de acceso,
              actualización, rectificación, supresión y revocación podrá poner su caso
              en conocimiento de la Delegatura para la Protección de Datos Personales de
              la Superintendencia de Industria y Comercio.
            </Typography>

            <Typography variant="body1" paragraph>
              Para la radicación y atención de sus consultas o reclamos, le solicitamos
              contactarse con el responsable de la atención de solicitudes, peticiones,
              quejas y reclamos a través del correo electrónico
              <strong> atencionalcliente@grupovalor.com.co</strong>.
            </Typography>

            <Typography variant="body1" paragraph>
              Para la radicación y atención de su consulta o reclamo, le solicitamos
              suministrar la siguiente información:
            </Typography>

            <Box component="ol" sx={{ pl: 3 }}>
              <li><Typography variant="body1">Nombre completo y apellidos.</Typography></li>
              <li><Typography variant="body1">Datos de contacto (dirección física y/o electrónica y teléfonos de contacto).</Typography></li>
              <li><Typography variant="body1">Medios para recibir respuesta a su solicitud.</Typography></li>
              <li><Typography variant="body1">Motivo(s) o hecho(s) que dan lugar al reclamo con una breve descripción del derecho que desea ejercer (conocer, actualizar, rectificar, solicitar prueba de la autorización otorgada, revocarla, suprimir o acceder a la información).</Typography></li>
              <li><Typography variant="body1">Firma (si aplica) y número de identificación.</Typography></li>
            </Box>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h3" gutterBottom>
              IX. CAMBIOS EN LA POLÍTICA DE TRATAMIENTO DE DATOS
            </Typography>

            <Typography variant="body1">
              Arquitectura Valor se reserva el derecho de modificar la presente Política
              de Tratamiento con el fin de adaptarla a nuevos requerimientos de tipo
              legal, jurisprudencial, técnico y, en general, cuando sea necesario para
              prestar un mejor servicio. Cualquier cambio sustancial en esta Política de
              Tratamiento será comunicado oportunamente a los Titulares mediante una
              publicación en nuestro portal web
              https://arquitecturavalor.com/Nosotros.
            </Typography>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h3" gutterBottom>
              X. VIGENCIA DE LA POLÍTICA
            </Typography>

            <Typography variant="body1" paragraph>
              La presente Política rige a partir del 01 de enero de 2026.
            </Typography>

            <Typography variant="body1">
              Los Datos Personales incluidos en las Bases de Datos sobre las que la
              Compañía actúa como Responsable permanecerán en ellas mientras su
              Tratamiento sea necesario para el cumplimiento de las finalidades para las
              que fueron recolectados o, en su defecto, mientras exista un deber legal
              relativo a la conservación de dicha información.
            </Typography>
          </Box>        

        </Box>
      </Box>
    </InnerPageLayout>
  );
}