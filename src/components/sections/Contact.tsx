import React, {useRef, useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import '../../style/App.css';
import '../../style/Contact.css';
import emailCredentials from '../../constants/emailCredentials';
import emailjs from '@emailjs/browser';

const CONTACT_EMAIL = 'noahcorona@gmail.com';

const Contact = () => {
  const [status, setStatus] = useState('Send');
  const form = useRef<any>();

  /**
   * to-do: function that sends contain info to the requested email
   * @param {event} e
   */
  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus('Sent');
    console.log(status, CONTACT_EMAIL);

    emailjs.sendForm(
        emailCredentials.SERVICE_ID,
        emailCredentials.TEMPLATE_ID,
        form.current,
        '4PzI-riqR7fAvxPnW',
    )
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
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
        <Form
          ref={form}
          onSubmit={handleSubmit}
        >
          <div className="d-flex gap-3 bottom-spaced">
            <Form.Control
              name="name"
              type="text"
              placeholder="Name *"
              required
            />
            <Form.Control
              name="email"
              type="email"
              placeholder="Email address *"
              required
            />
            <Form.Control
              name="company"
              type="text"
              placeholder="Company"
            />
          </div>
          <Form.Control
            className="bottom-spaced"
            as="textarea"
            name="message"
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
};

export default Contact;
