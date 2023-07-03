import Cookies from "js-cookie";
import React from "react";

const BeforeLogin = () => {

  
  if (typeof window !== 'undefined') {
    Cookies.get('access_token') !==undefined ?
     ( window.location.href='/user/dashboard' )
      : ( console.log('continue'));
    }

  return (
    <>
              <meta charSet="UTF-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Login</title>
              <link rel="stylesheet" href={process.env.PUBLIC_URL+"/logInPage.css"} />
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,400,0,0" />
    </>

  );
};

export default BeforeLogin;





