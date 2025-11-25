import React from 'react'
import './ResearchFocus.css'
import blockchain from '../assets/bro.png'
import data from '../assets/pana.png'
import marketing from '../assets/marketing 1.png'
import web3 from '../assets/content 1.png'
import AI from '../assets/academy 1.png'
import policy from '../assets/block 1.png'
import rightarrow from '../assets/codicon_arrow-small-right.png'


const ResearchFocus = () => {
  return (
    <div className='main-container'>
      <h1>Our Research Focus</h1>
      <p className='sub-heading'>
        We conduct interdisciplinary research that advances blockchain's role in
        secure, transaparent, and ethical systems
      </p>
      <div className='container1'>
        <div className='Blockchain-container'>
          <div className='blockchain-sub-container'>
            <div>
              <h2>
                Blockchain Security &<br></br> Cryptography
              </h2>
            </div>
            <div>
              <img src={blockchain} className='blockchain' alt="" />
            </div>
          </div>
          <p>
            Protecting digital systems through<br></br> advanced encryption and zero-
            <br></br> knowledge proofs
          </p>
        </div>
        <div className='data-container'>
          <div>
            <div className='data-sub-container'>
              <div>
                <h2>
                  Digital Identity & Data Privacy<br></br>
                </h2>
              </div>
              <div>
                <img src={data} className='data' alt="" />
              </div>
            </div>
            <p>
              Developing decentralized ID systems<br></br> that gives users full
              control over their data
            </p>
          </div>
        </div>
        <div className='marketing-container'>
          <div>
            <div className='marketing-sub-container'>
              <div>
                <h2>
                  Blockchain for Real<br></br> Estate & Supply Chain
                </h2>
              </div>
              <div>
                <img src={marketing} className='marketing' alt="" />
              </div>
            </div>
            <p>
              Enabling transparency and efficiency<br></br> in land, property,
              and logistics<br></br>records
            </p>
          </div>
        </div>
      </div>

      <div className='container2'>
        <div className='web3-container'>
            <div className='web3-sub-container'>
              <div>
                <h2>
                  Web3 Infrastructure <br></br> & Interoperability
                </h2>
              </div>
              <div>
                <img src={web3} className='web3' alt="" />
              </div>
            </div>
          <p>
              Researching scalable, cross-chain<br></br> systems that power the
              next<br></br> generation of the internet.
            </p>
        </div>
        <div className='AI-container'>
          <div className='AI-sub-container'>
            <div>
              <h2>
                AI & Blockchain <br></br> Synergy
              </h2>
            </div>
            <div>
              <img src={AI} className='AI' alt="" />
            </div>
          </div>
          <p>
              Exploring how AI and blockchain<br></br> intersect to secure and automate<br></br> decision-making.
            </p>
        </div>
        <div>
        <div className='policy-container'>
            <div className='policy-sub-container'>
            <div>
              <h2>
                Policy, Governance &  <br></br> Regulation
              </h2>
            </div>
            <div>
              <img src={policy} className='policy' alt="" />
            </div>
            </div>
            <p>
              Researching scalable, cross-chain<br></br> systems that power the
              next generation of the internet.
            </p>
          </div> 
        </div>
      </div>
      <button className='explore-CTA'>Explore Our Research <img src={rightarrow} className='arrow' alt="" /></button>
    </div>
  );
}

export default ResearchFocus