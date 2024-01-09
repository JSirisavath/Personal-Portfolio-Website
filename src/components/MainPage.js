import { useEffect } from 'react';

import { Banner } from './Banner';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { QnA } from './QnA';

import { Contact } from './Contact';

import { useLocation } from 'react-router-dom';

export const MainPage = () => {
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
      {/* Banner with the space animation and about me section. Also includes the "space" background */}
      <div id="home">
        <Banner />
      </div>

      {/* Skills tab */}
      <div id="skills">
        <Skills />
      </div>

      {/* Projects tab */}
      <div id="projects">
        <Projects />
      </div>

      {/* Question and answer section */}
      <div id="QNA">
        <QnA />
      </div>

      {/* Contact form using node mailer and express library. Work in server.js and contact.js for client side */}
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};
