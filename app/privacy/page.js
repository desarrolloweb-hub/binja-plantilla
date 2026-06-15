import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad - Binja Móvil",
  description:
    "Conoce cómo Binja Móvil recopila, usa y protege tus datos personales y el uso de cookies en nuestro sitio.",
};

const secciones = [
  {
    id: "responsable",
    title: "1. Responsable del tratamiento",
    body: (
      <>
        <p>
          <strong>Binja Móvil</strong> es responsable del tratamiento de los
          datos personales que se recaben a través de este sitio web. Para
          cualquier asunto relacionado con tu privacidad puedes contactarnos en{" "}
          <a href="mailto:info@binjamovil.com">info@binjamovil.com</a> o al
          WhatsApp{" "}
          <a
            href="https://wa.me/525665938841"
            target="_blank"
            rel="noopener noreferrer"
          >
            +52 56 6593 8841
          </a>
          .
        </p>
        <p>Domicilio: 3er Ave. 306, Col. Guerra, Guadalupe, Nuevo León, México.</p>
      </>
    ),
  },
  {
    id: "datos",
    title: "2. Datos que recopilamos",
    body: (
      <ul>
        <li>
          <strong>Datos de contacto</strong> que proporcionas voluntariamente en
          formularios: nombre, correo, teléfono y empresa.
        </li>
        <li>
          <strong>Datos de navegación</strong> recopilados mediante cookies y
          tecnologías similares (ver sección de cookies).
        </li>
        <li>
          <strong>Datos técnicos</strong> como dirección IP, tipo de navegador y
          páginas visitadas, con fines de seguridad y medición.
        </li>
      </ul>
    ),
  },
  {
    id: "uso",
    title: "3. Finalidad del uso de tus datos",
    body: (
      <ul>
        <li>Atender solicitudes de información, cotizaciones y soporte.</li>
        <li>Mejorar nuestros servicios y la experiencia en el sitio.</li>
        <li>Enviar comunicaciones relevantes cuando lo hayas autorizado.</li>
        <li>Cumplir con obligaciones legales aplicables.</li>
      </ul>
    ),
  },
  {
    id: "cookies",
    title: "4. Uso de cookies",
    body: (
      <>
        <p>
          Utilizamos cookies para que el sitio funcione, recordar tus
          preferencias y medir el tráfico. Puedes gestionar tu consentimiento en
          cualquier momento desde el banner de cookies. Las categorías son:
        </p>
        <ul>
          <li>
            <strong>Esenciales / Técnicas:</strong> necesarias para la navegación
            segura, protección de formularios (CSRF) y guardar tu consentimiento.
            Siempre activas.
          </li>
          <li>
            <strong>Preferencias y Funcionales:</strong> recuerdan idioma, tema y
            región.
          </li>
          <li>
            <strong>Medición y Analíticas:</strong> Google Analytics (_ga, _gid,
            _ga_*) para entender el uso del sitio.
          </li>
          <li>
            <strong>Publicidad y Marketing:</strong> Google Ads (_gcl_au) y
            Meta/Facebook Pixel (_fbp, _fbc) para mostrar anuncios relevantes.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "derechos",
    title: "5. Tus derechos (ARCO)",
    body: (
      <p>
        Tienes derecho a <strong>Acceder</strong>, <strong>Rectificar</strong>,{" "}
        <strong>Cancelar</strong> u <strong>Oponerte</strong> al tratamiento de
        tus datos, así como a revocar tu consentimiento. Para ejercerlos,
        escríbenos a{" "}
        <a href="mailto:info@binjamovil.com">info@binjamovil.com</a>.
      </p>
    ),
  },
  {
    id: "terceros",
    title: "6. Compartir datos con terceros",
    body: (
      <p>
        No vendemos tus datos personales. Podemos compartir información con
        proveedores tecnológicos (como servicios de analítica o mensajería) que
        nos ayudan a operar el sitio, siempre bajo acuerdos de confidencialidad y
        únicamente para las finalidades descritas.
      </p>
    ),
  },
  {
    id: "cambios",
    title: "7. Cambios a esta política",
    body: (
      <p>
        Podemos actualizar esta Política de Privacidad para reflejar cambios en
        nuestras prácticas o por requisitos legales. La versión vigente siempre
        estará publicada en esta página.
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
          <h1 className="binja-legal-hero__title">Política de Privacidad</h1>
          <p className="binja-legal-hero__desc">
            Tu privacidad es importante para nosotros. Aquí te explicamos cómo
            recopilamos, usamos y protegemos tu información.
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
              <p>¿Tienes dudas sobre el tratamiento de tus datos?</p>
              <Link href="contact" className="binja-legal__btn">
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
