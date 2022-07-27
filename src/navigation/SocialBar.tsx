import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin"
import {useContext} from "react";
import {MouseContext} from "../providers/MouseContext";

const SocialBar = () => {
    const { cursorChangeHandler } = useContext(MouseContext);

    return (
        <div className="social-bar">
            <a href="https://github.com/noahcorona"
               onMouseEnter={() => cursorChangeHandler("hovered")}
               onMouseLeave={() => cursorChangeHandler("")}
            >
                <AiFillGithub color="#eee" size="2em" />
            </a>
            <a href="https://www.linkedin.com/in/noahcorona/"
               onMouseEnter={() => cursorChangeHandler("hovered")}
               onMouseLeave={() => cursorChangeHandler("")}
            >
                <AiFillLinkedin color="#eee" size="2em" />
            </a>
        </div>
    )
}

export default SocialBar;
