"use client";
import { useEffect, useState } from "react";

const testimonios = [
  {
    name: "IKAAN Villas Spa",
    role: "Hotel en Monterrerolos, N.L.",
    company: "Conectividad para huéspedes",
    badge: "Satelital + NOC",
    badgeIcon: "fas fa-satellite-dish",
    quote:
      "En IKAAN Villas Spa necesitaban conectividad confiable para sus huéspedes en una zona donde no llega la fibra óptica. Implementamos una solución satelital administrada con monitoreo y soporte desde nuestro NOC para mantener la continuidad del servicio en la operación del hotel.",
    category: "Hotelería / Turismo",
    categoryIcon: "fas fa-hotel",
    date: "Junio 2026",
  },
  {
    name: "Daniel Martínez",
    role: "Flotilla de camiones",
    company: "Internet en movimiento",
    badge: "Internet en flotilla",
    badgeIcon: "fas fa-truck-moving",
    quote:
      "Implementamos conectividad móvil para su flotilla de camiones, permitiendo mantener internet disponible durante los recorridos. La solución mejora la comunicación, la operación y el seguimiento de las unidades en movimiento.",
    category: "Transporte / Logística",
    categoryIcon: "fas fa-truck",
    date: "Junio 2026",
  },
  {
    name: "Rancho Mirador Estelar",
    role: "Rancho y viñedo",
    company: "Monitoreo en campo",
    badge: "Satelital + IoT",
    badgeIcon: "fas fa-wifi",
    quote:
      "Implementamos conectividad satelital para mantener comunicación en el rancho y en el viñedo, incluso en zonas donde no llega la infraestructura tradicional. La solución integra monitoreo IoT para cámaras, supervisión en campo y conectividad en su camioneta de trabajo, mejorando la visibilidad de la operación y la continuidad del servicio.",
    category: "Campo / Viñedo",
    categoryIcon: "fas fa-wine-bottle",
    date: "Junio 2026",
  },
];

const CasosExitoSection = () => {
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setPerView(1);
      else if (w < 1200) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, testimonios.length - perView);
  const safeIndex = Math.min(index, maxIndex);
  const step = 100 / perView;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="binja-casos">
      <div className="container">
        <div className="binja-casos__head">
          <span className="binja-casos__label">CASOS DE ÉXITO</span>
          <h2 className="binja-casos__title">
            Lo que dicen nuestros <br /> clientes
          </h2>
          <p className="binja-casos__subtitle">
            Empresas que transformaron su operación con conectividad híbrida
            Binja Móvil.
          </p>
        </div>

        <div className="binja-casos__carousel">
          <button
            className="binja-casos__arrow binja-casos__arrow--prev"
            onClick={prev}
            disabled={safeIndex === 0}
            aria-label="Anterior"
          >
            <i className="fas fa-chevron-left" />
          </button>

          <div className="binja-casos__viewport">
            <div
              className="binja-casos__track"
              style={{ transform: `translateX(-${safeIndex * step}%)` }}
            >
              {testimonios.map((t, i) => (
                <div
                  className="binja-casos__slide"
                  style={{ flex: `0 0 ${step}%`, maxWidth: `${step}%` }}
                  key={i}
                >
                  <div className="binja-caso-card">
                    <div className="binja-caso-card__top">
                      <div className="binja-caso-card__person">
                        <div className="binja-caso-card__avatar" />
                        <div>
                          <h4 className="binja-caso-card__name">{t.name}</h4>
                          <p className="binja-caso-card__role">{t.role}</p>
                          <p className="binja-caso-card__company">{t.company}</p>
                        </div>
                      </div>
                      <span className="binja-caso-card__badge">
                        <i className={t.badgeIcon || "fas fa-chart-line"} />
                        {t.badge}
                      </span>
                    </div>

                    <p className="binja-caso-card__quote">"{t.quote}"</p>

                    <div className="binja-caso-card__footer">
                      <span className="binja-caso-card__category">
                        <i className={t.categoryIcon || "fas fa-store"} />
                        {t.category}
                      </span>
                      <span className="binja-caso-card__date">{t.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="binja-casos__arrow binja-casos__arrow--next"
            onClick={next}
            disabled={safeIndex >= maxIndex}
            aria-label="Siguiente"
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>

        <div className="binja-casos__dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`binja-casos__dot${safeIndex === i ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir al grupo ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasosExitoSection;
