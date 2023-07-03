import Header from '../components/AfterLogin';
import Cookies from "js-cookie";
import swal from 'sweetalert2';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Welcome() {


        return (  
          <>
          <link rel="stylesheet" href={process.env.PUBLIC_URL+"/freshpro.css"}></link>
       <Header/> 
       
  {/*Main layout*/}
  
  <div className="container-fresh">
  <div className="cards4-fresh">
    <div className="imga-fresh">
      <img src={process.env.PUBLIC_URL+"/img/hand.png"} alt="hand" className="imga" />
    </div>
    <div className="heading1-fresh">
      <h1>Welcome to Artisant</h1>
    </div>
    <div className="para-fresh">
      <p>
        You are new on this platform please update your <br /> profile so you
        don’t miss a beat
      </p>
    </div>
    <div className="button-fresh">
      <Link to="/user/editProfile" className="btn-fresh">Update your profile</Link>
    </div>
  </div>
</div>

          </>       
      
        );
      
}

export default Welcome;