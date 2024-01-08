import { Container, Row, Col } from 'react-bootstrap';

import { ArrowRightCircle } from 'react-bootstrap-icons';

// Space astronaut with background of moon image
import headerImg from '../assets/img/header-img.svg';

// Use state and Use Effect hooks to store the "state" of the animation typing text
import { useState, useEffect } from 'react';

// Animate CSS
import 'animate.css';

// Track visibility
import TrackVisibility from 'react-on-screen';

// This is where the introduction of who I am and the typing animation happens here
export const Banner = () => {
  // Text to rotate
  const toRotate = [
    'Hello World!',
    "Areas I'm interested are ...",
    'Web Developer',
    'Java Developer',
    'JavaScript Developer',
    'Python Developer',
    'Reactjs Developer',
    'Full Stack Developer',
    'DevOps',
  ];
  // Loop counter on which text to start first
  const [loopNum, setLoopNum] = useState(0);

  // Deleting state
  const [isDeleting, setIsDeleting] = useState(false);
  // Start typing W, then e, then b, etc
  const [text, setText] = useState('');

  const period = 2000;

  // How fast the other letter is typed after another
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const [index, setIndex] = useState(1);

  // Run the ticker every time the text get updated
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Go to the contact section
  const handleClick = () => {
    const contactSection = document.getElementById('connect');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* Track visibility allows to check if react component are visible on screen */}
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeInTopRight' : ''
                  }
                >
                  <div className="header-container">
                    <span className="tagline">Welcome to my Portfolio!</span>
                    <h1 className="header-with-rotation">
                      {`Hi, I'm Jerry Sirisavath,  `}
                      <span className="txt-rotate" dataperiod="1000">
                        <span className="wrap"> {text}</span>
                      </span>
                    </h1>
                  </div>
                  <div className="AboutMeSection">
                    {/* About me section */}
                    <p>
                      As a current student at Minneapolis College (MCTC), I am
                      immersing myself in the dynamic world of technology with a
                      keen focus on full-stack and web development. My journey
                      in tech unfolds as I volunteer with a vibrant software
                      development team at{' '}
                      <a
                        href="https://seedsofsuccess.us"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="Seeds_of_Success_url"
                      >
                        <i>"Seeds of Success"</i>
                      </a>
                      , where I collaborate with a community of open and
                      growth-minded individuals. My passion for technology
                      extends to Java development, where I leverage my skills to
                      craft robust and scalable solutions. With an insatiable
                      appetite for learning and mastering various technology
                      stacks, I am committed to bridging the gap between
                      innovative business ideas and the technical roadblocks
                      they encounter. My goal is to transform challenges into
                      opportunities through creative and efficient software
                      solutions.
                    </p>
                    <button onClick={handleClick}>
                      Contact Me! <ArrowRightCircle size={25} />
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          {/* Image section */}
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
