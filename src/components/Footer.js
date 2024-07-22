import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file for styling

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <Link to="/" className="footer-link">
            {/* Add your logo here */}
          </Link>
          <span className="footer-text">© 2024 BiteBlitz Inc.</span>
        </div>

        <ul className="footer-nav">
          <li>
            <a href="https://www.linkedin.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
