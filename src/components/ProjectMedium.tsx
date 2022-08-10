import '../style/Portfolio.css';
import {IoIosImages} from '@react-icons/all-files/io/IoIosImages';
import {BsGithub} from 'react-icons/bs';
import {BsBoxArrowUpRight} from '@react-icons/all-files/bs/BsBoxArrowUpRight';

const ProjectMedium = (props: any) => {
  return (
    <div className="project-medium-card-wrapper">
      <div className="project-medium-card">
        <div className="d-flex justify-content-between">
          <h4>
            {'+ ' + props.project.title}
          </h4>
          <h4>
            {props.project.year}
          </h4>
        </div>
        <p>{props.project.description}</p>
        <div className="stack-area">
          {
            Array.from(props.project.stack).map((item: any) => (
              <span key={item}>
                {item + ' '}
              </span>
            ))
          }
        </div>
      </div>
      <div className="card-links">
        <a
          className="web-link"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            props.setGalleryActiveProject(props.project);
          }}
        >
          <IoIosImages />
        </a>
        {props.project.github_link &&
            <a
              className="web-link"
              href={props.project.github_link}
            >
              <BsGithub />
            </a>
        }
        {props.project.demo_link &&
            <a
              className="web-link"
              href={props.project.demo_link}
            >
              <BsBoxArrowUpRight />
            </a>
        }
      </div>
    </div>
  );
};

export default ProjectMedium;
