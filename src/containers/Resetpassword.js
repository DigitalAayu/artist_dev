import React, { useState } from "react";
import BeforeLogin from "../components/BeforeLogin";
import { useFormik } from "formik";
import swal from "sweetalert2";
import PasswordStrengthBar from 'react-password-strength-bar';


async function forget_password(credentials) {
  console.log(process.env.REACT_APP_API_URL);
  return fetch(process.env.REACT_APP_API_URL+'users/reset_password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json()
    )
 }

export default function Resetpassword() {
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

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
      email:'',
      otp:'',
      password:'',
      confirm_password:'',
    },
    validate() {
      const errors = {};
      // Add the touched to avoid the validator validating all fields at once      
      if (formik.touched.email && !formik.values.email) {
        errors.email = 'email is Required';
      }else if(!validateEmail(formik.values.email)){            
        errors.email = 'email is not valid';
      }

      if (formik.touched.otp && !formik.values.otp) {
        errors.otp = 'otp is Required';
      }

      if (formik.touched.password && !formik.values.password) {
        errors.password = 'Password is Required';
      }else if (formik.touched.password && formik.values.password.length < 8) {
        errors.password = "Must be more than 8 characters";
      }
      

      if (formik.touched.confirm_password && !formik.values.confirm_password) {
        errors.confirm_password = 'Confirm Password is Required';
      }else if (formik.touched.password && formik.values.password!==formik.values.confirm_password) {
        errors.confirm_password = 'Password and Confirm password should be same';
      }
     
      return errors;
    },
    onSubmit: async values => {
      var email = values.email; 
      var otp = values.otp; 
      var password = values.password; 
      const result = await forget_password({
      email,
      otp,
      password,
      });
      console.log(result);
      if (result['isSuccess']===true) {          
        swal.fire("Success", result.message, "success", {
          buttons: false,
          timer: 2000,
        })
        .then((value) => {                          
          window.location.href = "/user/reset";
        });
     
    }else{
      swal.fire("Failed", result.message, "error");
    }
    },
  });
  
  return (
    <>
    <BeforeLogin></BeforeLogin>
    <div className="container">
    <img src={process.env.PUBLIC_URL+"/img/Artisant.png"} alt="" className="logos6" />

    <div className="logos">
      <form className="baseForm" onSubmit={formik.handleSubmit} noValidate>                
            <div className="cards1">
                <div className="heading">
                    <h4>Reset password</h4>
                </div>
               
                
                <div className="email">
                    <input type="email" name="email" id="email" placeholder="Email Address" onChange={formik.handleChange} className="email1"/>
                </div>
                {formik.errors.email ? <div style={{color:"red"}}>{formik.errors.email}</div> : null}
                <div className="email">
                    <input type="number" name="otp" id="otp" placeholder="Enter OTP" onChange={formik.handleChange} className="email1"/>
                </div>
                {formik.errors.otp ? <div style={{color:"red"}}>{formik.errors.otp}</div> : null}
                <div className="email">
                    <input type="password" name="password" id="password" placeholder="Enter Password" onChange={formik.handleChange} className="email1"/>
                    { passwordType==="password"?  <img onClick={togglePassword} src={process.env.PUBLIC_URL+"/img/Group149.png"} alt="" className="hide" /> : <img onClick={togglePassword} src={process.env.PUBLIC_URL+"/img/Group150.png"} alt="" className="hide" />}
                </div>
                <PasswordStrengthBar password={formik.values.password} />
               
                {formik.errors.password ? <div style={{color:"red"}}>{formik.errors.password}</div> : null}
                <div className="email">
                    <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" onChange={formik.handleChange} className="email1"/>
                </div>
                {formik.errors.confirm_password ? <div style={{color:"red"}}>{formik.errors.confirm_password}</div> : null}
                
                <div className="">                  
                    <button className="btn-trans" type="submit"> Submit</button>
                </div>
              
            </div>
            </form>
    </div>
  </div>
    </>

  );

}