import Container from 'react-bootstrap/Container';
import {Col, Row} from 'react-bootstrap';
import '../../style/App.css';
import '../../style/About.css';
// eslint-disable-next-line max-len
import {AiOutlineArrowRight} from '@react-icons/all-files/ai/AiOutlineArrowRight';

const About = () => {
  return (
    <div className="Section small-top-pad">
      <div className="decorated bottom-spaced">
        <span><h1>Noah Corona</h1></span>
      </div>
      <div className="d-flex gap-4">
        <div className="d-flex gap-4">
          <div>
            <h2>Software Engineer</h2>
            <p>
              {'I take pride in the software I build. Between ' +
                'professional, academic, and personal projects, ' +
                'I\'ve been writing software for over a decade. ' +
                'I\'m specializing in web and mobile development, ' +
                'and also enjoy working on embedded and machine ' +
                'learning projects.'
              }
            </p>
          </div>
          <img src="/me.jpeg" alt="me" className="Portrait" />
        </div>
      </div>
      <div className="About-Text">
        <p>
          {'If you\'re hiring, please consider'}
          <a href="#contact">
            <u>reaching out</u>
            {'  '}
            <AiOutlineArrowRight />
          </a>
        </p>
      </div>
      <h3>Technologies I work with</h3>
      <Container fluid>
        <Row>
          <Col md="auto">
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
                {'> Swift'}
              </a>
            </div>
          </Col>
          <Col md="auto">
            <div className="technology-link-wrapper">
              <a
                href="#"
                className="technology-link"
              >
                {'> Python'}
              </a>
              <a
                href="#"
                className="technology-link"
              >
                {'> Node'}
              </a>
              <a
                href="#"
                className="technology-link"
              >
                {'> C++'}
              </a>
            </div>
          </Col>
          <Col md="auto">
            <div className="technology-link-wrapper">
              <a
                href="#"
                className="technology-link"
              >{'> C#'}
              </a>
              <a
                href="#"
                className="technology-link"
              >
                {'> SQL'}
              </a>
              <a href="#" className="technology-link">{'> MongoDB'}</a>
            </div>
          </Col>
        </Row>
      </Container>
      <h3>About Me</h3>
      <p>
        {
          'My interest in software development started in 2010, ' +
          'when I started exploring source code of video game ' +
          'modifications for Microsoft\'s Xbox platform. Recently, ' +
          'I graduated from UC, Santa Barbara with a B.S. in ' +
          'Computer Engineering. In the years between, I\'ve ' +
          'written software professionally, academically, and for fun.'
        }
      </p>
      <h3>{'People I\'ve Worked With'}</h3>
      <div className="associate-card">
        <div className="d-inline-flex gap-4 bottom-spaced top-spaced">
          <a href="https://aptitudemedical.com/">
            <h5>{'> Aptitude Medical Systems'}</h5>
          </a>
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
      <div className="associate-card">
        <div className="d-inline-flex gap-4 bottom-spaced top-spaced">
          <a href="https://powerconengineering.com/">
            <h5>{'> Powercon Engineering'}</h5>
          </a>
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
          and contribute to some of
          <a href="#">{'Powercon\'s commercials projects'}</a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
