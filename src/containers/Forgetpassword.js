import React from "react";
import BeforeLogin from "../components/BeforeLogin";
import { useFormik } from "formik";
import swal from "sweetalert2";
import Cookies from "js-cookie";


async function forget_password(credentials) {
    console.log(process.env.REACT_APP_API_URL);
    return fetch(process.env.REACT_APP_API_URL+'users/forget_password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json()
      )
   }

export default function Forgetpassword() {

    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

    const formik = useFormik({
        initialValues: {
          email:'',
          
        },
        validate() {
          const errors = {};
          // Add the touched to avoid the validator validating all fields at once      
          if (formik.touched.email && !formik.values.email) {
            errors.email = 'email is Required';
          }else if(!validateEmail(formik.values.email)){            
            errors.email = 'email is not valid';
          }

          
         
          return errors;
        },
        onSubmit: async values => {
          var email = values.email; 
          
          const result = await forget_password({
          email,
         
          
          });
          console.log(result);
          if (result['isSuccess']===true) {          
            swal.fire("Success", result.message, "success", {
              buttons: false,
              timer: 2000,
            })
            .then((value) => {                          
              Cookies.set('name', result['user'].username);
              Cookies.set('email', result['user'].email);
              window.location.href = "/user/resendlink";
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
        <img src={process.env.PUBLIC_URL+"/img/Artisant.png"} alt="" className="logos6"/>
        <div className="logos">
        <form className="baseForm" onSubmit={formik.handleSubmit} noValidate>                
            <div className="cards1">
                <div className="heading">
                    <h4>Forget password</h4>
                </div>
               
                <div className="para1">
                    <p>Enter your registered email address to reset <br/>
                        your password</p>
                </div>
                <div className="email">
                    <input type="email" name="email" id="email" placeholder="Email Address" onChange={formik.handleChange} className="email1"/>
                </div>
                {formik.errors.email ? <div style={{color:"red"}}>{formik.errors.email}</div> : null}
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