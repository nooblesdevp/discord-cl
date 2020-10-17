import React from "react";
import { Button, IconButton } from "@material-ui/core";

import "./Login.scss";
import { auth, provider } from "../../firebase/firebase";
import { Facebook, LinkedIn, Web } from "@material-ui/icons";

function Login() {
  const signIn = () => {
    //listening google provider to login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/sco/9/98/Discord_logo.svg"
            alt=""
          />
        </div>
        <div className="login__buttons">
          <Button className="login__btn" onClick={signIn}>
            Sign In
          </Button>
          <div className="login__socialLink">
            <IconButton className="login__btnSocial">
              <a
                href="https://web.facebook.com/nuzulzen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </IconButton>
            <IconButton className="login__btnSocial">
              <a
                href="https://nuzul-zen-alfian.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Web />
              </a>
            </IconButton>
            <IconButton className="login__btnSocial">
              <a
                href="https://www.linkedin.com/in/nuzul-zen-alfian-828297184/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
