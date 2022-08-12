import React, {useRef, useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import emailCredentials from '../../constants/emailCredentials';
import emailjs from '@emailjs/browser';
import '../../style/App.css';
import '../../style/Contact.css';
// eslint-disable-next-line max-len
import {AiOutlineArrowRight} from '@react-icons/all-files/ai/AiOutlineArrowRight';

const Contact = (props: { windowSize: number; }) => {
  const [status, setStatus] = useState('Send');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef<any>();

  /**
   *
   * @param {event} e the form submission event
   */
  async function handleSubmit(e: any) {
    e.preventDefault();
    emailjs.sendForm(
        emailCredentials.SERVICE_ID,
        emailCredentials.TEMPLATE_ID,
        form.current,
        '4PzI-riqR7fAvxPnW',
    )
        .then((result) => {
          setStatus('Sent');
          console.log(e.target);
        }, (error) => {
          setStatus(error.text);
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
        {
          status === 'Sent' ? (
              <>
                <h4>
                  {'Thanks for reaching out!'}
                  <br /><br />
                  {'Here\'s a copy of your message:'}
                  <br />
                </h4>
                <h5><u>Name</u>{' ' + name}</h5>
                {email ? (
                  <>
                    <h5><u>E-mail Address</u>{' ' + email}</h5>
                  </>
                ) : <div />}
                {company ? (
                  <>
                    <h5><u>Company</u>{' ' + company}</h5>
                  </>
                ) : <div />}
                <h5><u>Body</u><p>{message}</p></h5>
              </>
          ) : (
              <Form
                ref={form}
                onSubmit={handleSubmit}
              >
                <div className={'gap-3 ' +
                    (props.windowSize > 800 ? 'd-flex' : '')}>
                  <Form.Control
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name *"
                    className="bottom-spaced"
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                  <Form.Control
                    name="email"
                    id="email"
                    type="email"
                    className="bottom-spaced"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email address"
                  />
                  <Form.Control
                    name="company"
                    id="company"
                    type="text"
                    className="bottom-spaced"
                    onChange={(event) => setCompany(event.target.value)}
                    placeholder="Company"
                  />
                </div>
                <Form.Control
                  className="bottom-spaced"
                  as="textarea"
                  rows={4}
                  name="message"
                  id="message"
                  type="text"
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Message body *"
                  required
                />
                <Button
                  type="submit"
                  bsPrefix="Contact-Form-Submit-Button"
                >
                  {'Send  '}
                  <AiOutlineArrowRight />
                </Button>
                {
                  status !== 'Send' && (
                    <>
                      <h4>Error</h4>
                      <p>{status}</p>
                    </>)
                }
              </Form>
          )
        }
      </div>
    </div>
  );
};

export default Contact;
