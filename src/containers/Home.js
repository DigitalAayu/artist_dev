import React from 'react'

function Home() {
  return ( <
      div >

      <
      >
      <
      meta charSet = "UTF-8" / >
      <
      meta name = "viewport"
      content = "width=device-width, initial-scale=1.0" / >
      <
      link rel = "stylesheet"
      href = "style.css" / >
      <
      title > Browser < /title> <
      link href = "bootstrap/css/bootstrap.min.css"
      rel = "stylesheet" / >
      <
      link rel = "stylesheet"
      href = "node_modules/bootstrap-icons/font/bootstrap-icons.css" /
      >
      <
      link rel = "stylesheet"
      href = "anim.css" / >
      <
      style dangerouslySetInnerHTML = {
        {
          __html: '\n      @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");\n      @import url("https://fonts.googleapis.com/css?family=Heebo:400,700|Open+Sans:400,700");\n      @import url("https://fonts.googleapis.com/css2?family=Inter&family=Sora:wght@400;500;600&display=swap");\n\n      @import url("https://fonts.googleapis.com/css2?family=Lato:wght@700;900&family=Poppins:wght@300;400;500;600;700;800&family=Rowdies&family=Sora:wght@600;700&display=swap");\n    '
        }
      }
      /> {
      /* ***Homepage**** */
    } <
    div style = {
      {
        background: "#f5f5f5"
      }
    }
  className = "main-cont" > {
      /* ****Navbar*** */
    } <
    nav className = "navbar nav navbar-expand-lg navbar-light bg-white position-fixed w-100 top-0 py-2" >
    <
    div className = "container" >
    <
    a className = "navbar-brand"
  href = "#" >
    <
    img src = "images/Artisant.png"
  alt = "Logo" / >
    <
    /a> <
  div className = "collapse navbar-collapse"
  id = "navbarNav"
  style = {
      {
        marginLeft: 223
      }
    } >
    <
    ul className = "navbar-nav mx-auto" >
    <
    li className = "nav-item"
  style = {
      {
        marginTop: 6
      }
    } >
    <
    img src = "img/home.png"
  alt = "Image Description" / >
    <
    a className = "nav-link"
  href = "#" >
    Home <
    /a> < /
  li > <
    li className = "nav-item"
  style = {
      {
        marginTop: 6
      }
    } >
    <
    img src = "img/about.png"
  alt = "Image Description" / >
    <
    a className = "nav-link"
  href = "#" >
    About <
    /a> < /
  li > <
    li className = "nav-item"
  style = {
      {
        marginTop: 6
      }
    } >
    <
    img src = "img/explore.png"
  alt = "Image Description" / >
    <
    a className = "nav-link"
  href = "#" >
    Explore <
    /a> < /
  li > <
    /ul> <
  ul className = "navbar-nav ms-auto" >
    <
    li className = "nav-item" >
    <
    a className = "btn btn-outline-dark me-4"
  href = "login.html" >
    Login <
    /a> < /
  li > <
    li className = "nav-item" >
    <
    a className = "btn btn-dark"
  href = "signUp.html" >
    Sign Up <
    /a> < /
  li > <
    /ul> < /
  div > <
    /div> < /
  nav > {
      /* ****navbar ends***** */
    } <
    br / >
    <
    br / > {
      /* ******animated section***** */
    } <
    div className = "mobile_img" >
    <
    img src = "images/Frame1595.png"
  alt = "" / >
    <
    /div> <
  div className = "container_animtop"
  id = "top_animation" >
    <
    div className = "anim_img"
  style = {
      {
        textAlign: "center"
      }
    } >
    <
    div className = "text1" >
    <
    h1 className = "top" > TOP < /h1> <
  h1 className = "legal" > LEGAL < /h1> <
  h1 className = "talent" > TALENT < /h1> < /
  div > <
    img className = "singer"
  src = "images/singer.png"
  alt = "singer" / >
    <
    img className = "content"
  src = "images/content.png"
  alt = "content" / >
    <
    img className = "boy"
  src = "images/boycurl.png"
  alt = "boycurl" / >
    <
    img className = "pinkbox"
  src = "images/pinkbox.png"
  alt = "pinkbox" / >
    <
    img className = "simple_girl"
  src = "images/girlsimple.png"
  alt = "girlsimple" /
    >
    <
    img className = "curly_girl"
  src = "images/girlcurl.png"
  alt = "girlcurl" / >
    <
    img className = "artist"
  src = "images/artist.png"
  alt = "artist" / >
    <
    img className = "branding"
  src = "images/branding.png"
  alt = "branding" / >
    <
    div className = "text2" >
    <
    h1 className = "on" > ON < /h1> <
  h1 className = "demand" > DEMAND < /h1> < /
  div > <
    /div> < /
  div > {
      /* animated section end */
    } {
      /* newly added section starts here  */
    } <
    div className = "new_head" >
    <
    div className = "new_head_container" >
    <
    div className = "column new_head1" >
    <
    h2 >
    Empowering Creators < br / >
    to Showcase Unique Artistry. <
    /h2> <
  p >
    Artisant is the ultimate platform
  for creators, providing a space
  for artists and brands to showcase their unique content and grow their online presence. <
    /p> < /
  div > <
    div className = "column new_head2" >
    <
    img src = "img/homepage_image.png"
  width = {
    479
  }
  height = {
    487
  }
  alt = "Image Description" /
    >
    <
    /div> < /
  div > <
    /div> {
  /* newly added section ends here  */
} {
  /* newly added2 section starts here  */
} <
section >
  <
  div className = "container-fluid pb-4" >
  <
  div className = "row" >
  <
  div className = "col" >
  <
  h2 style = {
    {
      fontWeight: 700,
      fontFamily: '"Sora"'
    }
  }
className = "text-center p-4" >
  Featured In <
  /h2> < /
div > <
  /div> <
div className = "logos2"
style = {
    {
      width: 1000
    }
  } >
  <
  div className = "logos-slide2"
style = {
    {
      height: 36
    }
  } >
  <
  img src = "img/image14.png"
alt = "cards" / >
  <
  img src = "img/image1.png"
alt = "cards" / >
  <
  img src = "img/image14.png"
alt = "cards" / >
  <
  img src = "img/image14.png"
alt = "cards" / >
  <
  img src = "img/image15.png"
alt = "cards" / >
  <
  img src = "img/image16.png"
alt = "cards" / >
  <
  img src = "img/image16.png"
alt = "cards" / >
  <
  img src = "img/image16.png"
alt = "cards" / >
  <
  img src = "img/image16.png"
alt = "cards" / >
  <
  img src = "img/image16.png"
alt = "cards" / >
  <
  img src = "img/image16.png"
alt = "cards" / >
  <
  img src = "img/image16.png"
alt = "cards" / >
  <
  img src = "img/image17.png"
alt = "cards" / >
  <
  img src = "img/image16.png"
alt = "cards" / >
  <
  img src = "img/image17.png"
alt = "cards" / >
  <
  /div> < /
div > <
  /div> < /
section > <
  div className = "new_ratting" >
  <
  img src = "img/Group474.png"
alt = "" / >
  <
  /div> {
/* newly added2 section ends here  */
} {
  /* ***Discover Section*** */
} {
  /* ***Choose Section*** */
} <
section >
  <
  div className = "container text-white pt-5 ps-5"
style = {
    {
      background: "#0c0c0c",
      width: "100%",
      height: 820
    }
  } >
  <
  div className = "row choose_text" > {
    /* <div class="col-1"></div> */
  } <
  div className = "col-md-4 offset-md-1" >
  <
  h2 >
  Choose Your Perfect <
  br / >
  Legal < span className = "blue" > Professional < /span> < /
h2 > <
  p className = "text-style" >
  Work smarter with a deep bench of experienced, specialized legal talent to drive internal business initiatives. <
  /p> <
div className = "choose_features" >
  <
  h2 > Features < /h2> <
ul >
  <
  li > User - friendly platform
for artists and brands. < /li> <
li > Unlimited storage space
for content creation. < /li> <
li > Community - based feedback and support system. < /li> <
li >
  Secure payment system
for artists to monetize their work. <
  /li> <
li >
  Integration with social media platforms
for wider reach. <
  /li> < /
ul > <
  /div> < /
div > <
  div className = "col chose_img_div" >
  <
  img src = "images/Group91.png"
alt = "animated" / >
  <
  div className = "choose_heading" >
  <
  h2 > Benefits < /h2> <
ul >
  <
  li >
  Artists and brands can showcase their unique content on a platform dedicated to creators. <
  /li> <
li >
  Artisant offers the freedom to creators to explore their creativity and bring their ideas to life. <
  /li> <
li >
  The platform provides a space
for creators to grow and expand their reach, connecting with a wider audience. <
  /li> <
li >
  Creators can collaborate and network with other artists and brands on Artisant, fostering a sense of community. <
  /li> < /
ul > <
  /div> < /
div > <
  /div> < /
div > <
  /section> {
/* <div>
<img src="images/Choose.png" alt="Choose Section " class="img-fluid">
    </div> */
} {
  /* ***icon section**** */
} <
section className = "work_section_div" >
  <
  div className = "container_work" >
  <
  div className = "row work_contents" >
  <
  div className = "col-md-4" >
  <
  img src = "images/Group99.png"
className = "img-fluid"
alt = "Group%2099" /
  >
  <
  h2 > The World 's Best</h2> <
p >
  Work with Grammy, Oscar, < br / >
  and Emmy winners from around < br / >
  the globe <
  /p> < /
div > <
  div className = "col-md-4" >
  <
  img src = "images/Group101.png"
className = "img-fluid"
alt = "Group%20101" /
  >
  <
  h2 > Trusted Platform < /h2> <
p > Safe and secure with tens of thousands of verified reviews < /p> < /
div > <
  div className = "col-md-4" >
  <
  img src = "images/Group102.png"
className = "img-fluid"
alt = "Group%20102" /
  >
  <
  h2 > Sound Your Best < /h2> <
p >
  Radio singles, YouTube hits, and chart - topping albums, all made on SoundBetter <
  /p> < /
div > <
  /div> < /
div > <
  /section> {
/* ****review section**** */
} <
section >
  <
  div className = "container-fluid pb-4" >
  <
  div className = "row" >
  <
  div className = "col" >
  <
  h2 style = {
    {
      fontWeight: 700,
      fontFamily: '"Sora"'
    }
  }
className = "text-center p-4" >
  Endless < span className = "blue" > 5 - star < /span> Reviews < /
h2 > <
  /div> < /
div > <
  div className = "mobile_review_sec" >
  <
  img src = "images/cards.png"
alt = "" / >
  <
  /div> <
div className = "logos" >
  <
  div className = "logos-slide" >
  <
  img src = "images/cards.png"
alt = "cards" / >
  <
  img src = "images/cards.png"
alt = "cards" / >
  <
  img src = "images/cards.png"
alt = "cards" / >
  <
  img src = "images/cards.png"
alt = "cards" / >
  <
  img src = "images/cards.png"
alt = "cards" / >
  <
  /div> < /
div > <
  div className = "logos" >
  <
  div className = "logos-slide" >
  <
  img src = "images/cards.png"
alt = "cards" / >
  <
  img src = "images/cards.png"
alt = "cards" / >
  <
  img src = "images/cards.png"
alt = "cards" / >
  <
  img src = "images/cards.png"
alt = "cards" / >
  <
  img src = "images/cards.png"
alt = "cards" / >
  <
  /div> < /
div > <
  /div> < /
section > {
    /* ******how it work section****** */
  } <
  section className = "work-section p-5 shadow" >
  <
  div className = "row how_it_works" >
  <
  div className = "row col-md-10 offset-1 ps-lg-5" >
  <
  h2 className = "mb-5" >
  How < span className = "blue" > Artisant < /span> works < /
h2 > <
  /div> < /
div > <
  div className = "container" >
  <
  div className = "row col-md-10 offset-1 pb-5" >
  <
  div className = "col-md-4" >
  <
  div className = "row align-items-center" >
  <
  div className = "col-lg-4" >
  <
  img src = "images/Group163.png"
alt = "Your Image"
className = "img-fluid" /
  >
  <
  /div> <
div className = "col-lg-8 mt-3" >
  <
  h4 > Describe your project in seconds < /h4> < /
div > <
  /div> < /
div > <
  div className = "col-md-4" >
  <
  div className = "row align-items-center" >
  <
  div className = "col-lg-4" >
  <
  img src = "images/Group164.png"
alt = "Your Image"
className = "img-fluid" /
  >
  <
  /div> <
div className = "col-lg-8 mt-3" >
  <
  h4 > Get free proposals from professionals < /h4> < /
div > <
  /div> < /
div > <
  div className = "col-md-4" >
  <
  div className = "row align-items-center" >
  <
  div className = "col-lg-4" >
  <
  img src = "images/Group166.png"
alt = "Your Image"
className = "img-fluid" /
  >
  <
  /div> <
div className = "col-lg-8 mt-3" >
  <
  h4 > Hire a pro and get awesome tracks < /h4> < /
div > <
  /div> < /
div > <
  /div> < /
div > <
  /section> {
/* ***very next section**** */
} <
div className = "container-fluid mt-5 mb-3" >
  <
  div className = "row very_next" >
  <
  div className = "col-1" / >
  <
  div className = "col-md-4" >
  <
  img className = "img-fluid"
src = "images/Group136.png"
alt = "Group%20136" /
  >
  <
  /div> <
div className = "col-md-6" >
  <
  div className = "very_next_heading" >
  <
  h3 className = "heading pb-3 m-2" >
  Over 400, 000 musicians have used and trust Artisant <
  /h3> < /
div > <
  div className = "row very_next_div" >
  <
  div className = "col-6 bd-color" >
  <
  h4 > Safe and secure < /h4> <
p >
  Fund a project to get started and release payment once it 's
completed <
  /p> < /
div > <
  div className = "col-6 bd-color"
style = {
    {
      marginLeft: "-12px"
    }
  } >
  <
  h4 > Protect your copyright < /h4> <
p >
  Our software provides a record of exchanges and files
for future reference <
  /p> < /
div > <
  div className = "row" >
  <
  div className = "col-6 mt-2 bd-color" >
  <
  h4 > Human support < /h4> <
p > Email, phone and chat to help you with your projects < /p> < /
div > <
  div className = "col-6 mt-2 bd-color" >
  <
  h4 > Simply the best talent < /h4> <
p >
  SoundBetter pros work
for their reviews and will give you their best <
  /p> < /
div > <
  /div> < /
div > <
  /div> < /
div > <
  /div> {
/* ****video section*** */
} <
div className = "container" >
  <
  div className = "row video_heading_h2" >
  <
  div className = "col-1" / >
  <
  div className = "col-md-10 my-5" >
  <
  div className = "video_section_heading" >
  <
  h2 className = "heading m-0" >
  See why the music industry’ s best <
  br / >
  choose Artisant Hear from the pros <
  /h2> < /
div > {
    /* <div class="embed-responsive embed-responsive-16by9">
            <iframe loading="lazy" class="embed-responsive-item w-100 video1"  src="images/video1.mp4"
              allowfullscreen></iframe>
          </div> */
  } <
  div >
  <
  img className = "img-fluid"
src = "images/Frame1596.png"
alt = "Frame%201596" /
  >
  <
  /div> < /
div > <
  /div> < /
div > {
    /* *****footer**** */
  } <
  footer className = "text-white justify-content-center" >
  <
  div className = "container-fluid pb-4 footer2" >
  <
  div className = "row py-5" >
  <
  div className = "col-8 offset-2" >
  <
  div className = "col-md-3 col-md-6" >
  <
  img className = "img-fluid"
src = "images/logo.png"
alt = "logo" / >
  <
  /div> {
/* <div class="col-6"></div> */
} <
div className = "col-md-3 col-md-6 offset-md-9" >
  <
  img className = "img-fluid shadow-sm"
src = "images/TwitterOctDenoiserBeauty.png"
alt = "twitter logo" /
  >
  <
  img className = "img-fluid shadow-sm"
src = "images/RedditOctDenoiserBeauty.png"
alt = "reddit logo" /
  >
  <
  img className = "img-fluid shadow-sm"
src = "images/DiscordOctDenoiserBeauty.png"
alt = "discord logo" /
  >
  <
  /div> < /
div > <
  /div> <
div className = "row col-8 offset-sm-2" >
  <
  div className = "col-lg-3 col-sm-6" > {
    /* <div class="col-lg-2 col-md-6"> */
  } <
  h5 className = "text-white mb-3" > Popular Services < /h5> <
ul className = "list-unstyled" >
  <
  li > Music Producers < /li> <
li > Female Singer < /li> <
li > Male Singer < /li> <
li > Mixing Engineers < /li> <
li > Mastering Engineers < /li> <
li > Drum Tracks < /li> <
li > Beat Makers < /li> <
li > Songwriters < /li> <
li > Recording Studios < /li> <
li > All Services < /li> < /
ul > {
    /* </div> */
  } <
  /div> <
div className = "col-lg-3 col-sm-6" >
  <
  h5 className = "text-white mb-3" > Popular Locations < /h5> <
ul className = "list-unstyled" >
  <
  li > New York < /li> <
li > Los Angeles < /li> <
li > Nashville < /li> <
li > London, UK < /li> <
li > Mixing Engineers in New York < /li> <
li > Mastering Studios in New York < /li> <
li > Session Singers in Nashville < /li> <
li > Music Producers in Los Angeles < /li> <
li > Songwriters in Nashville < /li> <
li > All Locations < /li> < /
ul > <
  /div> <
div className = "col-lg-3 col-sm-6" >
  <
  h5 className = "text-white mb-3" > Popular Genres < /h5> <
ul className = "list-unstyled" >
  <
  li > Electronic < /li> <
li > Rock < /li> <
li > Pop < /li> <
li > EDM < /li> <
li > Heavy Metal < /li> <
li > Hip Hop < /li> <
li > House < /li> <
li > Singer Songwriter < /li> <
li > Music Pros by Credits < /li> <
li > All Genres < /li> < /
ul > <
  /div> <
div className = "col-lg-3 col-sm-6" >
  <
  h5 className = "text-white mb-3" > Latest Articles < /h5> <
ul className = "list-unstyled" >
  <
  li > How Much to Produce a Song < /li> <
li > 20 Recording & amp;
Mixing Tips < /li> <
li > 5 Ways EDM Mixing is Different < /li> <
li > World 's first Mixer POV Video</li> <
li > 5 Tips For Recording Drums < /li> <
li > Luca Pretolesi POV Video < /li> <
li > Why Hiring a Producer Matters < /li> <
li > Working with a Mix Engineer < /li> <
li > Music Production Glossary < /li> <
li > Artisant Tracks < /li> < /
ul > <
  /div> < /
div > <
  /div> <
div className = "row col-md-10 offset-md-3 footer1" >
  <
  div className = "container-fluid text-dark m-3" > ©2023 Artisant All Rights Reserved |
  <
  a className = "text-decoration-none"
href = "#" >
  Terms of Use <
  /a>{" "} | <
a className = "text-decoration-none"
href = "#" >
  Privacy Policy <
  /a>{" "} | <
a className = "text-decoration-none"
href = "#" >
  Contact <
  /a>{" "} | <
a className = "text-decoration-none"
href = "#" >
  Help <
  /a> < /
div > <
  /div> < /
footer > <
  /div> < / >


  <
  /div>
)
}

export default Homegit push origin main