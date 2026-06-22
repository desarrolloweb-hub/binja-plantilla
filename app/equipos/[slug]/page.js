import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
import { notFound } from "next/navigation";
import { equipos, getEquipo } from "@/data/equipos";

export function generateStaticParams() {
  return equipos.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }) {
  const eq = getEquipo(params.slug);
  if (!eq) return {};
  return {
    title: `${eq.title} - Equipos de Conectividad | Binja Móvil`,
    description: eq.heroDesc,
  };
}

const page = ({ params }) => {
  const eq = getEquipo(params.slug);
  if (!eq) notFound();

  return (
    <NetBandLayout header={1}>
      {/* Hero */}
      <section className="binja-sol-hero">
        <div className="container binja-sol-hero__content">
          <span className="binja-sol-hero__label">
            <i className={eq.icon} /> EQUIPOS DE CONECTIVIDAD
          </span>
          <h1 className="binja-sol-hero__title">{eq.title}</h1>
          <p className="binja-sol-hero__desc">{eq.heroDesc}</p>
          <div className="binja-sol-hero__buttons">
            <a
              href="https://wa.me/525665938841"
              target="_blank"
              rel="noopener noreferrer"
              className="binja-sol-btn"
            >
              <i className="fab fa-whatsapp" /> Cotizar equipo
            </a>
            <Link
              href="/contacto"
              className="binja-sol-btn binja-sol-btn--ghost"
            >
              Agenda consultoría <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="binja-sol-intro">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <span className="binja-contact-eyebrow">LA MARCA</span>
              <h2 className="binja-contact-title">
                Equipos confiables para tu operación
              </h2>
              <p>{eq.intro}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="binja-equipos binja-equipos--interior">
        <div className="container">
          <div className="binja-sol-benefits__head">
            <span className="binja-contact-eyebrow">EQUIPOS</span>
            <h2 className="binja-contact-title">Productos de {eq.title}</h2>
          </div>
          <div className="row g-4">
            {eq.products.map((p, i) => {
              const cardInner = (
                <>
                  <div className="binja-equipo-card__img">
                    <img
                      src={`/assets/img/equipos/${p.img}`}
                      alt={p.name}
                      className={p.fit === "cover" ? "is-cover" : undefined}
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
                      {p.link ? "Conocer más" : "Cotizar"}
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                </>
              );
              return (
                <div className="col-lg-4 col-md-6" key={i}>
                  {p.link ? (
                    <Link href={p.link} className="binja-equipo-card">
                      {cardInner}
                    </Link>
                  ) : (
                    <a
                      href="https://wa.me/525665938841"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="binja-equipo-card"
                    >
                      {cardInner}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="binja-contact-cta">
        <div className="container">
          <div className="binja-contact-cta__box">
            <div>
              <h2>¿Necesitas asesoría con el equipo ideal?</h2>
              <p>Cuéntanos tu operación y te recomendamos la mejor opción.</p>
            </div>
            <a
              href="https://wa.me/525665938841"
              target="_blank"
              rel="noopener noreferrer"
              className="binja-contact-cta__btn"
            >
              <i className="fab fa-whatsapp" /> Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};

export default page;
