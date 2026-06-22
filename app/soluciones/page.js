import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
import { soluciones } from "@/data/soluciones";

export const metadata = {
  title: "Soluciones de Conectividad Móvil - Binja Móvil",
  description:
    "Conoce las soluciones de conectividad móvil de Binja Móvil: vehículos en campo, eventos, home office, obras, hotspots para flotillas y puntos de venta.",
};

const page = () => {
  return (
    <NetBandLayout header={1}>
      {/* Hero */}
      <section className="binja-contact-hero">
        <div className="binja-contact-hero__overlay" />
        <div className="container binja-contact-hero__content">
          <span className="binja-contact-hero__label">SOLUCIONES</span>
          <h1 className="binja-contact-hero__title">
            Conectividad móvil para cada operación
          </h1>
          <p className="binja-contact-hero__desc">
            Internet satelital y celular 4G/5G para empresas que necesitan
            movilidad, continuidad y cobertura en campo. Elige la solución que
            se ajusta a tu operación.
          </p>
        </div>
      </section>

      {/* Listado */}
      <section className="binja-sol-index">
        <div className="container">
          <div className="binja-sol-index__head">
            <span className="binja-contact-eyebrow">SOLUCIONES BINJA MÓVIL</span>
            <h2 className="binja-contact-title">
              Una solución para cada tipo de operación
            </h2>
          </div>
          <div className="row g-4">
            {soluciones.map((s) => (
              <div className="col-lg-4 col-md-6" key={s.slug}>
                <Link
                  href={`/soluciones/${s.slug}`}
                  className="binja-sector-card"
                >
                  <div className="binja-sector-card__img">
                    <img
                      src={`assets/img/solutions/${s.img}`}
                      alt={s.title}
                    />
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
    </NetBandLayout>
  );
};

export default page;
