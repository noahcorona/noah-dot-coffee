import Container from 'react-bootstrap/Container';

const TechLinks = (props: {windowSize: number}) => {
  if (props.windowSize > 600) {
    return (
      <Container fluid>
        <div className="technology-link-wrapper">
          <a
            href="#"
            className="technology-link"
          >
            {'> JavaScript'}
          </a>
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
            {'> C++'}
          </a>
        </div>
        <div className="technology-link-wrapper">
          <a
            href="#"
            className="technology-link"
          >{'> TypeScript'}
          </a>
          <a
            href="#"
            className="technology-link"
          >
            {'> C'}
          </a>
          <a
            href="#"
            className="technology-link"
          >
            {'> C#'}
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
          >{'> SQL'}
          </a>
          <a
            href="#"
            className="technology-link"
          >
            {'> MongoDB'}
          </a>
        </div>
        <div className="technology-link-wrapper">
          <a
            href="#"
            className="technology-link"
          >
            {'> React.js'}
          </a>
          <a
            href="#"
            className="technology-link"
          >{'> Express.js'}
          </a>
          <a
            href="#"
            className="technology-link"
          >{'> Node.js'}
          </a>
        </div>
      </Container>
    );
  } else {
    return (
      <Container fluid>
        <div className="technology-link-wrapper">
          <a
            href="#"
            className="technology-link"
          >
            {'> JavaScript'}
          </a>
          <a
            href="#"
            className="technology-link"
          >
            {'> C'}
          </a>
          <a
            href="#"
            className="technology-link"
          >
            {'> C++'}
          </a>
        </div>
        <div className="technology-link-wrapper">
          <a
            href="#"
            className="technology-link"
          >{'> TypeScript'}
          </a>
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
            {'> C#'}
          </a>
        </div>
        <div className="technology-link-wrapper">
          <a
            href="#"
            className="technology-link"
          >
            {'> SQL'}
          </a>
          <a
            href="#"
            className="technology-link"
          >{'> MongoDB'}
          </a>
          <a
            href="#"
            className="technology-link"
          >
            {'> Node.js'}
          </a>
        </div>
        <div className="technology-link-wrapper">
          <a
            href="#"
            className="technology-link"
          >
            {'> React.js'}
          </a>
          <a
            href="#"
            className="technology-link"
          >{'> React Native'}
          </a>
          <a
            href="#"
            className="technology-link"
          >{'> Express.js'}
          </a>
        </div>
      </Container>
    );
  }
};

export default TechLinks;
