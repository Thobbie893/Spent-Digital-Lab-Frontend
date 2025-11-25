import React from 'react'
import './Insights.css'
import policyimage from '../../assets/Frame 27.png'
import techXcellence from '../../assets/Frame 28.png'
import researchfellowshipimage from '../../assets/Frame 29.png'
import rightarrow from '../../assets/codicon_arrow-small-right.png'

const Insights = () => {
  return (
    <div className='insights-main-container'>
        <h2 className='insights-text'>Insights, Events & Community</h2>
        <p className='insights-subtext'>Stay updated on our latest events, hackathons, and community engagements driving blockchain <br></br> awareness and innovation </p>
        <div className='trainings'>
            <div>
                <img src={policyimage} className='policyimage' alt="" />
            </div>
            <div>
                <img src={techXcellence} className='techXcellence' alt="" />
            </div>
            <div>
                <img src={researchfellowshipimage} className='researchfellowshipimage' alt="" />
            </div>
        </div>
        <button className='explore-CTA'>View Innovation Projects<img src={rightarrow} className='arrow' alt="" /></button>
    </div>
  )
}

export default Insights