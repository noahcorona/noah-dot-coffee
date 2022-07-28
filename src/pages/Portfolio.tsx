import '../res/style/App.css';
import Project from "../components/portfolio/Project";
import {projects} from "../constants/projects.js";

const Portfolio = () => {
    const {web, mobile, embedded, ml, media} = projects;

    return (
        <div className="Body">
            <h1 id="web">Web</h1>
            {web.map((project: any) =>
                <Project key={project.title}
                         project={project}
                         projectType={"web"} />
            )}
            <h1 id="mobile">Mobile Apps</h1>
            {mobile.map((project: any) =>
                <Project key={project.title} project={project} projectType={"mobile"} />
            )}
            <h1 id="embedded">Embedded Systems</h1>
            {embedded.map((project: any) =>
                <Project key={project.title} project={project} projectType={"embedded"} />
            )}
            <h1 id="ml">Machine Learning</h1>
            {ml.map((project: any) =>
                <Project key={project.title} project={project} projectType={"ml"} />
            )}
            <h1 id="media">Multimedia Processing</h1>
            {media.map((project: any) =>
                <Project key={project.title} project={project} projectType={"media"} />
            )}
        </div>
    );
}

export default Portfolio;
