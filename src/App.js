import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainPage } from './components/MainPage';

import { WelcomeSplashPage } from './components/WelcomePage';

import { NavBar } from './components/NavBar';

import { PurpleLine } from './components/PurpleLine';

import { ProjectDetail } from './components/ProjectDetail'; // Will be project detail page when users click on a project tab

import { Footer } from './components/Footer';

import React, { useEffect, useRef } from 'react';

import ScrollToSection from './components/ScrollToSection';

// Routing for linking personal projects to a separate page showcasing their details
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const app = appRef.current;

    if (!app) return;

    // Show scrollbar
    const showScrollbar = () => app.classList.remove('no-scrollbar');

    // Hide scrollbar
    const hideScrollbar = () => app.classList.add('no-scrollbar');

    const handleScroll = () => {
      showScrollbar();
      clearTimeout(app.hideScrollbarTimer);
      app.hideScrollbarTimer = setTimeout(hideScrollbar, 2000);
    };

    app.addEventListener('scroll', handleScroll);

    hideScrollbar(); // Hide scrollbar at first

    return () => {
      clearTimeout(app.hideScrollbarTimer);
      app.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Router>
      <div
        ref={appRef}
        className="App"
        style={{ overflowY: 'scroll', height: '100vh' }}
      >
        {/* Custom purple line on the left side with "gradient" effect */}
        <PurpleLine appRef={appRef} />
        {/* Custom NavBar link */}
        <NavBar appRef={appRef} />

        <ScrollToSection />

        <Routes>
          {/* Welcome page route */}
          <Route path="/" element={<WelcomeSplashPage />} />

          {/* Home page routes */}
          <Route path="/mainHome" element={<MainPage />} />

          {/* Handle routing for projects and projects own individual page that has their details. This is using the ID for that project */}
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
        {/* Footer with copy right info and icons that was used from Icon8 */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
