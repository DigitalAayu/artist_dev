import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BeforeLogin from "../components/BeforeLogin";
import swal from 'sweetalert2';
import googleOneTap from "google-one-tap";
import Cookies from "js-cookie";
import { useFormik } from 'formik';

async function loginme(credentials) {
  console.log(process.env.REACT_APP_API_URL);
  return fetch(process.env.REACT_APP_API_URL+'users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json()
    )
 }


export default function Login() {
  const formik = useFormik({
    initialValues: {
      username:'',
      password:'',
    },
    validate() {
      const errors = {};
      // Add the touched to avoid the validator validating all fields at once      
      if (formik.touched.username && !formik.values.username) {
        errors.username = 'Username is Required';
      }else if(formik.values.username.length < 8 ){
        errors.username = "Username must be 8 char long";
      }
      if (formik.touched.password && !formik.values.password) {
        errors.password = "Please Enter Password";
      } else if (formik.values.password.length < 8) {
        errors.password = "Must be more than 8 characters";
      }
      return errors;
    },
    onSubmit: async values => {
      var username = values.username;
      var password = values.password;      
      const result = await loginme({
      username,
      password
      });
      console.log(result);
      if (result['accessToken']) {          
          console.log("Yes Success");
        swal.fire("Success", result.message, "success", {
          buttons: false,
          timer: 2000,
        })
        .then((value) => {
          Cookies.set('access_token', result['token']);
          Cookies.set('id', result['data']._id);
          Cookies.set('name', result['data'].username);
          Cookies.set('email', result['data'].email);
          Cookies.set('banner', result['data'].banner);
          Cookies.set('profile_pic', result['data'].profile_pic);
          Cookies.set('address_line1', result['data'].address_line1);
          Cookies.set('address_line2', result['data'].address_line2);
          Cookies.set('country', result['data'].country);
          Cookies.set('firstname', result['data'].firstname);
          Cookies.set('lastname', result['data'].lastname);
         
          window.location.href = "/user/welcome";
        });
     
    }else{
      swal.fire("Failed", result.message, "error");
    }
    },
  });


  const options = {
    client_id: "724244464766-jei1m3r2ppes4onlugqebneq805bib6g.apps.googleusercontent.com", // required
    auto_select: false, // optional
    cancel_on_tap_outside: false, // optional
    context: 'signin', // optional
  };

  const [passwordType, setPasswordType] = useState("password");
  
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
  
  useEffect(() =>{
    googleOneTap(options, async (response) => {
      // Send response to server
      const res = await fetch(process.env.REACT_APP_API_URL+"users/google_login",
      {
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          token:response.credential
        }),
       
      });
      const data = await res.json();
      console.log(data.token);
      if (data['token']) {        
            Cookies.set('access_token', data['token']);              
              Cookies.set('id', data['user']._id);
              Cookies.set('name', data['user'].username);
              Cookies.set('email', data['user'].email);
              Cookies.set('banner', data['user'].banner);
              Cookies.set('firstname', data['user'].firstname);
              Cookies.set('lastname', data['user'].lastname);
              Cookies.set('profile_pic', data['user'].profile_pic);
              Cookies.set('address_line1', data['user'].address_line1);
              Cookies.set('address_line2', data['user'].address_line2);
              Cookies.set('country', data['user'].country);
              window.location.href="/user/welcome";
      }else{
        swal.fire("Failed","Unable to login");
      }
    });
  })


  return (
    <>
    <body>
      <BeforeLogin></BeforeLogin>
      <section className="container forms">
      <img src={process.env.PUBLIC_URL+"/img/Artisant.png"} alt="Logo" className="logos4" />
        <div className="logos">                 
          <div className="form login">
            <div className="form-content">
              <header>Login</header>
              <form className="baseForm" onSubmit={formik.handleSubmit} noValidate>                
                <div className="field input-field">
                  <input type="text" name="username" onChange={formik.handleChange} value={formik.values.username} placeholder="Username" className="input" />
                </div>
                {formik.errors.username ? <div style={{color:"red"}}>{formik.errors.username}</div> : null}
                <div className="field input-field">
                  <input type={passwordType} name="password" onChange={formik.handleChange} value={formik.values.email} placeholder="password" className="password" /> 
                  { passwordType==="password"?  <img onClick={togglePassword} src={process.env.PUBLIC_URL+"/img/Group149.png"} alt="" className="hide" /> : <img onClick={togglePassword} src={process.env.PUBLIC_URL+"/img/Group150.png"} alt="" className="hide" />}
                </div>
                {formik.errors.password ? <div style={{color:"red"}}>{formik.errors.password}</div> : null}
                <div className="form-link">
                <Link to="/forgetpassword" className="forgot-pass">Forgot Password</Link>
                </div>
                <div className="field button-field">
                  <button className="btn-trans" type="submit">Login</button>
                </div>                      
              </form>
            </div>
            <div className="form-link">
              <span>Don't have an Account? &nbsp;<Link to="/register" className="signup-link"> Sign Up</Link></span>
            </div>
          </div>
        </div>
      </section>
  </body>          
         
    </>

  );

}