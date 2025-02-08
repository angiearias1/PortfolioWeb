import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from '../pages/Landing_page';
import AboutMe from '../pages/About_me';
import Projects from '../pages/Projects';

function AppRoutes() {
  
    return (
  
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
     
    )
  }
  
  export default AppRoutes;