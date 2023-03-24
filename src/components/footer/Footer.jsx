import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer id='footer'> <a href="#" className='footer-logo'></a>
    <ul>
<li> <a href="#home"></a>Home</li>
<li> <a href="#about"></a>About</li>
<li> <a href="#project"></a>Projects</li>
<li> <a href="#contact"></a>Contact</li>
    </ul>
    
    <div className="footer-socials"></div>
    
    </footer>
  )
}

export default Footer