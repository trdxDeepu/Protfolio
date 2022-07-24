import React from "react";
import './intro.css'
import Github from '../../img/github.png';
import Linkden from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbsup from '../../img/thumbsup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';


function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am </span>
          <span>Deependra Singh</span>
          <span>
            A 4th year engineering undergrad oriented towards developing best
            possible solutions to real-world problems.Aspiring to enhance my
            knowledge and skills as a software developer and reach the peak in
            the field of software development.
          </span>
        </div>
        <button className="i-button button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/trdxlucifer" target="_blank">
          <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/deependra-singh-14a33720a/" target="_blank">
          <img src={Linkden} alt="" />
          </a>
          <a href="https://www.instagram.com/i_mdeependrajaiswan/?hl=en" target="_blank">
          <img src={Instagram} alt="" />
          </a>
         
        </div>
      </div>
     
      <div className="i-right">
         
      </div>
    </div>
  );
}

export default Intro;
