import Cookies from 'js-cookie';
import Header from '../components/AfterLogin';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
function Profile() {

    const id = Cookies.get('id');
  let myprofile=Cookies.get('profile_pic');
  let oldbanner=Cookies.get('banner');
  let firstname = Cookies.get('firstname');
  let lastname = Cookies.get('lastname');
  let country=Cookies.get('country');
  let address_line1=Cookies.get('address_line1');
  let address_line2=Cookies.get('address_line2');
  let discography=Cookies.get('discography');
  let category = Cookies.get('category');
  let subcategory = Cookies.get('subcategory');
  let specific = Cookies.get('specific');
  let instagram = Cookies.get('instagram_link');
  let youtube = Cookies.get('youtube_link');
  let spotify = Cookies.get('spotify_link');
    if(firstname ==='' || specific === undefined || specific===''){
        window.location.href = "/user/editprofile";
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



        return (  
          <>
       <Header/> 
       <link rel="stylesheet" href={process.env.PUBLIC_URL+"updateProfile.css"}></link>
       <Sidebar/>      
  {/*Main layout*/}
                <main style={{ marginTop: 85 }}>
                {/* profile and people section */}
                <div className="container">
                    <div className="row">
                    {/* ******************profile part************************* */}
                    <div className="col-xl-6 offset-xl-1 bg-white rounded shadow me-5 profile-part mt-3">
                        <div className="row" style={{ "backgroundImage"  : 'url(' + createObjectURL + ')'  }}>
                        <div
                            className="col bg-black rounded-top"
                            style={{ height: 200 }}
                        ></div>
                        </div>
                        <div className="row profile-part2">
                        <div className="col-3">
                            <img
                            className="img-fluid rounded border border-white"
                            src={createPObjectURL}
                            alt=""
                            />
                        </div>
                        <div className="col-4 mt-3">
                            <h4 className="my-2 mt-4">{firstname} {lastname}</h4>
                            <a className="text-primary my-2" href="">
                            {category}
                            </a>
                            <p className="my-2 mt-0">{address_line1} {address_line2} , {country}</p>
                        </div>
                        <div className="col-md-3 col-4 offset-md-2 mt-5">
                            <a href="" className="text-black text-decoration-none">
                            <i className="bi bi-pencil-square" />
                            <span>Edit profile</span>
                            </a>
                        </div>
                        </div>
                        <div className="row m-2">
                        <div className="col-3">
                            <h6>Category</h6>
                            <p>{category}</p>
                        </div>
                        <div className="col-md-3 col-5">
                            <h6>Sub-Category</h6>
                            <p>{subcategory}</p>
                        </div>
                        <div className="col-md-3 col-4">
                            <h6>Specific</h6>
                            <p>{specific}</p>
                        </div>
                        </div>
                        <div className="row m-2">
                        <div className="col">
                            <h6>Discography</h6>
                            <p>
                           {discography}
                            </p>
                        </div>
                        </div>
                        <div className="row m-2 pb-1">
                        <div className="col">
                            <a href={spotify}>
                            <img
                                className="img-fluid p-1"
                                src={process.env.PUBLIC_URL+"/images/spot-icon.png"}
                                alt=""
                            />
                            </a>
                            <a href={instagram}>
                            <img
                                className="img-fluid p-1"
                                src={process.env.PUBLIC_URL+"/images/insta-icon.png"}
                                alt=""
                            />
                            </a>
                            <a href={youtube}>
                            <img
                                className="img-fluid p-1"
                                src={process.env.PUBLIC_URL+"/images/youtube-icon.png"}
                                alt=""
                            />
                            </a>
                            {/* <a href="#">
                            <img
                                className="img-fluid p-1"
                                src={process.env.PUBLIC_URL+"/images/music-icon.png"}
                                alt=""
                            />
                            </a> */}
                        </div>
                        </div>
                    </div>
                    {/* ***********Active Peoples Section******** */}
                    <div className="col-xl-3 col-10 offset-xl-1 offset-1 position-sticky  active-block">
                        <div className="row bg-white shadow py-2 mt-3 rounded">
                        <p className="text-muted m-2">Active Peoples</p>
                        <div className="d-flex  px-3">
                            <div className="mr-2">
                            <a href="#!" className="text-dark">
                                <img src={process.env.PUBLIC_URL+"/images/user1.jpg"} alt="User" className="author-img" />
                            </a>
                            </div>
                            <div>
                            <h6 className="mb-0 mt-1">
                                <a href="#!" className="text-dark text-decoration-none">
                                Jaylon Lipshutz
                                </a>
                            </h6>
                            <p className="text-muted mb-0">Musician</p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="d-flex px-3">
                            <div className="mr-2">
                            <a href="#!" className="text-dark">
                                <img
                                src={process.env.PUBLIC_URL+"/images/user-2.png"}
                                alt="User"
                                className="author-img"
                                />
                            </a>
                            </div>
                            <div>
                            <h6 className="mb-0 mt-1">
                                <a href="#!" className="text-dark text-decoration-none">
                                Miracle Rhiel
                                </a>
                            </h6>
                            <p className="text-muted mb-0">Musician</p>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="d-flex px-3">
                            <div className="mr-2">
                            <a href="#!" className="text-dark">
                                <img
                                src={process.env.PUBLIC_URL+"/images/user-3.png"}
                                alt="User"
                                className="author-img"
                                />
                            </a>
                            </div>
                            <div>
                            <h6 className="mb-0 mt-1">
                                <a href="#!" className="text-dark text-decoration-none">
                                Martin Torff
                                </a>
                            </h6>
                            <p className="text-muted mb-0">Musician</p>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className="d-flex px-3">
                            <div className="mr-2">
                            <a href="#!" className="text-dark">
                                <img
                                src={process.env.PUBLIC_URL+"/images/user-4.png"}
                                alt="User"
                                className="author-img"
                                />
                            </a>
                            </div>
                            <div>
                            <h6 className="mb-0 mt-1">
                                <a href="#!" className="text-dark text-decoration-none">
                                Abram Dorwart
                                </a>
                            </h6>
                            <p className="text-muted mb-0">Musician</p>
                            </div>
                        </div>
                        {/* 5 */}
                        <div className="d-flex px-3">
                            <div className="mr-2">
                            <a href="#!" className="text-dark">
                                <img
                                src={process.env.PUBLIC_URL+"/images/user-5.png"}
                                alt="User"
                                className="author-img"
                                />
                            </a>
                            </div>
                            <div>
                            <h6 className="mb-0 mt-1">
                                <a href="#!" className="text-dark text-decoration-none">
                                Skylar Herwitz
                                </a>
                            </h6>
                            <p className="text-muted mb-0">Musician</p>
                            </div>
                        </div>
                        {/* 6 */}
                        <div className="d-flex px-3">
                            <div className="mr-2">
                            <a href="#!" className="text-dark">
                                <img
                                src={process.env.PUBLIC_URL+"/images/user-6.png"}
                                alt="User"
                                className="author-img"
                                />
                            </a>
                            </div>
                            <div>
                            <h6 className="mb-0 mt-1">
                                <a href="#!" className="text-dark text-decoration-none">
                                Kaylynn Torff
                                </a>
                            </h6>
                            <p className="text-muted mb-0">Musician</p>
                            </div>
                        </div>
                        {/* 7 */}
                        <div className="d-flex px-3">
                            <div className="mr-2">
                            <a href="#!" className="text-dark">
                                <img
                                src={process.env.PUBLIC_URL+"/images/user-7.png"}
                                alt="User"
                                className="author-img"
                                />
                            </a>
                            </div>
                            <div>
                            <h6 className="mb-0 mt-1">
                                <a href="#!" className="text-dark text-decoration-none">
                                Sam moore
                                </a>
                            </h6>
                            <p className="text-muted mb-0">Musician</p>
                            </div>
                        </div>
                        {/* 8 */}
                        <div className="d-flex px-3">
                            <div className="mr-2">
                            <a href="#!" className="text-dark">
                                <img src={process.env.PUBLIC_URL+"/images/user2.jpg"} alt="User" className="author-img" />
                            </a>
                            </div>
                            <div>
                            <h6 className="mb-0 mt-1">
                                <a href="#!" className="text-dark text-decoration-none">
                                Makenna D.
                                </a>
                            </h6>
                            <p className="text-muted mb-0">Musician</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* ***********Active Peoples Section ends******** */}
               
               
                </main>



          </>       
      
        );
      
}

export default Profile;