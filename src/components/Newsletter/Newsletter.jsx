import React from 'react'
import './Newsletter.css'
import rightarrow from '../../assets/codicon_arrow-small-right.png'

const Newsletter = () => {
  return (
    <div className='newsletter-container'>
        <div className='newsletter-headline'><h3>Join the Blockchain Research Revolution</h3></div>
        <div className='newsletter-sub-headline'><p>Subscribe to our newsletter and stay informed about new research, training programs, and partnership opportunities.
</p></div>
        <form>
            <div className='inputbox'>
                <span className='inputtext'>Full Name</span><br></br>
                <input type="text" placeholder='Enter Your Full Name' />
            </div>

            <div className='inputbox'>
                <span className='inputtext'>Email</span><br></br>
                <input type="text" placeholder='Enter Your Email' />
            </div>

            <div className='inputbox'>
                <span className='inputtext'>Interests</span><br></br>
                <select>
                    <option>Select your area of interest</option>
                    <option>Research</option>
                    <option>Fellowship</option>
                    <option>Innovation</option>
                    <option>Policy</option>
                </select>
            </div>
        </form>
       
        <button className='subscribe-CTA-button'>Subscribe<img src={rightarrow} className='directional-right-arrow' alt="" /></button>
        
    </div>
  )
}

export default Newsletter