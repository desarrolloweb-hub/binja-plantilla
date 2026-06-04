import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  return (
    <NetBandLayout>
      <Breadcrumb pageTitle={"Our Pricing"} />
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
      {/*<< Pricing Section Start >>*/}
      <section className="pricing-section fix section-padding">
        <div className="container custom-container-2">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Tariffs</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Choose your plan
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
                    <h2>Experience The Features Magic of Netfix</h2>
                  </div>
                  <p className="mt-4">
                    Good Time is very good in what they're doing and more than
                    happy to challenge and push you to think about your
                    decisions both from usability and design standpoints.
                  </p>
                  <div className="counter-area">
                    <div className="counter-items">
                      <h4>
                        <Counter end={4} />k
                      </h4>
                      <p>Ultra HD Quality</p>
                    </div>
                    <div className="counter-items">
                      <h4>
                        <Counter end={90} />+
                      </h4>
                      <p>Online TV Channels</p>
                    </div>
                    <div className="counter-items">
                      <h4>
                        <Counter end={350} />+
                      </h4>
                      <p>Mbps Speed Internet</p>
                    </div>
                  </div>
                  <Link href="pricing" className="theme-btn">
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
            <span>OUR PRICING PLAN</span>
            <h2>Our Pricing Plan</h2>
          </div>
          <div className="row pt-5">
            <div className="pricing-wrapper">
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
            <div className="pricing-wrapper active">
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
            <div className="pricing-wrapper">
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
    </NetBandLayout>
  );
};
export default page;
