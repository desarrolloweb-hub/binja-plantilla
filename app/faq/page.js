"use client";
import Breadcrumb from "@/components/Breadcrumb";
import NetBandAccordion from "@/components/NetBandAccordion";
import ProgressBar from "@/components/ProgressBar";
import BrandSlider, { BrandSlider2 } from "@/components/slider/BrandSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
const page = () => {
  const faqItem = [
    {
      id: 1,
      title: "How much does it cost to build an app?",
      content:
        "We approached WiaTech with complex project Designing a website can involve various such as layout, graphics, content, and experience more specific response elaborate",
      animationDelay: ".3s",
    },
    {
      id: 2,
      title: "Can you create an app for free?",
      content:
        "We approached WiaTech with complex project Designing a website can involve various such as layout, graphics, content, and experience more specific response elaborate",
      animationDelay: ".5s",
    },
    {
      id: 3,
      title: "How can I create my own app?",
      content:
        "We approached WiaTech with complex project Designing a website can involve various such as layout, graphics, content, and experience more specific response elaborate",
      animationDelay: ".7s",
    },
    {
      id: 4,
      title: "How do I start an app business?",
      content:
        "We approached WiaTech with complex project Designing a website can involve various such as layout, graphics, content, and experience more specific response elaborate",
      animationDelay: ".9s",
    },
  ];
  return (
    <NetBandLayout>
      <Breadcrumb pageTitle={"Faq"} />
      {/*<< Faq Section Start >>*/}
      <section className="faq-section fix section-padding">
        <div className="container">
          <div className="faq-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title">
                  <span className="wow fadeInUp">FAQ</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Frequently Asked <br /> Questions
                  </h2>
                </div>
                <p
                  className="mt-3 mt-md-0 mb-2 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  Sed ut perspiciatis unde omniste natus voluptatem <br />{" "}
                  accusantiume rem aperia eaque quae abillo inventore <br />{" "}
                  veritatis quasi architecto beatae vitae
                </p>
                <Link
                  href="faq"
                  className="theme-btn mt-4 wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <span>
                    {" "}
                    Read More <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="single-tab-items">
                  <Tab.Container defaultActiveKey={"general"}>
                    <Nav as={"ul"} className="nav mb-4">
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <Nav.Link as={"a"} eventKey={"general"} href="#general">
                          General
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <Nav.Link as={"a"} eventKey={"service"} href="#service">
                          Service
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <Nav.Link as={"a"} eventKey={"product"} href="#product">
                          Product
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".8s"
                      >
                        <Nav.Link as={"a"} eventKey={"team"} href="#team">
                          Team
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".9s"
                      >
                        <Nav.Link as={"a"} eventKey={"pricing"} href="#pricing">
                          Pricing
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className="tab-content">
                      <Tab.Pane eventKey="general" className="tab-pane fade">
                        <div className="faq-content">
                          <div className="faq-accordion">
                            <NetBandAccordion items={faqItem} />
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="service" className="tab-pane fade">
                        <div className="faq-content">
                          <div className="faq-accordion">
                            <NetBandAccordion items={faqItem} />
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="product" className="tab-pane fade">
                        <div className="faq-content">
                          <div className="faq-accordion">
                            <NetBandAccordion items={faqItem} />
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="team" className="tab-pane fade">
                        <div className="faq-content">
                          <div className="faq-accordion">
                            <NetBandAccordion items={faqItem} />
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="pricing" className="tab-pane fade">
                        <div className="faq-content">
                          <div className="faq-accordion">
                            <NetBandAccordion items={faqItem} />
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Brand Section Start >>*/}
      <div className="brand-section-5 section-padding">
        <div className="container">
          <h5 className="text-center pb-5">Trusted by the world’s best</h5>
          <BrandSlider2 />
        </div>
      </div>
      {/*<< Faq Section Start >>*/}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      freequently Ask Questions
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      have a question in <br />
                      your mind?
                    </h2>
                  </div>
                  <p
                    className=" mt-4 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Transmds is the world’s driving worldwide coordinations{" "}
                    <br />
                    supplier — we uphold industry and exchange the
                  </p>
                  <div className="circle-progress-bar-wrapper">
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <ProgressBar value={68} />
                      <div className="content">
                        <h6>
                          Organizations <br />
                          work support
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
                          Management &amp; <br />
                          Support Services
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="faq-content style-2 style-color">
                  <div className="faq-accordion">
                    <NetBandAccordion items={faqItem} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Brand Section Start >>*/}
      <section className="brand-section fix section-padding">
        <div className="container">
          <div className="brand-wrapper">
            <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">
              1K+ BRANDS TRUST US
            </h6>
            <BrandSlider />
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};
export default page;
