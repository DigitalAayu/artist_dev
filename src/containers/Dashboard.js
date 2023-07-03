import Header from '../components/AfterLogin';
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
import Footer from '../components/Footer';
function Dashboard() {

  const swiper = new Swiper(".card_slider", {
    loop: true,
    speed: 150,
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        // spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        // spaceBetween: 50,
      },
    },
  });


        return (  
          <>
   <Header/>
   <style
  type="text/css"
  dangerouslySetInnerHTML={{
    __html:
      "\n      .img_box img {\n        max-width: 100%;\n        height: 270px;\n      }\n\n      .swiper-button-next {\n        margin-left: -20px;\n        margin-right: -20px;\n      }\n\n      .slider_container .swiper_container {\n        padding: 0 25px;\n        max-width: 1250px;\n        margin: 0 auto;\n      }\n .card{ background-color:white; padding: 12px;  } .col-xl-3 .col-md-6 { margin-left:20px;}   "
  }}
/>
   <div
    className="container-fluid mt-5" style={{ background: "#0c0c0c", height: 400 }}
  >
    <div className="row">
      <div className="col text-center" style={{ marginTop: 100 }}>
        <h3 className="big-heading text-white">Good Morning</h3>
      </div>
    </div>
    <div className="row">
      <div className="col text-center">
        <h3 className="blue big-heading">Sam Moore</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 col-sm-6 offset-md-4 offset-sm-2">
        <div className="input-group mt-4 w-100">
          <input
            style={{
              background: "#0c0c0c",
              color: "white",
              height: 50,
              marginTop: 60
            }}
            type="search"
            className="form-control rounded"
            placeholder="What are you looking?"
            aria-label="Search"
            aria-describedby="search-addon-description"
          />
          <button
            type="button"
            className="btn btn-primary btn-class"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span style={{ marginLeft: 8 }}>Search</span>
          </button>
        </div>
        <div id="search-addon-description" className="visually-hidden">
          Enter your search query
        </div>
      </div>
    </div>
  </div>
  {/* ***********Discover section********** */}
  <div className="container-fluid">
    <div className="row mt-sm-3">
      <div className="col-11 offset-md-1">
        <h1 className="mt-3 ms-3 big-heading">Discover Top talents</h1>
      </div>
    </div>
  </div>
  <br />
  {/* Card section********* */}
  <section className="slider_container">
    <div className="swiper_container">
      <div className="swiper card_slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="img_box">
              <div className="carousel-cell">
                <div
                  className="card mx-sm-3"
                  style={{ width: "17rem", height: 250 }}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={process.env.PUBLIC_URL+"/img/headph.png"}
                          alt="Description"
                          style={{ width: 60, height: 60 }}
                        />
                      </div>
                      <div className="col-6">
                        <i
                          className="bi bi-play-circle-fill button mt-4"
                          style={{
                            position: "relative",
                            color: "blue",
                            top: "-45px",
                            right: "-35px",
                            fontSize: 25
                          }}
                        />
                      </div>
                    </div>
                    <h5
                      className="card-title"
                      style={{
                        color: "#0c0c0c",
                        fontFamily: '"Inter"',
                        fontStyle: "normal",
                        fontWeight: 600,
                        textAlign: "left"
                      }}
                    >
                      Musician
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Lorem Ipsum is simply dummy text of the printing dummy and
                      type.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="img_box">
              <div className="carousel-cell">
                <div
                  className="card mx-sm-3"
                  style={{ width: "17rem", height: 250 }}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={process.env.PUBLIC_URL+"/img/headph.png"}
                          alt="Description"
                          style={{ width: 60, height: 60 }}
                        />
                      </div>
                      <div className="col-6">
                        <i
                          className="bi bi-play-circle-fill button mt-4"
                          style={{
                            position: "relative",
                            color: "blue",
                            top: "-45px",
                            right: "-35px",
                            fontSize: 25
                          }}
                        />
                      </div>
                    </div>
                    <h5
                      className="card-title"
                      style={{
                        color: "#0c0c0c",
                        fontFamily: '"Inter"',
                        fontStyle: "normal",
                        fontWeight: 600,
                        textAlign: "left"
                      }}
                    >
                      Mural Artist
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Lorem Ipsum is simply dummy text of the printing dummy and
                      type.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="img_box">
              <div className="carousel-cell">
                <div
                  className="card mx-sm-3"
                  style={{ width: "17rem", height: 250 }}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={process.env.PUBLIC_URL+"/img/headph.png"}
                          alt="Description"
                          style={{ width: 60, height: 60 }}
                        />
                      </div>
                      <div className="col-6">
                        <i
                          className="bi bi-play-circle-fill button mt-4"
                          style={{
                            position: "relative",
                            color: "blue",
                            top: "-45px",
                            right: "-35px",
                            fontSize: 25
                          }}
                        />
                      </div>
                    </div>
                    <h5
                      className="card-title"
                      style={{
                        color: "#0c0c0c",
                        fontFamily: '"Inter"',
                        fontStyle: "normal",
                        fontWeight: 600,
                        textAlign: "left"
                      }}
                    >
                      UI designer
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Lorem Ipsum is simply dummy text of the printing dummy and
                      type.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="img_box">
              <div className="carousel-cell">
                <div
                  className="card mx-sm-3"
                  style={{ width: "17rem", height: 250 }}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={process.env.PUBLIC_URL+"/img/headph.png"}
                          alt="Description"
                          style={{ width: 60, height: 60 }}
                        />
                      </div>
                      <div className="col-6">
                        <i
                          className="bi bi-play-circle-fill button mt-4"
                          style={{
                            position: "relative",
                            color: "blue",
                            top: "-45px",
                            right: "-35px",
                            fontSize: 25
                          }}
                        />
                      </div>
                    </div>
                    <h5
                      className="card-title"
                      style={{
                        color: "#0c0c0c",
                        fontFamily: '"Inter"',
                        fontStyle: "normal",
                        fontWeight: 600,
                        textAlign: "left"
                      }}
                    >
                      Developers
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Lorem Ipsum is simply dummy text of the printing dummy and
                      type.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="img_box">
              <div className="carousel-cell">
                <div
                  className="card mx-sm-3"
                  style={{ width: "17rem", height: 250 }}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={process.env.PUBLIC_URL+"/img/headph.png"}
                          alt="Description"
                          style={{ width: 60, height: 60 }}
                        />
                      </div>
                      <div className="col-6">
                        <i
                          className="bi bi-play-circle-fill button mt-4"
                          style={{
                            position: "relative",
                            color: "blue",
                            top: "-45px",
                            right: "-35px",
                            fontSize: 25
                          }}
                        />
                      </div>
                    </div>
                    <h5
                      className="card-title"
                      style={{
                        color: "#0c0c0c",
                        fontFamily: '"Inter"',
                        fontStyle: "normal",
                        fontWeight: 600,
                        textAlign: "left"
                      }}
                    >
                      Developers
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Lorem Ipsum is simply dummy text of the printing dummy and
                      type.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="img_box">
              <div className="carousel-cell">
                <div
                  className="card mx-sm-3"
                  style={{ width: "17rem", height: 250 }}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={process.env.PUBLIC_URL+"/img/headph.png"}
                          alt="Description"
                          style={{ width: 60, height: 60 }}
                        />
                      </div>
                      <div className="col-6">
                        <i
                          className="bi bi-play-circle-fill button mt-4"
                          style={{
                            position: "relative",
                            color: "blue",
                            top: "-45px",
                            right: "-35px",
                            fontSize: 25
                          }}
                        />
                      </div>
                    </div>
                    <h5
                      className="card-title"
                      style={{
                        color: "#0c0c0c",
                        fontFamily: '"Inter"',
                        fontStyle: "normal",
                        fontWeight: 600,
                        textAlign: "left"
                      }}
                    >
                      Developers
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Lorem Ipsum is simply dummy text of the printing dummy and
                      type.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="img_box">
              <div className="carousel-cell">
                <div
                  className="card mx-sm-3"
                  style={{ width: "17rem", height: 250 }}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={process.env.PUBLIC_URL+"/img/headph.png"}
                          alt="Description"
                          style={{ width: 60, height: 60 }}
                        />
                      </div>
                      <div className="col-6">
                        <i
                          className="bi bi-play-circle-fill button mt-4"
                          style={{
                            position: "relative",
                            color: "blue",
                            top: "-45px",
                            right: "-35px",
                            fontSize: 25
                          }}
                        />
                      </div>
                    </div>
                    <h5
                      className="card-title"
                      style={{
                        color: "#0c0c0c",
                        fontFamily: '"Inter"',
                        fontStyle: "normal",
                        fontWeight: 600,
                        textAlign: "left"
                      }}
                    >
                      Developers
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Lorem Ipsum is simply dummy text of the printing dummy and
                      type.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="swiper-button-next"></div> */}
        {/* <div class="swiper-button-prev"></div> */}
        {/* <div class="swiper-pagination"></div> */}
      </div>
    </div>
  </section>
  <br />
  <br />
  <br />
  {/* **********Top Rated Section********* */}
  <div className="row">
    <div className="col-11 offset-md-1">
      <h1 className="mt-3 mx-3 big-heading">Top Rated Talents</h1>
    </div>
  </div>
  <br />
  <section className="slider_container">
    <div className="swiper_container">
      <div className="swiper card_slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="img_box">
              <img src={process.env.PUBLIC_URL+"/images/rated-1.png"} alt="" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="img_box">
              <img src={process.env.PUBLIC_URL+"/images/rated-2.png"} alt="" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="img_box">
              <img src={process.env.PUBLIC_URL+"/images/rated-3.png"} alt="" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="img_box">
              <img src={process.env.PUBLIC_URL+"/images/rated-4.png"} alt="" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="img_box">
              <img src={process.env.PUBLIC_URL+"/images/rated-5.png"} alt="" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="img_box">
              <img src={process.env.PUBLIC_URL+"/images/rated-6.png"} alt="" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="img_box">
              <img src={process.env.PUBLIC_URL+"/images/rated-7.png"} alt="" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="img_box">
              <img src={process.env.PUBLIC_URL+"/images/rated-8.png"} alt="" />
            </div>
          </div>
        </div>
        {/* <div class="swiper-button-next"></div> */}
        {/* <div class="swiper-button-prev"></div> */}
        {/* <div class="swiper-pagination"></div> */}
      </div>
    </div>
  </section>
  <br />
  <br />
  <br />
  {/* **********Choose Section********** */}
  <section>
    <div
      className="container text-white pt-5 ps-5"
      style={{ background: "#0c0c0c" }}
    >
      <div className="row">
        <div className="col-md-4 offset-md-1">
          <h2>
            Choose Your Perfect
            <br />
            Legal<span className="blue">Professional</span>
          </h2>
          <p className="text-style">
            Work smarter with a deep bench of experienced, specialized legal
            talent to drive internal business initiatives.
          </p>
        </div>
        {/* <div class="col-1"></div> */}
        <div className="img-fluid mb-3 align-content-center col-md-5 offset-md-2">
          <img src={process.env.PUBLIC_URL+"/images/Group91.png"} alt="animated" />
        </div>
      </div>
    </div>
  </section>
  {/* **************Blog Section*************** */}
  <div className="container p-3">
    <div className="row">
      <div className="div col-md-2">
        <h1 style={{ fontFamily: '"Sora"', fontWeight: 700 }}>Blog</h1>
      </div>
      <div className="col-md-2 offset-md-8 justify-content-center">
        <button type="button" className="btn btn-outline-dark">
          View All
        </button>
      </div>
    </div>
    <div className="row py-3">
      <div className="col">
        <p style={{ color: "#9b9a9a" }}>
          The world’s best mixing &amp; mastering engineers, singers,
          <br />
          songwriters, producers and studio musicians for hire
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-3 col-md-6" style={{ marginBottom: 20 }}>
        <div className="card" style={{ width: "17rem" }}>
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL+"/images/blog-img-1.png"}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                color: "#0c0c0c",
                fontFamily: '"Inter"',
                fontStyle: "normal",
                fontWeight: 600,
                textAlign: "left"
              }}
            >
              Blog title here
            </h5>
            <p className="card-text" style={{ textAlign: "left" }}>
              Lorem Ipsum is simply dummy text of the printing is the text dummy
              and type.
            </p>
            <div className="row" style={{ marginTop: "-13px" }}>
              <div className="col-6">
                <p style={{ textAlign: "left" }}>Jan 01, 2023</p>
              </div>
              <div className="col-6">
                <i
                  className="bi bi-play-circle-fill button"
                  style={{ color: "blue", marginTop: "-12px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6" style={{ marginBottom: 20 }}>
        <div className="card" style={{ width: "17rem" }}>
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL+"/images/blog-img-2.png"}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                color: "#0c0c0c",
                fontFamily: '"Inter"',
                fontStyle: "normal",
                fontWeight: 600,
                textAlign: "left"
              }}
            >
              Blog title here
            </h5>
            <p className="card-text" style={{ textAlign: "left" }}>
              Lorem Ipsum is simply dummy text of the printing is the text dummy
              and type.
            </p>
            <div className="row" style={{ marginTop: "-13px" }}>
              <div className="col-6">
                <p style={{ textAlign: "left" }}>Jan 01, 2023</p>
              </div>
              <div className="col-6">
                <i
                  className="bi bi-play-circle-fill button"
                  style={{ color: "blue", marginTop: "-12px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6" style={{ marginBottom: 20 }}>
        <div className="card" style={{ width: "17rem" }}>
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL+"/images/blog-img-3.png"}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                color: "#0c0c0c",
                fontFamily: '"Inter"',
                fontStyle: "normal",
                fontWeight: 600,
                textAlign: "left"
              }}
            >
              Blog title here
            </h5>
            <p className="card-text" style={{ textAlign: "left" }}>
              Lorem Ipsum is simply dummy text of the printing is the text dummy
              and type.
            </p>
            <div className="row" style={{ marginTop: "-13px" }}>
              <div className="col-6">
                <p style={{ textAlign: "left" }}>Jan 01, 2023</p>
              </div>
              <div className="col-6">
                <i
                  className="bi bi-play-circle-fill button"
                  style={{ color: "blue", marginTop: "-12px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6" style={{ marginBottom: 20 }}>
        <div className="card" style={{ width: "17rem" }}>
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL+"/images/blog-img-4.png"}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                color: "#0c0c0c",
                fontFamily: '"Inter"',
                fontStyle: "normal",
                fontWeight: 600,
                textAlign: "left"
              }}
            >
              Blog title here
            </h5>
            <p className="card-text" style={{ textAlign: "left" }}>
              Lorem Ipsum is simply dummy text of the printing is the text dummy
              and type.
            </p>
            <div className="row" style={{ marginTop: "-13px" }}>
              <div className="col-6">
                <p style={{ textAlign: "left" }}>Jan 01, 2023</p>
              </div>
              <div className="col-6">
                <i
                  className="bi bi-play-circle-fill button"
                  style={{ color: "blue", marginTop: "-12px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ****************************Next Over Section ***************** */}
  <div className="container mt-5 mb-3">
    <div className="row">
      <div className="col-1" />
      <div className="col-md-4">
        <img className="img-fluid" src={process.env.PUBLIC_URL+"/images/Group136.png"} alt="Group136" />
      </div>
      <div className="col-md-6">
        <h3 className="heading pb-3 m-2">
          <strong>Over 400,000 musicians have used and trust Artisant</strong>
        </h3>
        <div className="row">
          <div className="col-6 bd-color">
            <h4>Safe and secure</h4>
            <p>
              Fund a project to get started and release payment once it's
              completed
            </p>
          </div>
          <div className="col-6 bd-color">
            <h4>Protect your copyright</h4>
            <p>
              Our software provides a record of exchanges and files for future
              reference
            </p>
          </div>
          <div className="row">
            <div className="col-6 mt-2 bd-color">
              <h4>Human support</h4>
              <p>Email, phone and chat to help you with your projects</p>
            </div>
            <div className="col-6 mt-2 bd-color">
              <h4>Simply the best talent</h4>
              <p>
                SoundBetter pros work for their reviews and will give you their
                best
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   <Footer/>
  
</>



            
      
        );
      
}

export default Dashboard;