import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>

 <nav className="navbar nav navbar-expand-lg navbar-light bg-white position-fixed w-100 top-0 py-2">
            <div className="container">
              <a className="navbar-brand" href="#!"><img src={process.env.PUBLIC_URL+"/images/Artisant.png"} alt="Logo" /></a>
              <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft: '223px'}}>
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#!">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">Explore</a>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                  <Link className="btn btn-outline-dark me-4" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="btn btn-dark" to="/register">Sign Up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>{/* ****navbar ends***** */}

   
  
    </>
  );
};

export default Navbar;





