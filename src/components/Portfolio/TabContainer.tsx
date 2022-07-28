import {Typography} from "@mui/material";

const TabContainer = (props: any) => {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

export default TabContainer;
