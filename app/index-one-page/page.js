import NetBandAccordion from "@/components/NetBandAccordion";
import ProgressBar from "@/components/ProgressBar";
import Service1 from "@/components/Service";
import BrandSlider from "@/components/slider/BrandSlider";
import Home1 from "@/components/slider/Home1";
import MovieSlider from "@/components/slider/MovieSlider";
import TestimonialSlider from "@/components/slider/TestimonialSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  return (
    <NetBandLayout header={1} single>
      {/*<< Hero Section Start >>*/}
      <Home1 />
      {/*<< Feature Section Start >>*/}
      <section className="feature-section fix section-padding">
        <div className="shape-image">
          <img src="assets/img/shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-feature-items">
                <div className="content">
                  <span>Features</span>
                  <h3>TV &amp; Streaming</h3>
                </div>
                <div className="icon">
                  <i className="flaticon-smart-tv-1" />
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-feature-items active">
                <div className="content">
                  <span>Features</span>
                  <h3>Fast Internet</h3>
                </div>
                <div className="icon">
                  <i className="flaticon-connection" />
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-feature-items">
                <div className="content">
                  <span>Features</span>
                  <h3>All for Mobile</h3>
                </div>
                <div className="icon">
                  <i className="flaticon-smart-tv-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< About Section Start >>*/}
      <section className="about-section fix section-padding pt-0" id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div className="circle-shape">
                    <img
                      src="assets/img/about/circle.png"
                      alt="img"
                      className="text-circle"
                    />
                    <div className="award-img">
                      <img src="assets/img/about/award.png" alt="img" />
                    </div>
                  </div>
                  <div className="border-shape">
                    <img
                      src="assets/img/about/border-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div
                    className="about-image bg-cover wow fadeInLeft"
                    data-wow-delay=".3s"
                    style={{
                      backgroundImage: 'url("assets/img/about/about.jpg")',
                    }}
                  >
                    <div
                      className="about-image-2 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <img src="assets/img/about/about-2.jpg" alt="about-img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">About Netband</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Get TV streaming with your internet service
                    </h2>
                  </div>
                  <p
                    className=" mt-4 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Transmds is the world’s driving worldwide coordinations
                    supplier — we uphold industry and exchange the worldwide
                    trade of merchandi
                  </p>
                  <div className="circle-progress-bar-wrapper">
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <ProgressBar value={88} />
                      <div className="content">
                        <h6>
                          Free Installation <br />
                          Ultrafast Connect
                        </h6>
                      </div>
                    </div>
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <ProgressBar value={93} />
                      <div className="content">
                        <h6>
                          Real Technology <br />
                          Solutions
                        </h6>
                      </div>
                    </div>
                  </div>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".7s">
                    <li>
                      <i className="far fa-check me-2" />
                      Professional Team Member
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      Awards Winning Internet Solutions Company
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      Dedicated Tech Services
                    </li>
                  </ul>
                  <div className="about-author">
                    <div
                      className="about-button wow fadeInUp"
                      data-wow-delay=".8s"
                    >
                      <Link href="about" className="theme-btn">
                        <span>
                          Explore more about
                          <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                    <div
                      className="author-image wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <img src="assets/img/about/author.png" alt="author-img" />
                      <div className="content">
                        <h5 className="mb-2">Modina Theme</h5>
                        <p>Ceo &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Network Solutions Section Start >>*/}
      <section className="network-solution-section section-padding fix pt-0">
        <div className="container custom-container-2">
          <div className="network-solution-wrapper">
            <div className="section-title text-center">
              <span className="wow fadeInUp">Best Network</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Find Perfect Network <br />
                Solutions
              </h2>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="network-solution-items">
                  <div className="icon">
                    <i className="flaticon-connection" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="about">Corporate Internet</Link>
                    </h4>
                    <p>
                      Average time to resolve a cyber attack Average time to
                      resolve
                    </p>
                    <Link href="about" className="link-btn">
                      <span>Discover More</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="network-solution-items">
                  <div className="icon">
                    <i className="flaticon-signal" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="about">Home Internet</Link>
                    </h4>
                    <p>
                      Average time to resolve a cyber attack Average time to
                      resolve
                    </p>
                    <Link href="about" className="link-btn">
                      <span>Discover More</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="network-solution-items">
                  <div className="icon">
                    <i className="flaticon-server" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="about">Hosting &amp; Development</Link>
                    </h4>
                    <p>
                      Average time to resolve a cyber attack Average time to
                      resolve
                    </p>
                    <Link href="about" className="link-btn">
                      <span>Discover More</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="network-solution-items">
                  <div className="icon">
                    <i className="flaticon-satellite-dish" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="about">Satelite Chanel</Link>
                    </h4>
                    <p>
                      Average time to resolve a cyber attack Average time to
                      resolve
                    </p>
                    <Link href="about" className="link-btn">
                      <span>Discover More</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Movie Section Start >>*/}
      <section className="movie-section movie-bg" id="shows">
        <div className="container custom-container-2">
          <div className="section-title text-center">
            <span className="text-white wow fadeInUp">What’s new</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Popular Tv show Sports <br />
              &amp; Live Streaming
            </h2>
          </div>
          <MovieSlider />
        </div>
      </section>
      {/*<< Marque Studies Start >>*/}
      <div className="marque-section section-padding pt-0 mt-5">
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">Internet</span>
                <span className="text-slider">Wifi</span>
                <span className="text-slider style-border" />
                <span className="text-slider">broadband</span>
                <span className="text-slider">Tv</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Internet</span>
                <span className="text-slider">Wifi</span>
                <span className="text-slider style-border" />
                <span className="text-slider">broadband</span>
                <span className="text-slider">Tv</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Internet</span>
                <span className="text-slider">Wifi</span>
                <span className="text-slider style-border" />
                <span className="text-slider">broadband</span>
                <span className="text-slider">Tv</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Internet</span>
                <span className="text-slider">Wifi</span>
                <span className="text-slider style-border" />
                <span className="text-slider">broadband</span>
                <span className="text-slider">Tv</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Internet</span>
                <span className="text-slider">Wifi</span>
                <span className="text-slider style-border" />
                <span className="text-slider">broadband</span>
                <span className="text-slider">Tv</span>
                <span className="text-slider style-border" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*<< Service Section Start >>*/}
      <Service1 />
      {/*<< Brand Section Start >>*/}
      <section className="brand-section fix section-padding pt-0">
        <div className="container">
          <div className="brand-wrapper">
            <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">
              1K+ BRANDS TRUST US
            </h6>
            <BrandSlider />
          </div>
        </div>
      </section>
      {/*<< Cta Banner Section Start >>*/}
      <section
        className="cta-banner-section bg-cover section-padding"
        style={{ backgroundImage: 'url("assets/img/banner/02.jpg")' }}
      >
        <div className="container">
          <div className="cta-banner-wrapper section-padding pt-0">
            <div className="section-title mb-0">
              <span className="text-white wow fadeInUp">
                Subscribe Nextflix Tv
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Enjoy Sports Movies, TV Shows &amp; More.
                <br />
                Please Call :{" "}
                <a href="tel:123884400" className="text-white">
                  (123) 884400
                </a>
              </h2>
            </div>
            <Link
              href="service"
              className="theme-btn bg-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span>
                View All Services
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/*<< Feature Icon Box Section Start >>*/}
      <section className="feature-icon-box-area">
        <div className="container">
          <div className="feature-icon-box-wrapper">
            <div className="row g-4">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="flaticon-tv-box-1" />
                  </div>
                  <div className="content">
                    <h3>Smart TV Box</h3>
                    <p>200+ entertainment channels for different age groups</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon-box-items active">
                  <div className="icon">
                    <i className="flaticon-smartphone" />
                  </div>
                  <div className="content">
                    <h3>Mobile connection</h3>
                    <p>Use our router to stay online on all your devices.</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="flaticon-wifi-router-2" />
                  </div>
                  <div className="content">
                    <h3>Wifi internet</h3>
                    <p>
                      High-speed Internet access that is always on &amp; fast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Team Section Start >>*/}
      <section className="team-section section-padding" id="team">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">our members</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Meet With Our Fantastic <br />
              Support Team
            </h2>
          </div>
          <div className="team-wrapper">
            <div className="row align-items-center">
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/01.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Leslie Alexander</Link>
                    </h4>
                    <p>Support Enginner</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/02.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Alexander Sandro</Link>
                    </h4>
                    <p>Team Leader</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/03.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Devid Jackson</Link>
                    </h4>
                    <p>Developer</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/04.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Jack Miller</Link>
                    </h4>
                    <p>Development</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-7 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-team-items">
                  <div className="team-join-content text-center">
                    <div className="circle-shape">
                      <img
                        src="assets/img/team/circle-shape.png"
                        alt="shape-img"
                      />
                    </div>
                    <div className="dot-shape">
                      <img
                        src="assets/img/team/dot-shape.png"
                        alt="shape-img"
                      />
                    </div>
                    <h2>
                      JOIN OUR <span>TEAM</span>
                    </h2>
                    <h3>98+ Member</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-1" />
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/04.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Sutton Tanner</Link>
                    </h4>
                    <p>Support Enginner</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/05.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Leslie Braxton</Link>
                    </h4>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Pricing Section Start >>*/}
      <section className="pricing-section fix section-padding" id="pricing">
        <div className="container custom-container-2">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Pricing Plan</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Choose Your Internet <br />
              Pack By Speed
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="pricing-card-items">
                <div className="pricing-header">
                  <h6>Internet</h6>
                  <h3>Easy Surfing</h3>
                </div>
                <ul className="icon-items">
                  <li>
                    <i className="flaticon-connection" />
                  </li>
                </ul>
                <ul className="price-list">
                  <li>
                    <i className="far fa-check" />
                    Up to 50Mbps
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Night Turbo-Speed
                  </li>
                  <li>
                    <i className="far fa-check" />
                    WiFi router
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Unlimited devices
                  </li>
                </ul>
                <div className="price">
                  $24.99 <span> | month </span>
                </div>
                <Link href="pricing" className="theme-btn">
                  <span>Get started</span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="pricing-card-items">
                <div className="pricing-header">
                  <h6>TV</h6>
                  <h3>Impression</h3>
                </div>
                <ul className="icon-items">
                  <li>
                    <i className="flaticon-smart-tv" />
                  </li>
                </ul>
                <ul className="price-list">
                  <li>
                    <i className="far fa-check" />
                    Up to 50Mbps
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Night Turbo-Speed
                  </li>
                  <li>
                    <i className="far fa-check" />
                    WiFi router
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Unlimited devices
                  </li>
                </ul>
                <div className="price">
                  $18.99 <span> | month </span>
                </div>
                <Link href="pricing" className="theme-btn">
                  <span>Get started</span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="pricing-card-items">
                <span className="tag">popular</span>
                <div className="pricing-header">
                  <h6>Internet + TV</h6>
                  <h3>Home Comfort</h3>
                </div>
                <ul className="icon-items">
                  <li>
                    <i className="flaticon-connection" />
                  </li>
                  <li>
                    <i className="flaticon-smart-tv" />
                  </li>
                </ul>
                <ul className="price-list">
                  <li>
                    <i className="far fa-check" />
                    Up to 50Mbps
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Night Turbo-Speed
                  </li>
                  <li>
                    <i className="far fa-check" />
                    WiFi router
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Unlimited devices
                  </li>
                </ul>
                <div className="price">
                  $37.99 <span> | month </span>
                </div>
                <Link href="pricing" className="theme-btn">
                  <span>Get started</span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="pricing-card-items">
                <div className="pricing-header">
                  <h6>Internet + TV + Phone</h6>
                  <h3>Premium Plan</h3>
                </div>
                <ul className="icon-items">
                  <li>
                    <i className="flaticon-connection" />
                  </li>
                  <li>
                    <i className="flaticon-smart-tv" />
                  </li>
                  <li>
                    <i className="flaticon-smart-tv-3" />
                  </li>
                </ul>
                <ul className="price-list">
                  <li>
                    <i className="far fa-check" />
                    Up to 50Mbps
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Night Turbo-Speed
                  </li>
                  <li>
                    <i className="far fa-check" />
                    WiFi router
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Unlimited devices
                  </li>
                </ul>
                <div className="price">
                  $49.99 <span> | month </span>
                </div>
                <Link href="pricing" className="theme-btn">
                  <span>Get started</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Cta Subscribe Section Start >>*/}
      <section className="cta-subscribe-section fix section-padding">
        <div className="container custom-container-2">
          <div className="cta-subscribe-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                <div className="cta-subscribe-image">
                  <img src="assets/img/banner/cta-tv.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-5 mt-5 mt-md-0">
                <div className="cta-subscribe-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">TV Shows</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Enjoy Sports Movies <br /> TV Shows &amp; More
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Transmds is the world’s driving worldwide coordinations
                    supplier — we uphold industry and exchange the worldwide
                    trade of merchandi
                  </p>
                  <h4
                    className="cta-sub-title wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <span>Subscribe Netfix TV Box &amp; Get</span> <br />
                    FREE Wi-Fi For 1 Month
                  </h4>
                  <div className="subscribe-plan">
                    <h3 className="price wow fadeInUp" data-wow-delay=".5s">
                      <span>Only</span> $89<sub>/Mon</sub>
                    </h3>
                    <Link
                      href="pricing"
                      className="link-btn style-2 wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <span>View All Plans</span>{" "}
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Product Section Start >>*/}
      <section className="product-section fix section-padding pt-0">
        <div className="container">
          <div className="title-section-area">
            <div className="section-title">
              <span className="wow fadeInUp">Top Sales</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Our Top Products
              </h2>
            </div>
            <Link href="shop" className="theme-btn">
              <span>
                More Products <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="product-card-items">
                <div className="product-image">
                  <img src="assets/img/product/01.jpg" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">sale</span>
                  </div>
                  <ul className="product-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-shopping-cart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-details">
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h6>
                    <Link href="shop-details">
                      Archer Router <br /> for Home
                    </Link>
                  </h6>
                  <div className="ratting">
                    <span>$210</span>
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="product-card-items">
                <div className="product-image">
                  <img src="assets/img/product/02.jpg" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">sale</span>
                  </div>
                  <ul className="product-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-shopping-cart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-details">
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h6>
                    <Link href="shop-details">
                      Smart TV Box <br /> for Home
                    </Link>
                  </h6>
                  <div className="ratting">
                    <span>$210</span>
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="product-card-items">
                <div className="product-image">
                  <img src="assets/img/product/03.jpg" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">sale</span>
                  </div>
                  <ul className="product-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-shopping-cart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-details">
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h6>
                    <Link href="shop-details">
                      Virtual Reality <br /> Helmet
                    </Link>
                  </h6>
                  <div className="ratting">
                    <span>$210</span>
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="product-card-items">
                <div className="product-image">
                  <img src="assets/img/product/04.jpg" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">sale</span>
                  </div>
                  <ul className="product-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-shopping-cart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-details">
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h6>
                    <Link href="shop-details">
                      Camera Gear 360 <br /> for Home
                    </Link>
                  </h6>
                  <div className="ratting">
                    <span>$210</span>
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Cta Parallax Section Start >>*/}
      <div
        className="cta-parallax-section bg-cover"
        style={{ backgroundImage: 'url("assets/img/banner/02.jpg")' }}
      >
        <div className="container">
          <div className="cta-parallax-wrapper text-center">
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Need Fast &amp; Secure Broadband! Use <br /> Netband &amp; The
              Real Network
            </h2>
            <div className="button-items">
              <Link
                href="pricing"
                className="theme-btn wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>
                  View our Plans <i className="fas fa-chevron-right" />
                </span>
              </Link>
              <span className="or">or</span>
              <a
                href="tel:+1718-904-4450"
                className="theme-btn bg-white wow fadeInUp"
                data-wow-delay=".7s"
              >
                <span>
                  +1718-904-4450 <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*<< Counter Section Start >>*/}
      <section className="counter-section">
        <div className="container">
          <div className="counter-wrapper">
            <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
              <h2>
                <span className="count">20</span>+
              </h2>
              <p>
                YEARS OF <br />
                EXPERIENCE
              </p>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
              <h2>
                <span className="count">220</span>k
              </h2>
              <p>
                CLIENTS IN <br />
                THE WORLD
              </p>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
              <h2>
                <span className="count">2,5</span>k
              </h2>
              <p>
                KILOMETERS <br />
                OF FIBERS
              </p>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".8s">
              <h2>
                <span className="count">991</span>
              </h2>
              <p>
                SATELLITE <br />
                CHANNELS
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*<< Testimonial Section Start >>*/}
      <section className="testimonial-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">trusted clients feedback</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Why People Say About Our <br />
              Business Services
            </h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>
      {/*<< Faq Section Start >>*/}
      <section className="faq-section fix section-padding">
        <div className="faq-image">
          <img src="assets/img/faq.png" alt="img" />
        </div>
        <div className="faq-shape">
          <img src="assets/img/faq-shape-1.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      Our question &amp; answer
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Have Any Questions About <br />
                      Our NetBand Company
                    </h2>
                  </div>
                  <div className="faq-accordion mt-4 mt-md-0">
                    <NetBandAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Section Start */}
      <section className="news-section fix section-padding" id="blog">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">news &amp; blog</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              update news &amp; blog
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="news-box-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/01.jpg")' }}
                />
                <div className="news-content">
                  <h4>
                    <Link href="news-details">
                      Children Loves the Cartoons And Our New Channels
                    </Link>
                  </h4>
                  <ul>
                    <li>
                      <i className="fas fa-folder-open" />
                      Network
                    </li>
                    <li>
                      <i className="fal fa-user" />
                      Admin
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />
                      June 25, 2024
                    </li>
                  </ul>
                  <p>
                    These agencies specialize leveraging various digital
                    channels, such as social media
                  </p>
                  <Link href="news-details" className="link-btn style-2">
                    read more <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="news-box-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/02.jpg")' }}
                />
                <div className="news-content">
                  <h4>
                    <Link href="news-details">
                      Broadband May Disconnect in July Cause of Electricity
                      Issues
                    </Link>
                  </h4>
                  <ul>
                    <li>
                      <i className="fas fa-folder-open" />
                      Network
                    </li>
                    <li>
                      <i className="fal fa-user" />
                      Admin
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />
                      June 25, 2024
                    </li>
                  </ul>
                  <p>
                    These agencies specialize leveraging various digital
                    channels, such as social media
                  </p>
                  <Link href="news-details" className="link-btn style-2">
                    read more <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="news-box-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/03.jpg")' }}
                />
                <div className="news-content">
                  <h4>
                    <Link href="news-details">
                      We Newly Added Some International Comedy Channels
                    </Link>
                  </h4>
                  <ul>
                    <li>
                      <i className="fas fa-folder-open" />
                      Network
                    </li>
                    <li>
                      <i className="fal fa-user" />
                      Admin
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />
                      June 25, 2024
                    </li>
                  </ul>
                  <p>
                    These agencies specialize leveraging various digital
                    channels, such as social media
                  </p>
                  <Link href="news-details" className="link-btn style-2">
                    read more <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};
export default page;
