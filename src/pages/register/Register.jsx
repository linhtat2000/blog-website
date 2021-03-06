import React from "react";
import { Link } from "react-router-dom";

import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter you username"
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter you email"
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter you password"
        />
        <button className="registerButton">Register</button>
        <button className="registerLoginButton">
          <Link className="link" to="/login">
            REGISTER
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Register;
