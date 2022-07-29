import '../../style/ProjectCard.css'
import {Chip} from "@mui/material";
import Carousel from "./Carousel";

const Project = (props: { project: any; projectType: any; }) => {
    return (
        <div className="project">
            <div className="project-left">
                <div className="summary-container">
                    <h3>{props.project.title}</h3>
                    <h4>{props.project.description}</h4>
                    <div className="chip-container">
                        <h4>Stack</h4>
                        {Array.from(props.project.stack).map((item: any) => (
                            <Chip key={item}
                                  label={item}
                                  size="small"
                                  sx={{color: '#fff'}}
                                  variant="outlined" />
                        ))}
                    </div>
                    <div>
                        <h4>Keywords</h4>
                        {Array.from(props.project.keywords).map((keyword: any) => (
                            <Chip key={keyword}
                                  label={keyword}
                                  size="small"
                                  sx={{color: '#fff'}}
                                  variant="outlined" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="project-right">
                    {props.project.demo_link &&
                        <a className="web-link" href={props.project.demo_link}>
                            View the live demo
                        </a>
                    }
                    {props.project.github_link &&
                        <a className="web-link" href={props.project.github_link}>
                            View on Github
                        </a>
                    }
                <Carousel media={props.project.media} />
            </div>
        </div>
    )
}

export default Project;
