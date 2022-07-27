import '../../res/style/ProjectCard.css'
import WebCard from "./WebCard";
import MobileCard from "./MobileCard";
import EmbeddedCard from "./EmbeddedCard";
import MLCard from "./MLCard";
import MediaCard from "./MediaCard";

const ProjectBody = (props: { projectType: any; project: any; }) => {
    switch(props.projectType) {
        case "web":
            return <WebCard project={props.project} />
        case "mobile":
            return <MobileCard project={props.project} />
        case "embedded":
            return <EmbeddedCard project={props.project} />
        case "ml":
            return <MLCard project={props.project} />
        case "media":
            return <MediaCard project={props.project} />
        default:
            return <div />
    }
}

const Project = (props: { project: any; projectType: any; }) => {
    return (
        <div className="project">
            <div className="project-left">
                <div className="card-container">
                    <h3>{props.project.title}</h3>
                    <h4>{props.project.description}</h4>
                    <div>
                        {props.project.demo_link ? (
                            <h4>{props.project.demo_link}</h4>
                        ) : (
                            <div />
                        )}
                    </div>
                    <div>
                        {props.project.github_link ? (
                            <h4>{props.project.github_link}</h4>
                        ) : (
                            <div />
                        )}
                    </div>
                    <div>
                        {Array.from(props.project.stack).map((item: any) => (
                            <span key={item}>
                                {item}
                            </span>
                        ))}
                    </div>
                    <div>
                        {Array.from(props.project.keywords).map((keyword: any) => (
                            <span key={keyword}>
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="project-right">
                <ProjectBody project={props.project}
                             projectType={props.projectType}
                />
            </div>
        </div>
    )
}

export default Project;
