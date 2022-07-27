import '../style/App.css';
import {
    projects_mobile,
    projects_web,
    projects_embedded,
    projects_ml,
    projects_media
} from "../constants/projects.js";
import ProjectCard from "../components/ProjectCard";
import WebProjectDisplay from "../components/WebProjectDisplay";

const Portfolio = () => {
    return (
        <div className="Body">
            <h1>Portfolio</h1>
            <h2 id="web">Web</h2>
            {projects_web.map((project: any) =>
                <div className="project">
                    <div className="project-left">
                        <ProjectCard key={project.title} project={project} />
                    </div>
                    <div className="project-right">
                        <WebProjectDisplay project={project} />
                    </div>
                </div>
            )}
            <h2 id="mobile">Mobile Apps</h2>
            {projects_mobile.map((project: any) =>
                <ProjectCard key={project.title} project={project} />
            )}
            <h2 id="embedded">Embedded Systems</h2>
            {projects_embedded.map((project: any) =>
                <ProjectCard key={project.title} project={project} />
            )}
            <h2 id="ml">Machine Learning</h2>
            {projects_ml.map((project: any) =>
                <ProjectCard key={project.title} project={project} />
            )}
            <h2 id="media">Multimedia Processing</h2>
            {projects_media.map((project: any) =>
                <ProjectCard key={project.title} project={project} />
            )}
        </div>
    );
}

export default Portfolio;
