import '../style/ProjectCard.css'

const ProjectCard = (props: { project: any; }) => {
    const {project} = props;

    return (
        <div className="card-container">
            <h3>{project.title}</h3>
            <h4>{project.description}</h4>
            {
                Array.from(project.stack).map((item: any) => (
                    <div key={item}>
                        {item}
                    </div>
                ))
            }
            {
                Array.from(project.keywords).map((keyword: any) => (
                    <div key={keyword}>
                        {keyword}
                    </div>
                ))
            }
        </div>
    )
}

export default ProjectCard;
