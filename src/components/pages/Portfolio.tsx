import '../../style/App.css';
import Project from "../Project";
import {projects} from "../../constants/projects.js";

const Portfolio = () => {
    return (
        <div
            id="portfolio"
            className="Section"
        >
            <div className="Portfolio">
                <div className="decorated bottom-spaced">
                    <span><h1>Things I've worked on</h1></span>
                </div>
                <h3>Favorites</h3>
                <h3>Project Archives</h3>
                {projects.map((project: any) =>
                    <Project key={project.title}
                             project={project}
                             projectType={"web"} />
                )}
            </div>
        </div>
    );
}

export default Portfolio;
