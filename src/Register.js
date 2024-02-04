import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "./axios";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const register = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password & Confirm Password should be Same");
    } else {
      const body = {
        name: name,
        email: email,
        password: password,
      };
      const createUser = async () => {
        try {
          const response = await axios.post("/users", body);
          navigate("/login");
        } catch (error) {
          setError(message);
        }
      };
      createUser();
    }
  };

  return (
    <div className="register">
      <div className="register__left">
        <Link to="/">
          <img
            className="register__logo"
            src="/kisankart.png"
            alt="kisankart"
          />
        </Link>
        <div className="register__container">
          <h1>Welcome back</h1>
          <span>Please enter your details.</span>

          <form>
            <h5>Name</h5>
            <input
              type="text"
              placeholder="   Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <h5>Confirm Password</h5>
            <input
              type="password"
              placeholder="   Enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="register__checkbox">
              <label>
                <input type="checkbox" />
                Remember for 30 Days
              </label>

              <span>Forgot Password</span>
            </div>
            {error && <span className="error">{error}</span>}

            <button
              className="register__signInButton"
              type="submit"
              onClick={register}
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="register__right">
        <img className="register__image" src="/d.jpg" alt="register-scene" />
      </div>
    </div>
  );
}

export default Register;
