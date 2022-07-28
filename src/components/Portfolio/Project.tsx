import '../../style/ProjectCard.css'
import ProjectCard from "./Cards/ProjectCard";

const Project = (props: { project: any; projectType: any; }) => {
    return (
        <div className="project">
            <div className="project-left">
                <div className="summary-container">
                    <h3>{props.project.title}</h3>
                    <h4>{props.project.description}</h4>
                    <div>
                        {props.project.demo_link && <h4>{props.project.demo_link}</h4>}
                    </div>
                    <div>
                        {props.project.github_link && <h4>{props.project.github_link}</h4>}
                    </div>
                    <div>
                        {Array.from(props.project.stack).map((item: any) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                    <div>
                        {Array.from(props.project.keywords).map((keyword: any) => (
                            <span key={keyword}>{keyword}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="project-right">
                <ProjectCard project={props.project}
                             projectType={props.projectType} />
            </div>
        </div>
    )
}

export default Project;
