import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCartState } from "./ContextReducer";

const NavBar = () => {
  const [cartView, setCartView] = useState(false);
  const data = useCartState();
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    const body = document.querySelector("body");
    if (body) {
      body.style.backgroundColor = newTheme === "dark" ? "#000" : "#fff";
      body.style.color = newTheme === "dark" ? "#fff" : "#000";
    }
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.backgroundColor = theme === "dark" ? "#000" : "#fff";
      body.style.color = theme === "dark" ? "#fff" : "#000";
    }
  }, [theme]);

  console.log("authToken:", localStorage.getItem("authToken")); // Check authToken value
  console.log("data:", data); // Check cart data
  console.log("cartView:", cartView); // Check cartView value

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    <Link to="login"></Link>
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: "#162447",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand fs-2 fw-bold" to="/">
          <span style={{ fontFamily: "Arial", color: "#fff" }}>BiteBlitz</span>
        </Link>
        <button className="btn" onClick={toggleTheme}>
          {theme === "light" ? (
            <img
              src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/moon_dark_mode_night-2-512.png"
              alt="Light Mode"
              style={{ width: "24px", height: "24px", filter: "brightness(0) invert(1)" }}
            />
          ) : (
            <img
              src="https://cdn2.iconfinder.com/data/icons/bubble-set-general/48/Sun-512.png"
              alt="Dark Mode"
              style={{ width: "24px", height: "24px", filter: "brightness(0) invert(1)" }}
            />
          )}
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current="page" to="/">
                <span style={{ fontFamily: "Arial", color: "#fff" }}>Home</span>
              </Link>
            </li>
            {localStorage.getItem("authToken") && (
              <li className="nav-item">
                {/* <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/myorder"
                >
                  <span style={{ fontFamily: "Arial", color: "#fff" }}>
                    My Orders
                  </span>
                </Link> */}
              </li>
            )}
          </ul>
          {!localStorage.getItem("authToken") ? (
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="/login">
                <span style={{ fontFamily: "Arial", color: "#28a745" }}>
                  Login
                </span>
              </Link>
              <Link to="/createuser" className="btn bg-white text-success mx-1">
                <span style={{ fontFamily: "Arial", color: "#28a745" }}>
                  Sign Up
                </span>
              </Link>
            </div>
          ) : (
            <div>
              <div
                className="btn bg-white text-success mx-2"
                onClick={() => setCartView(true)}
              >
                <span style={{ fontFamily: "Arial", color: "#dc3545" }}>
                  My Cart
                </span>{" "}
                <Badge pill bg="danger">
                  {data.length}
                </Badge>
              </div>
              {cartView ? (
                <Modal onClose={() => setCartView(false)}>
                  <Cart />
                </Modal>
              ) : null}
              <div
                className="btn bg-white text-danger mx-2"
                onClick={handleLogout}
              >
                <span style={{ fontFamily: "Arial", color: "#dc3545" }}>
                  Log Out
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
