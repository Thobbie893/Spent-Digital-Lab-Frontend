import React from 'react'
import './InnovationLab.css'
import rightarrow from '../assets/codicon_arrow-small-right.png'

const InnovationLab = () => {
  return (
    <div className='innovation-main-container'>
        <h2>The Innovation Lab</h2>
        <p className='innovation-paragraph'>The Spent Innovation Lab trasforms research insights into working prototypes. We design, test, and deploy blockchain-powered solutions<br></br> for real-world problems - from digital identity to decentralized finance and property verification.</p>
        <div className='innovation-container'>
            <div className='verification-system-container'>
                <h3>On-Chain Document<br></br> Verification System</h3>
                <p>Securely verify certificate and research<br></br> documents using blockchain </p>
            </div>
            <div className='safex-container'>
                <h3>SafeX</h3>
                <p>A decentralized escrow system for talent hiring <br></br> and cross-border P2P payments</p>
            </div>
            <div className='parkpaddy-container'>
                <h3>ParkPaddy</h3>
                <p>A blockchain-integrated smart parking prototype <br></br> enhancing transparency in urban logistics</p>
            </div>
        </div>
        <button className='innovation-projects-button'>View Innovation Projects<img src={rightarrow} className='right-arrow' alt="" /></button>
    </div>
  )
}

export default InnovationLab