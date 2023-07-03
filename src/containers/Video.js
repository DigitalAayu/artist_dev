import Header from '../components/AfterLogin';
import Sidebar from '../components/Sidebar';
function Video() {
        return (  
          <>
       <Header/>  
       <link rel="stylesheet" href={process.env.PUBLIC_URL+"/video.css"} />
       <Sidebar/> 

  {/*Main layout*/}
  <main style={{ marginTop: 75, marginLeft: 58 }}>
  <nav>
    <div
      className="nav nav-tabs"
      id="nav-tab"
      role="tablist"
      style={{ background: "none" }}
    >
      <button
        className="nav-link active"
        id="nav-home-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-home"
        type="button"
        role="tab"
        aria-controls="nav-home"
        aria-selected="true"
      >
        Explore Videos
      </button>{" "}
      <button
        className="nav-link"
        id="nav-profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-profile"
        type="button"
        role="tab"
        aria-controls="nav-profile"
        aria-selected="false"
      >
        My Videos
      </button>
    </div>
  </nav>
  <div className="tab-content" id="nav-tabContent">
    {/* first tab start here */}
    <div
      className="tab-pane fade show active"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div className="row">
        <div className="col-md-4 col-sm-6 offset-md-4 offset-sm-2">
          <div className="input-group mt-4 w-100">
            <input
              style={{ height: 36, marginTop: 60 }}
              type="search"
              className="form-control rounded"
              placeholder="What are you looking?"
              aria-label="Search"
            />{" "}
            <button type="button" className="btn btn-primary btn-class">
              search
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="btn" style={{ alignItems: "start" }}>
        <button className="button button1">Trending</button>{" "}
        <button className="button button2">Music</button>{" "}
        <button className="button button3">Artist</button>{" "}
        <button className="button button4">Mural Art</button>{" "}
        <button className="button button5">Tutorials</button>{" "}
        <button className="button button5">Development</button>{" "}
        <button className="button button5">Lorem</button>{" "}
        <button className="button button5">Ipsum</button>
      </div>
      <h1>Recent Uploaded</h1>
      <br />
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="videoprofile">
              <img src={process.env.PUBLIC_URL+"/images/videoimg.png"} alt="Snow" />{" "}
              <button className="btn" type="submit" value="image">
                <img
                  src={process.env.PUBLIC_URL+"/images/play.png"}
                  style={{ height: 22, width: 22 }}
                  alt="play"
                />
              </button>
            </div>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textAlign: "left", color: "#0C0C0C" }}
              >
                Video title
              </h5>
              <p
                className="card-text"
                style={{ background: "none", textAlign: "left" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <img
                src={process.env.PUBLIC_URL+"/images/videoprofile.png"}
                className="videoprofile-img"
                style={{ float: "left" }}
                alt="videoprofile"
              />
              <h5 style={{ textAlign: "left", color: "#0C0C0C" }}>
                Martin troff
              </h5>
              <h6
                style={{ color: "#0C0C0C", marginLeft: "-200px", fontSize: 12 }}
              >
                Designer
              </h6>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="videoprofile">
              <img src={process.env.PUBLIC_URL+"/images/videoimg.png"} alt="Snow" />{" "}
              <button className="btn" type="submit" value="image">
                <img
                  src={process.env.PUBLIC_URL+"/images/play.png"}
                  style={{ height: 22, width: 22 }}
                  alt="play"
                />
              </button>
            </div>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textAlign: "left", color: "#0C0C0C" }}
              >
                Video title
              </h5>
              <p
                className="card-text"
                style={{ background: "none", textAlign: "left" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <img
                src={process.env.PUBLIC_URL+"/images/videoprofile.png"}
                className="videoprofile-img"
                style={{ float: "left" }}
                alt="videoprofile"
              />
              <h5 style={{ textAlign: "left", color: "#0C0C0C" }}>
                Martin troff
              </h5>
              <h6
                style={{ color: "#0C0C0C", marginLeft: "-200px", fontSize: 12 }}
              >
                Designer
              </h6>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="videoprofile">
              <img src={process.env.PUBLIC_URL+"/images/videoimg.png"} alt="Snow" />{" "}
              <button className="btn" type="submit" value="image">
                <img
                  src={process.env.PUBLIC_URL+"/images/play.png"}
                  style={{ height: 22, width: 22 }}
                  alt="play"
                />
              </button>
            </div>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textAlign: "left", color: "#0C0C0C" }}
              >
                Video title
              </h5>
              <p
                className="card-text"
                style={{ background: "none", textAlign: "left" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <img
                src={process.env.PUBLIC_URL+"/images/videoprofile.png"}
                className="videoprofile-img"
                style={{ float: "left" }}
                alt="videoprofile"
              />
              <h5 style={{ textAlign: "left", color: "#0C0C0C" }}>
                Martin troff
              </h5>
              <h6
                style={{ color: "#0C0C0C", marginLeft: "-200px", fontSize: 12 }}
              >
                Designer
              </h6>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h1>Recommended for you</h1>
      <br />
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="videoprofile">
              <img src={process.env.PUBLIC_URL+"/images/videoimg.png"} alt="Snow" />{" "}
              <button className="btn" type="submit" value="image">
                <img
                  src={process.env.PUBLIC_URL+"/images/play.png"}
                  style={{ height: 22, width: 22 }}
                  alt="play"
                />
              </button>
            </div>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textAlign: "left", color: "#0C0C0C" }}
              >
                Video title
              </h5>
              <p
                className="card-text"
                style={{ background: "none", textAlign: "left" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <img
                src={process.env.PUBLIC_URL+"/images/videoprofile.png"}
                className="videoprofile-img"
                style={{ float: "left" }}
                alt="videoprofile"
              />
              <h5 style={{ textAlign: "left", color: "#0C0C0C" }}>
                Martin troff
              </h5>
              <h6
                style={{ color: "#0C0C0C", marginLeft: "-200px", fontSize: 12 }}
              >
                Designer
              </h6>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="videoprofile">
              <img src={process.env.PUBLIC_URL+"/images/videoimg.png"} alt="Snow" />{" "}
              <button className="btn" type="submit" value="image">
                <img
                  src={process.env.PUBLIC_URL+"/images/play.png"}
                  style={{ height: 22, width: 22 }}
                  alt="play"
                />
              </button>
            </div>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textAlign: "left", color: "#0C0C0C" }}
              >
                Video title
              </h5>
              <p
                className="card-text"
                style={{ background: "none", textAlign: "left" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <img
                src={process.env.PUBLIC_URL+"/images/videoprofile.png"}
                className="videoprofile-img"
                style={{ float: "left" }}
                alt="videoprofile"
              />
              <h5 style={{ textAlign: "left", color: "#0C0C0C" }}>
                Martin troff
              </h5>
              <h6
                style={{ color: "#0C0C0C", marginLeft: "-200px", fontSize: 12 }}
              >
                Designer
              </h6>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="videoprofile">
              <img src={process.env.PUBLIC_URL+"/images/videoimg.png"} alt="Snow" />{" "}
              <button className="btn" type="submit" value="image">
                <img
                  src={process.env.PUBLIC_URL+"/images/play.png"}
                  style={{ height: 22, width: 22 }}
                  alt="play"
                />
              </button>
            </div>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textAlign: "left", color: "#0C0C0C" }}
              >
                Video title
              </h5>
              <p
                className="card-text"
                style={{ background: "none", textAlign: "left" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <img
                src={process.env.PUBLIC_URL+"/images/videoprofile.png"}
                className="videoprofile-img"
                style={{ float: "left" }}
                alt="videoprofile"
              />
              <h5 style={{ textAlign: "left", color: "#0C0C0C" }}>
                Martin troff
              </h5>
              <h6
                style={{ color: "#0C0C0C", marginLeft: "-200px", fontSize: 12 }}
              >
                Designer
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* 1st end here */}
    <div
      className="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <div
          className="upload-btn-wrapper"
          style={{
            backgroundColor: "white",
            width: 300,
            height: 85,
            textAlign: "center",
            paddingTop: 18
          }}
        >
          <img
            src={process.env.PUBLIC_URL+"/images/videoprofile.png"}
            style={{ width: 45, height: 45 }}
            alt="videoprofile"
          />{" "}
          <button className="uploadbtn" style={{ marginLeft: 15 }}>
            Upload new video
          </button>{" "}
          <input type="file" name="myfile" />
        </div>
      </div>
      <h1>Recent Video</h1>
      <br />
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="videoprofile">
              <img src={process.env.PUBLIC_URL+"/images/videoimg.png"} alt="Snow" />{" "}
              <button className="btn" type="submit" value="image">
                <img
                  src={process.env.PUBLIC_URL+"/images/play.png"}
                  style={{ height: 22, width: 22 }}
                  alt="play"
                />
              </button>
            </div>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textAlign: "left", color: "#0C0C0C" }}
              >
                Video title
              </h5>
              <p
                className="card-text"
                style={{ background: "none", textAlign: "left" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <img
                src={process.env.PUBLIC_URL+"/images/videoprofile.png"}
                className="videoprofile-img"
                style={{ float: "left" }}
                alt="videoprofile"
              />
              <h5 style={{ textAlign: "left", color: "#0C0C0C" }}>
                Martin troff
              </h5>
              <h6
                style={{ color: "#0C0C0C", marginLeft: "-200px", fontSize: 12 }}
              >
                Designer
              </h6>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="videoprofile">
              <img src={process.env.PUBLIC_URL+"/images/videoimg.png"} alt="Snow" />{" "}
              <button className="btn" type="submit" value="image">
                <img
                  src={process.env.PUBLIC_URL+"/images/play.png"}
                  style={{ height: 22, width: 22 }}
                  alt="play"
                />
              </button>
            </div>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textAlign: "left", color: "#0C0C0C" }}
              >
                Video title
              </h5>
              <p
                className="card-text"
                style={{ background: "none", textAlign: "left" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <img
                src={process.env.PUBLIC_URL+"/images/videoprofile.png"}
                className="videoprofile-img"
                style={{ float: "left" }}
                alt="videoprofile"
              />
              <h5 style={{ textAlign: "left", color: "#0C0C0C" }}>
                Martin troff
              </h5>
              <h6
                style={{ color: "#0C0C0C", marginLeft: "-200px", fontSize: 12 }}
              >
                Designer
              </h6>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="videoprofile">
              <img src={process.env.PUBLIC_URL+"/images/videoimg.png"} alt="Snow" />{" "}
              <button className="btn" type="submit" value="image">
                <img
                  src={process.env.PUBLIC_URL+"/images/play.png"}
                  style={{ height: 22, width: 22 }}
                  alt="play"
                />
              </button>
            </div>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textAlign: "left", color: "#0C0C0C" }}
              >
                Video title
              </h5>
              <p
                className="card-text"
                style={{ background: "none", textAlign: "left" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <img
                src={process.env.PUBLIC_URL+"/images/videoprofile.png"}
                className="videoprofile-img"
                style={{ float: "left" }}
                alt="videoprofile"
              />
              <h5 style={{ textAlign: "left", color: "#0C0C0C" }}>
                Martin troff
              </h5>
              <h6
                style={{ color: "#0C0C0C", marginLeft: "-200px", fontSize: 12 }}
              >
                Designer
              </h6>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="videoprofile">
              <img src={process.env.PUBLIC_URL+"/images/videoimg.png"} alt="Snow" />{" "}
              <button className="btn" type="submit" value="image">
                <img
                  src={process.env.PUBLIC_URL+"/images/play.png"}
                  style={{ height: 22, width: 22 }}
                  alt="play"
                />
              </button>
            </div>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textAlign: "left", color: "#0C0C0C" }}
              >
                Video title
              </h5>
              <p
                className="card-text"
                style={{ background: "none", textAlign: "left" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <img
                src={process.env.PUBLIC_URL+"/images/videoprofile.png"}
                className="videoprofile-img"
                style={{ float: "left" }}
                alt="videoprofile"
              />
              <h5 style={{ textAlign: "left", color: "#0C0C0C" }}>
                Martin troff
              </h5>
              <h6
                style={{ color: "#0C0C0C", marginLeft: "-200px", fontSize: 12 }}
              >
                Designer
              </h6>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="videoprofile">
              <img src={process.env.PUBLIC_URL+"/images/videoimg.png"} alt="Snow" />{" "}
              <button className="btn" type="submit" value="image">
                <img
                  src={process.env.PUBLIC_URL+"/images/play.png"}
                  style={{ height: 22, width: 22 }}
                  alt="play"
                />
              </button>
            </div>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textAlign: "left", color: "#0C0C0C" }}
              >
                Video title
              </h5>
              <p
                className="card-text"
                style={{ background: "none", textAlign: "left" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <img
                src={process.env.PUBLIC_URL+"/images/videoprofile.png"}
                className="videoprofile-img"
                style={{ float: "left" }}
                alt="videoprofile"
              />
              <h5 style={{ textAlign: "left", color: "#0C0C0C" }}>
                Martin troff
              </h5>
              <h6
                style={{ color: "#0C0C0C", marginLeft: "-200px", fontSize: 12 }}
              >
                Designer
              </h6>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="videoprofile">
              <img src={process.env.PUBLIC_URL+"/images/videoimg.png"} alt="Snow" />{" "}
              <button className="btn" type="submit" value="image">
                <img
                  src={process.env.PUBLIC_URL+"/images/play.png"}
                  style={{ height: 22, width: 22 }}
                  alt="play"
                />
              </button>
            </div>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textAlign: "left", color: "#0C0C0C" }}
              >
                Video title
              </h5>
              <p
                className="card-text"
                style={{ background: "none", textAlign: "left" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <img
                src={process.env.PUBLIC_URL+"/images/videoprofile.png"}
                className="videoprofile-img"
                style={{ float: "left" }}
                alt="videoprofile"
              />
              <h5 style={{ textAlign: "left", color: "#0C0C0C" }}>
                Martin troff
              </h5>
              <h6
                style={{ color: "#0C0C0C", marginLeft: "-200px", fontSize: 12 }}
              >
                Designer
              </h6>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="videoprofile">
              <img src={process.env.PUBLIC_URL+"/images/videoimg.png"} alt="Snow" />{" "}
              <button className="btn" type="submit" value="image">
                <img
                  src={process.env.PUBLIC_URL+"/images/play.png"}
                  style={{ height: 22, width: 22 }}
                  alt="play"
                />
              </button>
            </div>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textAlign: "left", color: "#0C0C0C" }}
              >
                Video title
              </h5>
              <p
                className="card-text"
                style={{ background: "none", textAlign: "left" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <img
                src={process.env.PUBLIC_URL+"/images/videoprofile.png"}
                className="videoprofile-img"
                style={{ float: "left" }}
                alt="videoprofile"
              />
              <h5 style={{ textAlign: "left", color: "#0C0C0C" }}>
                Martin troff
              </h5>
              <h6
                style={{ color: "#0C0C0C", marginLeft: "-200px", fontSize: 12 }}
              >
                Designer
              </h6>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="videoprofile">
              <img src={process.env.PUBLIC_URL+"/images/videoimg.png"} alt="Snow" />{" "}
              <button className="btn" type="submit" value="image">
                <img
                  src={process.env.PUBLIC_URL+"/images/play.png"}
                  style={{ height: 22, width: 22 }}
                  alt="play"
                />
              </button>
            </div>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textAlign: "left", color: "#0C0C0C" }}
              >
                Video title
              </h5>
              <p
                className="card-text"
                style={{ background: "none", textAlign: "left" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <img
                src={process.env.PUBLIC_URL+"/images/videoprofile.png"}
                className="videoprofile-img"
                style={{ float: "left" }}
                alt="videoprofile"
              />
              <h5 style={{ textAlign: "left", color: "#0C0C0C" }}>
                Martin troff
              </h5>
              <h6
                style={{ color: "#0C0C0C", marginLeft: "-200px", fontSize: 12 }}
              >
                Designer
              </h6>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="videoprofile">
              <img src={process.env.PUBLIC_URL+"/images/videoimg.png"} alt="Snow" />{" "}
              <button className="btn" type="submit" value="image">
                <img
                  src={process.env.PUBLIC_URL+"/images/play.png"}
                  style={{ height: 22, width: 22 }}
                  alt="play"
                />
              </button>
            </div>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textAlign: "left", color: "#0C0C0C" }}
              >
                Video title
              </h5>
              <p
                className="card-text"
                style={{ background: "none", textAlign: "left" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <img
                src={process.env.PUBLIC_URL+"/images/videoprofile.png"}
                className="videoprofile-img"
                style={{ float: "left" }}
                alt="videoprofile"
              />
              <h5 style={{ textAlign: "left", color: "#0C0C0C" }}>
                Martin troff
              </h5>
              <h6
                style={{ color: "#0C0C0C", marginLeft: "-200px", fontSize: 12 }}
              >
                Designer
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>



          </>       
      
        );
      
}

export default Video;