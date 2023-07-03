import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";

const AfterLogin = () => {
  const navRef = React.useRef(null);
  function toggleMenu() {
    navRef.current.classList.toggle("open-menu");
    
  }

  let username=Cookies.get('name');
  let specific = Cookies.get('specific');
  let profile_pic = Cookies.get('profile_pic');

  if(profile_pic === undefined || profile_pic === ''){
    profile_pic = process.env.PUBLIC_URL+"/images/img.png";
  }else{
    profile_pic = process.env.REACT_APP_UPLOAD_PATH+profile_pic;
  }

  function Logout () {
    if (typeof window !== 'undefined') {
      Cookies.remove('id');
      Cookies.remove('name');
      Cookies.remove('email');
      Cookies.remove('access_token');
      window.location.href="/login";
    }
  }


  if (typeof window !== 'undefined') {
    if(Cookies.get('access_token') === undefined){
         window.location.href='/login';
      }
    }
  

  return (
    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Feed</title>
    <link rel="stylesheet" href={process.env.PUBLIC_URL+"/feed-page.css"} />
    <link rel="stylesheet" href={process.env.PUBLIC_URL+"/bootstrap/css/bootstrap.min.css"} />
    <link rel="stylesheet" href={process.env.PUBLIC_URL+"/bootstrap/bootstrap-icons/font/bootstrap-icons.css"} />
    <link rel="stylesheet" href={process.env.PUBLIC_URL+"/style.css"} />       
    <link rel="stylesheet" href={process.env.PUBLIC_URL+"/anim.css"} />
  {/* <link rel="stylesheet" type="text/css" href="css/style.css"> */}
  <link rel="stylesheet" href={process.env.PUBLIC_URL+"/style-after-login.css"} />
  {/* </style> */}
  
 
  <script src={process.env.PUBLIC_URL+"/bootstrap/js/bootstrap.bundle.min.js"}></script>
  <header>
  
    <nav className="navbar navbar-expand-lg navbar-light bg-white position-fixed w-100 top-0 py-2">
      <div className="container">
        <Link className="navbar-brand" to="/user/dashboard">
          <img src={process.env.PUBLIC_URL+"/images/Artisant.png"} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item icons">
              <i className="bi bi-house" />
            </li>
            <li className="nav-item">
            <Link to="/user/dashboard" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item icons">
              <i className="bi bi-disc ms-3" />
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Explore
              </a>
            </li>
            <li className="nav-item icons">
              <i className="bi bi-briefcase ms-3" />
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Jobs
              </a>
            </li>
            <li className="nav-item icons">
              <i className="bi bi-wifi ms-3" />
            </li>
            <li className="nav-item ">
            <Link to="/user/feed" className="nav-link">
                Feed
              </Link>
            </li>
          </ul>
          <div className="navbar_right">
            <div className="notifications">
              <div className="icon_wrap">
                <div className="box">
                  <img src={process.env.PUBLIC_URL+"/images/message.png"} alt="" className="fa-bell" />
                </div>
              </div>
              {/* <div className="notification_dd">
                <ul className="notification_ul">
                  <div className="scroll-bg">
                    <div className="scroll-div">
                      <li className="starbucks success">
                        <div className="notify_icon">
                          <span className="icon" />
                        </div>
                        <div className="notify_data">
                          <img src={process.env.PUBLIC_URL+"/images/sammoore.png"} alt="" cl="" />
                          <div className="title">{username ? username :""}</div>
                          <div className="sub_title">Yes sure let's conne...</div>
                        </div>
                        <div className="notify_status">
                          <p>01 Jan</p>
                        </div>
                      </li>
                      <li className="baskin_robbins failed">
                        <div className="notify_icon">
                          <span className="icon" />
                        </div>
                        <div className="notify_data">
                          <img
                            src={process.env.PUBLIC_URL+"/images/leticia.png"} alt=""
                          />
                          <div className="title">Leticia samper</div>
                          <div className="sub_title">
                            Lorem ipsum dolor sit amet consectetur.
                          </div>
                        </div>
                        <div className="notify_status">
                          <p>01 Jan</p>
                        </div>
                      </li>
                      <li className="mcd success">
                        <div className="notify_icon">
                          <span className="icon" />
                        </div>
                        <div className="notify_data">
                          <img src={process.env.PUBLIC_URL+"/images/michal.png"} alt="" />
                          <div className="title">Michale broom</div>
                          <div className="sub_title">How are you?</div>
                        </div>
                        <div className="notify_status">
                          <p>01 Jan</p>
                        </div>
                      </li>
                      <li className="pizzahut failed">
                        <div className="notify_icon">
                          <span className="icon" />
                        </div>
                        <div className="notify_data">
                          <img src={process.env.PUBLIC_URL+"/images/andrew.png"} alt="" />
                          <div className="title">Andrew s.</div>
                          <div className="sub_title">Hello</div>
                        </div>
                        <div className="notify_status">
                          <p>01 Jan</p>
                        </div>
                      </li>
                      <li className="kfc success">
                        <div className="notify_icon">
                          <span className="icon" />
                        </div>
                        <div className="notify_data">
                          <img src={process.env.PUBLIC_URL+"/images/michal.png"} alt="" />
                          <div className="title">Michale broom</div>
                          <div className="sub_title">Yes sure let's conne..</div>
                        </div>
                        <div className="notify_status">
                          <p>01 Jun</p>
                        </div>
                      </li>
                    </div>
                  </div>
                </ul>
              </div> */}
              {/* </div> */}
              <div className="profile">
                <div className="icon_wrap">
                  <img src={profile_pic} alt="profile_pic"  className="fas fa-chevron-down" onClick={toggleMenu}
                  />
                  <div ref={navRef} className="sub-menu-wrap" id="subMenu">
                    <div className="sub-menu">
                      <div className="user-info">
                        <img src="img/img.png" alt="" />
                        <div>
                          <h5>
                          {username ? username :""} <br /> <span>{specific ? specific :""}</span>
                          </h5>
                        </div>
                        <span className="spa">&gt;</span>
                      </div>
                      <hr />
                      <div>
                        <Link to="/user/editprofile"><h5>Edit Profile</h5></Link>
                      </div>
                      <div>
                        <h5>Setting &amp; Privacy</h5>
                      </div>
                      <div>
                        <h5>Help</h5>
                      </div>
                      <hr />
                      <button onClick={()=>Logout()} className="sam">Logout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  </header>
  
    </>
  );
};

export default AfterLogin;





