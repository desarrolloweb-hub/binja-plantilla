import Link from "next/link";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;

    default:
      return <Footer2 />;
  }
};
export default Footer;

const Footer1 = () => {
  return (
    <footer className="footer-section footer-bg section-padding pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="newsletter-area">
              <div className="shape-1">
                <img src="assets/img/footer-shape.png" alt="shape-img" />
              </div>
              <div className="shape-2">
                <img src="assets/img/footer-shape-2.png" alt="shape-img" />
              </div>
              <div className="newsletter-title">
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Join Our Newsletter
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  We Provide Best Pricing package to grow your lead capture
                </p>
              </div>
              <div className="newsletter-items">
                <div className="form-clt wow fadeInUp" data-wow-delay=".3s">
                  <input
                    type="text"
                    name="email"
                    id="email2"
                    placeholder="Email Address"
                  />
                </div>
                <button
                  className="theme-btn hover-white wow fadeInUp"
                  data-wow-delay=".5s"
                  type="submit"
                >
                  <span>
                    Subscribe <i className="fas fa-chevron-right" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <span style={{display: "inline-flex", alignItems: "center", gap: "12px"}}><span style={{display: "inline-flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "50%", background: "#fff", flexShrink: 0}}><img src="assets/img/logo/binja-movil.webp" alt="Binja Móvil" style={{height: "38px", width: "auto"}} /></span><span style={{fontWeight: 800, fontSize: "26px", color: "#fff", letterSpacing: "0.3px"}}>Binja Móvil</span></span>
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Conectividad híbrida para <br />
                    cualquier entorno. Internet <br />
                    que se mueve contigo.
                  </p>
                  <span>¿Interesado en trabajar con nosotros?</span> <br />
                  <a href="mailto:info@binjamovil.com" className="link">
                    info@binjamovil.com
                  </a>
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
            <div
              className="col-xl-2 ps-lg-5 col-sm-6 col-md-3 col-lg-3 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Enlaces rápidos</h5>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="soluciones">Soluciones</Link>
                  </li>
                  <li>
                    <Link href="equipos">Equipos</Link>
                  </li>
                  <li>
                    <Link href="sectores">Sectores</Link>
                  </li>
                  <li>
                    <Link href="cobertura">Cobertura</Link>
                  </li>
                  <li>
                    <Link href="contact">Contacto</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 ps-lg-4 col-sm-6 col-md-3 col-lg-3 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Compañía</h5>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="contact">Soporte Técnico</Link>
                  </li>
                  <li>
                    <Link href="contact">Ayuda &amp; FAQ</Link>
                  </li>
                  <li>
                    <Link href="contact">Contáctanos</Link>
                  </li>
                  <li>
                    <Link href="soluciones">Planes y Paquetes</Link>
                  </li>
                  <li>
                    <Link href="contact">Política de Cookies</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Dirección:</h5>
                </div>
                <div className="footer-address-text">
                  <p>3er Ave. 306, Colonia Guerra, Guadalupe, Nuevo León, México</p>
                  <h5>Horario:</h5>
                  <p>
                    9:30am – 6:30pm <br />
                    Lunes a Viernes
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 ps-xl-5 col-sm-6 col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Descarga la app</h5>
                </div>
                <div className="footer-apps-items">
                  <p>Disponible en App Store y Google Play</p>
                  <div className="apps-image d-flex align-items-center">
                    <a href="#">
                      <img src="assets/img/app-store.png" alt="store-img" />
                    </a>
                    <a href="#">
                      <img src="assets/img/google-play.png" alt="store-img" />
                    </a>
                  </div>
                  <div className="support-text">
                    <p>Centro de soporte 24/7</p>
                    <h3>
                      <a href="https://wa.me/529215417921" target="_blank" rel="noopener noreferrer">+52 921 541 7921</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
              Copyright © 2026 <Link href="/">Binja Móvil</Link>. Todos los derechos reservados.
            </p>
            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
              <li>
                <Link href="contact">Compañía</Link>
              </li>
              <li>
                <Link href="contact">Soporte</Link>
              </li>
              <li>
                <Link href="contact">Privacidad</Link>
              </li>
              <li>
                <Link href="contact">FAQs</Link>
              </li>
            </ul>
          </div>
        </div>
        <a href="#" id="scrollUp" className="scroll-icon">
          <i className="far fa-arrow-up" />
        </a>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer className="footer-section section-bg-3">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <span style={{display: "inline-flex", alignItems: "center", gap: "12px"}}><span style={{display: "inline-flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "50%", background: "#fff", flexShrink: 0}}><img src="assets/img/logo/binja-movil.webp" alt="Binja Móvil" style={{height: "38px", width: "auto"}} /></span><span style={{fontWeight: 800, fontSize: "26px", color: "#fff", letterSpacing: "0.3px"}}>Binja Móvil</span></span>
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Conectividad híbrida para <br />
                    cualquier entorno. Internet <br />
                    que se mueve contigo.
                  </p>
                  <span>¿Interesado en trabajar con nosotros?</span> <br />
                  <a href="mailto:info@binjamovil.com" className="link">
                    info@binjamovil.com
                  </a>
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
            <div
              className="col-xl-2 ps-lg-5 col-sm-6 col-md-3 col-lg-3 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Enlaces rápidos</h5>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="soluciones">Soluciones</Link>
                  </li>
                  <li>
                    <Link href="equipos">Equipos</Link>
                  </li>
                  <li>
                    <Link href="sectores">Sectores</Link>
                  </li>
                  <li>
                    <Link href="cobertura">Cobertura</Link>
                  </li>
                  <li>
                    <Link href="contact">Contacto</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 ps-lg-4 col-sm-6 col-md-3 col-lg-3 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Compañía</h5>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="contact">Soporte Técnico</Link>
                  </li>
                  <li>
                    <Link href="contact">Ayuda &amp; FAQ</Link>
                  </li>
                  <li>
                    <Link href="contact">Contáctanos</Link>
                  </li>
                  <li>
                    <Link href="soluciones">Planes y Paquetes</Link>
                  </li>
                  <li>
                    <Link href="contact">Política de Cookies</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Dirección:</h5>
                </div>
                <div className="footer-address-text">
                  <p>3er Ave. 306, Colonia Guerra, Guadalupe, Nuevo León, México</p>
                  <h5>Horario:</h5>
                  <p>
                    9:30am – 6:30pm <br />
                    Lunes a Viernes
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 ps-xl-5 col-sm-6 col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Descarga la app</h5>
                </div>
                <div className="footer-apps-items">
                  <p>Disponible en App Store y Google Play</p>
                  <div className="apps-image d-flex align-items-center">
                    <a href="#">
                      <img src="assets/img/app-store.png" alt="store-img" />
                    </a>
                    <a href="#">
                      <img src="assets/img/google-play.png" alt="store-img" />
                    </a>
                  </div>
                  <div className="support-text">
                    <p>Centro de soporte 24/7</p>
                    <h3>
                      <a href="https://wa.me/529215417921" target="_blank" rel="noopener noreferrer">+52 921 541 7921</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
              Copyright © 2026 <Link href="/">Binja Móvil</Link>. Todos los derechos reservados.
            </p>
            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
              <li>
                <Link href="contact">Compañía</Link>
              </li>
              <li>
                <Link href="contact">Soporte</Link>
              </li>
              <li>
                <Link href="contact">Privacidad</Link>
              </li>
              <li>
                <Link href="contact">FAQs</Link>
              </li>
            </ul>
          </div>
        </div>
        <a href="#" id="scrollUp" className="scroll-icon">
          <i className="far fa-arrow-up" />
        </a>
      </div>
    </footer>
  );
};

const Footer3 = () => {
  return (
    <footer className="footer-section section-bg-3">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo wow fadeInUp" data-wow-delay=".3s">
            <Link href="/">
              <span style={{display: "inline-flex", alignItems: "center", gap: "12px"}}><span style={{display: "inline-flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "50%", background: "#fff", flexShrink: 0}}><img src="assets/img/logo/binja-movil.webp" alt="Binja Móvil" style={{height: "38px", width: "auto"}} /></span><span style={{fontWeight: 800, fontSize: "26px", color: "#fff", letterSpacing: "0.3px"}}>Binja Móvil</span></span>
            </Link>
          </div>
          <ul className="wow fadeInUp" data-wow-delay=".5s">
            <li>
              <i className="fab fa-facebook-f" />
              <a href="#">Facebook</a>
            </li>
            <li>
              <i className="fab fa-twitter" />
              <a href="#">Twitter</a>
            </li>
            <li>
              <i className="fab fa-linkedin-in" />
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <i className="fab fa-instagram" />
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-6 col-sm-12 col-md-8 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-footer-widget me-4">
                <div className="widget-head">
                  <h3>Subscribe Newsletter</h3>
                </div>
                <div className="footer-content">
                  <p>
                    We understand that every challenge is an opportunity we are
                    here seize <br />a team of dedicated professionals and a
                    culture
                  </p>
                  <div className="newsletter-items">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="email"
                        id="email2"
                        placeholder="Email Address"
                      />
                    </div>
                    <button className="theme-btn hover-white" type="submit">
                      <span>
                        Sign Up <i className="fas fa-chevron-right" />
                      </span>
                    </button>
                  </div>
                  <h6 className="label-text">
                    By subscribing, you’re accept <a href="#">Privacy Policy</a>
                  </h6>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 ps-lg-5 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Services</h5>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="service-details">Web (UX/UI) Design</Link>
                  </li>
                  <li>
                    <Link href="service-details">
                      Machine Learning &amp; AI
                    </Link>
                  </li>
                  <li>
                    <Link href="service-details">Web Development</Link>
                  </li>
                  <li>
                    <Link href="service-details">IT Cyber Security</Link>
                  </li>
                  <li>
                    <Link href="service-details">Cloud Computing</Link>
                  </li>
                  <li>
                    <Link href="service-details">
                      Analytic &amp; Engineering
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 ps-lg-5 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Locations:</h5>
                </div>
                <div className="footer-address-text">
                  <p>3er Ave. 306, Col. Guerra, Guadalupe NL</p>
                  <h5>Contact</h5>
                  <a href="mailto:info@binjamovil.com" className="link-mail">
                    info@binjamovil.com
                  </a>
                  <h5 className="pt-3">
                    <a href="tel:+88012345688">+880 (123) 456 88</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInUp color-2" data-wow-delay=".4s">
              Copyright © 2026 <Link href="/">Binja Móvil</Link>. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer4 = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="newsletter-area style-2">
              <div className="newsletter-title">
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Subscribe To Our Weekly <br /> Newsletter
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  We Provide Best Pricing package to grow your lead capture
                </p>
              </div>
              <div className="newsletter-items">
                <div className="form-clt wow fadeInUp" data-wow-delay=".3s">
                  <input
                    type="text"
                    name="email"
                    id="email2"
                    placeholder="Email Address"
                  />
                </div>
                <button
                  className="theme-btn hover-white wow fadeInUp"
                  data-wow-delay=".5s"
                  type="submit"
                >
                  <span>
                    Subscribe <i className="fas fa-chevron-right" />
                  </span>
                </button>
              </div>
              <div
                className="social-icon d-flex align-items-center wow fadeInUp"
                data-wow-delay=".6s"
              >
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-vimeo-v" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-4">
          <p className="wow fadeInUp text-center" data-wow-delay=".3s">
            Copyright © 2026 <Link href="/">Binja Móvil</Link>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
