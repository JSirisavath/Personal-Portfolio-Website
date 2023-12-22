import { Container, Tab, TabContent } from 'react-bootstrap';

import { Row, Col } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';

// Project card component
import { ProjectCard } from './ProjectCard';

// Violet blue color circle gradient
import colorSharp2 from '../assets/img/color-sharp2.png';

import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

// Animate CSS
import 'animate.css';

// Track visibility
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    // Each projects has title, description, and imgURL
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__bounce' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>Lorem ipsam text example</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Individual Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Class Room Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Collaborative Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </TabContent>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="violet-color-gradient-circle"
      />
    </section>
  );
};
