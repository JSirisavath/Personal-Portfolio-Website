// The 'useParams' hook from router dom helps retrieve the 'id' parameter from the url, and then fetch or determine the specifics of project details to display
import { useParams } from 'react-router-dom';

// Imports personal projects data
import {
  individualProjects,
  collaborativeProjects,
  classroomProjects,
} from '../personalProjects/personalProjectsData';
import { Container, Row, Col } from 'react-bootstrap';

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
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h2>{specificProject.title}</h2>
            <img src={specificProject.imgUrl} alt={specificProject.title} />
            <p>{specificProject.description}</p>
          </Col>
        </Row>
      </Container>
    </section>
  ) : (
    // Else return project not found page
    <div>Project Not Found! </div>
  );
};
