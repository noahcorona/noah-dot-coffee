import '../style/Portfolio.css';
import {BsGithub} from 'react-icons/bs';
import {Col, Container, Row} from 'react-bootstrap';
import {IoIosImages} from '@react-icons/all-files/io/IoIosImages';
import {BsBoxArrowUpRight} from '@react-icons/all-files/bs/BsBoxArrowUpRight';

const ProjectSmall = (props: any) => {
  return (
    <Container className="top-spaced bottom-spaced">
      <Row className="gap-2">
        <Col xs={1} sm={1} md={1} lg={1} xl={1} className="text-center">
          <h6>{props.project.year}</h6>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2} className="text-center">
          <h5>{props.project.title}</h5>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} className="text-center">
          <p>{props.project.description}</p>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3} className="text-center">
          {
            Array.from(props.project.stack).map((item: any) => (
              <div className="Project-Row-Stack-Item" key={item}>
                {item}
              </div>
            ))
          }
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1} className="text-center">
          <div>
            <a
              className="Project-Row-Icon-Link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                props.setGalleryActiveProject(props.project);
              }}
            >
              <IoIosImages />
            </a>
            {props.project.github_link &&
                <a
                  className="Project-Row-Icon-Link"
                  href={props.project.github_link}
                >
                  <BsGithub />
                </a>
            }
            {props.project.demo_link &&
                <a
                  className="Project-Row-Icon-Link"
                  href={props.project.demo_link}
                >
                  <BsBoxArrowUpRight />
                </a>
            }
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectSmall;
