import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProjectCard = ({
  id,
  title,
  techStackTitle,
  imgUrl,
  GHSourceCode,
  description,
}) => {
  return (
    <Col sm={6} md={4}>
      <div className="cardContainer">
        <div className="proj-box">
          <div
            className="card-img"
            style={{ backgroundImage: `url(${imgUrl})` }}
          ></div>
          <div className="proj-content">
            <div className="tech-stack-header-title">Tech Stacks</div>
            <div className="tech-stack">{techStackTitle}</div>

            <h2 className="proj-title">{title}</h2>
            <p className="proj-description">{description}</p>
          </div>
          <div className="proj-actions">
            <Link to={`/projects/${id}`} className="proj-detail-btn">
              project details
            </Link>
            <a
              href={GHSourceCode}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              github
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
