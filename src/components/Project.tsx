import '../style/Portfolio.css';
import {BsFillArrowUpRightSquareFill, BsGithub} from 'react-icons/bs';
import {Col, Container, Row} from 'react-bootstrap';

const Project = (props: any) => {
  return (
    <Container className="bottom-spaced">
      <Row className="gap-2">
        <Col className="align-self-center">
          <h6>{props.project.year}</h6>
        </Col>
        <Col xs={8} md={9} lg={9} xl={10}>
          <div className="project">
            <div className="d-flex justify-content-between">
              <h3>{props.project.title + '  '}</h3>
              <div className="project-tags">
                {
                  Array.from(props.project.stack).map((item: any) => (
                    <span className="info-badge" key={item}>
                      {item}
                    </span>
                  ))
                }
              </div>
            </div>
            <div className="d-flex justify-content-between gap-4">
              <p>{props.project.description}</p>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            {props.project.demo_link &&
                            <a className="web-link" href={props.project.demo_link}>
                              <BsFillArrowUpRightSquareFill />
                            </a>
            }
            {props.project.github_link &&
                            <a className="web-link" href={props.project.github_link}>
                              <BsGithub />
                            </a>
            }
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
