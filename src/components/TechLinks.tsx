import Container from 'react-bootstrap/Container';

const TechLinks = (props: {
  setProjectFilter: any,
  windowSize: number,
}) => {
  if (props.windowSize > 600) {
    return (
      <Container fluid>
        <div className="technology-link-wrapper">
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('web')}
          >
            {'> JavaScript'}
          </a>
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('ml')}
          >
            {'> Python'}
          </a>
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('embedded')}
          >
            {'> C++'}
          </a>
        </div>
        <div className="technology-link-wrapper">
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('web')}
          >
            {'> TypeScript'}
          </a>
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('embedded')}
          >
            {'> C'}
          </a>
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('plc-hmi')}
          >
            {'> C#'}
          </a>
        </div>
        <div className="technology-link-wrapper">
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('mobile')}
          >
            {'> React Native'}
          </a>
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('plc-hmi')}
          >
            {'> SQL'}
          </a>
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('web')}
          >
            {'> MongoDB'}
          </a>
        </div>
        <div className="technology-link-wrapper">
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('web')}
          >
            {'> React.js'}
          </a>
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('web')}
          >
            {'> Express.js'}
          </a>
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('web')}
          >
            {'> Node.js'}
          </a>
        </div>
      </Container>
    );
  } else {
    return (
      <Container fluid>
        <div className="technology-link-wrapper">
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('web')}
          >
            {'> JavaScript'}
          </a>
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('embedded')}
          >
            {'> C'}
          </a>
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('embedded')}
          >
            {'> C++'}
          </a>
        </div>
        <div className="technology-link-wrapper">
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('web')}
          >
            {'> TypeScript'}
          </a>
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('ml')}
          >
            {'> Python'}
          </a>
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('plc-hmi')}
          >
            {'> C#'}
          </a>
        </div>
        <div className="technology-link-wrapper">
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('plc-hmi')}
          >
            {'> SQL'}
          </a>
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('web')}
          >
            {'> MongoDB'}
          </a>
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('web')}
          >
            {'> Node.js'}
          </a>
        </div>
        <div className="technology-link-wrapper">
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('web')}
          >
            {'> React.js'}
          </a>
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('mobile')}
          >
            {'> React Native'}
          </a>
          <a
            href="#archive"
            className="technology-link"
            onClick={() => props.setProjectFilter('web')}
          >
            {'> Express.js'}
          </a>
        </div>
      </Container>
    );
  }
};

export default TechLinks;
