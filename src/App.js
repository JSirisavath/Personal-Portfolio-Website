// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { PurpleLine } from './components/PurpleLine';

import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import React, { useEffect, useRef } from 'react';

import { Footer } from './components/Footer';

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
    <div
      ref={appRef}
      className="App"
      style={{ overflowY: 'scroll', height: '100vh' }}
    >
      {/* Custom purple line on the left side with "gradient" effect */}
      <PurpleLine appRef={appRef} />

      {/* Custom NavBar link */}
      <NavBar appRef={appRef} />
      {/* Banner with the space animation and about me section. Also includes the "space" background */}
      <Banner />
      {/* Skills tab */}
      <Skills />

      <Projects />

      <Footer />
    </div>
  );
}

export default App;
