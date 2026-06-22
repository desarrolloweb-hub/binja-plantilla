import NetBandLayout from "@/layouts/NetBandLayout";
import SoporteFaq from "@/components/SoporteFaq";

export const metadata = {
  title: "Soporte Técnico - Binja Móvil",
  description:
    "Centro de Soporte Técnico de Binja Móvil: levanta un ticket, contacta a soporte por WhatsApp o teléfono y consulta los primeros pasos para tu equipo satelital, 4G/5G o híbrido.",
};

// NOTA: por ahora todos los canales apuntan al mismo WhatsApp (+52 56 6593 8841).
// Cuando existan números separados, dividir soporte/comercial actualizando estos enlaces.
const WHATSAPP_SOPORTE =
  "https://wa.me/525665938841?text=Hola%2C%20necesito%20soporte%20t%C3%A9cnico%20con%20mi%20servicio%20Binja%20M%C3%B3vil.";

const canales = [
  {
    icon: "fab fa-whatsapp",
    title: "WhatsApp de Soporte",
    desc: "La forma más rápida de recibir ayuda. Te atiende un técnico al instante.",
    btnLabel: "Abrir WhatsApp",
    href: WHATSAPP_SOPORTE,
    external: true,
  },
  {
    icon: "fas fa-headset",
    title: "Línea de Soporte",
    desc: "Llámanos en horario de atención y te guiamos paso a paso.",
    btnLabel: "+52 56 6593 8841",
    href: WHATSAPP_SOPORTE,
    external: true,
    ghost: true,
  },
  {
    icon: "fas fa-ticket-alt",
    title: "Levanta un Ticket",
    desc: "Reporta una incidencia con todos los detalles y le damos seguimiento.",
    btnLabel: "Crear ticket",
    href: "#ticket",
    external: false,
    ghost: true,
  },
];

const pasos = [
  {
    num: "1",
    title: "Identifica tu servicio y equipo",
    desc: "Ten a la mano el tipo de servicio (satelital, 4G/5G o híbrido) y el modelo del equipo.",
  },
  {
    num: "2",
    title: "Describe la incidencia",
    desc: "Cuéntanos qué está pasando: sin señal, lento, no enciende, etc. Entre más detalle, más rápido lo resolvemos.",
  },
  {
    num: "3",
    title: "Recibe seguimiento",
    desc: "Un técnico revisa tu caso y te contacta por el canal que prefieras hasta resolverlo.",
  },
];

const page = () => {
  return (
    <NetBandLayout header={1}>
      {/* Hero */}
      <section className="binja-contact-hero">
        <div className="binja-contact-hero__overlay" />
        <div className="container binja-contact-hero__content">
          <span className="binja-contact-hero__label">SOPORTE TÉCNICO</span>
          <h1 className="binja-contact-hero__title">
            Estamos aquí para ayudarte
          </h1>
          <p className="binja-contact-hero__desc">
            ¿Tienes una incidencia con tu conexión? Elige el canal que prefieras,
            levanta un ticket o revisa los primeros pasos para resolverlo tú
            mismo en minutos.
          </p>
        </div>
      </section>

      {/* Canales de soporte */}
      <section className="binja-soporte-canales">
        <div className="container">
          <div className="binja-soporte-canales__head">
            <span className="binja-contact-eyebrow">CANALES DE ATENCIÓN</span>
            <h2 className="binja-contact-title">¿Cómo prefieres recibir ayuda?</h2>
          </div>
          <div className="row g-4">
            {canales.map((c, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="binja-soporte-canal">
                  <div className="binja-soporte-canal__icon">
                    <i className={c.icon} />
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <a
                    className={`binja-soporte-canal__btn${
                      c.ghost ? " binja-soporte-canal__btn--ghost" : ""
                    }`}
                    href={c.href}
                    {...(c.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {c.btnLabel}
                    {c.icon === "fab fa-whatsapp" ? null : (
                      <i className="fas fa-chevron-right" />
                    )}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de ticket */}
      <section className="binja-contact-section" id="ticket">
        <div className="container">
          <div className="row g-5">
            {/* Columna info / pasos */}
            <div className="col-lg-5">
              <span className="binja-contact-eyebrow">LEVANTA UN TICKET</span>
              <h2 className="binja-contact-title">
                Reporta tu incidencia y le damos seguimiento
              </h2>
              <p className="binja-contact-subtitle">
                Llena el formulario con los datos de tu servicio y un técnico
                especializado tomará tu caso.
              </p>

              <div className="binja-soporte-pasos">
                {pasos.map((p, i) => (
                  <div className="binja-soporte-paso" key={i}>
                    <div className="binja-soporte-paso__num">{p.num}</div>
                    <div>
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="binja-soporte-nota">
                <i className="fas fa-clock" />
                <p>
                  Horario de soporte: Lunes a Sábado de 9:00am a 6:00pm. Para
                  incidencias urgentes contamos con monitoreo 24/7 desde nuestro
                  NOC propio.
                </p>
              </div>
            </div>

            {/* Columna formulario */}
            <div className="col-lg-7">
              <div className="binja-contact-form-box">
                <h3>Crear ticket de soporte</h3>
                <form className="binja-contact-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" placeholder="Nombre completo" required />
                    </div>
                    <div className="col-md-6">
                      <input type="tel" placeholder="Teléfono / WhatsApp" required />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        placeholder="Correo electrónico"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        placeholder="N° de cliente o sitio (opcional)"
                      />
                    </div>
                    <div className="col-md-6">
                      <select defaultValue="" required>
                        <option value="" disabled>
                          Tipo de servicio
                        </option>
                        <option>Internet Satelital</option>
                        <option>Móvil 4G/5G</option>
                        <option>Solución Híbrida</option>
                        <option>SIMs M2M / IoT</option>
                        <option>Equipos / Routers</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select defaultValue="" required>
                        <option value="" disabled>
                          Prioridad
                        </option>
                        <option>Baja — consulta general</option>
                        <option>Media — afecta parcialmente</option>
                        <option>Alta — sin servicio</option>
                        <option>Crítica — operación detenida</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <input type="text" placeholder="Asunto del ticket" required />
                    </div>
                    <div className="col-12">
                      <textarea
                        rows={5}
                        placeholder="Describe tu incidencia: qué pasa, desde cuándo y qué has intentado..."
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="binja-contact-submit">
                        Enviar ticket <i className="fas fa-chevron-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ primeros pasos */}
      <SoporteFaq />

      {/* CTA WhatsApp */}
      <section className="binja-contact-cta">
        <div className="container">
          <div className="binja-contact-cta__box">
            <div>
              <h2>¿Necesitas ayuda ahora mismo?</h2>
              <p>Escríbenos por WhatsApp y un técnico te atiende al instante.</p>
            </div>
            <a
              href={WHATSAPP_SOPORTE}
              target="_blank"
              rel="noopener noreferrer"
              className="binja-contact-cta__btn"
            >
              <i className="fab fa-whatsapp" /> Soporte por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};

export default page;
