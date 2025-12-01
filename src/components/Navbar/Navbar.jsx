import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/spent difital labs BLACK 1.png'
import menuicon from '../../assets/ci_hamburger-lg.png'


const Navbar = () => {

  const[mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav>
        <img src={logo} className='logo' alt=""  />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li>About Us</li>
            <li>Research</li>
            <li>Innovations</li>
            <li>Education</li>
            <li>Pulications</li>
            <li>Contact</li>
            <li><button className='btn'>Join our Research Community</button></li>
        </ul>
        <img src={menuicon} className='menu-icon' alt="" onClick={toggleMenu}   />
    </nav>
  )
}

export default Navbar