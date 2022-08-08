import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import '../../style/App.css';
import '../../style/Contact.css';

const Contact = () => {
    const [status, setStatus] = useState("Send");

    async function handleSubmit(e: any) {
        e.preventDefault();
        setStatus('Sent');
        console.log(status);
    }

    return (
        <div
            id="contact"
            className="Section"
        >
            <div className="Contact">
                <div className="decorated bottom-spaced">
                    <span><h1>Feedback & Inquiries</h1></span>
                </div>
                <Form onSubmit={handleSubmit}>
                    <div className="d-flex gap-3 bottom-spaced">
                        <Form.Control
                            id="name"
                            type="text"
                            placeholder="Name *"
                            required
                        />
                        <Form.Control
                            id="email"
                            type="email"
                            placeholder="Email address *"
                            required
                        />
                        <Form.Control
                            id="company"
                            type="text"
                            placeholder="Company"
                        />
                    </div>
                    <Form.Control
                        className="bottom-spaced"
                        as="textarea"
                        id="message"
                        type="text"
                        placeholder="Your feedback is greatly appreciated!"
                        required
                    />
                    <Button type="submit">
                        {status}
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Contact;
