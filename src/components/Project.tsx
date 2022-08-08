import '../style/Project.css'
import Carousel from "./Carousel";
import {useState} from "react";
import {Badge} from "react-bootstrap";

const Project = (props: any) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className="project"
             onClick={() => {
                 if(!expanded) setExpanded(true)
             }}
        >
            <div className="d-block justify-content-between">
                <div>
                    <h3>{props.project.title}</h3>
                    <p>{props.project.description}</p>
                    {expanded &&
                        <Carousel media={props.project.media}/>
                    }
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
                    {expanded &&
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
                    }
                </div>
            </div>
        </div>
    )
}

export default Project;
