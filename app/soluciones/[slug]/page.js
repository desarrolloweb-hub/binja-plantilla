import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
import { notFound } from "next/navigation";
import { soluciones, getSolucion } from "@/data/soluciones";

export function generateStaticParams() {
  return soluciones.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const sol = getSolucion(params.slug);
  if (!sol) return {};
  return {
    title: `${sol.title} - Binja Móvil`,
    description: sol.heroDesc,
  };
}

const page = ({ params }) => {
  const sol = getSolucion(params.slug);
  if (!sol) notFound();

  return (
    <NetBandLayout header={1}>
      {/* Hero */}
      <section className="binja-sol-hero">
        <img
          className="binja-sol-hero__bg"
          src={`/assets/img/solutions/${sol.img}`}
          alt={sol.title}
        />
        <div className="container binja-sol-hero__content">
          <span className="binja-sol-hero__label">
            <i className={sol.icon} /> CONECTIVIDAD MÓVIL
          </span>
          <h1 className="binja-sol-hero__title">{sol.title}</h1>
          <p className="binja-sol-hero__desc">{sol.heroDesc}</p>
          <div className="binja-sol-hero__buttons">
            <Link href="/contacto" className="binja-sol-btn">
              Agenda consultoría <i className="fas fa-chevron-right" />
            </Link>
            <a
              href="https://wa.me/525665938841"
              target="_blank"
              rel="noopener noreferrer"
              className="binja-sol-btn binja-sol-btn--ghost"
            >
              <i className="fab fa-whatsapp" /> Escríbenos
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="binja-sol-intro">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="binja-contact-eyebrow">LA SOLUCIÓN</span>
              <h2 className="binja-contact-title">
                Conectividad pensada para tu operación
              </h2>
              <p>{sol.intro}</p>
            </div>
            <div className="col-lg-6">
              <div className="binja-sol-intro__img">
                <img
                  src={`/assets/img/solutions/${sol.img}`}
                  alt={sol.title}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="binja-sol-benefits">
        <div className="container">
          <div className="binja-sol-benefits__head">
            <span className="binja-contact-eyebrow">BENEFICIOS</span>
            <h2 className="binja-contact-title">
              Por qué elegir esta solución
            </h2>
          </div>
          <div className="row g-4">
            {sol.beneficios.map((b, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="binja-sol-benefit">
                  <div className="binja-sol-benefit__icon">
                    <i className={b.icon} />
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal para */}
      <section className="binja-sol-ideal">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <span className="binja-contact-eyebrow">IDEAL PARA</span>
              <h2 className="binja-contact-title">
                Diseñada para casos como el tuyo
              </h2>
              <p className="binja-contact-subtitle">
                Si tu operación encaja en alguno de estos escenarios, esta
                solución es para ti.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="binja-sol-ideal__list">
                {sol.idealPara.map((item, i) => (
                  <div className="binja-sol-ideal__item" key={i}>
                    <i className="fas fa-check-circle" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="binja-contact-cta">
        <div className="container">
          <div className="binja-contact-cta__box">
            <div>
              <h2>¿Listo para conectar tu operación?</h2>
              <p>Cuéntanos tu caso y te armamos la solución ideal.</p>
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
