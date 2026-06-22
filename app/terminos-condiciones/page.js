import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";

export const metadata = {
  title: "Términos y Condiciones - Binja Móvil",
  description:
    "Términos y Condiciones de uso del sitio web de Binja Móvil: acceso, uso del sitio, propiedad intelectual, responsabilidad y legislación aplicable.",
};

const secciones = [
  {
    id: "responsable",
    title: "1. Identidad del responsable",
    body: (
      <p>
        <strong>Binja Móvil</strong> pone a disposición de los usuarios los
        presentes Términos y Condiciones, que regulan el acceso, la navegación y
        el uso de los servicios ofrecidos a través de este sitio web. Al
        utilizar el sitio, el usuario acepta de forma implícita estos términos.
        Para cualquier aclaración puedes escribirnos a{" "}
        <a href="mailto:info@binjamovil.com">info@binjamovil.com</a>.
      </p>
    ),
  },
  {
    id: "uso",
    title: "2. Uso del sitio",
    body: (
      <>
        <p>
          El usuario se compromete a utilizar el sitio de forma lícita y
          adecuada, absteniéndose de:
        </p>
        <ul>
          <li>Realizar actividades ilegales o contrarias a la buena fe.</li>
          <li>Dañar, sobrecargar o deteriorar el sitio.</li>
          <li>Intentar accesos no autorizados a sus sistemas.</li>
          <li>Introducir malware o elementos dañinos.</li>
          <li>Interferir con el funcionamiento del sitio.</li>
        </ul>
      </>
    ),
  },
  {
    id: "informacion",
    title: "3. Información proporcionada por el usuario",
    body: (
      <p>
        El usuario es responsable de que la información que proporcione sea
        veraz, completa y actualizada. Binja Móvil no asume responsabilidad
        alguna por datos inexactos o desactualizados proporcionados por el
        usuario.
      </p>
    ),
  },
  {
    id: "servicios",
    title: "4. Servicios",
    body: (
      <p>
        El sitio ofrece información sobre servicios de conectividad (internet
        empresarial, dedicado, residencial y satelital), soluciones de red
        (SD-WAN, respaldo, redes administradas) y atención comercial. La
        información publicada tiene carácter informativo y puede modificarse sin
        previo aviso.
      </p>
    ),
  },
  {
    id: "propiedad",
    title: "5. Propiedad intelectual",
    body: (
      <p>
        Todo el contenido del sitio —textos, imágenes, logotipos, diseño y
        software— pertenece a Binja Móvil o cuenta con la licencia
        correspondiente. Queda prohibida su reproducción, distribución o
        modificación sin autorización expresa.
      </p>
    ),
  },
  {
    id: "responsabilidad",
    title: "6. Limitación de responsabilidad",
    body: (
      <p>
        Binja Móvil no garantiza que el servicio sea ininterrumpido o libre de
        errores. El usuario asume el riesgo derivado del uso del sitio. La
        empresa no se hace responsable por daños derivados del uso, fallas
        técnicas, interrupciones del servicio o cuestiones atribuibles a
        terceros.
      </p>
    ),
  },
  {
    id: "enlaces",
    title: "7. Enlaces a terceros",
    body: (
      <p>
        El sitio puede contener enlaces a sitios externos. Binja Móvil no es
        responsable del contenido, las políticas ni las prácticas de dichos
        sitios de terceros.
      </p>
    ),
  },
  {
    id: "seguridad",
    title: "8. Seguridad y protección de datos",
    body: (
      <p>
        Binja Móvil implementa medidas de seguridad, aunque no garantiza la
        eliminación total de los riesgos propios de internet. El tratamiento de
        datos personales se realiza conforme a nuestro{" "}
        <Link href="aviso-privacidad">Aviso de Privacidad</Link>.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "9. Cookies y modificaciones",
    body: (
      <p>
        El sitio utiliza cookies para mejorar la experiencia del usuario y con
        fines analíticos. Binja Móvil se reserva el derecho de modificar estos
        términos, los cuales entrarán en vigor a partir de su publicación en
        esta página.
      </p>
    ),
  },
  {
    id: "legislacion",
    title: "10. Legislación aplicable",
    body: (
      <p>
        Los presentes Términos y Condiciones se rigen por la legislación
        mexicana aplicable.
      </p>
    ),
  },
];

const page = () => {
  return (
    <NetBandLayout header={1}>
      {/* Hero */}
      <section className="binja-legal-hero">
        <div className="binja-legal-hero__overlay" />
        <div className="container binja-legal-hero__content">
          <span className="binja-legal-hero__label">LEGAL</span>
          <h1 className="binja-legal-hero__title">Términos y Condiciones</h1>
          <p className="binja-legal-hero__desc">
            Estos términos regulan el acceso, la navegación y el uso del sitio
            web de Binja Móvil. Al utilizarlo, aceptas las condiciones aquí
            descritas.
          </p>
          <span className="binja-legal-hero__date">
            Última actualización: junio 2026
          </span>
        </div>
      </section>

      {/* Contenido */}
      <section className="binja-legal">
        <div className="container">
          <div className="binja-legal__wrap">
            {secciones.map((s) => (
              <div className="binja-legal__block" key={s.id} id={s.id}>
                <h2>{s.title}</h2>
                <div className="binja-legal__body">{s.body}</div>
              </div>
            ))}

            <div className="binja-legal__cta">
              <p>¿Tienes dudas sobre estos términos?</p>
              <Link href="contacto" className="binja-legal__btn">
                Contáctanos <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};

export default page;
