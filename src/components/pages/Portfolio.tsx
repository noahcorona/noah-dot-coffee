import Project from '../Project';
import {projects} from '../../constants/projects.js';
import '../../style/App.css';
import '../../style/Portfolio.css';

const Portfolio = () => {
  /**
   * helper function to sort projects by year
   * @param {object} a - project A
   * @param {object} b - project B
   * @return {number} pos if a's year earlier than b,
   *                  0 if equal years,
   *                  neg if b's year earlier than a
   */
  function order(a: any, b: any) {
    return b.year - a.year;
  }

  return (
    <div
      id="portfolio"
      className="Section"
    >
      <div className="Portfolio">
        <div className="decorated bottom-spaced">
          <span>
            <h1>Things {'I\'ve'} worked on</h1>
          </span>
        </div>
        <h3>Favorites</h3>
        <h3>By Area</h3>
        <h3 className="bottom-spaced">Project Archive</h3>
        {projects.sort(order).map((project: any) =>
          <Project key={project.title}
            project={project}
            projectType={'web'} />,
        )}
      </div>
    </div>
  );
};

export default Portfolio;
