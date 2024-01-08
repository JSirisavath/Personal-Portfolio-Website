// The 'useParams' hook from router dom helps retrieve the 'id' parameter from the url, and then fetch or determine the specifics of project details to display
import { useParams } from 'react-router-dom';

// Imports personal projects data
import {
  individualProjects,
  collaborativeProjects,
  classroomProjects,
} from '../personalProjects/personalProjectsData';
import { Container, Row, Col, Ratio } from 'react-bootstrap';

// All projects combined
const allPersonalProjects = [
  ...individualProjects,
  ...collaborativeProjects,
  ...classroomProjects,
];

export const ProjectDetail = () => {
  let { id } = useParams();

  // Find and go through each project in the all projects array, check if that project's 'id' and converted to string, is strictly equal to the id that is being requested. If true, return it to be that specific project's data.
  const specificProject = allPersonalProjects.find(
    (project) => project.id.toString() === id
  );

  // If there is a specific project found from the ID, then render that project details (Image, description, videos, GH link, etc), else say project not found
  return specificProject ? (
    <section className="projectDetailPage">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} className="text-center">
            <div className="Project_title_container">
              <div className="Project_title_box">
                <h2 className="Project_title">{specificProject.title}</h2>
              </div>
            </div>
            {/* Video box outline to showcase the video demoing the project */}
            {/* video-container */}
            <div className="video-container">
              <Ratio aspectRatio="16x9">
                {/* Video demo showcasing the video */}
                <iframe
                  className="video"
                  src={specificProject.video}
                  title={specificProject.title}
                  allowfullscreen
                ></iframe>
              </Ratio>
            </div>
            {/* <p>{specificProject.description}</p> */}
          </Col>
        </Row>
      </Container>
    </section>
  ) : (
    // Else return project not found page
    <div>Project Not Found! </div>
  );
};
