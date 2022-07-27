import React, {useContext} from "react";
import useMousePosition from "../context/UseMousePosition";
import {MouseContext} from "../context/MouseContext";
import '../res/style/cursor.css';

const Cursor = () => {
    const { cursorType } = useContext(MouseContext);
    const { x, y } = useMousePosition();
    return (
        <div
            className={`cursor ${cursorType}`}
            style={{ left: `${x}px`, top: `${y}px` }}
        />
    );
};
export default Cursor;
