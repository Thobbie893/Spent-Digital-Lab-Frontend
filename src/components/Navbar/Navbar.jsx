import React from 'react'
import './Navbar.css'
import logo from '../../assets/spent difital labs BLACK 1.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} className='logo' alt=""  />
        <ul>
            <li><Link>About Us</Link></li>
            <li><Link>Research</Link></li>
            <li><Link>Innovations</Link></li>
            <li><Link>Education</Link></li>
            <li><Link>Publications</Link></li>
            <li><Link>Contact</Link></li>
            <li><button className='btn'>Join our Research Community</button></li>
        </ul>
    </nav>
  )
}

export default Navbar