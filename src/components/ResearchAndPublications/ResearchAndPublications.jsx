import React from 'react'
import './ResearchAndPublications.css'
import backgroundimage from '../../assets/research sub.png'
import digitalimage from '../../assets/Rectangle 3.png'
import rightdirectionalarrow from '../../assets/uil_arrow-right.png'

const ResearchAndPublications = () => {
  return (
    <div className='container'>
      <img src={backgroundimage} className='backgroundimage' alt="" />
      <h3 className='research-headline-text'>Research & Publications</h3>
      <p className='sub-headline-text'>Explore our latest research papers, policy briefs, and case studies that shape the blockchain <br></br> ecosystem in Africa and beyond</p>
      <img src={digitalimage} className='digital-image' alt="" />
      <div className='containerB'>
        <div className='blockchain-regulation'>
          <p>The State of Blockchain Regulation in <br></br> Africa (2025)</p>
        </div>
        <div className='real-estate'>
          <p>Building Transparent Real Estate <br></br> Systems on Blockchain</p>
        </div>
        <div className='decentralized-identity'>
          <p>Decentralized Identity: The Future of <br></br> Digital Governance</p>
        </div>
      </div>
      <button className='view-publications-button'>View all Publications<img src={rightdirectionalarrow} className='rightdirectionalarrow' alt="" /></button>
    </div>
  )
}

export default ResearchAndPublications