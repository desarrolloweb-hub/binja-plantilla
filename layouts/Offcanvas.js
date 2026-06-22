import Link from "next/link";
import { Fragment } from "react";
import { MobileMenu } from "./Menus";
const Offcanvas = ({ closeSidebar, sidebar, single }) => {
  return (
    <Fragment>
      <div className="fix-area">
        <div className={`offcanvas__info ${sidebar ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <span style={{display: "inline-flex", alignItems: "center", gap: "10px"}}><img src="assets/img/logo/binja-movil.webp" alt="Binja Móvil" style={{height: "50px", width: "auto"}} /><span style={{fontWeight: 700, fontSize: "22px", color: "#d62828", letterSpacing: "0.5px"}}>Binja Móvil</span></span>
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => closeSidebar()}>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="d-none d-xl-block">
                Conectividad híbrida para cualquier entorno. Internet que se
                mueve contigo.
              </p>
              <div className="mobile-menu fix mb-3 mean-container">
                <MobileMenu single={single} />
              </div>
              <div className="offcanvas__contact">
                <h4>Información de contacto</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        3er Ave. 306, Col. Guerra, Guadalupe NL
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@binjamovil.com">
                        <span className="mailto:info@binjamovil.com">
                          info@binjamovil.com
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Lunes a Sábado, 9:00am – 6:00pm
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fas fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a
                        href="https://wa.me/525665938841"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +52 56 6593 8841
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="contacto" className="theme-btn text-center">
                    <span>
                      Contáctanos
                      <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a
                    href="https://instagram.com/binjamovil"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${sidebar ? "overlay-open" : ""}`}
        onClick={() => closeSidebar()}
      />
    </Fragment>
  );
};
export default Offcanvas;
