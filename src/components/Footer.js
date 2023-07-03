import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
 
  return (
    <>
        <footer className=" text-white justify-content-center ">
            <div className="container-fluid pb-4 footer2">
                <div className="row py-5">
                <div className="col-8 offset-2">
                    <div className="col-md-3 col-md-6">
                    <img className="img-fluid" src="images/logo.png" alt="" />
                    </div>
                    {/* <div class="col-6"></div> */}
                    <div className="col-md-3 col-md-6 offset-md-9">
                    <img
                        className="img-fluid shadow-sm"
                        src="images/TwitterOctDenoiserBeauty_001 copy.png"
                        alt="twitter logo"
                    />
                    <img
                        className="img-fluid shadow-sm"
                        src="images/RedditOctDenoiserBeauty_002 1.png"
                        alt="reddit logo"
                    />
                    <img
                        className="img-fluid shadow-sm"
                        src="images/DiscordOctDenoiserBeauty_001 copy.png"
                        alt="discord logo"
                    />
                    </div>
                </div>
                </div>
                <div className="row col-8 offset-sm-2">
                <div className="col-lg-3 col-sm-6">
                    {/* <div class="col-lg-2 col-md-6"> */}
                    <h5 className="text-white mb-3">Popular Services</h5>
                    <ul className="list-unstyled ">
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
                    </ul>
                    {/* </div> */}
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h5 className="text-white mb-3">Popular Locations</h5>
                    <ul className="list-unstyled ">
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
                    <ul className="list-unstyled ">
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
                    <ul className="list-unstyled ">
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
                © 2023 Artisant All Rights Reserved |{" "}
                <a className="text-decoration-none" href="#">
                    Terms of Use
                </a>{" "}
                |
                <a className="text-decoration-none" href="#">
                    Privacy Policy
                </a>{" "}
                |{" "}
                <a className="text-decoration-none" href="#">
                    Contact
                </a>{" "}
                |{" "}
                <a className="text-decoration-none" href="#">
                    Help
                </a>
                </div>
            </div>
            </footer>

    
    </>
  );
};

export default Footer;





