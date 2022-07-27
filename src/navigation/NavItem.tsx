import {Link, To} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {useState} from "react";

const NavItem = (props: { item: any; }) => {
    const {item} = props;

    const [dropdown, setDropdown] = useState(false);

    function showDropdown() {
        if (item.submenu) setDropdown(true)
    }

    function hideDropdown() {
        if (item.submenu) setDropdown(false)
    }

    return (
        <li className="nav-menu-item">
            <Link className="nav-item-text"
                  to={item.destination}
                  onMouseEnter={() => showDropdown()}
                  onMouseLeave={() => hideDropdown()}
            >
                {item.title}
            </Link>
            {dropdown ?
                (
                    <ul className="nav-submenu"
                        onMouseEnter={() => showDropdown()}
                        onMouseLeave={() => hideDropdown()}
                    >
                        {item.submenu.map((submenuItem: { destination: To; title: string; }) => (
                            <li key={submenuItem.title} className="nav-submenu-item">
                                <HashLink className="nav-item-text"
                                      to={submenuItem.destination}>
                                    {submenuItem.title}
                                </HashLink>
                            </li>
                        ))}
                    </ul>
                ) : <></>
            }
        </li>
    );
}

export default NavItem;
