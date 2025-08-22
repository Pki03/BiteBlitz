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

  // Dynamically set backend URL
  const API_BASE = window.location.hostname.includes("vercel.app")
    ? "https://biteblitz.onrender.com"
    : "http://localhost:5001";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_BASE}/api/createuser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        // Store auth token and email in localStorage
        localStorage.setItem("authToken", json.authToken);
        localStorage.setItem("userEmail", credentials.email);
        navigate("/");
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

        <div className="form-inner">
          <button className="btn" type="submit">SignUp</button>
          <input
            className="input"
            type="text"
            placeholder="Name"
            name="name"
            value={credentials.name}
            onChange={onChange}
          />
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
          <input
            className="input"
            type="text"
            placeholder="Address"
            name="location"
            value={credentials.location}
            onChange={onChange}
          />
          <div className="signup-link">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
