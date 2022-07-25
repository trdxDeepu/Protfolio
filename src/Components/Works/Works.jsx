import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";


function Works() {
  return (
    <div className="work" id="works">
      <div className="awesome">
        <span>Work for all These </span>
        <span>Brands & Clients</span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Repellat dolor eaque consequatur iste nihil expedita?
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <div className="blur s-blur" style={{ background: "#abf1ff94" }}></div>
      </div>
      <div className="w-right">
        <motion.div 
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        viewport={{ margin: "-40px" }}
        transition={{ duration: 3.5, type: "spring" }}
        className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
            
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
    
        </div>
        
      </div>
  
  );
}

export default Works;
