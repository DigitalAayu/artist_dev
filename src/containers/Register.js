import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { Link } from "react-router-dom";
import BeforeLogin from "../components/BeforeLogin";
import swal from 'sweetalert2';
import PasswordStrengthBar from 'react-password-strength-bar';
import googleOneTap from "google-one-tap";
import Cookies from "js-cookie";
async function registerme(credentials) {
  console.log(process.env.REACT_APP_API_URL);

  return fetch(process.env.REACT_APP_API_URL+'users/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
export default function Register() {

  const [passwordType, setPasswordType] = useState("password");
  const [cpasswordType, setcPasswordType] = useState("password");

  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }

  const toggleCPassword =()=>{
    if(cpasswordType==="password")
    {
     setcPasswordType("text")
     return;
    }
    setcPasswordType("password")
  }


  const formik = useFormik({
    initialValues: {
      username:'',
      email: '',
      password:'',
      cpassword:'',
    },
    validate() {
      const errors = {};
      // Add the touched to avoid the validator validating all fields at once      
      if (formik.touched.username && !formik.values.username) {
        errors.username = 'Username is Required';
      }else if(formik.values.username.length < 8 ){
        errors.username = "Username must be 8 char long";
      }
      if (formik.touched.email && !formik.values.email) {
        errors.email = "Enter Email ID";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (formik.touched.password && !formik.values.password) {
        errors.password = "Please Enter Password";
      } else if (formik.values.password.length < 8) {
        errors.password = "Must be more than 8 characters";
      }
      if (!formik.values.cpassword) {
        errors.cpassword = 'Please enter Confirm password';
      } else if (formik.values.password!==formik.values.cpassword) {
        errors.cpassword = 'Password and Confirm password should be same';
      }
      return errors;
    },
    onSubmit: async values => {
      var username = values.username;
      var email = values.email;
      var password = values.password;      
      const result = await registerme({
      username,
      email,
      password
      });
      
      if ('status' in result) {
        swal.fire("Success", result.message, "success", {
          buttons: false,
          timer: 2000,
        })
        .then((value) => {
          Cookies.set('access_token', result['token']);
          Cookies.set('id', result._id);
          Cookies.set('name', result.username);
          Cookies.set('email', result.email);
          Cookies.set('banner', result.banner);
          Cookies.set('profile_pic', result.profile_pic);
          Cookies.set('address_line1', result.address_line1);
          Cookies.set('address_line2', result.address_line2);
          Cookies.set('firstname', result.firstname);
              Cookies.set('lastname', result.lastname);
          Cookies.set('country', result.country);
          window.location.href = "/user/welcome";
        });
      } else {
        swal("Failed", result.message, "error");
      }
    },
  });

  const options = {
    client_id: "724244464766-jei1m3r2ppes4onlugqebneq805bib6g.apps.googleusercontent.com", // required
    auto_select: false, // optional
    cancel_on_tap_outside: false, // optional
    context: 'signin', // optional
  };
  
  
  
  useEffect(() =>{
    googleOneTap(options, async (response) => {
      // Send response to server
      console.log(response);
      const res = await fetch(process.env.REACT_APP_API_URL+"users/google_login",
      {
        method:"POST",
        body:JSON.stringify({
          token:response.credential
        }),
        headers:{
          "Content-Type":"application/json",
        }
      });
      const data = await res.json();
      if (data['accessToken']) {        
            Cookies.set('access_token', data['token']);
              Cookies.set('id', data['user']._id);
              Cookies.set('name', data['user'].username);
              Cookies.set('email', data['user'].email);
              Cookies.set('banner', data['user'].banner);
              Cookies.set('profile_pic', data['user'].profile_pic);
              Cookies.set('address_line1', data['user'].address_line1);
              Cookies.set('address_line2', data['user'].address_line2);
              Cookies.set('firstname', data['user'].firstname);
              Cookies.set('lastname', data['user'].lastname);
              Cookies.set('country', data['user'].country);
              window.location.href="/user/welcome";
      }else{
        swal.fire("Failed","Unable to login");
      }
    });
  })

    return (
    <>
     <div>
       <BeforeLogin></BeforeLogin>
        <section className="container forms">
          <div className="logos">
            <img src={process.env.PUBLIC_URL+"/img/Artisant.png"} alt="" className="logos4" />
            <div className="form register">
              <div className="form-content">
                <header>SignUp</header>
                {/* <Formik {...{ initialValues, onSubmit }}>
                {({ getFieldProps, handleSubmit }) => ( */}
               <form className="baseForm" onSubmit={formik.handleSubmit} noValidate>                
                <div className="field input-field">
                    <input type="text" name="username" onChange={formik.handleChange} value={formik.values.username} placeholder="Username" className="input username formField" />
                  </div>
                  {formik.errors.username ? <div style={{color:"red"}}>{formik.errors.username}</div> : null}
                  <div className="field input-field">
                    <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Email Address" className="input email formField" />
                  </div>
                  {formik.errors.email ? <div style={{color:"red"}}>{formik.errors.email}</div> : null}
                  <div className="field input-field">
                    <input type={passwordType} name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="password" className="password formField" />
                    <PasswordStrengthBar password={formik.values.password} />
                   
                    { passwordType==="password"?  <img onClick={togglePassword} src={process.env.PUBLIC_URL+"/img/Group149.png"} alt="" className="hide" /> : <img onClick={togglePassword} src={process.env.PUBLIC_URL+"/img/Group150.png"} alt="" className="hide" />}
                  </div>
                  {formik.errors.password ? <div style={{color:"red"}}>{formik.errors.password}</div> : null}
                  <div className="field input-field" style={{marginTop:"30px"}} >
                 
                    <input type={cpasswordType}  name="cpassword" onChange={formik.handleChange} value={formik.values.cpassword} placeholder="Confirm Password" className="cpassword formField" />
                    { cpasswordType==="password"?  <img onClick={toggleCPassword} src={process.env.PUBLIC_URL+"/img/Group149.png"} alt="" className="hide" /> : <img onClick={toggleCPassword} src={process.env.PUBLIC_URL+"/img/Group150.png"} alt="" className="hide" />}
                  </div>
                  
                  {formik.errors.cpassword ? <div style={{color:"red"}}>{formik.errors.cpassword}</div> : null}           
                  <div className="field button-field">
                    <button className="btn-trans" type="submit">Continue</button>
                  </div>
                  {/* <div className="line">
                  </div>
                  <div className="media-options">
                    <a href="#!" className="field google">
                      <img src={process.env.PUBLIC_URL+"/img/google.png"} alt="" className="google-img" />
                      <span>Continue With Google</span>
                    </a>
                  </div> */}
              </form>
                {/* )}
                </Formik> */}
              </div>
              <div className="form-link">
                <span>Already have an Account? &nbsp;<Link to="/login" className="signup-link">Sign In</Link></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>

  );

}