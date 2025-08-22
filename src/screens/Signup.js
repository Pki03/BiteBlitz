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
  const [loading, setLoading] = useState(false);

  // Dynamically set backend URL
  const API_BASE = window.location.hostname.includes("vercel.app")
    ? "https://biteblitz.onrender.com" // Render backend URL
    : "http://localhost:5001";        // Local backend URL

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/api/createuser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();
      console.log("Signup Response:", json);

      if (json.success) {
        // Save email and auth token to localStorage
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken || ""); // fallback empty string
        navigate("/");
      } else {
        alert(json.error || "Failed to create user. Please check your data.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Failed to fetch. Please check your network or backend.");
    } finally {
      setLoading(false);
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="signup-page">
      <form onSubmit={handleSubmit} className="form">
        {/* Fire-like decorative spans */}
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <div className="form-inner">
          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "SignUp"}
          </button>

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
