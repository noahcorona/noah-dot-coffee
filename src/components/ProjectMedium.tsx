import '../style/Portfolio.css';
import {IoIosImages} from '@react-icons/all-files/io/IoIosImages';
import {BsGithub} from 'react-icons/bs';
import {BsBoxArrowUpRight} from '@react-icons/all-files/bs/BsBoxArrowUpRight';

const ProjectMedium = (props: any) => {
  return (
    <div className="Project-Card-Container">
      <div className="Project-Card-Content">
        <h4 className="Project-Card-Title">
          {'+ ' + props.project.title}
        </h4>
        <h4 className="Project-Card-Subtitle">
          {props.project.wasFor + ' (' + props.project.year + ')'}
        </h4>
        <p>{props.project.description}</p>
        <div className="Project-Card-Stack-Area">
          {
            Array.from(props.project.stack).map((item: any) => (
              <span key={item}>
                {item + ' '}
              </span>
            ))
          }
        </div>
      </div>
      <div className="Project-Card-Icon-Link">
        <a
          className="Project-Row-Icon-Link"
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
              className="Project-Row-Icon-Link"
              href={props.project.github_link}
            >
              <BsGithub />
            </a>
        }
        {props.project.demo_link &&
            <a
              className="Project-Row-Icon-Link"
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
