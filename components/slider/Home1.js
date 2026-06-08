"use client";
import Link from "next/link";

const Home1 = () => {
  return (
    <section className="binja-hero">
      <div
        className="binja-hero__bg"
        style={{ backgroundImage: 'url("assets/img/hero/binja-hero.jpg")' }}
      />
      <div className="binja-hero__overlay" />

      <div className="container binja-hero__content">
        <div className="row">
          <div className="col-lg-7">
            <span className="binja-hero__label">LA MEJOR SOLUCIÓN</span>
            <h1 className="binja-hero__title">
              Conectividad <br />
              en movimiento
            </h1>
            <p className="binja-hero__desc">
              Soluciones híbridas que combinan tecnología satelital y móvil
              celular para que tu operación nunca se detenga.
            </p>

            <div className="binja-hero__equation">
              <div className="binja-hero__eq-item">
                <i className="fas fa-satellite-dish" />
                <span>SATELITAL</span>
              </div>
              <span className="binja-hero__eq-op">+</span>
              <div className="binja-hero__eq-item">
                <i className="fas fa-broadcast-tower" />
                <span>4G/5G</span>
              </div>
              <span className="binja-hero__eq-op">+</span>
              <div className="binja-hero__eq-item">
                <i className="fas fa-wifi" />
                <span>EQUIPOS MÓVILES</span>
              </div>
              <span className="binja-hero__eq-op">=</span>
              <div className="binja-hero__eq-result">
                <i className="fas fa-check-circle" />
                <span>CONECTIVIDAD HÍBRIDA</span>
              </div>
            </div>

            <div className="binja-hero__buttons">
              <Link href="soluciones" className="binja-hero__cta">
                Ver Soluciones <i className="fas fa-chevron-right" />
              </Link>
              <a
                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                className="binja-hero__video video-popup"
              >
                <span className="binja-hero__video-play">
                  <i className="fas fa-play" />
                </span>
                <span className="binja-hero__video-text">Ver Video</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container binja-hero__cards-wrap">
        <div className="row g-4">
          {[
            {
              title: "Satelital",
              desc: "Conectividad donde no llega la infraestructura.",
              icon: "fas fa-satellite-dish",
              href: "soluciones",
            },
            {
              title: "Móvil 4G/5G",
              desc: "Internet por red celular.",
              icon: "fas fa-broadcast-tower",
              href: "soluciones",
              active: true,
            },
            {
              title: "Híbrida",
              desc: "Combinación satelital + celular para máxima disponibilidad.",
              icon: "fas fa-project-diagram",
              href: "soluciones",
            },
          ].map((card, i) => (
            <div className="col-md-4" key={i}>
              <Link
                href={card.href}
                className={`binja-solution-card${card.active ? " is-active" : ""}`}
              >
                <div className="binja-solution-card__body">
                  <span className="binja-solution-card__label">SOLUCIÓN</span>
                  <h3 className="binja-solution-card__title">{card.title}</h3>
                  <p className="binja-solution-card__desc">{card.desc}</p>
                </div>
                <div className="binja-solution-card__icon">
                  <i className={card.icon} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home1;
