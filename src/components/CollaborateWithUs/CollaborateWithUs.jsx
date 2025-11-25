import React from 'react'
import './CollaborateWithUs.css'
import image1 from '../../assets/Rectangle 7.png'
import image2 from '../../assets/Rectangle 5.png'
import rightdirectionalarrow from '../../assets/uil_arrow-right.png'

const CollaborateWithUs = () => {
  return (
    <div className='collaborate-main-container'>
        <h2 className='collaborate-headline-text'>Collaborate With Us</h2>
        <div className='collaborate-container'>
            <div>
                <p className='partner-text'>We partner with governments, universities, <br></br> blockchain foundations, and private <br></br> organizations to advance research and build <br></br> innovative solutions.<br></br>
                 Whether you’re looking to fund a study, pilot a <br></br> blockchain system, or host a training, we’re <br></br> open to collaboration.
                </p>

                <button className='partner-button'>Become a partner <img src={rightdirectionalarrow} className='rightdirectionalarrow' alt="" /></button>
            </div>
            <div>
                <img src={image1} className='image1' alt="" /><br></br>
                <img src={image2} className='image2' alt="" />
            </div>
        </div>
       
    </div>
  )
}

export default CollaborateWithUs