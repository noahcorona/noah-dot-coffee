import {Link, To} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {useContext, useState} from "react";
import {MouseContext} from "../../context/MouseContext";
import Button from "@mui/material/Button";
import {navButtonStyle} from "../../style/inputStyles";

const NavItem = (props: { item: any; navHeight: number; }) => {
    const {item} = props;
    const { cursorChangeHandler } = useContext(MouseContext);

    return (
        <li className="nav-menu-item">
            <Button variant="outlined"
                    sx={navButtonStyle}
                    onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}>
                <Link to={item.destination}>
                    {item.title}
                </Link>
            </Button>
        </li>
    );
}

export default NavItem;
