import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";

export const metadata = {
  title: "Aviso de Privacidad - Binja Móvil",
  description:
    "Aviso de Privacidad de Binja Móvil: qué datos personales recabamos, con qué finalidades los usamos y cómo ejercer tus derechos ARCO.",
};

const secciones = [
  {
    id: "responsable",
    title: "1. Responsable del tratamiento de tus datos personales",
    body: (
      <>
        <p>
          <strong>Binja Móvil</strong> es responsable del tratamiento y
          protección de tus datos personales, y se compromete a resguardarlos
          mediante medidas de seguridad administrativas, técnicas y físicas que
          eviten su daño, pérdida, alteración o uso no autorizado.
        </p>
        <p>
          Domicilio: 3er Ave. 306, Col. Guerra, Guadalupe, Nuevo León, México.
          Contacto:{" "}
          <a href="mailto:info@binjamovil.com">info@binjamovil.com</a> · WhatsApp{" "}
          <a
            href="https://wa.me/525665938841"
            target="_blank"
            rel="noopener noreferrer"
          >
            +52 56 6593 8841
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "datos",
    title: "2. Datos personales que recabamos",
    body: (
      <>
        <p>Para las finalidades descritas podemos recabar:</p>
        <ul>
          <li>Nombre completo, teléfono, correo electrónico y domicilio de servicio.</li>
          <li>Nombre de la empresa, en caso de servicios para negocios.</li>
          <li>RFC y datos fiscales, cuando se requiere facturación.</li>
          <li>Datos de contacto adicionales que nos proporciones.</li>
        </ul>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "3. Finalidades del tratamiento",
    body: (
      <>
        <p>
          <strong>Finalidades primarias</strong> (necesarias para la relación
          con Binja Móvil):
        </p>
        <ul>
          <li>Prestación de los servicios contratados y soporte al cliente.</li>
          <li>Elaboración de cotizaciones e instalación de equipos.</li>
          <li>Facturación y cobranza.</li>
          <li>Atención de dudas, quejas y aclaraciones.</li>
        </ul>
        <p>
          <strong>Finalidades secundarias</strong> (opcionales): envío de
          material promocional y novedades de nuestros servicios. Puedes
          solicitar en cualquier momento que dejemos de enviarte comunicaciones
          de marketing.
        </p>
      </>
    ),
  },
  {
    id: "terceros",
    title: "4. Transferencia y uso compartido de datos",
    body: (
      <p>
        Tus datos personales únicamente se comparten para el cumplimiento de
        obligaciones legales, con proveedores de servicios estrictamente
        necesarios para operar y con las autoridades competentes cuando así lo
        requieran. <strong>Tus datos no se comercializan.</strong>
      </p>
    ),
  },
  {
    id: "derechos",
    title: "5. Tus derechos (ARCO)",
    body: (
      <p>
        Tienes derecho a <strong>Acceder</strong>, <strong>Rectificar</strong>,{" "}
        <strong>Cancelar</strong> u <strong>Oponerte</strong> al tratamiento de
        tus datos personales, así como a revocar tu consentimiento. Para
        ejercer cualquiera de estos derechos, escríbenos a{" "}
        <a href="mailto:info@binjamovil.com">info@binjamovil.com</a>.
      </p>
    ),
  },
  {
    id: "seguridad",
    title: "6. Seguridad y conservación de los datos",
    body: (
      <p>
        Implementamos medidas de protección para resguardar tu información y
        conservamos tus datos personales únicamente durante el tiempo necesario
        para cumplir las finalidades descritas o las obligaciones legales
        aplicables.
      </p>
    ),
  },
  {
    id: "cambios",
    title: "7. Cambios al Aviso de Privacidad",
    body: (
      <p>
        Podemos actualizar este Aviso de Privacidad para reflejar cambios en
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
          <h1 className="binja-legal-hero__title">Aviso de Privacidad</h1>
          <p className="binja-legal-hero__desc">
            En Binja Móvil protegemos tu información. Aquí te explicamos qué
            datos personales recabamos, con qué finalidades los usamos y cómo
            puedes ejercer tus derechos.
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
