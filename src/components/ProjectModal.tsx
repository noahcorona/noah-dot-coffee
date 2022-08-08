import {DetailedHTMLProps, HTMLAttributes, RefObject, ReactNode, useState} from "react";
import {Badge, Button, Modal, ModalProps} from "react-bootstrap";
import {Omit, BsPrefixProps} from "react-bootstrap/esm/helpers";
import Carousel from "./Carousel";

const ProjectModal = (props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode; }) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="project">
                    <div className="d-block justify-content-between">
                        <div>
                            <h3>{props.project.title}</h3>
                            <p>{props.project.description}</p>
                                <Carousel media={props.project.media}/>
                        </div>
                        <div>
                            <h3>Stack</h3>
                            <div className="chip-container">
                                {Array.from(props.project.stack).map((item: any) => (
                                    <Badge pill className="info-badge" key={item}>
                                        {item}
                                    </Badge>
                                ))}
                            </div>
                                <>
                                  <h3>Keywords</h3>
                                  <div className="chip-container">
                                      {Array.from(props.project.keywords).map((keyword: any) => (
                                          <Badge pill className="info-badge" key={keyword}>
                                              {keyword}
                                          </Badge>
                                      ))}
                                  </div>
                                    {props.project.demo_link &&
                                        <a className="web-link" href={props.project.demo_link}>
                                          Live demo
                                        </a>
                                    }
                                    {props.project.github_link &&
                                        <a className="web-link" href={props.project.github_link}>
                                          On Github
                                        </a>
                                    }
                                </>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProjectModal
