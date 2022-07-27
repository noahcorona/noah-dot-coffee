import '../res/style/App.css';
import ContactForm from "../components/contact/ContactForm";

export const textFieldStyle = {
    border: '1px #fff solid',
    borderRadius: '0.25em',
    color: '#fff',
    margin: '0 1em 1em 0',
    '*': {
        color: '#fff',
    }
}

export const submitButtonStyle = {
    color: '#98ce86',
    backgroundColor: 'rgba(45,45,45,0.8)',
    border: '1px #98ce86 solid',
    padding: '0.5em 1em 0.5em 1em',
    'a': {
        color: '#fff',
        textDecoration: 'none',
    },
    'a:visited': {
        color: '#fff',
        textDecoration: 'none',
    },
    ':hover': {
        border: '1px #98CE86 solid',
        color: '#fff',
        backgroundColor: '#68935A',
    },
}

const Contact = () => {
    return (
        <div className="Body">
            <h1>Feedback and Inquiries</h1>
            <ContactForm />
        </div>
    );
}

export default Contact;
