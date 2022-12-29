import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from "@material-ui/icons/Storefront";

import "./Login.css";
//import { useStateValue } from "./StateProvider";

let URL;
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [{token}, dispatch] = useStateValue();

  const tokenDispatchHandler = (token) => {
    // dispatch({
    //   type: "LOG_IN",
    //   token: token,
    // });
  };

  const signIn = (e) => {
   e.preventDefault();
   URL =
     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA1CyuLue5nliA5A4zRMiMQBY9-egunl50";
     sendRequestToFireBase(URL);
  };

  const register = (e) => {
    e.preventDefault();
    URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA1CyuLue5nliA5A4zRMiMQBY9-egunl50";

      sendRequestToFireBase(URL);
    
  };

  const sendRequestToFireBase = (URL) => {
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("User logged in Successfully...!!!");
          res.json().then((data) => {
            const resToken = data.idToken;
            console.log("resToken: " + resToken);
            tokenDispatchHandler(resToken);
          });
          
          history.replace("/");
        } else {
          res.json().then((data) => {
            if(data && data.error && data.error.message) {
                alert("Authentication Failed:" + data.error.message);
                history.replace("/login");
            }
            
          });
        }
      });
  }

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="login__logo">
          <StorefrontIcon className="login__logoImage" fontSize="large" />
          <h2 className="login__logoTitle">eSHOP</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your eShop Account
        </button>
      </div>
    </div>
  );
}

export default Login;
