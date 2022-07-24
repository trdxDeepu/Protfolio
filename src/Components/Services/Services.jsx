import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from './Deependra Singh.pdf'


function Services() {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome </span>
        <span>Services</span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Repellat dolor eaque consequatur iste nihil expedita?
        </span>
        <a href={Resume} download target='_blank'>
        <button className="button s-button">Download CV</button>
        </a>
        
        <div className="blur s-blur" style={{ background: "#abf1ff94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Da Vinci Resolve,Adobe"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html , Css , Javascript , ReactJs"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"Hobbies"}
            detail={"Gamer , Cooking , Anime"}
          />
        </div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      </div>
    </div>
  );
}

export default Services;
