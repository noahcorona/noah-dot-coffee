import '../style/Portfolio.css'
import Carousel from "./Carousel";
import {useState} from "react";
import {BsFillArrowUpRightSquareFill, BsGithub} from "react-icons/bs";
import {Badge, Col, Container, Row} from "react-bootstrap";

const Project = (props: any) => {
    return (
        <Container className="bottom-spaced">
            <Row className="justify-content-md-center">
                <Col sm={11}>
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
                <Col sm={1}>
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
    )
}

export default Project;
