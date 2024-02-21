import { useState, useEffect } from 'react';

import { Navbar, Container, Nav } from 'react-bootstrap';

import { Link, useLocation } from 'react-router-dom';

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.png';

import ProfilePicture from './ProfilePicture';

export const NavBar = ({ appRef }) => {
  const location = useLocation();

  // Working Links for the skills, badging, homepage, etc
  // Initial set state will be home page
  const [activeLink, setActiveLink] = useState('');

  // Keep information whether the user has scrolled
  const [scrolled, setScroll] = useState(false);

  // Toggle the navbar expansion
  const [expanded, setExpanded] = useState(false);

  // Use effect hook would be triggered if the user has set the state for scrolling to be true (start scrolling)
  useEffect(() => {
    const onScroll = () => {
      // If user's scroll height is more than 23, set the scroll to be true
      if (appRef && appRef.current.scrollTop > 23) {
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

  // Handle 'Let's connect' button to open my meeting scheduler for users
  const handleClick = () => {
    window.open('https://calendly.com/jsirisavath', '_blank');
  };

  // Event handling for toggling expansion state

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  // Helper function to determine link path based on current location context
  const getNavLinkPath = (section) => {
    // If the app is not on the main page, direct to the main page with hash
    if (location.pathname !== '/mainHome') {
      return `/mainHome#${section}`;
    }

    // If on main home page, use hash only
    return `/mainHome#${section}`;
  };

  return (
    // React-bootstrap navigation bar
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="/">
          {/* Image brand logo */}
          <ProfilePicture />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Links to skills, badging projects,and homepage section */}
            {/* Home link */}

            <Nav.Link
              as={Link}
              to={getNavLinkPath('mainHome')}
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              //   When the link has been clicked, update to the home page
              onClick={() => {
                setActiveLink('home');
                // Close
                setTimeout(() => setExpanded(false), 100);
              }}
            >
              Home
            </Nav.Link>

            {/* Skills link */}
            <Nav.Link
              as={Link}
              to={getNavLinkPath('skills')}
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => setActiveLink('skills')}
            >
              Skills
            </Nav.Link>

            {/* Projects link */}
            <Nav.Link
              as={Link}
              to={getNavLinkPath('projects')}
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => setActiveLink('projects')}
            >
              Projects
            </Nav.Link>

            {/* QNA */}
            <Nav.Link
              as={Link}
              to={getNavLinkPath('QNA')}
              className={
                activeLink === 'QNA' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => setActiveLink('QNA')}
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
