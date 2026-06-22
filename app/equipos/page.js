import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
import { equipos } from "@/data/equipos";

export const metadata = {
  title: "Equipos de Conectividad - Binja Móvil",
  description:
    "Conoce los equipos de conectividad de Binja Móvil: antenas Elsys/Amplimax, routers Teltonika, equipos Ruijie y soluciones SD-WAN Peplink.",
};

const page = () => {
  return (
    <NetBandLayout header={1}>
      {/* Hero */}
      <section className="binja-contact-hero">
        <div className="binja-contact-hero__overlay" />
        <div className="container binja-contact-hero__content">
          <span className="binja-contact-hero__label">EQUIPOS</span>
          <h1 className="binja-contact-hero__title">
            Equipos de conectividad para cada entorno
          </h1>
          <p className="binja-contact-hero__desc">
            Antenas de largo alcance, routers celulares, equipos rugged y
            soluciones SD-WAN de las mejores marcas, listos para entregar
            internet confiable donde lo necesites.
          </p>
        </div>
      </section>

      {/* Listado de marcas */}
      <section className="binja-sol-index">
        <div className="container">
          <div className="binja-sol-index__head">
            <span className="binja-contact-eyebrow">MARCAS Y EQUIPOS</span>
            <h2 className="binja-contact-title">
              Tecnología de conectividad de confianza
            </h2>
          </div>
          <div className="row g-4">
            {equipos.map((e) => (
              <div className="col-lg-3 col-md-6" key={e.slug}>
                <Link href={`/equipos/${e.slug}`} className="binja-sector-card">
                  <div className="binja-sector-card__body">
                    <div className="binja-sector-card__heading">
                      <div className="binja-sector-card__icon">
                        <i className={e.icon} />
                      </div>
                      <h3>{e.title}</h3>
                      <span className="binja-sector-card__arrow">
                        <i className="fas fa-chevron-right" />
                      </span>
                    </div>
                    <p>{e.shortDesc}</p>
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
