"use client";
import { useState } from "react";

const tabs = [
  {
    key: "routers",
    label: "Routers",
    products: [
      {
        img: "router-portatil.jpg",
        name: "CSG m106 Pro - Router 4G Portátil",
        desc: "Compacto y plug-and-play para conectar tu equipo en minutos.",
        specs: ["4G LTE", "WiFi", "Portátil"],
      },
      {
        img: "router-rugged.jpg",
        name: "Katalyst Spark 5G - Router Empresarial",
        desc: "Alto rendimiento para operaciones que exigen máxima velocidad.",
        specs: ["5G", "Multi-SIM", "Empresarial"],
      },
      {
        img: "mifi-hotspot.jpg",
        name: "InHand CR202 Lite - Router 4G LTE CAT6 con WiFi",
        desc: "Conectividad confiable con WiFi integrado para varios dispositivos.",
        specs: ["LTE CAT6", "WiFi", "Compacto"],
      },
    ],
  },
  {
    key: "amplificadores",
    label: "Amplificadores de Señal",
    products: [
      {
        img: "antena-exterior.jpg",
        name: "Antena Direccional de Alto Rendimiento",
        desc: "Enfoca la señal hacia la torre para máxima cobertura en zonas lejanas.",
        specs: ["Exterior", "Direccional", "Alta ganancia"],
      },
      {
        img: "antena-exterior.jpg",
        name: "Kit de Antenas para Router 4G/5G",
        desc: "Mejora la recepción de tu router en sitios con señal débil.",
        specs: ["4G/5G", "Kit completo", "Fácil instalación"],
      },
      {
        img: "mifi-hotspot.jpg",
        name: "Amplificador de Señal Celular M2M",
        desc: "Refuerza la conexión de equipos IoT y M2M en campo.",
        specs: ["M2M / IoT", "Multibanda", "Estable"],
      },
    ],
  },
  {
    key: "rugged",
    label: "Equipos Rugged",
    products: [
      {
        img: "router-rugged.jpg",
        name: "Katalyst Spark 5G - Router Industrial Rugged",
        desc: "Resistente a polvo, agua y vibración para entornos industriales.",
        specs: ["IP67", "5G", "Industrial"],
      },
      {
        img: "router-portatil.jpg",
        name: "CSG m106 Pro - Router 4G para Campo",
        desc: "Pensado para obra y campo, soporta condiciones exigentes.",
        specs: ["4G", "Robusto", "Campo"],
      },
      {
        img: "router-rugged.jpg",
        name: "InHand CR202 Lite - Router Resistente a Golpes",
        desc: "Carcasa reforzada para operación continua en exteriores.",
        specs: ["Anti-golpes", "LTE", "Exterior"],
      },
    ],
  },
];

const features = [
  {
    icon: "fas fa-desktop",
    title: "Monitoreo con NOC propio",
    desc: "Centro de operaciones de red 24/7 para supervisar y gestionar tu conectividad en tiempo real.",
  },
  {
    icon: "fas fa-th-large",
    title: "Plataforma para el cliente",
    desc: "Panel de control donde puedes visualizar el estado de tus equipos, consumo y rendimiento de red.",
  },
  {
    icon: "fas fa-users",
    title: "Ingenieros especializados",
    desc: "Equipo de consultores técnicos expertos en conectividad híbrida y soluciones M2M/IoT.",
  },
  {
    icon: "fas fa-award",
    title: "25 años de experiencia",
    desc: "Dos décadas y media liderando soluciones de conectividad móvil en México y Latinoamérica.",
  },
];

const EquiposSection = () => {
  const [active, setActive] = useState("routers");
  const current = tabs.find((t) => t.key === active);

  return (
    <section className="binja-equipos">
      <div className="container">
        <div className="binja-equipos__head">
          <h2 className="binja-equipos__title">
            Equipos de Conectividad <br /> para Sitio de Trabajo
          </h2>
          <p className="binja-equipos__subtitle">
            Desde routers celulares rugged hasta antenas de alto rendimiento y
            accesorios listos para campo, nuestros equipos están diseñados para
            entregar internet confiable en obras, oficinas temporales y entornos
            de trabajo remoto.
          </p>
        </div>

        <div className="binja-equipos__tabs">
          {tabs.map((t) => (
            <button
              key={t.key}
              className={`binja-equipos__tab${active === t.key ? " is-active" : ""}`}
              onClick={() => setActive(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {current.products.map((p, i) => (
            <div className="col-lg-4 col-md-6" key={`${active}-${i}`}>
              <div className="binja-equipo-card">
                <div className="binja-equipo-card__img">
                  <img src={`assets/img/equipos/${p.img}`} alt={p.name} />
                </div>
                <div className="binja-equipo-card__body">
                  {p.specs && (
                    <div className="binja-equipo-card__specs">
                      {p.specs.map((s, j) => (
                        <span key={j}>{s}</span>
                      ))}
                    </div>
                  )}
                  <h3 className="binja-equipo-card__name">{p.name}</h3>
                  {p.desc && (
                    <p className="binja-equipo-card__desc">{p.desc}</p>
                  )}
                  <a
                    href="https://wa.me/529215417921"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="binja-equipo-card__btn"
                  >
                    Cotizar <i className="fas fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="binja-equipos__features">
          <div className="row g-4">
            {features.map((f, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="binja-equipos__feature">
                  <div className="binja-equipos__feature-icon">
                    <i className={f.icon} />
                  </div>
                  <div className="binja-equipos__feature-content">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquiposSection;
