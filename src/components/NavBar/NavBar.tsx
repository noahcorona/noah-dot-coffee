import '../../style/Navigation.css';
import navigation from "../../constants/navigation";
import NavItem from "./NavItem";
import SocialBar from "./SocialBar";
import {MouseContext} from "../../context/MouseContext";
import {useContext, useLayoutEffect, useRef} from "react";

interface IProps {
    height: number,
    setHeight: (height: number) => void,
}

const NavBar = (props: IProps) => {
    const { cursorChangeHandler } = useContext(MouseContext);
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!ref.current || !ref.current.clientHeight) {
            return;
        }

        props.setHeight(ref.current.clientHeight);
    }, []);

    return (
        <div ref={ref} className="nav-bar">
            <div className="nav-content">
                    <a href="/"
                       className="nav-logo-text"
                       onMouseEnter={() => cursorChangeHandler("hovered")}
                       onMouseLeave={() => cursorChangeHandler("")}
                    >
                        noah.coffee
                    </a>
                    <SocialBar />
                    <nav className="nav-container">
                        <ul className="nav-menu">
                            {navigation.map((item) =>
                                <NavItem key={item.title}
                                         item={item}
                                         navHeight={props.height} />
                            )}
                        </ul>
                    </nav>
            </div>
        </div>
    )
}

export default NavBar;
