import React from 'react';
import './header.css';
import Cv from '../../assets/cv.pdf';
import Me from '../../assets/images/photo.png';
import {RxLinkedinLogo} from 'react-icons/rx';
import {FaGithubSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';

const Header = () => { 
  return (
  <header id='home'>
    <div className="container header-container" >
    <h5>Hello</h5>
    <h2>Chloe Hill</h2>
    <h5 className='text-light'>Front-End Developer</h5>
    <div className='cta'>
      <a href={Cv} className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary '>Contact Me</a>
    </div>    
    <div className="me">
      <img src={Me} alt="me"/>
    </div>
    <div className="header-socials">
    <a href="https://linkedin.com" target='_blank' className='socials'><RxLinkedinLogo/></a>
    <a href="https://github.com" target='_blank' className='socials'><FaGithubSquare/></a>
    <a href="https://twitter.com" target='_blank' className='socials'><FaTwitterSquare/></a>
    </div>

    <a href="#contact" className='scroll-down'>Scroll Down</a>
    </div>

  </header> 
    )
}

export default Header