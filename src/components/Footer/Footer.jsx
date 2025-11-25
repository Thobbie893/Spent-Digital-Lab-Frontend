import React from 'react'
import './Footer.css'
import logo from '../../assets/spent difital labs BLACK 1.png'
import location from '../../assets/system-uicons_location.png'
import mail from '../../assets/si_mail-line.png'
import globe from '../../assets/et_global.png'
import Linkedin from '../../assets/2371220 1.png'
import X from '../../assets/12942964 1.png'
import Github from '../../assets/5219956 1.png'

const Footer = () => {
  return (
    <div className='footer-main-container'>
        <img src={logo} className='footer-logo' alt="" />
        <div className='footer-container'>
            <div>
                <h4 className='About-headline'>About</h4>
                <p className='spent-academy-additional-information'>Spent Digital Lab is a Blockchain <br></br> Research & Innovation Institute <br></br> advancing decentralized <br></br> technologies through research, <br></br> education, and innovation.</p>
            </div>
            <div>
                <h4 className='quick-links-headline'>Quick Links</h4>
                <p className='quick-links-paragraph'>About</p>
                <p>Research</p>
                <p>Innovation Lab</p>
                <p>Education</p>
                <p>Pulications</p>
                <p>Contact</p>
            </div>
            <div>
                <h4 className='contact-us-headline'>Contact Us</h4>
                <div>
                        <div className='location-container'>
                            <img src={location} className='location' alt="" />
                            <p>Lagos, Nigeria</p>
                        </div>
                        <div className='mail-container'>
                            <img src={mail} className='mail' alt="" />
                            <p>info@spentdigitallab.com</p>
                        </div>
                        <div className='globe-container'>
                            <img src={globe} className='globe' alt="" />
                            <p>www.spentdigitallab.com</p>
                        </div>
                        <div className='social-media-icons'>
                        <div>
                            <img src={Linkedin} className='Linkedin' alt="" />
                        </div>
                        <div>
                            <img src={X} className='Twitter' alt="" />
                        </div>
                        <div>
                            <img src={Github} className='Github' alt="" />
                        </div>
                    </div>
                    </div>
                    
                    
                </div>
                
            </div>
            
        </div>
  )
}

export default Footer