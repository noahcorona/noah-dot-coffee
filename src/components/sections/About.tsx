import Container from 'react-bootstrap/Container';
import '../../style/App.css';
import '../../style/About.css';
// eslint-disable-next-line max-len
import {AiOutlineArrowRight} from '@react-icons/all-files/ai/AiOutlineArrowRight';
import {BsBoxArrowUpRight} from '@react-icons/all-files/bs/BsBoxArrowUpRight';

const ContactShortcut = () => (
  <div className="About-Contact-Link-Container">
    <a
      href="#contact"
      className="About-Contact-Link"
    >
      <u>Hiring? Reach out</u>
      {'  '}
      <AiOutlineArrowRight />
    </a>
  </div>
);

const About = (props: {windowSize: number}) => {
  return (
    <div className="Section small-top-pad">
      <div className="decorated bottom-spaced">
        <span><h1>Noah Corona</h1></span>
      </div>
      <div className="d-flex gap-4 top-spaced">
        <div className="d-flex gap-4">
          <div className="About-Text">
            <h2>Software Engineer</h2>
            <p>
              {'I take pride in the software I build. Between ' +
                'professional, academic, and personal projects, ' +
                'my experience writing software spans over a decade. ' +
                'I\'m specializing in web and mobile development, ' +
                'and also enjoy working on embedded and machine ' +
                'learning projects. '
              }
            </p>
            {
              props.windowSize > 600 && <ContactShortcut />
            }
          </div>
          <img src="/me.jpeg" alt="me" className="Portrait" />
        </div>
      </div>
      {
        props.windowSize < 600 && <ContactShortcut />
      }
      <h3>Technologies I work with</h3>
      <Container fluid>
        <div className="technology-link-wrapper">
          <a
            href="#"
            className="technology-link"
          >
            {'> JavaScript (es6+)'}
          </a>
          <a
            href="#"
            className="technology-link"
          >
            {'> TypeScript'}
          </a>
          <a
            href="#"
            className="technology-link"
          >
            {'> Python'}
          </a>
        </div>
        <div className="technology-link-wrapper">
          <a
            href="#"
            className="technology-link"
          >{'> React.js'}
          </a>
          <a
            href="#"
            className="technology-link"
          >
            {'> MongoDB'}
          </a>
          <a
            href="#"
            className="technology-link"
          >
            {'> SQL'}
          </a>
        </div>
        <div className="technology-link-wrapper">
          <a
            href="#"
            className="technology-link"
          >
            {'> React Native'}
          </a>
          <a
            href="#"
            className="technology-link"
          >{'> Node.js'}
          </a>
          <a
            href="#"
            className="technology-link"
          >
            {'> Swift'}
          </a>
        </div>
        <div className="technology-link-wrapper">
          <a
            href="#"
            className="technology-link"
          >
            {'> C'}
          </a>
          <a
            href="#"
            className="technology-link"
          >{'> C#'}
          </a>
          <a
            href="#"
            className="technology-link"
          >{'> C++'}
          </a>
        </div>
      </Container>
      <h3>About Me</h3>
      <p className="bottom-spaced-lg">
        {
          'I recently graduated from UC, Santa Barbara ' +
          'with a B.S. in Computer Engineering. My ' +
          'interest in the field started in 2010, when ' +
          'I started exploring source code of video game ' +
          'modifications and websites. In the years between, I\'ve ' +
          'explored several areas of computer science and ' +
          'electrical engineering, and have been fortunate ' +
          'to work on impactful work with exemplary people.'
        }
      </p>
      <h3>{'People I\'ve Worked With'}</h3>
      <div className="associate-card-wrapper">
        <div className="associate-card">
          <div className="d-flex bottom-spaced
        top-spaced justify-content-between">
            <h5>{'Aptitude Medical Systems'}</h5>
            <a
              className="associate-site-link"
              href="https://aptitudemedical.com/"
            >
              <BsBoxArrowUpRight />
            </a>
          </div>
          <div className="d-inline-flex gap-4 bottom-spaced">
            <div>Santa Barbara, CA</div>
            <div>(2021, 2022)</div>
          </div>
          <p>
            {
              'During the 2021-2022 UCSB ECE Capstone course, I had the ' +
                'pleasure of working with some of the research scientists at ' +
                'Aptitude Medical Systems on the '
            }
            <a href="#">CUDA project</a>
            {
              '. I led a student project that aimed to produce portable, ' +
                'trustworthy, and timely digital test results for COVID-19 ' +
                'and coagulopathy using a unified device. Results are stored ' +
                'and shared in the cloud via a React Native app.'
            }
          </p>
        </div>
      </div>
      <div className="associate-card-wrapper">
        <div className="associate-card">
          <div className="d-flex bottom-spaced
        top-spaced justify-content-between">
            <h5>{'Powercon Engineering'}</h5>
            <a
              className="associate-site-link"
              href="https://powerconengineering.com/"
            >
              <BsBoxArrowUpRight />
            </a>
          </div>
          <div className="d-inline-flex gap-4 bottom-spaced">
            <div>Tustin, CA</div>
            <div>(2017, 2018, 2019)</div>
          </div>
          <p>
            {
              'As a project engineer intern at Powercon, I had the chance to ' +
              'work on projects that utilize programmable logic controllers ' +
              'and human-machine interfaces. I was fortunate to both work ' +
              'on an '
            }
            <a href="#">independent project</a>
            {' and contribute to '}
            <a href="#">{'Powercon\'s commercial projects'}</a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
