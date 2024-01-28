// The 'useParams' hook from router dom helps retrieve the 'id' parameter from the url, and then fetch or determine the specifics of project details to display
import { useParams } from 'react-router-dom';

import { getAPIBaseURL } from '../config';

// Button to direct users to GH Source code link
import Button from 'react-bootstrap/Button';

// GH logo for btn
import GithubLogo from '../assets/img/nav-icon2.svg';

import { Container, Row, Col, Ratio } from 'react-bootstrap';

import { useEffect, useState } from 'react';

export const ProjectDetail = () => {
  // Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
  const { id } = useParams();

  console.log('Project ID: ', id);

  const [project, setProject] = useState(null);

  const baseURL = getAPIBaseURL();

  useEffect(() => {
    if (id) {
      const fetchUrl = `${baseURL}/api/projects/${id}`;
      console.log('Making a request to:', fetchUrl); // Log the exact URL

      fetch(fetchUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          } else {
            return response.text(); // First convert to text to log raw response
          }
        })
        .then((text) => {
          console.log('Raw response:', text); // Log raw response text
          return JSON.parse(text); // Then parse text as JSON
        })
        .then((projectData) => {
          console.log('Project data:', projectData); // Log final data
          setProject(projectData);
        })
        .catch((error) => {
          console.error('Error fetching this project!', error);
        });
    }
  }, [baseURL, id]);

  if (!project) {
    return <div>Loading project...</div>;
  }

  // If there is a specific project found from the ID, then render that project details (Image, description, videos, GH link, etc), else say project not found
  return project ? (
    <section className="projectDetailPage">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} className="text-center">
            <div className="Project_title_container">
              <div className="Project_title_box">
                {/* Project Title */}
                <h2 className="Project_title">{project.title}</h2>
              </div>
            </div>
            {/* Project detail description */}
            <div className="descriptionContainer">
              <p id="projectDetailDescription">{project.description}</p>
            </div>

            {/* Video box outline to showcase the video demoing the project */}
            {/* video-container */}
            <div className="video-container">
              <Ratio aspectRatio="16x9">
                {/* Video demo showcasing the video */}
                <video
                  className="video"
                  src={project.video}
                  title={project.title}
                  autoPlay={false}
                  controls={true}
                  allowFullScreen
                  muted
                ></video>
              </Ratio>
            </div>

            {/* Tech Stacks Icons (These icons will show what tech stacks I've used for this project. Tech stack icons will be stored and retrieved based on  project details) */}

            <div className="techStacksContainer">
              <div className="techStacksRow">
                {/* Tech stacks calls are here for that project */}
              </div>
            </div>

            {/* Image carousel showcasing the project and their demo images */}

            {/* Link to Github  source code button */}
            <div className="ghButtonContainer">
              <div className="d-grid gap-2">
                <Button
                  className="Gh-project-btn"
                  variant="secondary"
                  size="lg"
                >
                  <img
                    id="GHLogoBtn"
                    src={GithubLogo}
                    alt="GH-Logo-For-Btn"
                    style={{
                      height: '25px',
                      marginLeft: '10px',
                      width: 'auto',
                      marginRight: '1rem',
                    }}
                  />
                  Github Repo Link
                </Button>
              </div>
            </div>

            {/* If there is a web-link, show another button here that directs users to that link */}
          </Col>
        </Row>
      </Container>
    </section>
  ) : (
    // Else return project not found page
    <div>Project Not Found! </div>
  );
};
