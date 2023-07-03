import Header from '../components/AfterLogin';
import Cookies from "js-cookie";
import { useFormik } from 'formik';
import swal from 'sweetalert2';
import { useState } from 'react';
import { Link } from 'react-router-dom';


async function update_location(data) {
        return fetch(process.env.REACT_APP_API_URL+'users/update_location', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(data => data.json()
          )
       }

function Step2() {

  const id = Cookies.get('id');
  let myprofile=Cookies.get('profile_pic');
  let oldbanner=Cookies.get('banner');
  let country=Cookies.get('country');
  let address_line1=Cookies.get('address_line1');
  let address_line2=Cookies.get('address_line2');

  if(myprofile === undefined){
    myprofile = '';
  }else{
    myprofile = process.env.REACT_APP_UPLOAD_PATH+''+myprofile;
  }

  if(oldbanner === undefined){
    oldbanner = '';
  }else{
    oldbanner = process.env.REACT_APP_UPLOAD_PATH+''+oldbanner;
  }

  const [createObjectURL, setCreateObjectURL] = useState(oldbanner ? oldbanner :  "#E7EDF6");  
  const [createPObjectURL, setCreatePObjectURL] = useState(myprofile ? myprofile : process.env.PUBLIC_URL+"/img/updateProfileicon.png");
  
        const formik = useFormik({
                initialValues: {
                  country:country,
                  address_line1:address_line1,
                  address_line2:address_line2,
                },
                validate() {
                  const errors = {};
                  if (formik.touched.country && !formik.values.country) {
                        errors.country = "Country is required";
                      } 
                  // Add the touched to avoid the validator validating all fields at once      
                if (formik.touched.address_line1 && !formik.values.address_line1) {
                   errors.address_line1 = 'Address line 1 is Required';
                }
                
                  return errors;
                },
                onSubmit: async values => {
                  var country = values.country;
                  var address_line1 = values.address_line1;   
                  var address_line2 = values.address_line2;   
                  
                  const result = await update_location({
                    country,
                    address_line1,
                    address_line2,
                        id,
                       
                  });
                  console.log(result);
                  if ('isSuccess' in result && result['isSuccess'] === true  ) {       
                      
                      Cookies.set('country',result['result']['country']);
                      Cookies.set('address_line1',result['result']['address_line1']);
                      Cookies.set('address_line2',result['result']['address_line2']);              
                      window.location.href = "/user/step3";
                    //     swal.fire("Success", result.message, "success", {
                    //   buttons: false,
                    //   timer: 2000,
                    // })
                    // .then((value) => {     

                      
                  //  });
                 
                }else{
                  swal.fire("Failed", result.message, "error");
                }
                },
              });
        return (  
          <>
          <link rel="stylesheet" href={process.env.PUBLIC_URL+"/updateProfile.css"}></link>
       <Header/> 
       
  {/*Main layout*/}
  <form className="baseForm" onSubmit={formik.handleSubmit} noValidate>  
  <div className="first-phase2" >
  <div className="second-phase" style={{ "backgroundImage"  : 'url(' + createObjectURL + ')'  }}>
    <div className="size">
      {/* <p className="sixe-banner">Banner size 615x150 pixels</p> */}
    </div>
    <div className="peragraph">
      {/* <p id="span-banner"> Upload banner</p> */}
    </div>
    <div className="onlyfonts" style={{marginLeft:"0px"}}>
      {/* <i id="font-id" class="fa fa-user" aria-hidden="true"></i> */}
      <img
        id="font-id"
        src={createPObjectURL}
        alt="Description"
      />
      
    </div>
  </div>
  <div className="line-line">
    <section className="step-wizard">
      <ul className="step-wizard-list">
        <li className="step-wizard-item">
          <span className="progress-count">1</span>
          <span className="progress-label">Personal Info</span>
        </li>
        <li className="step-wizard-item current-item">
          <span className="progress-count">2</span>
          <span className="progress-label">Location Info</span>
        </li>
        <li className="step-wizard-item">
          <span className="progress-count">3</span>
          <span className="progress-label">Professional Info</span>
        </li>
        <li className="step-wizard-item">
          <span className="progress-count">4</span>
          <span className="progress-label">Socialmedia Links</span>
        </li>
      </ul>
    </section>
  </div>
  <br />
  <br />
  <div className="info">
    <p> Location information </p>
  </div>
  <div className="forms">
  <input id="first-form"  name="country" onChange={formik.handleChange} value={formik.values.country} style={{marginBottom:"5px"}} type="text" placeholder="Country" />
  {formik.errors.country ? <div style={{color:"red"}}>{formik.errors.country}</div> : null}
    <input id="second-form" onChange={formik.handleChange} value={formik.values.address_line1} name="address_line1" type="text" placeholder="Address Line 01" />
    {formik.errors.address_line1 ? <div style={{color:"red"}}>{formik.errors.address_line1}</div> : null}
    <input id="third-form" onChange={formik.handleChange} value={formik.values.address_line2} name="address_line2" type="text" placeholder="Address Line 02" />
    {formik.errors.address_line2 ? <div style={{color:"red"}}>{formik.errors.address_line2}</div> : null}
  </div>
  <div className="buttonss2">
  <button id="btn-3"><Link style={{textDecoration:"none",color:"white"}} to="user/editprofile">Previous</Link></button>
    <button type='submit' id="btn-3">Next</button>
  </div>
</div>

 </form>
          </>       
      
        );
      
}

export default Step2;