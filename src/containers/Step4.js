import Header from '../components/AfterLogin';
import Cookies from "js-cookie";
import { useFormik } from 'formik';
import swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
  async function update_step4(data) {
  return fetch(process.env.REACT_APP_API_URL+'users/update_social', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(data => data.json()
    )
  }

  function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  }; 

  function Step4() {
  const id = Cookies.get('id');
  let myprofile=Cookies.get('profile_pic');
  let oldbanner=Cookies.get('banner');
  let instagram=Cookies.get('instagram_link');
  let spotify=Cookies.get('spotify_link');
  let youtube=Cookies.get('youtube_link');
 
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
                    instagram_link:instagram,
                  youtube_link:youtube,
                  spotify_link:spotify,
                },
                validate() {
                  const errors = {};
                  if (formik.touched.instagram_link && !formik.values.instagram_link) {
                        errors.instagram_link = "Instagram is required";
                      }else{
                        if (formik.values.instagram_link && !isValidURL(formik.values.instagram_link) ) {
                            errors.instagram_link = "Enter valid Instagram link";                  
                        }
                      }

                     // console.log(isValidURL(formik.values.instagram_link)); 
                  // Add the touched to avoid the validator validating all fields at once      
                if (formik.values.spotify_link && !isValidURL(formik.values.spotify_link) ) {
                        errors.spotify_link = "Enter valid Spotify link";                  
                }

                if (formik.values.youtube_link && !isValidURL(formik.values.youtube_link) ) {
                    errors.youtube_link = "Enter valid Youtube link";                  
            }

               console.log(errors);
                  return errors;

                },
                onSubmit: async values => {
                  var instagram_link = values.instagram_link;
                  var spotify_link = values.spotify_link;   
                  var youtube_link = values.youtube_link;   

                  const result = await update_step4({
                    instagram_link,
                    spotify_link,
                    youtube_link,
                        id,
                       
                  });
                  //console.log(result);
                  if ('isSuccess' in result && result['isSuccess'] === true  ) {       
                      
                      Cookies.set('instagram_link',result['result']['instagram_link']);
                      Cookies.set('spotify_link',result['result']['spotify_link']);
                      Cookies.set('youtube_link',result['result']['youtube_link']);            
                      window.location.href = "/user/profile";
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
        <li className="step-wizard-item">
          <span className="progress-count">2</span>
          <span className="progress-label">Location Info</span>
        </li>
        <li className="step-wizard-item ">
          <span className="progress-count">3</span>
          <span className="progress-label">Professional Info</span>
        </li>
        <li className="step-wizard-item current-item">
          <span className="progress-count">4</span>
          <span className="progress-label">Socialmedia Links</span>
        </li>
      </ul>
    </section>
  </div>
  <br />
  <br />
  <div className="info">
    <p> Professional information </p>
  </div>
    <div className="forms">
            <div className="social-link">
                <input id="social-link-form2" defaultValue={spotify}  onChange={formik.handleChange} type="text" placeholder="Enter spotify link" name="spotify_link" />
            </div>
            {formik.errors.spotify_link ? <div style={{color:"red"}}>{formik.errors.spotify_link}</div> : null}
            <div className="social-link2">
                <input id="social-link-form3" defaultValue={instagram}  onChange={formik.handleChange} type="text" placeholder="Enter instagram link" name="instagram_link"/>
            </div>
            {formik.errors.instagram_link ? <div style={{color:"red"}}>{formik.errors.instagram_link}</div> : null}
            <div className="social-link3">
                <input id="social-link-form" defaultValue={youtube} onChange={formik.handleChange} name="youtube_link" type="text" placeholder="Enter youtube link" />
            </div>
            {formik.errors.youtube_link ? <div style={{color:"red"}}>{formik.errors.youtube_link}</div> : null}
    </div>    
  <div className="buttonss2">
  <button id="btn-3" disabled>Previous</button>
    <button type='submit' id="btn-3">Next</button>
  </div>
</div>

 </form>
          </>       
      
        );
      
}

export default Step4;