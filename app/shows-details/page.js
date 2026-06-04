import Breadcrumb from "@/components/Breadcrumb";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  return (
    <NetBandLayout>
      <Breadcrumb pageTitle={"Shows Details"} />
      <section className="shows-details fix section-padding">
        <div className="container">
          <div className="shows-details-wrapper">
            <div className="row g-5">
              <div className="col-lg-9">
                <div className="shows-details-top-items">
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-5">
                      <div className="details-thumb">
                        <img src="assets/img/shows/details-1.jpg" alt="img" />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="content">
                        <h2>Kingdom &amp; Planet Of the Apes</h2>
                        <div className="meta-data">
                          <span className="time-year">
                            <span className="year">2024</span> .
                            <span className="time">3 hr 26 min</span>
                          </span>
                          <div className="shows-cat">
                            <Link href="shows-details" rel="tag">
                              original
                            </Link>
                          </div>
                        </div>
                        <p>
                          Nullam faucibus eleifend mi eu varius. Integer vel
                          tincidunt massa, quis semper odio. Mauris et mollis
                          quam. Nullam fringilla erat id ante commodo sodales.
                          In maximus ultrices euismod. Vivamus porta justo.
                        </p>
                        <div className="show-meta">
                          <ul>
                            <li>
                              <label>Starring:</label>
                              <span>
                                Tamika Shannon, Stephen Green, Nijah Brenea
                              </span>
                            </li>{" "}
                            <li>
                              <label>Director:</label>
                              <span>Devid Henry</span>
                            </li>
                            <li>
                              <label>Imdb:</label>
                              <span>9.1</span>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="button-items">
                    <div className="social-share">
                      <span>Share:</span>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                    <div className="button-btn d-flex align-items-center gap-3">
                      <Link href="shows-details" className="theme-btn">
                        <span>Watch movie</span>
                      </Link>
                      <Link href="contact" className="theme-btn theme-btn-2">
                        <span>Buy ticket</span>
                      </Link>
                    </div>
                  </div>
                  <div className="row g-4">
                    <div className="col-lg-3" />
                    <div className="col-lg-9">
                      <h6 className="title-link">
                        Video trailer, teaser, featurettes
                      </h6>
                      <div className="details-video-thumb">
                        <img src="assets/img/shows/details-2.jpg" alt="img" />
                        <div className="video-play">
                          <a
                            href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                            className="video-btn ripple video-popup"
                          >
                            <i className="fas fa-play" />
                          </a>
                        </div>
                      </div>
                      <div className="comments-section-wrap pt-5">
                        <div className="comments-heading">
                          <h3>03 Comments</h3>
                        </div>
                        <ul className="comments-item-list">
                          <li className="single-comment-item">
                            <div className="author-img">
                              <img
                                src="assets/img/news/author_img2.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="author-info-comment">
                              <div className="info">
                                <h5>
                                  <a href="#">Rosalina Kelian</a>
                                </h5>
                                <span>19th May 2024</span>
                                <a href="#" className="theme-btn minimal-btn">
                                  <i className="fal fa-reply" />
                                  Reply
                                </a>
                              </div>
                              <div className="comment-text">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna. Ut enim
                                  ad minim veniam, quis nostrud laboris nisi ut
                                  aliquip ex ea commodo consequat.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="single-comment-item">
                            <div className="author-img">
                              <img
                                src="assets/img/news/author_img3.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="author-info-comment">
                              <div className="info">
                                <h5>
                                  <a href="#">Arista Williamson</a>
                                </h5>
                                <span>21th Feb 2024</span>
                                <a href="#" className="theme-btn minimal-btn">
                                  <i className="fal fa-reply" />
                                  Reply
                                </a>
                              </div>
                              <div className="comment-text">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco nisi ut aliquip ex ea
                                  commodo consequat.
                                </p>
                              </div>
                            </div>
                            <ul className="replay-comment">
                              <li className="single-comment-item">
                                <div className="author-img">
                                  <img
                                    src="assets/img/news/author_img4.jpg"
                                    alt="img"
                                  />
                                </div>
                                <div className="author-info-comment">
                                  <div className="info">
                                    <h5>
                                      <a href="#">Salman Ahmed</a>
                                    </h5>
                                    <span>29th Jan 2021</span>
                                    <a
                                      href="#"
                                      className="theme-btn minimal-btn"
                                    >
                                      <i className="fal fa-reply" />
                                      Reply
                                    </a>
                                  </div>
                                  <div className="comment-text">
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam..
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="comment-form-wrap mt-5">
                        <h3>Post Comment</h3>
                        <form action="#" className="comment-form">
                          <div className="single-form-input">
                            <textarea
                              placeholder="Type your comments...."
                              defaultValue={""}
                            />
                          </div>
                          <div className="single-form-input">
                            <input
                              type="text"
                              placeholder="Type your name...."
                            />
                          </div>
                          <div className="single-form-input">
                            <input
                              type="email"
                              placeholder="Type your email...."
                            />
                          </div>
                          <div className="single-form-input">
                            <input
                              type="text"
                              placeholder="Type your website...."
                            />
                          </div>
                          <button className="theme-btn center" type="submit">
                            <span>
                              <i className="fal fa-comments" />
                              Post Comment
                            </span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="shows-sidebar-items">
                  <div className="shows-gallery">
                    <h3 className="mb-4">Gallery</h3>
                    <div className="gallery-item">
                      <div className="thumb">
                        <a
                          href="assets/img/shows/post-1.jpg"
                          className="img-popup"
                        >
                          <img
                            src="assets/img/shows/post-1.jpg"
                            alt="gallery-img"
                          />
                          <div className="icon">
                            <i className="far fa-plus" />
                          </div>
                        </a>
                      </div>
                      <div className="thumb">
                        <a
                          href="assets/img/shows/post-2.jpg"
                          className="img-popup"
                        >
                          <img
                            src="assets/img/shows/post-2.jpg"
                            alt="gallery-img"
                          />
                          <div className="icon">
                            <i className="far fa-plus" />
                          </div>
                        </a>
                      </div>
                      <div className="thumb">
                        <a
                          href="assets/img/shows/post-3.jpg"
                          className="img-popup"
                        >
                          <img
                            src="assets/img/shows/post-3.jpg"
                            alt="gallery-img"
                          />
                          <div className="icon">
                            <i className="far fa-plus" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="gallery-item">
                      <div className="thumb">
                        <a
                          href="assets/img/shows/post-2.jpg"
                          className="img-popup"
                        >
                          <img
                            src="assets/img/shows/post-3.jpg"
                            alt="gallery-img"
                          />
                          <div className="icon">
                            <i className="far fa-plus" />
                          </div>
                        </a>
                      </div>
                      <div className="thumb">
                        <a
                          href="assets/img/shows/post-4.jpg"
                          className="img-popup"
                        >
                          <img
                            src="assets/img/shows/post-5.jpg"
                            alt="gallery-img"
                          />
                          <div className="icon">
                            <i className="far fa-plus" />
                          </div>
                        </a>
                      </div>
                      <div className="thumb">
                        <a
                          href="assets/img/shows/post-6.jpg"
                          className="img-popup"
                        >
                          <img
                            src="assets/img/shows/post-6.jpg"
                            alt="gallery-img"
                          />
                          <div className="icon">
                            <i className="far fa-plus" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="shows-post-area">
                    <h3 className="mb-4">Popular shows</h3>
                    <div className="shows-post-items mb-3">
                      <div
                        className="post-img bg-cover"
                        style={{
                          backgroundImage: 'url("assets/img/shows/post-3.jpg")',
                        }}
                      />
                      <div className="post-cont">
                        <h6>
                          <Link href="shows-details">Crazy Moment</Link>
                        </h6>
                        <ul>
                          <li>
                            <i className="fas fa-star" />
                            9.1
                          </li>
                          <li>
                            <i className="far fa-comments" />
                            03
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="shows-post-items">
                      <div
                        className="post-img bg-cover"
                        style={{
                          backgroundImage: 'url("assets/img/shows/post-6.jpg")',
                        }}
                      />
                      <div className="post-cont">
                        <h6>
                          <Link href="shows-details">Acoustic show</Link>
                        </h6>
                        <ul>
                          <li>
                            <i className="fas fa-star" />
                            9.1
                          </li>
                          <li>
                            <i className="far fa-comments" />
                            03
                          </li>
                        </ul>
                      </div>
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
