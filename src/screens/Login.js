import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5001/api/loginuser", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
  
      const json = await response.json();
      console.log(json);
  
      if (json.success) {
        // Store the authToken in localStorage
        localStorage.setItem("userEmail",credentials.email);
        localStorage.setItem("authToken", json.authToken);
  
        // Redirect to the home page or any other page upon successful login
        navigate("/");
      } else {
        alert("Login failed. Check your email and password.");
      }
    } catch (error) {
      console.error("Error during fetch:", error.message);
      alert("Failed to fetch. Check console for details.");
    }
  };
  

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="form">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="form-inner">
          {/* <h2>LOGIN</h2> */}
          <button className="btn">LOGIN</button>
          <div className="content">
            <input
              className="input"
              type="text"
              placeholder="Username"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
            {/* <button className="btn">LOGIN</button> */}
          </div>
        </div>
      </form>
    </div>
  );
}