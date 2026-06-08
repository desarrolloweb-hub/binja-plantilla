"use client";

const beneficios = [
  {
    num: "01",
    icon: "fas fa-project-diagram",
    title: "Resiliencia",
    subtitle: "Siempre Conectado",
    desc: "Provee una ruta de conexión segura que reduce el tiempo de caída, con cambio rápido entre red móvil y satelital cuando se necesita.",
  },
  {
    num: "02",
    icon: "fas fa-bolt",
    title: "Rendimiento",
    subtitle: "bajo Presión",
    desc: "Soporta aplicaciones exigentes y entornos con alta demanda usando múltiples redes para mantener rendimiento estable cuando una conexión se congestiona.",
  },
  {
    num: "03",
    icon: "fas fa-headset",
    title: "Monitoreo y",
    subtitle: "Soporte Remoto",
    desc: "Las conexiones pueden monitorearse y administrarse remotamente, ayudando a diagnosticar problemas rápidamente y minimizar interrupciones.",
  },
  {
    num: "04",
    icon: "fas fa-cog",
    title: "Complementos",
    subtitle: "Flexibles",
    desc: "Las soluciones híbridas pueden personalizarse con IP fija, firewall y configuraciones VoIP para cumplir requisitos específicos de tu negocio.",
  },
];

const BeneficiosSection = () => {
  return (
    <section className="binja-beneficios">
      <div className="container">
        <div className="binja-beneficios__head">
          <span className="binja-beneficios__label">VENTAJAS CLAVE</span>
          <h2 className="binja-beneficios__title">
            Beneficios de una <br /> Solución Híbrida
          </h2>
          <p className="binja-beneficios__subtitle">
            La conectividad móvil híbrida está diseñada para resiliencia y
            rendimiento en entornos del mundo real.
          </p>
        </div>

        <div className="row g-4">
          {beneficios.map((b, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <div className="binja-beneficio-card">
                <span className="binja-beneficio-card__num">{b.num}</span>
                <div className="binja-beneficio-card__icon">
                  <i className={b.icon} />
                </div>
                <h3 className="binja-beneficio-card__title">{b.title}</h3>
                <p className="binja-beneficio-card__subtitle">{b.subtitle}</p>
                <div className="binja-beneficio-card__divider" />
                <p className="binja-beneficio-card__desc">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;
