import React from "react";
import "./Navbar.css";

import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="n-wrapper" id="Navbar"> 
      <div className="n-left">
        <div className="n-name">TrdxLucifer</div>
        
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyle:"none"}}>
          <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
              <Link to="portfolio" spy={true} smooth={true}>
                Projects
              </Link>
            
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
