import React from "react";

import { withRouter } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "../css/style.css";
function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleOnSubmit() {
    localStorage.setItem(
      "authUser",
      JSON.stringify({ email: email, password: password })
    );
    props.history.push("/welcome");
    window.location.reload();
  }
  //check if email and password is correct
  function checkCorrectData() {
    let data = JSON.parse(localStorage.getItem("authUser"));
    if (email !== data.email && password !== data.password) {
      alert("Email and password is incorrect");
    }
    if (email !== data.email) {
      alert("Email  is incorrect");
    }
    if (password !== data.password) {
      alert("password is incorrect");
    }
  }
  return (
    <>
      <h2>Please log in to continue</h2>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form onSubmit={handleOnSubmit} onInvalid={checkCorrectData}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Forgot your password?</a>
            <button onClick={() => handleOnSubmit()}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello Doctor</h1>
              <p>Please confirm your login to receive the services</p>
            {/* <button className="ghost" id="signUp"> 
                {/* Sign Up
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(SignIn);
