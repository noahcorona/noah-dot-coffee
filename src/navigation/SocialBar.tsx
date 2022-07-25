import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin"

function SocialBar() {
    return (
        <div className="social-bar">
            <a href="https://github.com/noahcorona">
                <AiFillGithub
                    color="#eee"
                    size="2em"
                />
            </a>
            <a href="https://www.linkedin.com/in/noahcorona/">
                <AiFillLinkedin
                    color="#eee"
                    size="2em"
                />
            </a>
        </div>
    )
}

export default SocialBar;
