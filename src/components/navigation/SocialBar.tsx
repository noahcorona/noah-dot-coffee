import {useContext} from "react";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin"
import {MouseContext} from "../../context/MouseContext";
import {SiBuymeacoffee} from "@react-icons/all-files/si/SiBuymeacoffee";

const SocialBar = () => {
    const { cursorChangeHandler } = useContext(MouseContext);

    return (
        <div className="social-bar">
            <a href="https://github.com/noahcorona"
               className="social-icon-link"
               onMouseEnter={() => cursorChangeHandler("hovered")}
               onMouseLeave={() => cursorChangeHandler("")}
            >
                <AiFillGithub color="#eee" size="2em" />
            </a>
            <a href="https://linkedin.com/in/noahcorona"
               className="social-icon-link"
               onMouseEnter={() => cursorChangeHandler("hovered")}
               onMouseLeave={() => cursorChangeHandler("")}
            >
                <AiFillLinkedin color="#eee" size="2em" />
            </a>
            <a href="buymeacoffee.com/4IeSH91kr"
               className="social-icon-link"
               onMouseEnter={() => cursorChangeHandler("hovered")}
               onMouseLeave={() => cursorChangeHandler("")}
            >
                <SiBuymeacoffee color="#eee" size="2em" />
            </a>
        </div>
    )
}

export default SocialBar;
