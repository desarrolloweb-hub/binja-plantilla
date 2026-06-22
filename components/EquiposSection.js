"use client";
import Link from "next/link";
import { useState } from "react";
import { equipos } from "@/data/equipos";

const tabs = equipos.map((e) => ({
  key: e.slug,
  label: e.label,
  slug: e.slug,
  products: e.products,
}));

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
  const [active, setActive] = useState(tabs[0].key);
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
          {current.products.map((p, i) => {
            const cardInner = (
              <>
                <div className="binja-equipo-card__img">
                  <img
                    src={`/assets/img/equipos/${p.img}`}
                    alt={p.name}
                    className={
                      p.fit === "cover" ? "is-cover" : undefined
                    }
                  />
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
                  <span className="binja-equipo-card__btn">
                    Conocer más
                    <i className="fas fa-chevron-right" />
                  </span>
                </div>
              </>
            );

            const destino = p.link || `/equipos/${current.slug}`;

            return (
              <div className="col-lg-4 col-md-6" key={`${active}-${i}`}>
                <Link href={destino} className="binja-equipo-card">
                  {cardInner}
                </Link>
              </div>
            );
          })}
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
