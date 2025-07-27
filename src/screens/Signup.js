import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5001/api/createuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.location,
        }),
      });
  
      const json = await response.json();
      console.log(json);
  
      if (json.success) {
        // Store the authToken in localStorage
        localStorage.setItem("authToken", json.authToken);
  
        // Redirect to the home page or any other page upon successful signup
        navigate("/login");
      } else {
        alert("Failed to create user. Please check your data.");
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
    <div className="signup-page">
      <form onSubmit={handleSubmit} className="form">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="form-inner" style={{ marginBottom: "10px" }}>
          {/* <h2>SIGNUP</h2> */}
          <button className="btn" >SignUp</button>
          <div className="content">
            <input
              className="input"
              type="text"
              placeholder="Name"
              name="name"
              value={credentials.name}
              onChange={onChange}
              style={{ height: "10px" }}
            />
            <input
              className="input"
              type="text"
              placeholder="Username"
              name="email"
              value={credentials.email}
              onChange={onChange}
              style={{ height: "10px" }}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              style={{ height: "10px" }}
            />
            <input
              className="input"
              type="text"
              placeholder="Address"
              name="location"
              value={credentials.location}
              onChange={onChange}
              style={{ height: "10px" }}
            />
            {/* <button className="btn" style={{ height: "10px" }}>SignUp</button> */}
          </div>
        </div>
      </form>
    </div>
  );
}
