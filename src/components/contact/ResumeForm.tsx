import React, { useState } from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {submitButtonStyle, textFieldStyle} from "../../pages/Contact";

const ResumeForm = () => {
    const [status, setStatus] = useState("Send");

    async function handleSubmit(e: any) {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <TextField className="contact-text-field"
                           type="text"
                           id="name"
                           placeholder="Name *"
                           variant="outlined"
                           sx={textFieldStyle}
                           required />
                <TextField className="contact-text-field"
                           type="email"
                           id="email"
                           placeholder="Email address *"
                           variant="outlined"
                           sx={textFieldStyle}
                           required />
                <TextField className="contact-text-field"
                           type="text"
                           id="company"
                           placeholder="Company"
                           variant="outlined"
                           sx={textFieldStyle} />
            </div>
            <Button type="submit" sx={submitButtonStyle}>
                {status}
            </Button>
        </form>
    );
};

export default ResumeForm;
