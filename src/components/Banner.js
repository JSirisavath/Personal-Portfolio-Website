import { Container, Row, Col } from 'react-bootstrap';

import { ArrowRightCircle } from 'react-bootstrap-icons';

// Space astronaut with background of moon image
import headerImg from '../assets/img/header-img.svg';

// Use state and Use Effect hooks to store the "state" of the animation typing text
import { useState, useEffect, useCallback } from 'react';

// Animate CSS
import 'animate.css';

// Track visibility
import TrackVisibility from 'react-on-screen';

// This is where the introduction of who I am and the typing animation happens here
export const Banner = () => {
  // Text to rotate
  const toRotate = [
    'Full Stack Developer',
    'Web Developer',
    'Java Developer',
    'JavaScript Developer',
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
                  <span className="tagline">Welcome to my Portfolio!</span>
                  <h1>
                    {`Hi, I'm Jerry Sirisavath, `}
                    <span className="txt-rotate" dataPeriod="1000">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  {/* About me section */}
                  <p>
                    As a current student at Minneapolis College (MCTC), I am
                    immersing myself in the dynamic world of technology with a
                    keen focus on full-stack and web development. My journey in
                    tech unfolds as I volunteer with a vibrant software
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
                    growth-minded individuals. My passion for technology extends
                    to Java development, where I leverage my skills to craft
                    robust and scalable solutions. With an insatiable appetite
                    for learning and mastering various technology stacks, I am
                    committed to bridging the gap between innovative business
                    ideas and the technical roadblocks they encounter. My goal
                    is to transform challenges into opportunities through
                    creative and efficient software solutions.
                  </p>
                  {/* QNA section */}
                  <h3>Common Questions about me!</h3>
                  <p>
                    <b>Q:How do you pronounce your last name? </b>
                    A:
                    <i>"Si-ri-sa-vat"</i>
                    <i>
                      {' '}
                      - My last name came from a Lao origin background. Laos is
                      a country in Southeast Asia where there are rich and
                      diverse cultural history that is reflected in its
                      surnames!
                    </i>
                  </p>
                  <p>
                    <b>Q:What are your hobbies besides coding?</b> A:{' '}
                    <i>
                      I am an avid enjoyer to many entertainments, but I also
                      have many love to creation! I love making music,
                      learning/playing the piano, and also writing and creating
                      melodies to beats! Though, when I am not in my creative
                      mode, I like to rewind by playing video games and watch
                      recommended videos on Youtube!
                    </i>
                  </p>
                  <p>
                    <b>Q:Why do you go by 'Jay' sometimes?</b> A:
                    <i>
                      {' '}
                      I went by Jay more often starting from my old job at CVS.
                      There would be another person name 'Gerry', but also
                      pronounced the same as 'Jerry'. But one of us would be
                      called in the loudspeaker, we would get confused and both
                      of us would go up front to respond even if only one of us
                      was needed. So to clarify the confusion, I went by my
                      nickname, Jay.{' '}
                    </i>
                  </p>
                  <button onClick={() => console.log('Connect with me!')}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
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
