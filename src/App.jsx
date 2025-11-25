import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./Hero/Hero"
import WhoWeAre from "./components/WhoWeAre/WhoWeAre"
import ResearchFocus from "./ResearchFocus/ResearchFocus"
import InnovationLab from "./InnovationLab/InnovationLab"
import Education from "./components/Education/Education"
import ResearchAndPublications from "./components/ResearchAndPublications/ResearchAndPublications"
import CollaborateWithUs from "./components/CollaborateWithUs/CollaborateWithUs"
import Insights from "./components/Insights/Insights"
import Newsletter from "./components/Newsletter/Newsletter"
import Footer from "./components/Footer/Footer"
import copyright from "./components/copyright/copyright"



function App() {
  

  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <ResearchFocus />
      <InnovationLab />
      <Education />
      <ResearchAndPublications />
      <CollaborateWithUs />
      <Insights />
      <Newsletter />
      <Footer />
      <copyright/>
      
    </div>
       </>
  )
}

export default App
