import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import ManageItSection from "@/components/ManageItSection";
import ProgressBar from "@/components/ProgressBar";
import BrandSlider from "@/components/slider/BrandSlider";
import NewsSlider from "@/components/slider/NewsSlider";
import { TestimonialSlider4 } from "@/components/slider/TestimonialSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  return (
    <NetBandLayout>
      <Breadcrumb pageTitle={"about us"} />
      {/*<< About Section Start >>*/}
      <section className="about-section fix section-padding">
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
                    <span className="wow fadeInUp">
                      5m+ Trusted Our Clients
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      We Prominent Truly trusted IT business solutions
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
                      <ProgressBar value={68} />
                      <div className="content">
                        <h6>
                          Business <br />
                          Strategy
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
                      Awards Winning IT Solutions Company
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
                        <img
                          src="assets/img/about/signature.png"
                          alt="signature"
                        />
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
      {/*<< Service Section Start >>*/}
      <section className="service-section-3 fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">our fucusable services</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              How do we work to help you <br />
              in Startup Business
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
      {/*<< Manage It Section Start >>*/}
      <ManageItSection />
      {/*<< Cta Parallax Section Start >>*/}
      <div
        className="cta-parallax-section bg-cover"
        style={{ backgroundImage: 'url("assets/img/banner/02.jpg")' }}
      >
        <div className="container">
          <div className="cta-parallax-wrapper text-center">
            <h2 className="text-white">
              Need Fast &amp; Secure Broadband? Use <br /> Netfix &amp; The Real
              Network
            </h2>
            <div className="button-items">
              <Link href="pricing" className="theme-btn">
                <span>
                  View our Plans <i className="fas fa-chevron-right" />
                </span>
              </Link>
              <span className="or">or</span>
              <a href="tel:+1718-904-4450" className="theme-btn bg-white">
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
            <div className="counter-items">
              <h2>
                <Counter end={20} />+
              </h2>
              <p>
                YEARS OF <br />
                EXPERIENCE
              </p>
            </div>
            <div className="counter-items">
              <h2>
                <Counter end={220} />k
              </h2>
              <p>
                CLIENTS IN <br />
                THE WORLD
              </p>
            </div>
            <div className="counter-items">
              <h2>
                <Counter end={25} />k
              </h2>
              <p>
                KILOMETERS <br />
                OF FIBERS
              </p>
            </div>
            <div className="counter-items">
              <h2>
                <Counter end={991} />
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
      <TestimonialSlider4 />
      {/*<< Brand Section Start >>*/}
      <div className="brand-section-3 fix section-padding pt-0">
        <div className="container">
          <div className="brand-wrapper">
            <BrandSlider />
          </div>
        </div>
      </div>
      {/*<< News Section Start >>*/}
      <section className="news-section-2 section-padding fix">
        <div className="container">
          <div className="title-section-area">
            <div className="section-title">
              <span className="wow fadeInUp">5m+ Trusted Our Clients</span>
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
    </NetBandLayout>
  );
};
export default page;
