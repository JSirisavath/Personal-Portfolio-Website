import { Container, Tab, TabContent } from 'react-bootstrap';

import { Row, Col } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';

// Project card component
import { ProjectCard } from './ProjectCard';

// Violet blue color circle gradient
import colorSharp2 from '../assets/img/color-sharp2.png';

// Animate CSS
import 'animate.css';

// Track visibility
import TrackVisibility from 'react-on-screen';

import { useEffect, useState } from 'react';

import { getAPIBaseURL } from '../config';

export const Projects = () => {
  // Projects empty array use state
  const [individualProjects, setIndividualProjects] = useState([]);
  const [collaborativeProjects, setCollaborativeProjects] = useState([]);
  const [classroomProjects, setClassroomProjects] = useState([]);

  useEffect(() => {
    // Fetch the individual projects, where we target the routes URL in projects.js
    const fetchProjectsData = async () => {
      try {
        const baseURL = getAPIBaseURL();

        // APP uses "/api/projects/individual" and is being handled by projects.js in routes folder
        const responseForIndividualProject = await fetch(
          `${baseURL}/api/projects/individual`
        );

        // Give status code if HTTP error
        if (!responseForIndividualProject.ok) {
          const text = await responseForIndividualProject.text(); // Read response as text

          console.error(`Error response body: ${text}`);

          throw new Error(
            `HTTP error to fetch Individual Projects, Status: ${responseForIndividualProject.status}, Body: ${text}`
          );
        }

        // Json data to Javascript object
        const individualProjectData = await responseForIndividualProject.json();

        // console.log(individualProjectData);

        // Set individual project state to display
        setIndividualProjects(individualProjectData);

        // await the execution until Fetch for Collaborative project is returned
        const responseForCollabProjects = await fetch(
          `${baseURL}/api/projects/collaborative`
        );

        if (!responseForCollabProjects.ok) {
          throw new Error(
            `HTTP error to fetch Collaborative projects, Status: ${responseForCollabProjects.status}`
          );
        }

        // Collab. response convert to Javascript object
        const collaborativeProjectData = await responseForCollabProjects.json();

        // Set collaborative project state to display
        setCollaborativeProjects(collaborativeProjectData);

        // Class room projects
        const responseForClassroomProject = await fetch(
          `${baseURL}/api/projects/classroom`
        );

        if (!responseForClassroomProject.ok) {
          throw new Error(
            `HTTP error to fetch classroom projects, Status ${responseForClassroomProject.status}`
          );
        }

        // Json to objects
        const classroomProjectsData = await responseForClassroomProject.json();

        // Classroom project state
        setClassroomProjects(classroomProjectsData);
      } catch (error) {
        // Error handling
        // TODO make a component to display error getting project data
        console.log(error);
        console.error('Error fetching:', error);
      }
    };

    // Call fetching data
    fetchProjectsData();
  }, []);
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
                {/* Individual Projects */}
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
                    {individualProjects.map((project) => {
                      // console.log('project data: ', project);
                      return (
                        <ProjectCard
                          key={project._id}
                          id={project._id}
                          {...project}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>

                {/* Collaborative projects */}
                <Tab.Pane eventKey="second">
                  Lorem Ipsum
                  <Row>
                    {collaborativeProjects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>

                {/* Classroom projects */}
                <Tab.Pane eventKey="third">
                  Lorem Ipsum
                  <Row>
                    {classroomProjects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
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
