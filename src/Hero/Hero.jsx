import React from 'react'
import './Hero.css'
import heroimage from '../assets/Group 4.png'

const Hero = () => {
  return (
    <div className='herocontainer'>
        <div className='herotext'>
            <h1><span className='span1'>Advancing</span> Blockchain <br></br> Research, <span className='span2'>Innovation & <br></br> Policy in Africa</span></h1>
            <p>We are a leading blockchain research and innovation<br></br> institute dedicated to advancing decentralized technology<br></br> through applied research, education, and real-world solutions. </p>
            <button className='ExploreResearchButton'>Explore Research</button>
            <button className='JoinOurProgramsButton'>Join Our Programs</button>
        </div>
        <div>
            <img src={heroimage} className='heroimage' alt="" />
        </div>
    </div>
  )
}

export default Hero