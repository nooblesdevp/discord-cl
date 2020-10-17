import React from "react";
import { Button } from "@material-ui/core";

import "./Login.scss";
import { auth, provider } from "../../firebase/firebase";

function Login() {
  const signIn = () => {
    //listening google provider to login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/sco/9/98/Discord_logo.svg"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
