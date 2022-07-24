import React from "react";
import './intro.css'
import Github from '../../img/github.png';
import Linkden from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';


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
      </div>
     
      <div className="i-right"></div>
    </div>
  );
}

export default Intro;
