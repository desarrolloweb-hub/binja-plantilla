import NetBandLayout from "@/layouts/NetBandLayout";

const infoCards = [
  {
    icon: "fab fa-whatsapp",
    label: "WhatsApp",
    value: "+52 921 541 7921",
    href: "https://wa.me/529215417921",
    external: true,
  },
  {
    icon: "far fa-envelope",
    label: "Correo",
    value: "info@binjamovil.com",
    href: "mailto:info@binjamovil.com",
    external: false,
  },
  {
    icon: "fas fa-map-marker-alt",
    label: "Dirección",
    value: "3er Ave. 306, Col. Guerra, Guadalupe, NL",
    href: "https://maps.google.com/?q=3er+Ave+306+Colonia+Guerra+Guadalupe+Nuevo+Leon",
    external: true,
  },
  {
    icon: "far fa-clock",
    label: "Horario",
    value: "Lun a Vie · 9:30am – 6:30pm",
    href: null,
    external: false,
  },
];

const page = () => {
  return (
    <NetBandLayout header={1}>
      {/* Hero */}
      <section className="binja-contact-hero">
        <div className="binja-contact-hero__overlay" />
        <div className="container binja-contact-hero__content">
          <span className="binja-contact-hero__label">CONTACTO</span>
          <h1 className="binja-contact-hero__title">Hablemos de tu conexión</h1>
          <p className="binja-contact-hero__desc">
            Cuéntanos sobre tu operación y te ayudamos a encontrar la solución de
            conectividad ideal para tu negocio, flota o sitio remoto.
          </p>
        </div>
      </section>

      {/* Info + Formulario */}
      <section className="binja-contact-section">
        <div className="container">
          <div className="row g-5">
            {/* Columna info */}
            <div className="col-lg-5">
              <span className="binja-contact-eyebrow">ESTAMOS PARA AYUDARTE</span>
              <h2 className="binja-contact-title">
                Ponte en contacto con Binja Móvil
              </h2>
              <p className="binja-contact-subtitle">
                Respondemos rápido. Escríbenos por el canal que prefieras y un
                asesor te atenderá.
              </p>

              <div className="binja-contact-info">
                {infoCards.map((c, i) => {
                  const inner = (
                    <>
                      <div className="binja-contact-info__icon">
                        <i className={c.icon} />
                      </div>
                      <div className="binja-contact-info__text">
                        <span>{c.label}</span>
                        <p>{c.value}</p>
                      </div>
                    </>
                  );
                  return c.href ? (
                    <a
                      key={i}
                      className="binja-contact-info__item"
                      href={c.href}
                      {...(c.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={i} className="binja-contact-info__item">
                      {inner}
                    </div>
                  );
                })}
              </div>

              <div className="binja-contact-social">
                <a
                  href="https://instagram.com/binjamovil"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>

            {/* Columna formulario */}
            <div className="col-lg-7">
              <div className="binja-contact-form-box">
                <h3>Envíanos un mensaje</h3>
                <form className="binja-contact-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" placeholder="Nombre completo" required />
                    </div>
                    <div className="col-md-6">
                      <input type="tel" placeholder="Teléfono / WhatsApp" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Correo electrónico" required />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Empresa (opcional)" />
                    </div>
                    <div className="col-12">
                      <select defaultValue="" required>
                        <option value="" disabled>
                          ¿Qué solución te interesa?
                        </option>
                        <option>Internet Satelital</option>
                        <option>Móvil 4G/5G</option>
                        <option>Solución Híbrida</option>
                        <option>SIMs M2M / IoT</option>
                        <option>Equipos / Routers</option>
                        <option>Otra</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea
                        rows={5}
                        placeholder="Cuéntanos sobre tu proyecto u operación..."
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="binja-contact-submit">
                        Enviar mensaje <i className="fas fa-chevron-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="binja-contact-cta">
        <div className="container">
          <div className="binja-contact-cta__box">
            <div>
              <h2>¿Prefieres una respuesta inmediata?</h2>
              <p>Escríbenos por WhatsApp y te atendemos al instante.</p>
            </div>
            <a
              href="https://wa.me/529215417921"
              target="_blank"
              rel="noopener noreferrer"
              className="binja-contact-cta__btn"
            >
              <i className="fab fa-whatsapp" /> Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};

export default page;
