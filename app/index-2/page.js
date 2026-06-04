import NetBandAccordion from "@/components/NetBandAccordion";
import Package1 from "@/components/Package";
import ProgressBar from "@/components/ProgressBar";
import { BrandSlider2 } from "@/components/slider/BrandSlider";
import Home2 from "@/components/slider/Home2";
import NewsSlider from "@/components/slider/NewsSlider";
import { TestimonialSlider2 } from "@/components/slider/TestimonialSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  const faqItem = [
    {
      id: 1,
      title: "How can I get a venture capitalist to pay?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .",
      animationDelay: ".3s",
    },
    {
      id: 2,
      title: "How do you find different criteria in your process?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .",
      animationDelay: ".5s",
    },
    {
      id: 3,
      title: "How can I get a venture capitalist to pay?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .",
      animationDelay: ".7s",
    },
    {
      id: 4,
      title: "How can I get a venture capitalist to pay?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .",
      animationDelay: ".9s",
    },
  ];
  return (
    <NetBandLayout>
      {/*<< Hero Section Start >>*/}
      <Home2 />
      {/*<< Service Section Start >>*/}
      <section className="service-section-2 fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Our Service Area</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Enjoy Sports Movies, <br />
              TV Shows &amp; More.
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <i className="flaticon-wifi-router-5" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">Broadband</Link>
                  </h3>
                  <p>We approached WiaTech with complex project deliver</p>
                  <Link href="service-details" className="arrow-icon">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-box-items active">
                <div className="icon">
                  <i className="flaticon-wi-fi" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">WIFI Internet</Link>
                  </h3>
                  <p>We approached WiaTech with complex project deliver</p>
                  <Link href="service-details" className="arrow-icon">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <i className="flaticon-satellite-tv" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">Satellite TV</Link>
                  </h3>
                  <p>We approached WiaTech with complex project deliver</p>
                  <Link href="service-details" className="arrow-icon">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <i className="flaticon-tv-box" />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">TV box</Link>
                  </h3>
                  <p>We approached WiaTech with complex project deliver</p>
                  <Link href="service-details" className="arrow-icon">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< About Section Start >>*/}
      <section className="about-section section-padding section-bg-2 pt-0">
        <div className="left-shape">
          <img src="assets/img/about/shape-image.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div className="border-shape">
                    <img
                      src="assets/img/about/border-shape-2.png"
                      alt="shape-img"
                    />
                  </div>
                  <div
                    className="about-image bg-cover wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      backgroundImage: 'url("assets/img/about/about-3.jpg")',
                    }}
                  >
                    <div
                      className="about-image-2 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <img src="assets/img/about/tv.png" alt="about-img" />
                    </div>
                    <div
                      className="experience-text-area wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h2>
                        <span className="count">25</span>+
                      </h2>
                      <h6>Years Of Experience</h6>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star me-2" />
                        <span>Trustpoint</span>
                      </div>
                      <div className="ratting">
                        <span>4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">About Our Internet</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      We Provide Unilimited Network For You.
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
                  <div className="icon-area">
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <div className="icon">
                        <i className="flaticon-smart-tv-4" />
                      </div>
                      <div className="content">
                        <h5>4k Ultra HD Quality</h5>
                        <p>
                          We are a dynamic and forward-thinking startup
                          dedicated to revolution
                        </p>
                      </div>
                    </div>
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <div className="icon">
                        <i className="flaticon-global" />
                      </div>
                      <div className="content">
                        <h5>Fully Secure Internet</h5>
                        <p>
                          We are a dynamic and forward-thinking startup
                          dedicated to revolution
                        </p>
                      </div>
                    </div>
                  </div>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".4s">
                    <li>
                      <i className="far fa-check me-2" />
                      Expert technical team
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      Reasonable price packages
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      24/7 quick support
                    </li>
                  </ul>
                  <div
                    className="about-author wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="author-image">
                      <img src="assets/img/about/client.png" alt="author-img" />
                      <div className="content">
                        <p>10m+ Trusted Global Customers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Choose Package Section Start >>*/}
      <Package1 />
      {/*<< Service Section Start >>*/}
      <section className="service-section fix section-padding section-bg-2">
        <div className="left-shape">
          <img src="assets/img/service/left-shape.png" alt="shape-img" />
        </div>
        <div className="right-shape">
          <img src="assets/img/service/right-shape.png" alt="shape-img" />
        </div>
        <div className="line-shape-2">
          <img src="assets/img/service/line-shape-2.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Our awesom service</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Service We Are Offering Our <br />
              Awesome Customers
            </h2>
          </div>
          <div className="service-wrapper-2">
            <div className="row">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="service-box-items-2">
                  <div className="icon">
                    <i className="flaticon-server" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="service-details">Hosting Service</Link>
                    </h3>
                    <p>
                      Our service offerings enhance experience throughout highly
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="service-box-items-2 active">
                  <div className="icon">
                    <i className="flaticon-satellite-dish" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="service-details">Satelite TV</Link>
                    </h3>
                    <p>
                      Our service offerings enhance experience throughout highly
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="service-box-items-2">
                  <div className="icon">
                    <i className="flaticon-signal" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="service-details">Home Internet</Link>
                    </h3>
                    <p>
                      Our service offerings enhance experience throughout highly
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="service-box-items-2">
                  <div className="icon">
                    <i className="flaticon-connection" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="service-details">Corporet Internet</Link>
                    </h3>
                    <p>
                      Our service offerings enhance experience throughout highly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Streaming Section Start >>*/}
      <section className="streaming-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Streaming</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Popular TV Shows Now <br /> Streaming
            </h2>
          </div>
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="streaming-card-items">
                  <div className="streaming-image">
                    <img src="assets/img/shows/05.jpg" alt="img" />
                    <div className="movie-play">
                      <a
                        href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                        className="video-btn ripple video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                  <div className="streaming-content">
                    <p />
                    <h3>
                      <Link href="shows-details">Rockstar Fashion Show</Link>
                    </h3>
                    <div className="video-years">2024</div>
                    <div className="video-time">2 hr 25 mins</div>
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                        4.5
                      </li>
                      <li>
                        <i className="fas fa-comment-alt" />
                        29
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="streaming-card-items">
                  <div className="streaming-image">
                    <img src="assets/img/shows/06.jpg" alt="img" />
                    <div className="movie-play">
                      <a
                        href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                        className="video-btn ripple video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                  <div className="streaming-content">
                    <p />
                    <h3>
                      <Link href="shows-details">Rockstar Fashion Show</Link>
                    </h3>
                    <div className="video-years">2024</div>
                    <div className="video-time">2 hr 25 mins</div>
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                        4.5
                      </li>
                      <li>
                        <i className="fas fa-comment-alt" />
                        29
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="streaming-card-items">
                  <div className="streaming-image">
                    <img src="assets/img/shows/07.jpg" alt="img" />
                    <div className="movie-play">
                      <a
                        href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                        className="video-btn ripple video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                  <div className="streaming-content">
                    <p />
                    <h3>
                      <Link href="shows-details">Rockstar Fashion Show</Link>
                    </h3>
                    <div className="video-years">2024</div>
                    <div className="video-time">2 hr 25 mins</div>
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                        4.5
                      </li>
                      <li>
                        <i className="fas fa-comment-alt" />
                        29
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="streaming-card-items">
                  <div className="streaming-image">
                    <img src="assets/img/shows/08.jpg" alt="img" />
                    <div className="movie-play">
                      <a
                        href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                        className="video-btn ripple video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                  <div className="streaming-content">
                    <p />
                    <h3>
                      <Link href="shows-details">Rockstar Fashion Show</Link>
                    </h3>
                    <div className="video-years">2024</div>
                    <div className="video-time">2 hr 25 mins</div>
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                        4.5
                      </li>
                      <li>
                        <i className="fas fa-comment-alt" />
                        29
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="streaming-card-items">
                  <div className="streaming-image">
                    <img src="assets/img/shows/09.jpg" alt="img" />
                    <div className="movie-play">
                      <a
                        href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                        className="video-btn ripple video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                  <div className="streaming-content">
                    <p />
                    <h3>
                      <Link href="shows-details">Rockstar Fashion Show</Link>
                    </h3>
                    <div className="video-years">2024</div>
                    <div className="video-time">2 hr 25 mins</div>
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                        4.5
                      </li>
                      <li>
                        <i className="fas fa-comment-alt" />
                        29
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="streaming-card-items">
                  <div className="streaming-image">
                    <img src="assets/img/shows/10.jpg" alt="img" />
                    <div className="movie-play">
                      <a
                        href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                        className="video-btn ripple video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                  <div className="streaming-content">
                    <p />
                    <h3>
                      <Link href="shows-details">Rockstar Fashion Show</Link>
                    </h3>
                    <div className="video-years">2024</div>
                    <div className="video-time">2 hr 25 mins</div>
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                        4.5
                      </li>
                      <li>
                        <i className="fas fa-comment-alt" />
                        29
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Cta Subscribe Section Start >>*/}
      <section className="cta-subscribe-section fix section-padding pt-0">
        <div className="container">
          <div className="cta-subscribe-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-7 wow fadeInUp" data-wow-delay=".4s">
                <div className="cta-subscribe-image">
                  <img src="assets/img/banner/cta-tv.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-5 mt-5 mt-md-0">
                <div className="cta-subscribe-content style-2">
                  <div className="section-title">
                    <span className="wow fadeInUp">Subscribe Now</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Enjoy Sports Movies, <br />
                      TV Shows &amp; More.
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Transmds is the world’s driving worldwide coordinations
                    supplier — we uphold industry and exchange the worldwide
                    trade of merchandi
                  </p>
                  <div className="subscribe-price">
                    <h3 className="price wow fadeInUp" data-wow-delay=".3s">
                      <sub>$</sub>90 <span>/ 1 month</span>
                    </h3>
                    <h4 className="wow fadeInUp" data-wow-delay=".5s">
                      Subscribed &amp; get 1month WIFi Free
                    </h4>
                  </div>
                  <Link
                    href="about"
                    className="theme-btn wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <span>
                      Cheak availibilty <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Cta Video Section Start >>*/}
      <section className="cta-video-section">
        <div className="container">
          <div
            className="cta-video-wrapper bg-cover"
            style={{
              backgroundImage: 'url("assets/img/banner/cta-video.jpg")',
            }}
          >
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              All Your Streaming, <br /> in One Place
            </h2>
            <div className="video-box wow fadeInUp" data-wow-delay=".5s">
              <a
                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                className="video-btn ripple video-popup"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*<< Team Section Start >>*/}
      <section className="team-section section-padding section-bg-3">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">our hounrable team</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              We’ve Exclusive Team member <br />
              Meet our Professionals
            </h2>
          </div>
          <div className="row align-items-center">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-team-items style-2">
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
                  <h5>
                    <Link href="team-detaills">Leslie Braxton</Link>
                  </h5>
                  <p>Team Leader</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-team-items style-2">
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
                  <h5>
                    <Link href="team-detaills">Sutton Tanner</Link>
                  </h5>
                  <p>GRAPHIC DESIGNER</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-team-items style-2">
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
                  <h5>
                    <Link href="team-detaills">Jack Bale</Link>
                  </h5>
                  <p>Co founder</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="single-team-items style-2">
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
                  <h5>
                    <Link href="team-detaills">Alex Carry</Link>
                  </h5>
                  <p>Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="team-button wow fadeInUp" data-wow-delay=".4s">
            <Link href="team" className="theme-btn mt-5 hover-white">
              <span>
                Explore more team
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/*<< Product Section Start >>*/}
      <section className="product-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">FEATURED PRODUCT</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Product Collection
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="product-box-items">
                <div className="product-image">
                  <img src="assets/img/product/product-img-1.png" alt="img" />
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
                  <h5>
                    <Link href="shop-details">Wireless Headphones</Link>
                  </h5>
                  <div className="price">
                    <del>$190.00</del>
                    <span>$175.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="product-box-items">
                <div className="product-image">
                  <img src="assets/img/product/product-img-2.png" alt="img" />
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
                  <h5>
                    <Link href="shop-details">Wireless Headphones</Link>
                  </h5>
                  <div className="price">
                    <del>$190.00</del>
                    <span>$175.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="product-box-items">
                <div className="product-image">
                  <img src="assets/img/product/product-img-3.png" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">Treading</span>
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
                  <h5>
                    <Link href="shop-details">Wireless Headphones</Link>
                  </h5>
                  <div className="price">
                    <del>$190.00</del>
                    <span>$175.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="product-box-items">
                <div className="product-image">
                  <img src="assets/img/product/product-img-4.png" alt="img" />
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
                  <h5>
                    <Link href="shop-details">Wireless Headphones</Link>
                  </h5>
                  <div className="price">
                    <del>$190.00</del>
                    <span>$175.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Feature Video Section Start >>*/}
      <section
        className="feature-video-section fix section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/video_bg.jpg")' }}
      >
        <div className="container">
          <div className="feature-video-wrapper">
            <div className="row">
              <div className="col-lg-6" />
              <div className="col-lg-6">
                <div className="feature-video-content">
                  <div className="section-title mb-0">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Experience The Features Magic of Netband
                    </h2>
                  </div>
                  <p className="mt-4 wow fadeInUp" data-wow-delay=".5s">
                    Good Time is very good in what they're doing and more than
                    happy to challenge and push you to think about your
                    decisions both from usability and design standpoints.
                  </p>
                  <div className="counter-area">
                    <div
                      className="counter-items wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h4>
                        <span className="count">4</span>k
                      </h4>
                      <p>Ultra HD Quality</p>
                    </div>
                    <div
                      className="counter-items wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h4>
                        <span className="count">90</span>+
                      </h4>
                      <p>Online TV Channels</p>
                    </div>
                    <div
                      className="counter-items wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <h4>
                        <span className="count">350</span>+
                      </h4>
                      <p>Mbps Speed Internet</p>
                    </div>
                  </div>
                  <Link
                    href="pricing"
                    className="theme-btn wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <span>
                      Try Us Free <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Pricing Section Start >>*/}
      <section className="pricing-section-2 fix section-padding">
        <div className="container">
          <div className="section-title text-center mb-0">
            <span className="wow fadeInUp">OUR PRICING PLAN</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Our Pricing Plan
            </h2>
          </div>
          <div className="row pt-5">
            <div className="pricing-wrapper wow fadeInUp" data-wow-delay=".3s">
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-12">
                  <div className="pricing-content-box d-flex align-items-center justify-content-between">
                    <div className="price-content">
                      <p>Installation Charge: 1,500 Tk</p>
                      <h3>Tv+Internet</h3>
                      <span>
                        <em>5%</em> VAT Included
                      </span>
                    </div>
                    <div className="price-icon">
                      <div className="icon">
                        <i className="flaticon-television" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-signal" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-6 col-lg-12">
                  <div className="pricing-list-items d-flex align-items-center">
                    <ul className="price-list">
                      <li>
                        <i className="far fa-check" />
                        Internet with a 50 Mbps
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Connect multiple users at once
                      </li>
                      <li>
                        <i className="far fa-check" />
                        WiFi router &amp; prevention
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Unlimited devices users
                      </li>
                    </ul>
                    <div className="price-button">
                      <h3>
                        30 <i>$</i>
                        <span>/mo</span>
                      </h3>
                      <Link href="contact" className="theme-btn">
                        <span>Get Started</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="pricing-wrapper active wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-12">
                  <div className="pricing-content-box d-flex align-items-center justify-content-between">
                    <div className="price-content">
                      <p>Installation Charge: 1,500 Tk</p>
                      <h3>Tv+Mobile</h3>
                      <span>
                        <em>5%</em> VAT Included
                      </span>
                    </div>
                    <div className="price-icon">
                      <div className="icon">
                        <i className="flaticon-television" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-smartphone" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-6 col-lg-12">
                  <div className="pricing-list-items d-flex align-items-center">
                    <ul className="price-list">
                      <li>
                        <i className="far fa-check" />
                        Internet with a 50 Mbps
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Connect multiple users at once
                      </li>
                      <li>
                        <i className="far fa-check" />
                        WiFi router &amp; prevention
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Unlimited devices users
                      </li>
                    </ul>
                    <div className="price-button">
                      <h3>
                        40 <i>$</i>
                        <span>/mo</span>
                      </h3>
                      <Link href="contact" className="theme-btn">
                        <span>Get Started</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-wrapper wow fadeInUp" data-wow-delay=".3s">
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-12">
                  <div className="pricing-content-box d-flex align-items-center justify-content-between">
                    <div className="price-content">
                      <p>Installation Charge: 1,500 Tk</p>
                      <h3>Satelite+ Phone</h3>
                      <span>
                        <em>5%</em> VAT Included
                      </span>
                    </div>
                    <div className="price-icon">
                      <div className="icon">
                        <i className="flaticon-satellite-tv" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-smartphone" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-6 col-lg-12">
                  <div className="pricing-list-items d-flex align-items-center">
                    <ul className="price-list">
                      <li>
                        <i className="far fa-check" />
                        Internet with a 50 Mbps
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Connect multiple users at once
                      </li>
                      <li>
                        <i className="far fa-check" />
                        WiFi router &amp; prevention
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Unlimited devices users
                      </li>
                    </ul>
                    <div className="price-button">
                      <h3>
                        60 <i>$</i>
                        <span>/mo</span>
                      </h3>
                      <Link href="contact" className="theme-btn">
                        <span>Get Started</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Faq Section Start >>*/}
      <section className="faq-section fix section-padding pt-0">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">Asked Questions</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Have Any Questions <br /> On Your Minds!
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
                  <ul
                    className="about-list mt-4 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <li>
                      <i className="far fa-check me-2" />
                      Professional Team Member
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      Awards Winning IT Solutions Company
                    </li>
                  </ul>
                  <div className="circle-progress-bar-wrapper">
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".8s"
                    >
                      <ProgressBar value={68} />
                      <div className="content">
                        <h6>
                          Dedicated <br /> Speed
                        </h6>
                      </div>
                    </div>
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <ProgressBar value={93} />
                      <div className="content">
                        <h6>
                          Gaurateed <br /> Uptime
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="faq-content">
                  <NetBandAccordion
                    items={faqItem}
                    eventKey={"home2"}
                    activeKey={"home22"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Testimonial Section Start >>*/}
      <section className="testimonial-section-2 fix section-bg-2 fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Testimonials</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              What our clients say
            </h2>
          </div>
        </div>
        <div className="testimonial-wrapper">
          <TestimonialSlider2 />
        </div>
      </section>
      {/*<< News Section Start >>*/}
      <section className="news-section section-padding fix">
        <div className="container">
          <div className="title-section-area">
            <div className="section-title">
              <span className="wow fadeInUp">News &amp; Blog</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Read Our News &amp; Blogs
              </h2>
            </div>
            <Link
              href="news-details"
              className="theme-btn wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span>
                Explore Our news
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
          <NewsSlider />
        </div>
      </section>
      {/*<< Brand Section Start >>*/}
      <div className="brand-section-4 section-padding pb-0 pt-0">
        <div className="container">
          <div className="brand-wrapper-4">
            <BrandSlider2 />
          </div>
        </div>
      </div>
    </NetBandLayout>
  );
};
export default page;
