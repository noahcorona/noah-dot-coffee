import '../style/App.css';
import {
    projects_mobile,
    projects_web,
    projects_embedded,
    projects_ml,
    projects_media
} from "../constants/projects.js";
import ProjectCard from "../components/ProjectCard";

function Portfolio() {
    return (
        <div className="Body">
            <h1>Portfolio</h1>
            <h2>Web</h2>
            {projects_web.map((project: any) =>
                <ProjectCard key={project.title} project={project} />
            )}
            <h2>Mobile Apps</h2>
            {projects_mobile.map((project: any) =>
                <ProjectCard key={project.title} project={project} />
            )}
            <h2>Embedded Systems</h2>
            {projects_embedded.map((project: any) =>
                <ProjectCard key={project.title} project={project} />
            )}
            <h2>Machine Learning</h2>
            {projects_ml.map((project: any) =>
                <ProjectCard key={project.title} project={project} />
            )}
            <h2>Multimedia Processing</h2>
            {projects_media.map((project: any) =>
                <ProjectCard key={project.title} project={project} />
            )}
        </div>
    );
}

export default Portfolio;
