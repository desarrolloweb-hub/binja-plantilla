"use client";
import { useState } from "react";

const faqs = [
  {
    q: "¿Qué soluciones de conectividad ofrecen?",
    a: "Ofrecemos internet satelital, conectividad celular 4G/5G y soluciones híbridas que combinan ambas tecnologías. Además contamos con SIMs M2M/IoT, routers móviles, amplificadores de señal y equipos rugged para entornos exigentes.",
  },
  {
    q: "¿Cómo sé si hay cobertura en mi zona?",
    a: "Nuestras soluciones híbridas funcionan prácticamente en cualquier ubicación de México y Latinoamérica. Para zonas sin infraestructura tradicional contamos con conectividad satelital. Contáctanos y validamos la cobertura específica de tu operación.",
  },
  {
    q: "¿Puedo gestionar mis equipos de forma remota?",
    a: "Sí. Contamos con una plataforma para el cliente donde puedes visualizar el estado de tus equipos, consumo y rendimiento de red en tiempo real, además de monitoreo 24/7 desde nuestro NOC propio.",
  },
  {
    q: "¿Qué planes de datos manejan?",
    a: "Tenemos total flexibilidad: desde planes de 250MB hasta datos ilimitados, según la cantidad de SIMs o equipos requeridos. Diseñamos paquetes personalizados a la medida de tu operación.",
  },
  {
    q: "¿Ofrecen soporte técnico?",
    a: "Sí, brindamos soporte técnico con ingenieros especializados en conectividad híbrida y soluciones M2M/IoT, con disponibilidad 24/7 para resolver cualquier incidencia rápidamente.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState(1);

  return (
    <section className="binja-faq">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="binja-faq__label">PREGUNTAS FRECUENTES</span>
            <h2 className="binja-faq__title">
              ¿Tienes dudas sobre la conectividad de Binja Móvil?
            </h2>

            <div className="binja-faq__list">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    className={`binja-faq__item${isOpen ? " is-open" : ""}`}
                  >
                    <button
                      className="binja-faq__question"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span>{item.q}</span>
                      <span className="binja-faq__icon">
                        <i className={`fas fa-${isOpen ? "minus" : "plus"}`} />
                      </span>
                    </button>
                    <div className="binja-faq__answer">
                      <p>{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="binja-faq__visual">
              <div className="binja-faq__shape binja-faq__shape--main" />
              <div className="binja-faq__shape binja-faq__shape--sq1" />
              <div className="binja-faq__shape binja-faq__shape--sq2" />
              <div className="binja-faq__shape binja-faq__shape--sq3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
