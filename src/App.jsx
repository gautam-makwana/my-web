import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Layout from './components/Layout';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Biodata from './pages/Biodata';
import Contact from './pages/Contact';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 1000,
      once: false,
    });
    AOS.refresh();

    // Dynamic CSS Loading
    let cssFile = 'index.css';
    if (location.pathname.includes('resume')) cssFile = 'resume.css';
    else if (location.pathname.includes('biodata')) cssFile = 'biodata.css';
    
    const lnk = document.getElementById('page-style');
    if (lnk) {
      lnk.href = `/css/${cssFile}`;
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="biodata" element={<Biodata />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
