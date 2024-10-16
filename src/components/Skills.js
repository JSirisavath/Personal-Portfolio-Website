import { Col, Container, Row } from 'react-bootstrap';
// Carousel imports
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Here are my current technical skills I am familiar with! I will
                continue to hone those skills and add anymore as I continue
                pursuing learning and developing with new technologies!
              </p>
              {/* React carousel that is will infinitely rotate */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {/* Each skill item is inside this carousel */}
                <div className="item">
                  <img src={meter1} alt="skill-img" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill-img" />
                  <h5>Python Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill-img" />
                  <h5>Java Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill-img" />
                  <h5>JavaScript Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="skill-img" />
                  <h5>Reactjs Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="skill-img" />
                  <h5>Vuejs Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="skill-img" />
                  <h5>Nodejs</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="skill-img" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="skill-img" />
                  <h5>Flask</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="skill-img" />
                  <h5>SQLite</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="skill-img" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="skill-img" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="skill-img" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="skill-img" />
                  <h5>CSS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background_image_left"
      />
    </section>
  );
};
