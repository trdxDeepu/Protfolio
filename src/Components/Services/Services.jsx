import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from './Deependra Singh.pdf'
import {motion} from 'framer-motion'

function Services() {
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services" id="services">
      <div className="awesome">
        <span>My Awesome </span>
        <span>Services</span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Repellat dolor eaque consequatur iste nihil expedita?
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        
        <div className="blur s-blur" style={{ background: "#abf1ff94" }}></div>
      </div>
      <div className="cards">
        
        <motion.div 
        initial={{ left: "25rem" }}
        whileInView={{ left: "14rem" }}
        transition={transition}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Da Vinci Resolve,Adobe,Photoshop"}
          />
        </motion.div>
        <motion.div 
        initial={{ left: "-11rem", top: "12rem" }}
        whileInView={{ left: "-4rem" }}
        transition={transition}
        style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html ,  Css  , Javascript , ReactJs , C++"}
          />
        </motion.div>
        <motion.div 
         initial={{ top: "19rem", left: "25rem" }}
         whileInView={{ left: "12rem" }}
         transition={transition}
        
        style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"Hobbies"}
            detail={"Gaming , Cooking , Wacthing Anime,"}
          />
        </motion.div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      </div>
    </div>
  );
}

export default Services;
