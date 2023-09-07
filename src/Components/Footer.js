import React from 'react';
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      {/* <h4>Developed by Devansh Sahni</h4> */}
      <h4>Copyright &copy; 2023 TG</h4>
      <div className='footerLinks'>
        <a href="https://github.com/thiagogaia" rel="noreferrer" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/thiagogaia/" rel="noreferrer" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:thiagogaia@gmail.com' rel="noreferrer" target='_blank'><GrMail/></a>
        <a href="https://www.instagram.com/sr.thiagogaia/" rel="noreferrer" target="_blank"><FaInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer