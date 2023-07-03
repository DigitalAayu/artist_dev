import Header from '../components/AfterLogin';
import Cookies from "js-cookie";
import { useFormik } from 'formik';
import swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

async function subcategory_by_cat(data) {
        return fetch(process.env.REACT_APP_API_URL+'users/subcategories_by_cat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(data => data.json()
          )
       }

async function specific_by_subcat(data) {
return fetch(process.env.REACT_APP_API_URL+'users/specific_by_subcat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(data => data.json()
  )
  }

  async function update_step3(data) {
  return fetch(process.env.REACT_APP_API_URL+'users/update_bio', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(data => data.json()
    )
  }

       

  function Step3() {
  const id = Cookies.get('id');
  let myprofile=Cookies.get('profile_pic');
  let oldbanner=Cookies.get('banner');
  let country=Cookies.get('country');
  let discography=Cookies.get('discography');
  let address_line2=Cookies.get('address_line2');
  const [isBusy, setBusy] = useState(true)
  const [isSubBusy, setSubBusy] = useState(true)
  const [subcategories, setSubCategories] = useState([])
  let categories_list = null;
  let subcategories_list = null;
  const [isSpBusy, setSpBusy] = useState(true)
  const [specific, setSpecific] = useState([])
  let specific_list = null;

  let [category,setcat] = useState(null);
  let [subcategory,setsubcat] = useState(null);

  const  handleOnChange = async (e) =>  {
    e.preventDefault()
    const result = await subcategory_by_cat({
      category_id:e.target.value
    });
    setcat(e.target.value);
    if ('isSuccess' in result && result['isSuccess'] === true  ) {
      setSubCategories(result.data);     
      setSubBusy(false);
    }
  }


  const  subhandleOnChange = async (e) =>  {
    e.preventDefault()
    const result = await specific_by_subcat({
      subcat_id:e.target.value
    });
    setsubcat(e.target.value);
    if ('isSuccess' in result && result['isSuccess'] === true  ) {
      setSpecific(result.data);     
      setSpBusy(false);
    }
  }

  const [categories, setCategories] = useState([])
  useEffect(() => {
    setBusy(true);
  const getUsers = async () => {
    const users = await fetch(process.env.REACT_APP_API_URL+'users/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.json() )
   
    setCategories(users.data);
    //console.log(categorylist);
    setBusy(false);
  };

  getUsers();
  return () => {
    // this now gets called when the component unmounts
  };
}, []);




    if(!isBusy){
      categories_list = categories.length > 0
         && categories.map((item, i) => {
          //console.log(item);
         return (
           <option key={i+1} value={item._id}>{item.title}</option>
         )
       }, this);
         //console.log(categories_list);
       }

    if(!isSubBusy){
    subcategories_list = subcategories.length > 0
      && subcategories.map((item, i) => {
    //  console.log(item);
      return (
        <option key={i+1} value={item._id}>{item.title}</option>
      )
    }, this);
  }


  if(!isSpBusy){
    specific_list = specific.length > 0
     && specific.map((item, i) => {
      //console.log(item);
     return (
       <option key={i+1} value={item._id}>{item.title}</option>
     )
   }, this);
  }


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
                  category_id:category,
                  subcategory_id:subcategory,
                  specific_id:'',
                  discography:'',
                },
                validate() {
                  const errors = {};
                  if (formik.touched.category_id && !formik.values.category_id) {
                        errors.category_id = "Category is required";
                      } 
                  // Add the touched to avoid the validator validating all fields at once      
                if (formik.touched.subcategory_id && !formik.values.subcategory_id) {
                   errors.subcategory_id = 'Subcategory is Required';
                }

                if (formik.touched.specific_id && !formik.values.specific_id) {
                  errors.specific_id = 'Specific is Required';
               }

               if (formik.touched.discography && !formik.values.discography) {
                errors.discography = 'Discography is Required';
             }
                
                  return errors;
                },
                onSubmit: async values => {
                  var category_id = values.category_id;
                  var subcategory_id = values.subcategory_id;   
                  var specific_id = values.specific_id;   
                  var discography = values.discography;   
                  
                  const result = await update_step3({
                    category_id,
                    subcategory_id,
                    specific_id,
                    discography,
                        id,                       
                  });
                  //console.log(result);
                  if ('isSuccess' in result && result['isSuccess'] === true  ) {       
                      
                      Cookies.set('category_id',result['result']['category_id']);
                      Cookies.set('subcategory_id',result['result']['subcategory_id']);
                      Cookies.set('specific_id',result['result']['specific_id']);
                      Cookies.set('category',result['result']['category']);
                      Cookies.set('subcategory',result['result']['subcategory']);
                      Cookies.set('specific',result['result']['specific']);    
                      Cookies.set('discography',result['result']['discography']);              
                     window.location.href = "/user/step4";
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
        <li className="step-wizard-item current-item">
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
    <p> Professional information </p>
  </div>
  <div className="forms">
              <select name="category_id" onChange={(e) => handleOnChange(e)} onBlur={formik.handleChange} id="first-form">
                <option value="" disabled selected>Select Category</option>
                {isBusy?  "": (categories_list)}
              </select>
  {formik.errors.category_id ? <div style={{color:"red"}}>{formik.errors.category_id}</div> : null}
             <select name="subcategory_id" onChange={(e) => subhandleOnChange(e)} onBlur={formik.handleChange} id="second-form">
                <option value="" disabled selected>Select Subcategory</option>
                {isSubBusy?  "": (subcategories_list)}
              </select>
    {formik.errors.subcategory_id ? <div style={{color:"red"}}>{formik.errors.subcategory_id}</div> : null}
            <select name="specific_id" onChange={formik.handleChange} onBlur={formik.handleChange} id="third-form">
                <option value="" disabled selected>Select Specific</option>
               {isSpBusy? "" : (specific_list)}
              </select>
    {formik.errors.specific_id ? <div style={{color:"red"}}>{formik.errors.specific_id}</div> : null}
    <textarea id="textarea-form" defaultValue={discography} rows="5"  name="discography" placeholder='Discography' onChange={formik.handleChange}  />  
    {formik.errors.discography ? <div style={{color:"red"}}>{formik.errors.discography}</div> : null}
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

export default Step3;