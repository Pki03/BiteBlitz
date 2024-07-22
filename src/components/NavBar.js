import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCartState } from "./ContextReducer";
import './NavBar.css'; // Import the CSS file for styling

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
    navigate("/login");
  };

  return (
    <nav className={`navbar navbar-expand-lg ${theme}-theme`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="navbar-logo">BiteBlitz</span>
        </Link>
        <button className="btn theme-toggle-btn" onClick={toggleTheme}>
          {theme === "light" ? (
            <img
              src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/moon_dark_mode_night-2-512.png"
              alt="Light Mode"
              className="theme-icon"
            />
          ) : (
            <img
              src="https://cdn2.iconfinder.com/data/icons/bubble-set-general/48/Sun-512.png"
              alt="Dark Mode"
              className="theme-icon"
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
              <Link className="nav-link" aria-current="page" to="/">
                <span className="nav-link-text">Home</span>
              </Link>
            </li>
            {localStorage.getItem("authToken") && (
              <li className="nav-item">
                {/* <Link
                  className="nav-link"
                  aria-current="page"
                  to="/myorder"
                >
                  <span className="nav-link-text">
                    My Orders
                  </span>
                </Link> */}
              </li>
            )}
          </ul>
          {!localStorage.getItem("authToken") ? (
            <div className="d-flex">
              <Link className="btn btn-primary mx-1" to="/login">
                <span className="btn-text">Login</span>
              </Link>
              <Link to="/createuser" className="btn btn-primary mx-1">
                <span className="btn-text">Sign Up</span>
              </Link>
            </div>
          ) : (
            <div>
              <div
                className="btn btn-primary mx-2"
                onClick={() => setCartView(true)}
              >
                <span className="btn-text">My Cart</span>{" "}
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
                className="btn btn-danger mx-2"
                onClick={handleLogout}
              >
                <span className="btn-text">Log Out</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
