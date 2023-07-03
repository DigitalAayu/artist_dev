import React from "react";
const Header = () => {
  return (
    <>
<title>Artisant</title>
<meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Artistant</title>
        <link rel="stylesheet" href={process.env.PUBLIC_URL+"/style.css"} />
        <link href={process.env.PUBLIC_URL+"/bootstrap/css/bootstrap.min.css"} rel="stylesheet" />
        <link rel="stylesheet" href={process.env.PUBLIC_URL+"/bootstrap/bootstrap-icons/font/bootstrap-icons.css"} />
        <link rel="stylesheet" href={process.env.PUBLIC_URL+"/anim.css"} />
        <link rel="stylesheet" href={process.env.PUBLIC_URL+"/bootstrap/css/flickity.min.css"} />
        <style dangerouslySetInnerHTML={{__html: "\n    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');\n    @import url('https://fonts.googleapis.com/css?family=Heebo:400,700|Open+Sans:400,700');\n    @import url('https://fonts.googleapis.com/css2?family=Inter&family=Sora:wght@400;500;600&display=swap');\n\n    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700;900&family=Poppins:wght@300;400;500;600;700;800&family=Rowdies&family=Sora:wght@600;700&display=swap');\n  " }} />    
        <script src={process.env.PUBLIC_URL+"/bootstrap/js/b99e675b6e.js"}></script>
        <script src={process.env.PUBLIC_URL+"/bootstrap/js/jquery-3.4.1.min.js"}></script>
    </>
  );
};

export default Header;





