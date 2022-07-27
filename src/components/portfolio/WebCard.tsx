import '../../res/style/ProjectCard.css'

const WebCard = (props: { project: any; }) => {
    const {project} = props;

    return (
        <div className="card-container">
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

export default WebCard;
