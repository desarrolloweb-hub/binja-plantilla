"use client";
import Link from "next/link";
import { soluciones } from "@/data/soluciones";

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
          {soluciones.map((s) => (
            <div className="col-lg-4 col-md-6" key={s.slug}>
              <Link
                href={`/soluciones/${s.slug}`}
                className="binja-sector-card"
              >
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
                  <p>{s.shortDesc}</p>
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
