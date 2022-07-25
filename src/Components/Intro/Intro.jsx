import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import Linkden from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbsup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import Floatingdiv from "./Floatingdiv";
import { motion } from "framer-motion"
import {Link} from "react-scroll";
const Intro=()=> {
  const transition = {duration:2,type:'spring'}

  return (
    <div className="intro" >
      <div className="i-left">
        <div className="i-name">
          <span >Hy! I Am </span>
          <span>Deependra Singh</span>
          <span>
            A 4th year engineering undergrad oriented towards developing best
            possible solutions to real-world problems.Aspiring to enhance my
            knowledge and skills as a software developer and reach the peak in
            the field of software development.
          </span>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Hire Me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/trdxlucifer" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/deependra-singh-14a33720a/"
            target="_blank"
          >
            <img src={Linkden} alt="" />
          </a>
          <a
            href="https://www.instagram.com/i_mdeependrajaiswan/?hl=en"
            target="_blank"
          >
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img 
       initial={{ left: "-36%" }}
       whileInView={{ left: "-24%" }}
       transition={transition}
        src={Glassesimoji} alt="" />
        <motion.div
         initial={{ top: "-4%", left: "74%" }}
         whileInView={{ left: "68%" }}
         transition={transition}

        style={{ top: "-4%", left: "58%" }}
        className='floating-div'>

          <Floatingdiv image={Crown} txt1="Front-end" txt2="Developer" />
        </motion.div>
        <motion.div 
       initial={{ left: "9rem", top: "18rem" }}
       whileInView={{ left: "0rem" }}
       transition={transition}
        style={{ top: "18rem", left: "0rem" }}
        className='floating-div'>
          <Floatingdiv
            image={Thumbsup}
            txt1="Easy Understand"
            txt2="Can do easily"
          />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238,210,255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
