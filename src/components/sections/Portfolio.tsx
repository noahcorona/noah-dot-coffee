import Project from '../Project';
import {projects} from '../../constants/projects.js';
import {Col, Container, Row} from 'react-bootstrap';
import '../../style/App.css';
import '../../style/Portfolio.css';

const Portfolio = (props: { setGalleryActiveProject: any; }) => {
  /**
   * helper function to sort projects by year
   * @param {object} a - project A
   * @param {object} b - project B
   * @return {number} pos if a's year earlier than b,
   *                  0 if equal years,
   *                  neg if b's year earlier than a
   */
  function order(a: any, b: any) {
    return b.year - a.year;
  }

  return (
    <div
      id="portfolio"
      className="Section"
    >
      <div className="Portfolio">
        <div className="decorated bottom-spaced">
          <span>
            <h1>Things {'I\'ve'} worked on</h1>
          </span>
        </div>
        <h3>Favorites</h3>
        <h3>By Area</h3>
        <h3 className="bottom-spaced">Project Archive</h3>
        <Container className="top-spaced bottom-spaced">
          <Row className="gap-2">
            <Col xs={1} sm={1} md={1} lg={1} xl={1} className="text-center">
              <h5>Year</h5>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} className="text-center">
              <h5>Title</h5>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} className="text-center">
              <h5>Description</h5>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3} className="text-center">
              <h5>Tech Stack</h5>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1} xl={1} className="text-center">
              <h5>Links</h5>
            </Col>
          </Row>
        </Container>
        {
          projects.sort(order).map((project: any) =>
            <Project key={project.title}
              project={project}
              projectType={'web'}
              setGalleryActiveProject={props.setGalleryActiveProject}
            />,
          )
        }
      </div>
    </div>
  );
};

export default Portfolio;
