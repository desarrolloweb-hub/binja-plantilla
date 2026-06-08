"use client";
import Link from "next/link";

const features = [
  "SIM físicas y eSIM para cualquier dispositivo",
  "Planes de datos desde 250MB hasta ilimitado",
  "Conexión a múltiples redes celulares (4G/5G)",
  "Monitoreo y administración centralizada",
];

const M2MSection = () => {
  return (
    <section className="binja-m2m">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="binja-m2m__content">
              <span className="binja-m2m__label">SOLUCIONES M2M / IOT</span>
              <h2 className="binja-m2m__title">
                ¿Buscas SIMs para tu flota de equipos?
              </h2>
              <p className="binja-m2m__subtitle">
                Paquetes personalizados para tecnología Machine to Machine
              </p>
              <p className="binja-m2m__link-line">
                Conoce más en nuestra página de{" "}
                <Link href="soluciones" className="binja-m2m__link">
                  SIMs IoT &amp; M2M
                </Link>
              </p>

              <p className="binja-m2m__text">
                Ofrecemos SIM físicas y eSIM para implementar en equipos que
                necesitan conexión a red móvil para comunicarse: routers,
                tablets, laptops, puntos de venta, rastreadores GPS y más.
              </p>
              <p className="binja-m2m__text">
                Nuestras SIMs tienen total flexibilidad en planes de datos desde
                250MB hasta datos ilimitados. Según la cantidad de SIMs
                requeridas, podemos ofrecer conexión a cualquier red móvil.
              </p>
              <p className="binja-m2m__text">
                Las SIMs M2M están a la vanguardia de la tecnología y a medida
                que más dispositivos se comunican, estamos listos para ayudarte
                a navegar las opciones y brindarte la solución perfecta.
              </p>

              <ul className="binja-m2m__list">
                {features.map((f, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="contact" className="binja-m2m__cta">
                Contáctanos <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="binja-m2m__image">
              <img src="assets/img/sections/m2m-sims.jpg" alt="Soluciones SIM M2M / IoT" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default M2MSection;
