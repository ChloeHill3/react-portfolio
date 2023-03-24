import React from 'react'
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {BsPersonHeart} from 'react-icons/bs'
import {MdWork} from 'react-icons/md'
import { useState } from 'react'
import {BiMessageAltDetail} from 'react-icons/bi'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav ('#home')} className={activeNav === '#home' ? 'active' : ''}><BiHomeHeart/>Home</a>
      <a href="#about" onClick={() => setActiveNav ('#about')} className={activeNav === '#about' ? 'active' : ''}><BsPersonHeart/>About</a>
      <a href="#project"  onClick={() => setActiveNav ('#project')} className={activeNav === '#project' ? 'active' : ''}><MdWork/>Projects</a>
      <a href="#footer"  onClick={() => setActiveNav ('#footer')} className={activeNav === '#footer' ? 'active' : ''}><BiMessageAltDetail/>Contact</a>
    </nav>
  )
}

export default Nav