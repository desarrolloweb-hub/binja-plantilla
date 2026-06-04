import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/ContactSection";
import { TestimonialSlider3 } from "@/components/slider/TestimonialSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  return (
    <NetBandLayout>
      <Breadcrumb pageTitle={"team"} />
      {/*<< Team Section Start >>*/}
      <section className="team-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">our members</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Meet With Our Fantastic <br />
              Broadband Team
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
                    <p>GRAPHIC DESIGNER</p>
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
                    <p>GRAPHIC DESIGNER</p>
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
                    <i className="flaticon-database" />
                  </div>
                  <div className="content">
                    <h3>Voice Over Protocol</h3>
                    <p>Average time to resolve a cyber attack.</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon-box-items active">
                  <div className="icon">
                    <i className="flaticon-server" />
                  </div>
                  <div className="content">
                    <h3>Data Backup</h3>
                    <p>Average time to resolve a cyber attack.</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="flaticon-connection" />
                  </div>
                  <div className="content">
                    <h3>Fast Connected</h3>
                    <p>Average time to resolve a cyber attack.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Testimonial Section Start >>*/}
      <section className="testimonial-section-2 fix section-padding">
        <div className="container-fluid">
          <TestimonialSlider3 extraClass="pt-0 pb-0 style-2" />
        </div>
      </section>
      {/*<< Contact Section Start >>*/}
      <ContactSection />
    </NetBandLayout>
  );
};
export default page;
