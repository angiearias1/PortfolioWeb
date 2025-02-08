import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from '../pages/Landing_page';
import AboutMe from '../pages/About_me';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';

function AppRoutes() {
  
    return (
  
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
     
    )
  }
  
  export default AppRoutes;