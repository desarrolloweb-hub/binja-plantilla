"use client";
import { useState } from "react";

const tabs = [
  {
    key: "routers",
    label: "Routers",
    products: [
      { img: "router-1.jpg", name: "CSG m106 Pro - Router 4G Portátil" },
      { img: "router-2.jpg", name: "Katalyst Spark 5G - Router Empresarial" },
      { img: "router-3.jpg", name: "InHand CR202 Lite - Router 4G LTE CAT6 con WiFi" },
    ],
  },
  {
    key: "amplificadores",
    label: "Amplificadores de Señal",
    products: [
      { img: "amp-1.jpg", name: "Antena Direccional de Alto Rendimiento" },
      { img: "amp-2.jpg", name: "Kit de Antenas para Router 4G/5G" },
      { img: "amp-3.jpg", name: "Amplificador de Señal Celular M2M" },
    ],
  },
  {
    key: "rugged",
    label: "Equipos Rugged",
    products: [
      { img: "rugged-1.jpg", name: "Katalyst Spark 5G - Router Industrial Rugged" },
      { img: "rugged-2.jpg", name: "CSG m106 Pro - Router 4G para Campo" },
      { img: "rugged-3.jpg", name: "InHand CR202 Lite - Router Resistente a Golpes" },
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
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="binja-equipo-card">
                <div className="binja-equipo-card__img">
                  <img src={`assets/img/equipos/${p.img}`} alt={p.name} />
                </div>
                <h3 className="binja-equipo-card__name">{p.name}</h3>
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
