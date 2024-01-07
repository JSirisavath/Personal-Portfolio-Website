import { Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

// This is the project card component that would be used for Projects.js components
export const ProjectCard = ({ id, title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        {/* Link to that specific project id which is handled by projectDetails component */}
        <Link to={`/projects/${id}`}>
          <img src={imgUrl} alt="project-thumbnail" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </Link>
      </div>
    </Col>
  );
};
