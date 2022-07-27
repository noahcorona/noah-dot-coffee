import '../../res/style/ProjectCard.css'
import WebCard from "./WebCard";
import MobileCard from "./MobileCard";
import EmbeddedCard from "./EmbeddedCard";
import MLCard from "./MLCard";
import MediaCard from "./MediaCard";

const ProjectCard = (props: { projectType: any; project: any; }) => {
    switch(props.projectType) {
        case "web":
            return <WebCard project={props.project} />
        case "mobile":
            return <MobileCard project={props.project} />
        case "embedded":
            return <EmbeddedCard project={props.project} />
        case "ml":
            return <MLCard project={props.project} />
        case "media":
            return <MediaCard project={props.project} />
        default:
            return <div />
    }
}

export default ProjectCard;
