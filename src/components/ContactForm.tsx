import React, { useState } from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {submitButtonStyle, submittedButtonStyle, textFieldStyle} from "../style/inputStyles";

const ContactForm = () => {
    const [status, setStatus] = useState("Send");

    async function handleSubmit(e: any) {
        e.preventDefault();
        setStatus('Sent');
        console.log(status);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <TextField type="text"
                           id="name"
                           placeholder="Name *"
                           variant="outlined"
                           sx={textFieldStyle}
                           required />
                <TextField type="email"
                           id="email"
                           placeholder="Email address *"
                           variant="outlined"
                           sx={textFieldStyle}
                           required />
                <TextField type="text"
                           id="company"
                           placeholder="Company"
                           variant="outlined"
                           sx={textFieldStyle} />
            </div>
            <div>
                <TextField type="text"
                           id="message"
                           placeholder="Enter your message here"
                           variant="outlined"
                           sx={textFieldStyle}
                           fullWidth
                           required />
            </div>
            <Button type="submit" sx={status === "Sent" ? submittedButtonStyle : submitButtonStyle}>
                {status}
            </Button>
        </form>
    );
};

export default ContactForm;
