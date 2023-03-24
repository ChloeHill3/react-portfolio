import React from 'react';
import './footer.css';
import {RxLinkedinLogo} from 'react-icons/rx'
import {FaGithubSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

import { useState } from 'react'
import {BiMessageAltDetail} from 'react-icons/bi'

const Footer = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <footer id='footer'> <a href="#" className='footer-logo'></a>
    <ul className='container footer-container'>
    <a href="#home" onClick={() => setActiveNav ('#home')} className={activeNav === '#home' ? 'active' : ''}>Home</a>
      <a href="#about" onClick={() => setActiveNav ('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
      <a href="#project"  onClick={() => setActiveNav ('#project')} className={activeNav === '#project' ? 'active' : ''}>Projects</a>
      <a href="#footer"  onClick={() => setActiveNav ('#footer')} className={activeNav === '#footer' ? 'active' : ''}>Contact</a>
    </ul>
    
    <div className="footer-socials">
    <a href="https://linkedin.com" target='_blank' ><RxLinkedinLogo/></a>
    <a href="https://github.com" target='_blank' ><FaGithubSquare/></a>
    <a href="https://twitter.com" target='_blank' ><FaTwitterSquare/></a>
    </div>

<div className='footer-copyright'>
  <small>&copy; Chloe Hill. All rights reserved.</small>
</div>
    </footer>
  )
}

export default Footer