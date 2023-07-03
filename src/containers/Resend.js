import React from "react";
import BeforeLogin from "../components/BeforeLogin";
import { useFormik } from "formik";
import swal from "sweetalert2";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";


async function resend(credentials) {
    console.log(process.env.REACT_APP_API_URL);
    return fetch(process.env.REACT_APP_API_URL+'users/resend_link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json()
      )
   }

export default function ResendLink() {

    var username = Cookies.get('name');
  async function resend_email(){
    var email = Cookies.get('email');           
    const result = await resend({
    email,
    });
    console.log(result);
    if (result['isSuccess']===true) {          
      swal.fire("Success", result.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {                          
        window.location.href = "/resetpassword";
      });
   
  }else{
    swal.fire("Failed", result.message, "error");
  }
   }

    
  return (
    <>
    <BeforeLogin></BeforeLogin>
        <div className="container">
        <img src={process.env.PUBLIC_URL+"/img/Artisant.png"} alt="" className="logos6"/>
        <div className="logos">
        <div className="cards">
            <div className="heading">
                <h2>
                Hi <span className="danger">{username?username:""},</span>
                </h2>
            </div>
            <div className="imga">
                <img src={process.env.PUBLIC_URL+"/img/email.png"} alt="" />
            </div>
            <div className="heading1">
                <p>Verify your email Address</p>
            </div>
            <div className="para">
                <p>
                To confirm your email address,{" "}
                <Link to="/resetpassword">Please click on the link</Link>
                <br /> in the email we send you.
                </p>
            </div>
            <div className="link">
                <a onClick={resend_email} >Resend email</a>
            </div>
        </div>

        </div>
    </div>
    </>

  );

}