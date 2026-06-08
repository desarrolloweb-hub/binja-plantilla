"use client";
import { useEffect, useState } from "react";

const testimonios = [
  {
    name: "Laura Herrera",
    role: "CEO",
    company: "Food Trucks MX",
    badge: "15 food trucks",
    quote:
      "Necesitábamos conectividad confiable para nuestros puntos de venta móviles. Binja Móvil nos instaló routers 4G con respaldo satelital y ahora procesamos pagos digitales sin problemas en cualquier evento o ubicación.",
    category: "Food & Beverage",
    date: "Abril 2025",
  },
  {
    name: "Carlos Méndez",
    role: "Director de Operaciones",
    company: "Constructora del Norte",
    badge: "+40% eficiencia",
    quote:
      "Implementamos conectividad satelital + 4G en 5 obras simultáneas donde no llegaba infraestructura tradicional. Logramos cobertura del 100% en todas las casetas de obra y redujimos los tiempos de reporte en un 60%. Binja Móvil entendió nuestra necesidad desde el primer día.",
    category: "Construcción",
    date: "Marzo 2025",
  },
  {
    name: "Mariana López",
    role: "Productora Ejecutiva",
    company: "Cumbre Producciones",
    badge: "50K usuarios",
    quote:
      "Desplegaron una red híbrida satelital-celular para cubrir nuestro festival de 3 días en un terreno remoto. Conectaron puntos de venta, staff y transmisión en vivo sin una sola caída. El soporte técnico estuvo presente 24/7. Increíble servicio.",
    category: "Eventos",
    date: "Enero 2025",
  },
  {
    name: "Roberto Sánchez",
    role: "Gerente de TI",
    company: "Agroindustrias del Valle",
    badge: "12 sitios remotos",
    quote:
      "Conectamos 12 ranchos y centros de acopio que estaban totalmente aislados. Ahora tenemos monitoreo en tiempo real de toda la operación agrícola y comunicación constante con el campo.",
    category: "Agroindustria",
    date: "Febrero 2025",
  },
  {
    name: "Ana Gutiérrez",
    role: "Coordinadora Logística",
    company: "TransExpress",
    badge: "200 unidades",
    quote:
      "Equipamos toda nuestra flota con routers móviles administrados. El rastreo GPS y la conectividad de las unidades mejoró nuestra eficiencia logística de forma notable.",
    category: "Transporte",
    date: "Diciembre 2024",
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
                        <i className="fas fa-chart-line" />
                        {t.badge}
                      </span>
                    </div>

                    <p className="binja-caso-card__quote">"{t.quote}"</p>

                    <div className="binja-caso-card__footer">
                      <span className="binja-caso-card__category">
                        <i className="fas fa-store" />
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
