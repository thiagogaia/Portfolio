import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Thiago Gaia</b></h1>
          <Typed/>
          
          <div className="HomeIcons">
            <a href="https://github.com/thiagogaia" rel="noreferrer" target='_blank'><FaGithub size={42}/></a>
            <a href="https://www.linkedin.com/in/thiagogaia/" rel="noreferrer" target='_blank'><FaLinkedin size={42}/></a>
            <a href="https://www.instagram.com/sr.thiagogaia/" rel="noreferrer" target="_blank"><FaInstagram size={42}/></a> 
          </div>
          
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of changing a raw idea into a website or a product 
            that impacts lives. 
            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            I'm driven by a strong desire to not only understand how things work<br />
            but also to make them function more efficiently and securely. <br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home