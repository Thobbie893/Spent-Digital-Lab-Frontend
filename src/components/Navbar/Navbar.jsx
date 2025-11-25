import React from 'react'
import './Navbar.css'
import logo from '../../assets/spent difital labs BLACK 1.png'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} className='logo' alt=""  />
        <ul>
            <li>About Us</li>
            <li>Research</li>
            <li>Innovations</li>
            <li>Education</li>
            <li>Pulications</li>
            <li>Contact</li>
            <li><button className='btn'>Join our Research Community</button></li>
        </ul>
    </nav>
  )
}

export default Navbar