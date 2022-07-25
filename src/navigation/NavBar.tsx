import '../style/Navigation.css';
import navigation from "../constants/navigation";
import NavItem from "./NavItem";
import SocialBar from "./SocialBar";
import logo from "../coffee.png";

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="nav-content">
                <div className="nav-left">
                    <text className="nav-logo-text">Noah Corona</text>
                    <a href="https://www.buymeacoffee.com/4IeSH91kr">
                        <div className="nav-logo-container">
                            <img src={logo} className="nav-logo" />
                        </div>
                    </a>
                </div>
                <div className="nav-right">
                    <SocialBar />
                    <nav className="nav-container">
                        <ul className="nav-menu">
                            {navigation.map((item) =>
                                <NavItem item={item} />
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
