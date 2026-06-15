import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";

const stats = [
  {
    num: "28%",
    icon: "fas fa-tractor",
    text: "de las fincas agrícolas en México aún no usan tecnología para monitorear sus cultivos.",
  },
  {
    num: "$3,500 MDP",
    icon: "fas fa-sun",
    text: "perdidos al año en Sinaloa por sequías no controladas.",
  },
  {
    num: "25%",
    icon: "fas fa-bug",
    text: "menos producción de aguacate en Michoacán por plagas no detectadas.",
  },
  {
    num: "70%",
    icon: "fas fa-microchip",
    text: "de las tecnologías agrícolas (drones, IoT, TWIG-V) requieren conectividad constante.",
  },
];

const transmite = [
  { icon: "fas fa-seedling", title: "Sensores de suelo" },
  { icon: "fas fa-video", title: "Cámaras de vigilancia" },
  { icon: "fas fa-tint", title: "Sistemas de riego TWIG-V" },
];

const casos = [
  {
    lugar: "Sinaloa",
    icon: "fas fa-tint",
    text: "Amplimax permite a los sensores IoT de TWIG-V enviar datos de humedad para riego automático, reduciendo un 35% el uso de agua.",
    badge: "-35% agua",
  },
  {
    lugar: "Michoacán",
    icon: "fas fa-leaf",
    text: "Amplimax permite monitorear el status en tiempo real de los cultivos de aguacate.",
    badge: "Monitoreo en vivo",
  },
];

const pilares = [
  {
    num: "01",
    icon: "fas fa-microchip",
    title: "Tecnología",
    desc: "Sensores, drones, TWIG-V e IoT que recopilan y procesan datos del campo.",
  },
  {
    num: "02",
    icon: "fas fa-broadcast-tower",
    title: "Conectividad",
    desc: "Amplimax con hasta 30 km de alcance para mantener todo conectado.",
  },
  {
    num: "03",
    icon: "fas fa-cloud",
    title: "Integración",
    desc: "Plataformas en la nube que centralizan y visualizan la información.",
  },
];

const compatibles = ["ALTAN Redes", "OMV", "MIFI", "Satelital", "Y muchos más"];

const page = () => {
  return (
    <NetBandLayout header={1}>
      {/* Hero */}
      <section className="amplimax-hero">
        <div className="amplimax-hero__overlay" />
        <div className="container amplimax-hero__content">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="amplimax-hero__label">
                <i className="fas fa-seedling" /> AGRICULTURA 4.0
              </span>
              <h1 className="amplimax-hero__title">
                Amplimax: la conexión que potencia la tecnología en el campo
              </h1>
              <p className="amplimax-hero__desc">
                Sin conectividad robusta, la agricultura 4.0 no es posible. Por
                eso Amplimax es el puente para que drones, sensores y sistemas
                IoT funcionen en zonas remotas.
              </p>
              <p className="amplimax-hero__tagline">
                Conoce Amplimax: la solución 4G que revoluciona la agricultura
                4.0 en zonas remotas.
              </p>
              <div className="amplimax-hero__buttons">
                <Link href="contact" className="amplimax-btn">
                  Solicitar información <i className="fas fa-chevron-right" />
                </Link>
                <a
                  href="https://wa.me/525665938841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="amplimax-btn amplimax-btn--ghost"
                >
                  <i className="fab fa-whatsapp" /> Escríbenos
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="amplimax-hero__card">
                <div className="amplimax-hero__card-head">
                  <div className="amplimax-hero__card-icon">
                    <i className="fas fa-broadcast-tower" />
                  </div>
                  <div>
                    <h4>Amplimax 4G</h4>
                    <span>Antenas integradas 4G · 3G · 2G</span>
                  </div>
                </div>

                <div className="amplimax-hero__specs">
                  <div className="amplimax-hero__spec">
                    <strong>30 km</strong>
                    <span>de alcance</span>
                  </div>
                  <div className="amplimax-hero__spec">
                    <strong>4G</strong>
                    <span>alta velocidad</span>
                  </div>
                  <div className="amplimax-hero__spec">
                    <strong>IoT</strong>
                    <span>listo para sensores</span>
                  </div>
                </div>

                <ul className="amplimax-hero__list">
                  <li>
                    <i className="fas fa-check-circle" /> Drones y sensores en
                    campo
                  </li>
                  <li>
                    <i className="fas fa-check-circle" /> Riego inteligente
                    TWIG-V
                  </li>
                  <li>
                    <i className="fas fa-check-circle" /> Monitoreo en tiempo
                    real
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema / Contexto */}
      <section className="amplimax-section">
        <div className="container">
          <div className="amplimax-head">
            <span className="amplimax-eyebrow">EL PROBLEMA</span>
            <h2 className="amplimax-title">
              El campo pierde millones por falta de conectividad
            </h2>
            <p className="amplimax-subtitle">
              El potencial de la tecnología agrícola se limita a zonas urbanas
              cuando no hay una red que la sostenga.
            </p>
          </div>
          <div className="row g-4">
            {stats.map((s, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="amplimax-stat">
                  <div className="amplimax-stat__icon">
                    <i className={s.icon} />
                  </div>
                  <h3>{s.num}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="amplimax-sources">
            <span className="amplimax-sources__label">
              <i className="fas fa-circle-check" /> Fuentes oficiales:
            </span>
            <div className="amplimax-sources__pills">
              <a
                href="https://www.inegi.org.mx/programas/ca/2022/"
                target="_blank"
                rel="noopener noreferrer"
                className="amplimax-source-pill"
              >
                <strong>INEGI</strong> Censo Agropecuario 2022
                <i className="fas fa-arrow-up-right-from-square" />
              </a>
              <a
                href="https://www.gob.mx/agricultura"
                target="_blank"
                rel="noopener noreferrer"
                className="amplimax-source-pill"
              >
                <strong>SADER</strong> Pérdidas en Sinaloa
                <i className="fas fa-arrow-up-right-from-square" />
              </a>
              <a
                href="https://www.cimmyt.org/es/"
                target="_blank"
                rel="noopener noreferrer"
                className="amplimax-source-pill"
              >
                <strong>CIMMYT</strong> Plagas en Michoacán
                <i className="fas fa-arrow-up-right-from-square" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Rol de Amplimax */}
      <section className="amplimax-section amplimax-section--alt">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="amplimax-eyebrow">EL ROL DE AMPLIMAX</span>
              <h2 className="amplimax-title">
                No es la tecnología, es lo que la hace llegar al campo
              </h2>
              <p className="amplimax-subtitle">
                Internet 4G de hasta <strong>30 km</strong> de alcance para
                transmitir en tiempo real los datos de tu operación agrícola.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="amplimax-transmite">
                {transmite.map((t, i) => (
                  <div className="amplimax-transmite__item" key={i}>
                    <div className="amplimax-transmite__icon">
                      <i className={t.icon} />
                    </div>
                    <span>{t.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos / Colaboración tecnológica */}
      <section className="amplimax-section">
        <div className="container">
          <div className="amplimax-head">
            <span className="amplimax-eyebrow">COLABORACIÓN TECNOLÓGICA</span>
            <h2 className="amplimax-title">Resultados reales en el campo</h2>
          </div>
          <div className="row g-4 justify-content-center">
            {casos.map((c, i) => (
              <div className="col-lg-6" key={i}>
                <div className="amplimax-caso">
                  <div className="amplimax-caso__top">
                    <div className="amplimax-caso__icon">
                      <i className={c.icon} />
                    </div>
                    <h4>{c.lugar}</h4>
                    <span className="amplimax-caso__badge">{c.badge}</span>
                  </div>
                  <p>{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios / Analogía */}
      <section className="amplimax-banner">
        <div className="container">
          <span className="amplimax-eyebrow amplimax-eyebrow--light">
            LOS BENEFICIOS
          </span>
          <h2 className="amplimax-banner__title">
            Sin conectividad, la agricultura 4.0 no escala. Con Amplimax, sí.
          </h2>
          <p className="amplimax-banner__text">
            Así como una carretera no es un camión, Amplimax no es un drone ni un
            sensor… pero sin carretera, el camión no llega a su destino. Amplimax
            es el sistema nervioso que conecta el cerebro —la tecnología— con el
            cuerpo —el campo.
          </p>
        </div>
      </section>

      {/* Qué se necesita / Pilares */}
      <section className="amplimax-section amplimax-section--alt">
        <div className="container">
          <div className="amplimax-head">
            <span className="amplimax-eyebrow">AGRICULTURA 4.0</span>
            <h2 className="amplimax-title">
              Qué necesitas para conectar el campo
            </h2>
            <p className="amplimax-subtitle">
              Tres piezas que, juntas, hacen posible la agricultura inteligente
              en zonas remotas.
            </p>
          </div>
          <div className="amplimax-flow">
            {pilares.map((p, i) => (
              <div className="amplimax-flow__step" key={i}>
                <div className="amplimax-flow__circle">
                  <i className={p.icon} />
                  <span className="amplimax-flow__num">{p.num}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {i < pilares.length - 1 && (
                  <div className="amplimax-flow__connector">
                    <i className="fas fa-chevron-right" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibilidad */}
      <section className="amplimax-section">
        <div className="container">
          <div className="amplimax-head">
            <span className="amplimax-eyebrow">COMPATIBILIDAD</span>
            <h2 className="amplimax-title">
              No compite con la tecnología, la hace posible al mejor costo
            </h2>
          </div>
          <div className="amplimax-compatibles">
            {compatibles.map((c, i) => (
              <span className="amplimax-chip" key={i}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="amplimax-cta">
        <div className="container">
          <div className="amplimax-cta__box">
            <div className="amplimax-cta__glow" />
            <div className="amplimax-cta__inner">
              <h2>¿Listo para conectar tu operación agrícola?</h2>
              <p>
                Si ya usas tecnología agrícola pero el costo de la conectividad
                te limita, Amplimax es tu solución para tener internet en el
                campo.
              </p>
              <div className="amplimax-cta__buttons">
                <Link href="contact" className="amplimax-btn">
                  Agenda consultoría <i className="fas fa-chevron-right" />
                </Link>
                <a
                  href="https://wa.me/525665938841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="amplimax-btn amplimax-btn--white"
                >
                  <i className="fab fa-whatsapp" /> +52 56 6593 8841
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};

export default page;
