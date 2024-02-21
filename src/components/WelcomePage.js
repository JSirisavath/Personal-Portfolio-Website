// Animate CSS
import 'animate.css';

import welcomePageBGVid from '../assets/stockVideo/welcomePageBgVid.mp4';

import { useLocation } from 'react-router-dom';

import { useEffect } from 'react';

export const WelcomeSplashPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <div id="welcome" className="WelcomePage">
        <div className="bg-video-section">
          {/* Background Video for Welcome Page */}
          <video
            autoPlay
            loop
            muted
            id="welcomePageVideo"
            className="background-video"
          >
            <source src={welcomePageBGVid} type="video/mp4" />
          </video>
          {/* Overlay text */}

          <div className="video-overlay">
            <div className="welcome-text-section">
              <h1 id="welcomePageTagline">Welcome.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
