import '../style/Portfolio.css';

const ProjectMedium = (props: any) => {
  return (
    <div className="project-medium">
      <h5>{props.project.title}</h5>
      {
        Array.from(props.project.stack).map((item: any) => (
          <span className="info-badge" key={item}>
            {item}
          </span>
        ))
      }
      <p>{props.project.description}</p>
    </div>
  );
};

export default ProjectMedium;
