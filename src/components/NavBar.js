import { useState, useEffect } from 'react';

import { Navbar, Container, Nav } from 'react-bootstrap';

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.png';

export const NavBar = ({ appRef }) => {
  // Working Links for the skills, badging, homepage, etc
  // Initial set state will be home page
  const [activeLink, setActiveLink] = useState('home');

  // Keep information whether the user has scrolled
  const [scrolled, setScroll] = useState(false);

  // Use effect hook would be triggered if the user has set the state for scrolling to be true (start scrolling)
  useEffect(() => {
    const onScroll = () => {
      // If user's scroll height is more than 50, set the scroll to be true
      if (appRef && appRef.current.scrollTop > 50) {
        setScroll(true);
      }
      //   Else if the user's scroll height is less than 50,or hasn't been scrolled yet, set the scroll to be false
      else {
        setScroll(false);
      }
    };

    // Attach event listener to the scrollable element or window
    const scrollableElement =
      appRef && appRef.current ? appRef.current : window;
    scrollableElement.addEventListener('scroll', onScroll);

    // Cleanup function
    return () => {
      scrollableElement.removeEventListener('scroll', onScroll);
    };
  }, [appRef]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  // Handling navlink clicks for smooth behavior

  const handleNavLinksClick = (event, sectionID) => {
    // Prevent default anchor link behavior
    event.preventDefault();

    // Update active link state
    onUpdateActiveLink(sectionID);

    // Scroll to that section users clicked on
    scrollToSection(sectionID);
  };

  const scrollToSection = (sectionID) => {
    const navbarHeight = 70;
    const usersClickedSection = document.getElementById(sectionID);
    // Smooth scroll behavior
    if (usersClickedSection) {
      usersClickedSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Handle 'Let's connect' button to open my meeting scheduler for users
  const handleClick = () => {
    window.open('https://calendly.com/jsirisavath', '_blank');
  };

  return (
    // React-bootstrap navigation bar
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          {/* Image brand logo */}
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Links to skills, badging projects,and homepage section */}
            {/* Home link */}
            <Nav.Link
              href="#home"
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              //   When the link has been clicked, update to the home page
              onClick={(e) => handleNavLinksClick(e, 'home')}
            >
              Home
            </Nav.Link>

            {/* Skills link */}
            <Nav.Link
              href="#skills"
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={(e) => handleNavLinksClick(e, 'skills')}
            >
              Skills
            </Nav.Link>

            {/* Projects link */}
            <Nav.Link
              href="#projects"
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={(e) => handleNavLinksClick(e, 'projects')}
            >
              Projects
            </Nav.Link>

            {/* badging link */}
            <Nav.Link
              href="#badging"
              className={
                activeLink === 'badging' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={(e) => handleNavLinksClick(e, 'badging')}
            >
              Badging
            </Nav.Link>

            {/* QNA */}
            <Nav.Link
              href="#QNA"
              className={
                activeLink === 'QNA' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={(e) => handleNavLinksClick(e, 'QNA')}
            >
              QNA
            </Nav.Link>
          </Nav>
          {/* Social Links section */}
          <span className="navbar-text">
            {/* Icons for social links */}
            <div className="social-icon">
              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/in/jerry-sirisavath-91832b168/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn Icon"></img>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/JSirisavath"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="GitHub Icon"></img>
              </a>
              {/* Youtube Podcast */}
              <a
                href="https://www.youtube.com/@BeyondBelief-yu5fp/featured"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="YouTube Icon"></img>
              </a>

              {/* Spotify Podcast */}
              <a
                href="https://open.spotify.com/show/4wn1CfSEEN7BytdZb86WLU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon4} alt="Spotify Podcast Icon"></img>
              </a>
            </div>
            {/* Contact me button */}
            <button className="vvd" onClick={handleClick}>
              <span>Let's Connect!</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
