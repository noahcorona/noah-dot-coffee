import '../../res/style/Navigation.css';
import navigation from "../../constants/navigation";
import NavItem from "./NavItem";
import SocialBar from "./SocialBar";
import logo from "../../res/coffee.png";
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
                <div className="nav-left">
                    <a href="/"
                       className="nav-logo-text"
                       onMouseEnter={() => cursorChangeHandler("hovered")}
                       onMouseLeave={() => cursorChangeHandler("")}
                    >
                        Noah Corona
                    </a>
                    <a href="https://www.buymeacoffee.com/4IeSH91kr"
                       onMouseEnter={() => cursorChangeHandler("hovered")}
                       onMouseLeave={() => cursorChangeHandler("")}
                    >
                        <div className="nav-logo-container">
                            <img alt="Buy me a coffee" src={logo} className="nav-logo" />
                        </div>
                    </a>
                </div>
                <div className="nav-right">
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
        </div>
    )
}

export default NavBar;
