import {Link, To} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {useContext, useState} from "react";
import {MouseContext} from "../../context/MouseContext";
import Button from "@mui/material/Button";

const navButtonStyle = {
    color: 'white',
    backgroundColor: 'rgba(45,45,45,0.8)',
    border: "1px rgba(255,255,255,0.7) solid",
    "a": {textDecoration: 'none'},
    "a:visited": {
        color: 'white'
    },
    ":hover": {
        border: "1px #aaa solid",
    },
}

const NavItem = (props: { item: any; navHeight: number; }) => {
    const {item} = props;
    const { cursorChangeHandler } = useContext(MouseContext);
    const [dropdown, setDropdown] = useState(false);

    function scrollWithOffset(el: HTMLElement) {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: yCoordinate - props.navHeight, behavior: 'smooth' });
    }

    function showDropdown() {
        if (item.submenu) setDropdown(true)
    }

    function hideDropdown() {
        if (item.submenu) setDropdown(false)
    }

    return (
        <li className="nav-menu-item">
            <Button variant="outlined"
                    sx={navButtonStyle}
                    onMouseEnter={() => {
                        showDropdown();
                        cursorChangeHandler("hovered");
                    }}
                    onMouseLeave={() => {
                        hideDropdown();
                        cursorChangeHandler("");
                    }}>
                <Link to={item.destination}>
                    {item.title}
                </Link>
            </Button>
            {dropdown ?
                (
                    <ul className="nav-submenu"
                        onMouseEnter={() => showDropdown()}
                        onMouseLeave={() => hideDropdown()}
                    >
                        {item.submenu.map((submenuItem: { destination: To; title: string; }) => (
                            <li key={submenuItem.title} className="nav-submenu-item">
                                <Button variant="outlined"
                                        sx={navButtonStyle}
                                        onMouseEnter={() => cursorChangeHandler("hovered")}
                                        onMouseLeave={() => cursorChangeHandler("")}>
                                    <HashLink smooth
                                              to={submenuItem.destination}
                                              scroll={el => scrollWithOffset(el)}
                                    >
                                        {submenuItem.title}
                                    </HashLink>
                                </Button>
                            </li>
                        ))}
                    </ul>
                ) : <></>
            }
        </li>
    );
}

export default NavItem;
