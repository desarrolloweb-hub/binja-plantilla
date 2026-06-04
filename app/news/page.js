import BlogSideBar from "@/components/BlogSideBar";
import Breadcrumb from "@/components/Breadcrumb";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  return (
    <NetBandLayout>
      <Breadcrumb pageTitle={"standard blog"} />
      <section className="blog-wrapper news-wrapper section-padding border-bottom">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="blog-posts">
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-1.jpg")',
                      }}
                    >
                      <div className="post-date">
                        <h4>
                          25 <br />
                          <span>Dec</span>
                        </h4>
                      </div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-comments" />
                          35 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          24th March 2024
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                          The whimsically named Egg Canvas brainchesiko
                        </Link>
                      </h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised words which
                        don't look even slight believable. If you are going to
                        use a passage of Lorem Ipsum.
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          READ MORE <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-2.jpg")',
                      }}
                    >
                      <div className="post-date">
                        <h4>
                          15 <br />
                          <span>Dec</span>
                        </h4>
                      </div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-comments" />
                          35 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          24th March 2024
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                          The whimsically named Egg Canvas brainchesiko
                        </Link>
                      </h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised words which
                        don't look even slight believable. If you are going to
                        use a passage of Lorem Ipsum.
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          READ MORE <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-3.jpg")',
                      }}
                    >
                      <div className="post-date">
                        <h4>
                          11 <br />
                          <span>Dec</span>
                        </h4>
                      </div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-comments" />
                          35 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          24th March 2024
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                          The whimsically named Egg Canvas brainchesiko
                        </Link>
                      </h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised words which
                        don't look even slight believable. If you are going to
                        use a passage of Lorem Ipsum.
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          READ MORE <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post quote-post format-quote">
                    <div className="post-content text-white bg-cover">
                      <div className="quote-content">
                        <div className="icon">
                          <i className="fas fa-quote-left" />
                        </div>
                        <div className="quote-text">
                          <h2>
                            Excepteur sint occaecat cupida tat non proident,
                            sunt in.
                          </h2>
                          <div className="post-meta">
                            <span>
                              <i className="fal fa-comments" />
                              35 Comments
                            </span>
                            <span>
                              <i className="fal fa-calendar-alt" />
                              24th March 2024
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page-nav-wrap mt-5 text-center">
                  <ul>
                    <li>
                      <a className="page-numbers" href="#">
                        <i className="fal fa-long-arrow-left" />
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        01
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        02
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        ..
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        10
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        11
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <BlogSideBar />
            </div>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};
export default page;
