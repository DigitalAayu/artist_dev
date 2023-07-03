import { useState } from 'react';
import Header from '../components/AfterLogin';
import Sidebar from '../components/Sidebar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import EmojiPicker from 'emoji-picker-react';

function Feed() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [uploadShow, setUploadShow] = useState(false);
  const handleUploadClose = () =>  setUploadShow(false);
  const handleUploadShow = () =>{ 
    setUploadShow(true);
    setShow(false);
  }

    const [emojiPicker, setChosenEmoji] = useState(null);
    const [textar, setText] = useState('');
    const [wordLimit, setWordLimit] = useState(0);

    const handleTextChange = (event) => {
      if(event.target.value.length <= 1000){
      setText(event.target.value);
      setWordLimit(event.target.value.length);
      }
    };

    const setEmojiPicker = (event, emojiObject) => {
      if(emojiPicker){
        setChosenEmoji(false);
      }else{
        setChosenEmoji(true);
      }    
    };

    const setInput = (emojiObject,event) => {
      let inve = textar + emojiObject.emoji;
      if(inve.length <= 1000){
      setText(inve);
      setWordLimit(inve.length);
      }
    };


    function callStep2(){

    }
  
        return (  
          <>
       <Header/>      
       <Sidebar/> 
  {/*Main layout*/}
  <main style={{ marginTop: 58 }}>
    <div className="container pt-4">
      <div className="row">
        {/* ***************Feed Posts******************* */}
        <div className="col-xl-9 ">
          <section className="main-content">
            <div className="container px-4">
              <div className="row">
                <div className="col-12">
                  <div className="p-1 post-block row">
                    <div className="col-1">
                      <img
                        src={process.env.PUBLIC_URL+"/images/user2.jpg"}
                        alt="Artisant"
                        className="author-img"
                      />
                    </div>
                    <div className="col-md-8 col-6 offset-md-0 offset-sm-1 ">
                      <input
                        type="text"
                        className="form-control mt-2 form1"
                        aria-label="Default"
                        placeholder="Tell your network about your thought"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                    <div className="col-md-3 col-2 mt-2 d-flex justify-content-between">
                      {/* <button class="btn btn-link text-decoration-none text-muted"
                                          data-bs-toggle="modal" onclick="openPopup()">
                                          <i class="bi bi-camera"></i> Photo</button> */}
                      <button type="submit" className="btn"  onClick={handleShow}>
                        {" "}
                        <i className="bi bi-camera" /> Photo
                      </button>
                      <div className="popup" id="popup">
                        <span>×</span>
                        <div>
                          <h3>Create a post</h3>
                        </div>
                        <input
                          type="file"
                          id="file"
                          accept="image/*"
                          hidden=""
                        />
                        <div>
                          
                        </div>
                      </div>
                      <button className="btn btn-link text-decoration-none text-muted">
                        {" "}
                        <i className="bi bi-pie-chart" /> Poll
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="post-block">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex mb-3">
                        <div className="mr-2">
                          <a href="#!" className="text-dark">
                            <img
                              src={process.env.PUBLIC_URL+"/images/user1.jpg"}
                              alt="User"
                              className="author-img"
                            />
                          </a>
                        </div>
                        <div>
                          <h5 className="mb-0">
                            <a
                              href="#!"
                              className="text-dark text-decoration-none"
                            >
                              Jaylon Lipshutz
                            </a>
                          </h5>
                          <p className="text-muted mb-0">Musician</p>
                          <p className="mb-0 text-muted">5m ago</p>
                        </div>
                      </div>
                      <div className="post-block__user-options">
                        <a
                          href="#!"
                          id="triggerId"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v" aria-hidden="true" />
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="triggerId"
                        >
                          <a className="dropdown-item text-dark" href="#!">
                            <i className="fa fa-pencil mr-1" />
                            Edit
                          </a>
                          <a className="dropdown-item text-danger" href="#!">
                            <i className="fa fa-trash mr-1" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="post-block__content mb-2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione laboriosam non atque, porro cupiditate
                        commodi? Provident culpa vel sit enim!
                      </p>
                      <img src={process.env.PUBLIC_URL+"/images/feed-post-1.png"} alt="Content img" />
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex">
                          <a href="#!" className=" text-muted mr-2">
                            <span>
                              <i className="fa fa-heart" />
                            </span>
                          </a>
                          <a
                            href="#!"
                            className="text-dark mr-2 text-decoration-none"
                          >
                            <span>Comment</span>
                          </a>
                        </div>
                        <a href="#!" className="text-dark text-decoration-none">
                          <span>Share</span>
                        </a>
                      </div>
                      <p className="mb-0">
                        Liked by{" "}
                        <a
                          href="#!"
                          className="text-muted font-weight-bold text-decoration-none"
                        >
                          John doe
                        </a>{" "}
                        &amp;{" "}
                        <a
                          href="#!"
                          className="text-muted font-weight-bold text-decoration-none"
                        >
                          25 others
                        </a>
                      </p>
                    </div>
                    <hr />
                    <div className="post-block__comments">
                      {/* Comment Input */}
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control ms-3"
                          placeholder="Leave your comment"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-primary"
                            type="button"
                            id="button-addon2"
                          >
                            <i className="fa fa-paper-plane" />
                          </button>
                        </div>
                      </div>
                      {/* Comment content */}
                      <div className="comment-view-box mb-3">
                        <div className="d-flex mb-2">
                          <img
                            src={process.env.PUBLIC_URL+"/images/user2.jpg"}
                            alt="User img"
                            className="author-img author-img--small mr-2"
                          />
                          <div>
                            <h6 className="mb-1">
                              <a
                                href="#!"
                                className="text-dark text-decoration-none"
                              >
                                Miracle Rhiel
                              </a>
                              <small className="text-muted">1m ago</small>
                            </h6>
                            <p className="mb-1">
                              At IxDF, we offer online self-paced courses, and
                              live master classes, with industry-trusted
                              certification. It all depends on your goals lorem
                              the and expectations.
                            </p>
                            <div className="d-flex">
                              <a href="#!" className="text-dark mr-2">
                                <span>
                                  <i className="fa fa-heart-o" />
                                </span>
                              </a>
                              <a
                                href="#!"
                                className="text-dark mr-2 text-decoration-none"
                              >
                                <span>Reply</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* More Comments */}
                      <hr />
                      <a href="#!" className="text-dark text-decoration-none">
                        View More comments
                        <span className="font-weight-bold text-decoration-none">
                          (12)
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* *****2nd Post**** */}
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="post-block">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex mb-3">
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
                          <h5 className="mb-0">
                            <a
                              href="#!"
                              className="text-dark text-decoration-none"
                            >
                              Miracle Rhiel
                            </a>
                          </h5>
                          <p className="text-muted mb-0">Painter</p>
                          <p className="mb-0 text-muted">3 Hours ago</p>
                        </div>
                      </div>
                      <div className="post-block__user-options">
                        <a
                          href="#!"
                          id="triggerId"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v" aria-hidden="true" />
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="triggerId"
                        >
                          <a className="dropdown-item text-dark" href="#!">
                            <i className="fa fa-pencil mr-1" />
                            Edit
                          </a>
                          <a className="dropdown-item text-danger" href="#!">
                            <i className="fa fa-trash mr-1" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="post-block__content mb-2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione laboriosam non atque, porro cupiditate
                        commodi? Provident culpa vel sit enim!
                      </p>
                      <img src={process.env.PUBLIC_URL+"/images/feed-post-2.png"} alt="Content img" />
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex">
                          <a href="#!" className="text-danger mr-2">
                            <span>
                              <i className="fa fa-heart" />
                            </span>
                          </a>
                          <a
                            href="#!"
                            className="text-dark mr-2 text-decoration-none"
                          >
                            <span>Comment</span>
                          </a>
                        </div>
                        <a href="#!" className="text-dark text-decoration-none">
                          <span>Share</span>
                        </a>
                      </div>
                      <p className="mb-0">
                        Liked by{" "}
                        <a
                          href="#!"
                          className="text-muted font-weight-bold text-decoration-none"
                        >
                          John doe
                        </a>{" "}
                        &amp;{" "}
                        <a
                          href="#!"
                          className="text-muted font-weight-bold text-decoration-none"
                        >
                          25 others
                        </a>
                      </p>
                    </div>
                    <hr />
                    <div className="post-block__comments">
                      {/* Comment Input */}
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control ms-3"
                          placeholder="Leave your comment"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-primary"
                            type="button"
                            id="button-addon2"
                          >
                            <i className="fa fa-paper-plane" />
                          </button>
                        </div>
                      </div>
                      {/* Comment content */}
                      <div className="comment-view-box mb-3">
                        <div className="d-flex mb-2">
                          <img
                            src={process.env.PUBLIC_URL+"/images/user2.jpg"}
                            alt="User img"
                            className="author-img author-img--small mr-2"
                          />
                          <div>
                            <h6 className="mb-1">
                              <a
                                href="#!"
                                className="text-dark text-decoration-none"
                              >
                                Miracle Rhiel
                              </a>
                              <small className="text-muted">1m ago</small>
                            </h6>
                            <p className="mb-1">
                              At IxDF, we offer online self-paced courses, and
                              live master classes, with industry-trusted
                              certification. It all depends on your goals lorem
                              the and expectations.
                            </p>
                            <div className="d-flex">
                              <a href="#!" className="text-dark mr-2">
                                <span>
                                  <i className="fa fa-heart-o" />
                                </span>
                              </a>
                              <a
                                href="#!"
                                className="text-dark mr-2 text-decoration-none"
                              >
                                <span>Reply</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* More Comments */}
                      <hr />
                      <a href="#!" className="text-dark text-decoration-none">
                        View More comments
                        <span className="font-weight-bold text-decoration-none">
                          (12)
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ********3rd post***** */}
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="post-block">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex mb-3">
                        <div className="mr-2">
                          <a href="#!" className="text-dark">
                            <img
                              src={process.env.PUBLIC_URL+"/images/user1.jpg"}
                              alt="User"
                              className="author-img"
                            />
                          </a>
                        </div>
                        <div>
                          <h5 className="mb-0">
                            <a
                              href="#!"
                              className="text-dark text-decoration-none"
                            >
                              Jaylon Lipshutz
                            </a>
                          </h5>
                          <p className="text-muted mb-0">Musician</p>
                          <p className="mb-0 text-muted">5m ago</p>
                        </div>
                      </div>
                      <div className="post-block__user-options">
                        <a
                          href="#!"
                          id="triggerId"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v" aria-hidden="true" />
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="triggerId"
                        >
                          <a className="dropdown-item text-dark" href="#!">
                            <i className="fa fa-pencil mr-1" />
                            Edit
                          </a>
                          <a className="dropdown-item text-danger" href="#!">
                            <i className="fa fa-trash mr-1" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="post-block__content mb-2">
                      <p>
                        HANGING OUT ... 2 years post designing , this community
                        centre building is finally starting construction in
                        Akluj, Maharashtra, India. Within a very narrow small
                        plot , this building will house a dance studio, fitness
                        centre , performance spaces, restaurants and a rooftop
                        cafe, with each of these opening into landscaped
                        terraces.Large windows and gardens are north oriented
                        with louvered screens on the east and west to mitigate
                        heat gain and the service and circulation core on the
                        south side to reduce heat gain .
                      </p>
                      {/* <img src={process.env.PUBLIC_URL+"/images/feed-post-1.png"} alt="Content img"> */}
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex">
                          <a href="#!" className=" mr-2">
                            <span>
                              <i className="fa fa-heart" />
                            </span>
                          </a>
                          <a href="#!" className="text-dark mr-2 text-decoration-none">
                            <span>Comment</span>
                          </a>
                        </div>
                        <a href="#!" className="text-dark text-decoration-none">
                          <span>Share</span>
                        </a>
                      </div>
                      <p className="mb-0">
                        Liked by{" "}
                        <a
                          href="#!"
                          className="text-muted font-weight-bold text-decoration-none"
                        >
                          John doe
                        </a>{" "}
                        &amp;{" "}
                        <a
                          href="#!"
                          className="text-muted font-weight-bold text-decoration-none"
                        >
                          25 others
                        </a>
                      </p>
                    </div>
                    <hr />
                    <div className="post-block__comments">
                      {/* Comment Input */}
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control ms-3"
                          placeholder="Leave your comment"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-primary"
                            type="button"
                            id="button-addon2"
                          >
                            <i className="fa fa-paper-plane" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ***********Active Peoples Section******** */}
        <div className="col-xl-3 col-10 position-sticky  active-block">
          <div className="row bg-white shadow py-2 mt-2 rounded">
            <p className="text-muted m-2">Active Peoples</p>
            <div className="d-flex  px-3">
              <div className="mr-2">
                <a href="#!" className="text-dark">
                  <img
                    src={process.env.PUBLIC_URL+"/images/user1.jpg"}
                    alt="User"
                    className="author-img"
                  />
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
                  <img
                    src={process.env.PUBLIC_URL+"/images/user2.jpg"}
                    alt="User"
                    className="author-img"
                  />
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
        {/* ***********Active Peoples Section ends******** */}
      </div>
    </div>

    <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Body>          
          <div className='modal-row'>
            <Modal.Title className="post-create" >Create a Post</Modal.Title>
            <a  onClick={handleClose}><img className='modal-close' src={process.env.PUBLIC_URL+'/svg/close.svg'}></img></a>
        </div>
        {!emojiPicker ? (
          <a className='emoji' onClick={() => setEmojiPicker()} > <img src={process.env.PUBLIC_URL+'/svg/smiley.svg'} /> </a>
        ) : (
          <>
                     
          <a className='emoji' onClick={() => setEmojiPicker()} > <img src={process.env.PUBLIC_URL+'/svg/smiley.svg'} /> </a>
            <EmojiPicker
              searchDisabled="true"
              previewConfig={{ showPreview: false }}
              emojiStyle="google"              
              onEmojiClick={setInput}
              height={200}
              width="100%"
            />
          </>
        )}
        <Form.Control as="textarea"  onChange={handleTextChange} value={textar} className="style-textarea" rows={7} placeholder='Tell me about your thought'/>

        </Modal.Body>
        <div className='flex-row word-count'>
        <span>{wordLimit}</span>
        <span>/1000</span>
        </div>
        <Modal.Footer>
        <Button onClick={handleUploadShow} className="btn-grey" disabled={!textar} >
            Next
         </Button>
        </Modal.Footer>
      </Modal>

        
      <Modal show={uploadShow} onHide={handleUploadClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Body>          
          <div className='modal-row'>
            <Modal.Title className="post-create" >Create a Post</Modal.Title>
            <a  onClick={handleUploadClose}><img className='modal-close' src={process.env.PUBLIC_URL+'/svg/close.svg'}></img></a>
        </div>
       
       <div className=''>
          <img src={process.env.PUBLIC_URL + '/img/defaultupload.png'}/>
       </div>

        </Modal.Body>
        
        <Modal.Footer>
        <Button  className="btn-grey btn-transparent" disabled={!textar} >
            Skip
         </Button>
        <Button  className="btn-grey" disabled={!textar} >
            Upload
         </Button>
        </Modal.Footer>
      </Modal>



  </main>
  {/*Main layout end*/}


          </>       
      
        );
      
}

export default Feed;