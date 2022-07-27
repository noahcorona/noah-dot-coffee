import '../res/style/App.css';
import Project from "../components/portfolio/Project";
import {projects} from "../constants/projects.js";

const Portfolio = () => {
    const {web, mobile, embedded, ml, media} = projects;

    return (
        <div className="Body">
            <h1>Portfolio</h1>
            <h2 id="web">Web</h2>
            {web.map((project: any) =>
                <Project key={project.title} project={project} projectType={"web"} />
            )}
            <h2 id="mobile">Mobile Apps</h2>
            {mobile.map((project: any) =>
                <Project key={project.title} project={project} projectType={"mobile"} />
            )}
            <h2 id="embedded">Embedded Systems</h2>
            {embedded.map((project: any) =>
                <Project key={project.title} project={project} projectType={"embedded"} />
            )}
            <h2 id="ml">Machine Learning</h2>
            {ml.map((project: any) =>
                <Project key={project.title} project={project} projectType={"ml"} />
            )}
            <h2 id="media">Multimedia Processing</h2>
            {media.map((project: any) =>
                <Project key={project.title} project={project} projectType={"media"} />
            )}
        </div>
    );
}

export default Portfolio;
