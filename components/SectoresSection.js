"use client";
import Link from "next/link";

const sectores = [
  {
    img: "vehiculos.jpg",
    icon: "fas fa-satellite-dish",
    title: "Vehículos y equipos en campo",
    desc: "Conectividad móvil para unidades en ruta, cuadrillas, supervisión y operación en campo.",
  },
  {
    img: "eventos.jpg",
    icon: "fas fa-calendar-alt",
    title: "Eventos y sitios temporales",
    desc: "Conectividad rápida para eventos, ferias, pop-ups, staff, producción y puntos de venta móviles.",
  },
  {
    img: "homeoffice.jpg",
    icon: "fas fa-wifi",
    title: "Home Office Confiable",
    desc: "Conectividad móvil de respaldo para colaboradores, videollamadas, sistemas y trabajo remoto.",
  },
  {
    img: "obras.jpg",
    icon: "fas fa-hard-hat",
    title: "Obras y construcción",
    desc: "Internet confiable para construcción, casetas, proyectos temporales y equipos de trabajo.",
  },
  {
    img: "flotillas.jpg",
    icon: "fas fa-wifi",
    title: "Hotspots para equipos y flotillas",
    desc: "MiFi, routers móviles y equipos administrados para conectar laptops, tablets y dispositivos.",
  },
  {
    img: "foodtruck.jpg",
    icon: "fas fa-store",
    title: "Punto de venta y food trucks",
    desc: "Conectividad para food trucks, puestos móviles y puntos de venta con terminal y cobro digital.",
  },
];

const SectoresSection = () => {
  return (
    <section className="binja-sectores">
      <div className="container">
        <div className="binja-sectores__head">
          <span className="binja-sectores__label">SOLUCIONES BINJA MÓVIL</span>
          <h2 className="binja-sectores__title">
            Conectividad móvil para cada tipo de operación
          </h2>
          <p className="binja-sectores__subtitle">
            Internet satelital y celular 4G/5G para empresas que necesitan
            movilidad, continuidad y cobertura en campo.
          </p>
        </div>

        <div className="row g-4">
          {sectores.map((s, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <Link href="contact" className="binja-sector-card">
                <div className="binja-sector-card__img">
                  <img src={`assets/img/solutions/${s.img}`} alt={s.title} />
                </div>
                <div className="binja-sector-card__body">
                  <div className="binja-sector-card__heading">
                    <div className="binja-sector-card__icon">
                      <i className={s.icon} />
                    </div>
                    <h3>{s.title}</h3>
                    <span className="binja-sector-card__arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <p>{s.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectoresSection;
