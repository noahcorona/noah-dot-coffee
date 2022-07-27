import '../style/ProjectCard.css'

const WebProjectDisplay = (props: { project: any; }) => {
    const {project} = props;

    return (
        <div className="card-container">
            <h3>{project.demo_link}</h3>
            <h4>{project.github_link}</h4>
            {
                Array.from(project.images).map((item: any) => (
                    <div key={item}>
                        {item}
                    </div>
                ))
            }
        </div>
    )
}

export default WebProjectDisplay;
