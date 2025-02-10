import { useState } from 'react'

import Navbar from '../components/Navbar'
import Introduction from './Introduction'
import ToolsSection from '../components/Tools/ToolsSection'
import Services from '../components/Services'
import ExperienceEducation from '../components/ExperienceEducation'
import Contact from '../components/Contact'

function Landing_page() {
  
  return (
    <div className='space-y-8'>
      <Navbar />
      <Introduction />
      <ToolsSection />
      <Services />
      <ExperienceEducation />
      <Contact />

      <div className="text-container">
          <h1>Exploring <span className="highlight-orange">new</span> opportunities</h1>
          <h1>in <span className="highlight-pink">web</span> design and 
              <span className="highlight-lightpink"> development!</span>
          </h1>
      </div>

     
    </div>
  )
}

export default Landing_page