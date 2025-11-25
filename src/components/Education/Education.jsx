import React from 'react'
import './Education.css'
import rightarrow from '../../assets/codicon_arrow-small-right.png'

const Education = () => {
  return (
    <div>
        <h2 className='education-headline-text'>Education & Capacity Building</h2>
        <p className='spent-academy-text'>Through the Spent Academy, we train the next generation of blockchain professionals and researchers. Our programs combine academic rigour <br></br> with hands-on experience in Web3, Cybersecurity, and AI Integration</p>

        <h4 className='Program-text'>Program Highlights:</h4>

        <p className='blockchain-research-paragraph'>Blockchain Research Fellowship</p>
        <p className='web3-developer-paragraph'>Web3 Developer Bootcamp</p>
        <p className='policy-paragraph'>Policy & Regulation Masterclass</p>
        <p className='applied-blockchain-paragraph'>Applied Blockchain for Real Estate Workshop</p>

        <button className='explore-CTA'>Join a Program <img src={rightarrow} className='arrow' alt="" /></button>  
    </div>
  )
}

export default Education