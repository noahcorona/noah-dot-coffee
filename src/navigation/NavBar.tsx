import '../style/Navigation.css';
import navigation from "../constants/navigation";
import NavItem from "./NavItem";
import SocialBar from "./SocialBar";
import logo from "../res/coffee.png";

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="nav-content">
                <div className="nav-left">
                    <p className="nav-logo-text">Noah Corona</p>
                    <a href="https://www.buymeacoffee.com/4IeSH91kr">
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
                                <NavItem key={item.title} item={item} />
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
