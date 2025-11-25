import React from 'react'
import './WhoWeAre.css'
import research from '../../assets/10657793 1.png'
import training from '../../assets/14844440 1.png'
import collaboration from '../../assets/14844521 1.png'
import rightarrow from '../../assets/codicon_arrow-small-right.png'
const WhoWeAre = () => {
  return (
    <div className='services-main-container'>
      <h2>Who We Are</h2>
      <p className='p1'>
        Spent Digital Lab is an independent Blockchain Research & Innovation
        Institute committed to exploring, developing, and <br></br> promoting
        decentralized technologies that drive transparency, inclusion, and trust
        in the digital economy.<br></br></p>


       <p className='p2'>Originally founded as a blockchain development and digital solutions
        agency, Spent Digital Lab has evolved into a center for <br></br>
        research, education, and innovation, bridging the gap between academia,
        industry, and policy.</p> 
      
      <div className='services-container'>
        <div className='research-container'>
          <img src={research} className='research-icon' alt="" />
          <p>Applied Research<br></br> in Blockchain<br></br> Systems</p>
        </div>
        <div className='training-container'>
          <img src={training} className='training-icon' alt="" />
          <p>Training Future<br></br>Innovator </p>
        </div>
        <div className='collaboration-container'>
          <img src={collaboration} className='collaoration-icon' alt="" />
          <p>Collaborating with<br></br> Industry & Government</p>
        </div>
      </div>

      <button className='explore-CTA'>Explore Research <img src={rightarrow} className='arrow' alt="" /></button>
    </div>
  );
}

export default WhoWeAre