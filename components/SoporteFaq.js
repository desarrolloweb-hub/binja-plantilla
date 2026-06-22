"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Acabo de recibir mi equipo satelital, ¿qué hago primero?",
    a: "Coloca la antena en un punto con vista despejada al cielo, sin árboles ni techos que la obstruyan. Conéctala a la corriente y espera a que sincronice (puede tardar unos minutos en la primera conexión). Cuando el indicador quede fijo, conéctate al WiFi con los datos que vienen en el equipo.",
  },
  {
    q: "Mi internet satelital está lento o se corta, ¿qué reviso?",
    a: "Verifica que la antena siga con vista despejada al cielo y que no haya objetos nuevos obstruyendo la señal. Reinicia el equipo desconectándolo 30 segundos. Si el clima está muy nublado o con lluvia fuerte, la señal puede bajar temporalmente. Si persiste, levanta un ticket y lo revisamos.",
  },
  {
    q: "Recibí un router 4G/5G, ¿cómo lo dejo funcionando?",
    a: "Inserta la SIM con el equipo apagado, enciéndelo y espera a que las luces de señal se estabilicen. Si no conecta, colócalo cerca de una ventana o en alto para mejorar la recepción. El nombre de red y la contraseña vienen en la etiqueta del equipo.",
  },
  {
    q: "El equipo no enciende o no da WiFi, ¿qué hago?",
    a: "Revisa que el cable de corriente esté bien conectado y que el adaptador encienda. Apaga el equipo, espera 30 segundos y vuelve a encenderlo. Si después de reiniciar sigue sin dar WiFi, contáctanos por WhatsApp o levanta un ticket con el modelo del equipo.",
  },
  {
    q: "¿Cómo reinicio correctamente mi equipo?",
    a: "Desconéctalo de la corriente, espera al menos 30 segundos y vuelve a conectarlo. Dale unos minutos para que vuelva a sincronizar. Evita reiniciarlo varias veces seguidas; un solo reinicio bien hecho suele resolver la mayoría de las fallas.",
  },
  {
    q: "¿En qué horario puedo recibir soporte?",
    a: "Nuestro equipo de soporte atiende de lunes a sábado de 9:00am a 6:00pm. Para incidencias urgentes contamos con monitoreo 24/7 desde nuestro NOC propio; escríbenos por WhatsApp y te orientamos lo antes posible.",
  },
];

const SoporteFaq = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="binja-soporte-faq">
      <div className="container">
        <div className="binja-soporte-faq__head">
          <span className="binja-faq__label">PRIMEROS PASOS</span>
          <h2 className="binja-faq__title">Preguntas frecuentes de soporte</h2>
        </div>

        <div className="binja-soporte-faq__wrap">
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
      </div>
    </section>
  );
};

export default SoporteFaq;
