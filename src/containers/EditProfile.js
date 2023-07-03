import Header from '../components/AfterLogin';
import Cookies from "js-cookie";
import { useFormik } from 'formik';
import swal from 'sweetalert2';
import { useState } from 'react';


async function update_profile(data) {
  const body = new FormData();
  body.append("banner", data.banner);
  body.append("profile_pic", data.profile_pic);
  body.append("firstname", data.firstname);
  body.append("lastname",data.lastname);
  
  body.append("id",data.id);
        return fetch(process.env.REACT_APP_API_URL+'users/update', {
          method: 'POST',
          body
        })
          .then(data => data.json()
          )
       }


function Profile() {
  console.log(Cookies.get());
  const id = Cookies.get('id');  
  let myprofile=Cookies.get('profile_pic');
  let oldbanner=Cookies.get('banner');
  let firstname=Cookies.get('firstname');
  let lastname=Cookies.get('lastname');
  if(myprofile === undefined || myprofile === ''){
    myprofile = process.env.PUBLIC_URL+"/img/updateProfileicon.png";
  }else{
    myprofile = process.env.REACT_APP_UPLOAD_PATH+''+myprofile;
  }

  if(oldbanner === undefined || oldbanner === ''){
    oldbanner = "#E7EDF6";
  }else{
    oldbanner = process.env.REACT_APP_UPLOAD_PATH+''+oldbanner;
  }

  const [banner, setBanner] = useState(null)
  const [createObjectURL, setCreateObjectURL] = useState(oldbanner);
  const [profile_pic, setProfile] = useState(null)
  const [createPObjectURL, setCreatePObjectURL] = useState(myprofile)
  
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setBanner(i);
      setCreateObjectURL(URL.createObjectURL(i));
      
    }
  };

  const uploadToPClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setProfile(i);
      setCreatePObjectURL(URL.createObjectURL(i));
     
    }
  };
  
 const formik = useFormik({
      initialValues: {
        firstname:firstname,
        lastname:lastname,
      },
                validate() {
                  const errors = {};
                  if (formik.touched.firstname && !formik.values.firstname) {
                        errors.firstname = "Firstname is required";
                      } 
                  // Add the touched to avoid the validator validating all fields at once      
                if (formik.touched.lastname && !formik.values.lastname) {
                   errors.lastname = 'Lastname is Required';
                }
                
                if (formik.touched.profile_pic && !formik.values.profile_pic) {
                      errors.profile_pic = 'Please select Profile Pic';
                }
                if (formik.touched.banner && !formik.values.banner) {
                errors.banner = 'Please select Banner';
                }
                  
                  return errors;
                },
                onSubmit: async values => {
                  var firstname = values.firstname;
                  var lastname = values.lastname;   
                  
                  const result = await update_profile({
                        firstname,
                        lastname,
                        id,
                        banner,
                        profile_pic

                  });
                  console.log(result);
                  if ('isSuccess' in result && result['isSuccess'] === true  ) {      
                    //     swal.fire("Success", result.message, "success", {
                    //   buttons: false,
                    //   timer: 2000,
                    // })
                                  
                     let data = result['result'];
                      Cookies.set('firstname',data['firstname']);
                      Cookies.set('lastname',data['lastname']);
                      if(data['banner']!=='' || data['banner']!==undefined){
                         Cookies.set('banner',data['banner'])
                      }
                      if(data['profile_pic']!=='' || data['profile_pic']!==undefined){
                        Cookies.set('profile_pic',data['profile_pic'])
                     }
      
                      window.location.href = "/user/step2";
                   
                 
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
  <div className="first-phase">
  <input type="file" id="file"  onChange={uploadToPClient}  name='profile_pic' style={{display:"none"}}/>
  <input type="file" id="banner"  onChange={uploadToClient}  name='banner' style={{display:"none"}}/>
      <label for="banner">
        <div className="second-phase" style={{ "backgroundImage"  : 'url(' + createObjectURL + ')'  }} >
        
                <div className="size">
                <p className="sixe-banner">Banner size 615x150 pixels</p>
                </div>
            
                <div className="peragraph">
                        <p id="span-banner"> Upload Banner</p>
                </div>
              
                </div>
         </label>
                <label for="file">
                <div className="onlyfonts">
                        {/* <i id="font-id" class="fa fa-user" aria-hidden="true"></i> */}
                        <img
                                id="font-id"
                                src={createPObjectURL}
                                alt="Description"
                                
                        />
                        <p id="font-p">Upload Profile Picture</p>
                </div>
                </label>
                
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
  <div className="infos">
    <div className="info">
      <p> Personal information </p>
    </div>
    <div className="forms">
    {formik.errors.firstname ? <div style={{color:"red"}}>{formik.errors.firstname}</div> : null}
      <input id="first-form" name="firstname" onChange={formik.handleChange} value={formik.values.firstname} type="text" placeholder="Enter First name" />
      {formik.errors.lastname ? <div style={{color:"red"}}>{formik.errors.lastname}</div> : null}
      <input id="second-form" name="lastname" onChange={formik.handleChange} value={formik.values.lastname} type="text" placeholder="Enter Last name" />
      
    </div>
  </div>
  <div className="buttonss">
    <button id="btn-1">Next</button>
  </div>
</div>
 </form>
          </>       
      
        );
      
}

export default Profile;