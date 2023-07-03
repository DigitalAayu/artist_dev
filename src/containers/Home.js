import Header from '../components/Header';
import Navbar from '../components/Navbar';


function Home() {
        return (  
          <>
       <Header/>
       <body onload="myFunction()">

  <div style={{background: "#f5f5f5"}} class="main-cont">
  <Navbar/>


{/* ******animated section***** */}
<div className="container_animtop" id="top_animation">
            <div className="anim_img" style={{textAlign: 'center'}}>
              <div className="text1">
                <h1 className="top">TOP</h1>
                <h1 className="legal">LEGAL</h1>
                <h1 className="talent">TALENT</h1>
              </div><img className="singer" src={process.env.PUBLIC_URL+"/images/singer.png"} alt="singer" /> <img className="content" src={process.env.PUBLIC_URL+"/images/content.png"} alt="content" /> <img className="boy" src={process.env.PUBLIC_URL+"/images/boycurl.png"} alt="boycurl" /> <img className="pinkbox" src={process.env.PUBLIC_URL+"/images/pinkbox.png"} alt="pinkbox" /> <img className="simple_girl" src={process.env.PUBLIC_URL+"/images/girlsimple.png"} alt="girlsimple" /> <img className="curly_girl" src={process.env.PUBLIC_URL+"/images/girlcurl.png"} alt="girlcurl" /> <img className="artist" src={process.env.PUBLIC_URL+"/images/artist.png"} alt="artist" /> <img className="branding" src={process.env.PUBLIC_URL+"/images/branding.png"} alt="branding" />
              <div className="text2">
                <h1 className="on">ON</h1>
                <h1 className="demand">DEMAND</h1>
              </div>
            </div>
          </div>{/* animated section end */}
          {/* ***Discover Section*** */}
          <div>
            <div className="container mx-xs-5 px-xs-5 mt-3 pt-5">
              <h1 className="mt-3 big-heading">Discover Top talents</h1>
              <p className="lead heading">Work smarter with a deep bench of experienced, specialized legal<br />
                talent to drive internal business initiatives.</p>
            </div>
            <section className="cards-wrapper">
              <div className="card-grid-space">
                <a className="card border" href="#!" style={{backgroundImage: `url(${process.env.PUBLIC_URL +"/images/img1.png "})`}}>
                  <div className="flow1">
                    <h3>Musician</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, assumenda!</p>
                  </div></a>
              </div>
              <div className="card-grid-space">
                <a className="card border" href="#!" style={{backgroundImage: `url(${process.env.PUBLIC_URL +"/images/img2.png "})`}}>
                  <div className="flow1">
                    <h3>Singer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
                  </div></a>
              </div>
              <div className="card-grid-space">
                <a className="card border" href="#!" style={{backgroundImage: `url(${process.env.PUBLIC_URL +"/images/img3.png "})`}}>
                  <div className="flow1">
                    <h3>Mixing Engineers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, deleniti.</p>
                  </div></a>
              </div>{/* </section> */}
              {/* <section class="cards-wrapper"> */}
              <div className="card-grid-space">
                <a className="card border" href="#!" style={{backgroundImage: `url(${process.env.PUBLIC_URL +"/images/img4.png "})`}}>
                  <div className="flow1">
                    <h3>Song writers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, assumenda!</p>
                  </div></a>
              </div>
              <div className="card-grid-space">
                <a className="card border" href="#" style={{bgImg: 'url({process.env.PUBLIC_URL+"/images/img5.png ")'}}>
                  <div className="flow1">
                    <h3>Mastering Engineers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
                  </div></a>
              </div>
              <div className="card-grid-space">
                <a className="card border" href="#" style={{bgImg: 'url({process.env.PUBLIC_URL+"/images/img6.png ")'}}>
                  <div className="flow1">
                    <h3>Musicians</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, deleniti.</p>
                  </div></a>
              </div>
            </section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 text-center my-5">
                  <button type="button" className="btn btn-outline-secondary center">View More</button>
                </div>
              </div>
            </div>
          </div>{/* ***Choose Section*** */}
          <section>
            <div className="container text-white pt-5 ps-5" style={{background: '#0C0C0C'}}>
              <div className="row">
                {/* <div class="col-1"></div> */}
                <div className="col-md-4 offset-md-1">
                  <h2>Choose Your Perfect<br />
                    Legal<span className="blue">Professional</span></h2>
                  <p className="text-style">Work smarter with a deep bench of experienced, specialized legal talent to drive internal business initiatives.</p>
                </div>{/* <div class="col-1"></div> */}
                <div className="img-fluid mb-3 align-content-center col-md-5 offset-md-2"><img src={process.env.PUBLIC_URL+"/images/Group%2091.png"} alt="animated" /></div>
              </div>
            </div>
          </section>{/* <div>
      <img src={process.env.PUBLIC_URL+"/images/Choose.png"} alt="Choose Section " class="img-fluid">
    </div> */}
          {/* ***icon section**** */}
          <section className="icon-section shadow rounded m-5 p-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <img src={process.env.PUBLIC_URL+"/images/Group%2099.png"} className="img-fluid" alt="Group%2099" />
                  <h2>The World's Best</h2>
                  <p>Work with Grammy, Oscar, and Emmy winners from around the globe</p>
                </div>
                <div className="col-md-4">
                  <img src={process.env.PUBLIC_URL+"/images/Group%20101.png"} className="img-fluid" alt="Group%20101" />
                  <h2>Trusted Platform</h2>
                  <p>Safe and secure with tens of thousands of verified reviews</p>
                </div>
                <div className="col-md-4">
                  <img src={process.env.PUBLIC_URL+"/images/Group%20102.png"} className="img-fluid" alt="Group%20102" />
                  <h2>Sound Your Best</h2>
                  <p>Radio singles, YouTube hits, and chart-topping albums, all made on SoundBetter</p>
                </div>
              </div>
            </div>
          </section>{/* ****review section**** */}
          <section>
            <div className="container-fluid pb-4">
              <div className="row">
                <div className="col">
                  <h2 style={{fontWeight: 700, fontFamily: '"Sora"'}} className="text-center p-4">Endless <span className="blue">5-star</span> Reviews</h2>
                </div>
              </div>
              <div className="logos">
                <div className="logos-slide"><img src={process.env.PUBLIC_URL+"/images/cards.png"} alt="cards" /> <img src={process.env.PUBLIC_URL+"/images/cards.png"} alt="cards" /> <img src={process.env.PUBLIC_URL+"/images/cards.png"} alt="cards" /> <img src={process.env.PUBLIC_URL+"/images/cards.png"} alt="cards" /> <img src={process.env.PUBLIC_URL+"/images/cards.png"} alt="cards" /></div>
              </div>
              <div className="logos">
                <div className="logos-slide"><img src={process.env.PUBLIC_URL+"/images/cards.png"} alt="cards" /> <img src={process.env.PUBLIC_URL+"/images/cards.png"} alt="cards" /> <img src={process.env.PUBLIC_URL+"/images/cards.png"} alt="cards" /> <img src={process.env.PUBLIC_URL+"/images/cards.png"} alt="cards" /> <img src={process.env.PUBLIC_URL+"/images/cards.png"} alt="cards" /></div>
              </div>
            </div>
          </section>{/* ******how it work section****** */}
          <section className="work-section p-5 shadow">
            <div className="row">
              <div className="row col-md-10 offset-1 ps-lg-5">
                <h2 className="mb-5">How <span className="blue">Artisant</span> works</h2>
              </div>
            </div>
            <div className="container">
              <div className="row col-md-10 offset-1 pb-5">
                <div className="col-md-4">
                  <div className="row align-items-center">
                    <div className="col-lg-4"><img src={process.env.PUBLIC_URL+"/images/Group%20163.png"} alt="Your Image" className="img-fluid" /></div>
                    <div className="col-lg-8 mt-3">
                      <h4>Describe your project in seconds</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row align-items-center">
                    <div className="col-lg-4"><img src={process.env.PUBLIC_URL+"/images/Group%20164.png"} alt="Your Image" className="img-fluid" /></div>
                    <div className="col-lg-8 mt-3">
                      <h4>Get free proposals from professionals</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row align-items-center">
                    <div className="col-lg-4"><img src={process.env.PUBLIC_URL+"/images/Group%20166.png"} alt="Your Image" className="img-fluid" /></div>
                    <div className="col-lg-8 mt-3">
                      <h4>Hire a pro and get awesome tracks</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* ***very next section**** */}
          <div className="container-fluid mt-5 mb-3">
            <div className="row">
              <div className="col-1" />
              <div className="col-md-4"><img className="img-fluid" src={process.env.PUBLIC_URL+"/images/Group%20136.png"} alt="Group%20136" /></div>
              <div className="col-md-6">
                <h3 className="heading pb-3 m-2"><strong>Over 400,000 musicians have used and trust Artisant</strong></h3>
                <div className="row">
                  <div className="col-6 bd-color">
                    <h4>Safe and secure</h4>
                    <p>Fund a project to get started and release payment once it's completed</p>
                  </div>
                  <div className="col-6 bd-color">
                    <h4>Protect your copyright</h4>
                    <p>Our software provides a record of exchanges and files for future reference</p>
                  </div>
                  <div className="row">
                    <div className="col-6 mt-2 bd-color">
                      <h4>Human support</h4>
                      <p>Email, phone and chat to help you with your projects</p>
                    </div>
                    <div className="col-6 mt-2 bd-color">
                      <h4>Simply the best talent</h4>
                      <p>SoundBetter pros work for their reviews and will give you their best</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* ****video section*** */}
          <div className="container">
            <div className="row">
              <div className="col-1" />
              <div className="col-md-10 my-5">
                <h2 className="heading m-0"><strong>See why the music industry’s best<br />
                    choose Artisant Hear from the pros</strong></h2>{/* <div class="embed-responsive embed-responsive-16by9">
              <iframe loading="lazy" class="embed-responsive-item w-100 video1"  src={process.env.PUBLIC_URL+"/images/video1.mp4"
                allowfullscreen></iframe>
            </div> */}
                <div><img className="img-fluid" src={process.env.PUBLIC_URL+"/images/Frame%201596.png"} alt="Frame%201596" /></div>
              </div>
            </div>
          </div>{/* *****footer**** */}
          <footer className="text-white justify-content-center">
            <div className="container-fluid pb-4 footer2">
              <div className="row py-5">
                <div className="col-8 offset-2">
                  <div className="col-md-3 col-md-6"><img className="img-fluid" src={process.env.PUBLIC_URL+"/images/logo.png"} alt="logo" /></div>{/* <div class="col-6"></div> */}
                  <div className="col-md-3 col-md-6 offset-md-9"><img className="img-fluid shadow-sm" src={process.env.PUBLIC_URL+"/images/TwitterOctDenoiserBeauty_001%20copy.png"} alt="twitter logo" /> <img className="img-fluid shadow-sm" src={process.env.PUBLIC_URL+"/images/RedditOctDenoiserBeauty_002%201.png"} alt="reddit logo" /> <img className="img-fluid shadow-sm" src={process.env.PUBLIC_URL+"/images/DiscordOctDenoiserBeauty_001%20copy.png"} alt="discord logo" /></div>
                </div>
              </div>
              <div className="row col-8 offset-sm-2">
                <div className="col-lg-3 col-sm-6">
                  {/* <div class="col-lg-2 col-md-6"> */}
                  <h5 className="text-white mb-3">Popular Services</h5>
                  <ul className="list-unstyled">
                    <li>Music Producers</li>
                    <li>Female Singer</li>
                    <li>Male Singer</li>
                    <li>Mixing Engineers</li>
                    <li>Mastering Engineers</li>
                    <li>Drum Tracks</li>
                    <li>Beat Makers</li>
                    <li>Songwriters</li>
                    <li>Recording Studios</li>
                    <li>All Services</li>
                  </ul>{/* </div> */}
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h5 className="text-white mb-3">Popular Locations</h5>
                  <ul className="list-unstyled">
                    <li>New York</li>
                    <li>Los Angeles</li>
                    <li>Nashville</li>
                    <li>London, UK</li>
                    <li>Mixing Engineers in New York</li>
                    <li>Mastering Studios in New York</li>
                    <li>Session Singers in Nashville</li>
                    <li>Music Producers in Los Angeles</li>
                    <li>Songwriters in Nashville</li>
                    <li>All Locations</li>
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h5 className="text-white mb-3">Popular Genres</h5>
                  <ul className="list-unstyled">
                    <li>Electronic</li>
                    <li>Rock</li>
                    <li>Pop</li>
                    <li>EDM</li>
                    <li>Heavy Metal</li>
                    <li>Hip Hop</li>
                    <li>House</li>
                    <li>Singer Songwriter</li>
                    <li>Music Pros by Credits</li>
                    <li>All Genres</li>
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h5 className="text-white mb-3">Latest Articles</h5>
                  <ul className="list-unstyled">
                    <li>How Much to Produce a Song</li>
                    <li>20 Recording &amp; Mixing Tips</li>
                    <li>5 Ways EDM Mixing is Different</li>
                    <li>World's first Mixer POV Video</li>
                    <li>5 Tips For Recording Drums</li>
                    <li>Luca Pretolesi POV Video</li>
                    <li>Why Hiring a Producer Matters</li>
                    <li>Working with a Mix Engineer</li>
                    <li>Music Production Glossary</li>
                    <li>Artisant Tracks</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row col-md-10 offset-md-3 footer1">
              <div className="container-fluid text-dark m-3">
                2023 Artisant All Rights Reserved | <a className="text-decoration-none" href="#">Terms of Use</a> | <a className="text-decoration-none" href="#">Privacy Policy</a> | <a className="text-decoration-none" href="#">Contact</a> | <a className="text-decoration-none" href="#">Help</a>
              </div>
            </div>
          </footer>
        </div>
      </body>






          
          
      
          </>       
      
        );
      
}

export default Home;