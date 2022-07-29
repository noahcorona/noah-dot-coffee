import {Link} from "react-router-dom";
import {useContext} from "react";
import {MouseContext} from "../../context/MouseContext";
import Button from "@mui/material/Button";

const NavItem = (props: { item: any; navHeight: number; }) => {
    const {item} = props;
    const { cursorChangeHandler } = useContext(MouseContext);

    return (
        <li className="nav-menu-item">
            <Link className="nav-button" to={item.destination}>
                <Button variant="outlined"
                        color="inherit"
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                        {item.title}
                </Button>
            </Link>
        </li>
    );
}

export default NavItem;
