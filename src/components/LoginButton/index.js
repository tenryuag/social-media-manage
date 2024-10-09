import React from "react";
import './styles.css';

const LoginButton = () => {

  const facebookLogin = () => {
    if (!window.FB) return;
    
    //hacer login
    window.FB.getLoginStatus(response => {
      if (response.status === "connected") {
        // Leer los datos del usuario
        facebookLoginHandler(response)
      } else {
        // Intentar iniciar sesión
        window.FB.login(facebookLoginHandler, { scope: 'public_profile, email' });
      }
    });
  };

  const facebookLoginHandler = (response) => {
    console.log(response);

    if (response.status === "connected") {
      // Leer datos del usuario
      window.FB.api('/me?fields=id,name,email,picture', userData => {
        console.log(userData);

        //almacenar la sesion del usuario en la app
      });
    }
  };

  return(
    <div className="loginWrapper">
      <button onClick={facebookLogin} className="login">
        <span>Facebookで接続</span>
      </button>
    </div>
  );
};

export default LoginButton;
