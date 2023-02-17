import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__left">
        <Link to="/">
          <img className="login__logo" src="/kisankart.png" alt="kisankart" />
        </Link>
        <div className="login__container">
          <h1>Welcome back</h1>
          <span>Please enter your details.</span>

          <form>
            <h5>Email</h5>
            <input
              type="text"
              placeholder="   Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              placeholder="   Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="login__checkbox">
              <label>
                <input type="checkbox" />
                Remember for 30 Days
              </label>

              <span>Forgot Password</span>
            </div>

            <button
              className="login__signInButton"
              type="submit"
              onClick={signIn}
            >
              Sign in
            </button>
          </form>

          <span className="login__signup">
            Don't have an account?{" "}
            <span onClick={() => navigate("/register")}>Sign up</span>
          </span>
        </div>
      </div>
      <div className="login__right">
        <img className="login__image" src="/d.jpg" alt="login-scene" />
      </div>
    </div>
  );
}

export default Login;
