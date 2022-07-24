import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">TrdxLucifer</div>
        <span>Toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyle:"none"}}>
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Services</li>
            <li>Testimonial</li>
          </ul>
        </div>
        <button className="button n-button">Contact Us</button>
      </div>
    </div>
  );
}

export default Navbar;
