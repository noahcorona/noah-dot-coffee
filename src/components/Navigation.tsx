import {useLayoutEffect, useRef} from 'react';
import {AiFillGithub} from '@react-icons/all-files/ai/AiFillGithub';
import {AiFillLinkedin} from '@react-icons/all-files/ai/AiFillLinkedin';
import {SiBuymeacoffee} from '@react-icons/all-files/si/SiBuymeacoffee';
import {HashLink} from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';
import '../style/Navigation.css';

const Navigation = (props: any) => {
  // bookkeeping for navbar height to for proper scroll behavior
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current || !ref.current.clientHeight) {
      return;
    }

    props.setHeight(ref.current.clientHeight);
  }, []);

  if (props.windowSize > 800) {
    return (
      <Container fluid ref={ref} className="nav-bar">
        <div className="nav-content">
          <div className="social-bar">
            <a href="#">
              <img
                src="/android-chrome-192x192.png"
                alt="logo"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://github.com/noahcorona"
              className="social-icon-link"
            >
              <AiFillGithub size="2em" />
            </a>
            <a
              href="https://linkedin.com/in/noahcorona"
              className="social-icon-link"
            >
              <AiFillLinkedin size="2em" />
            </a>
            <a
              href="buymeacoffee.com/4IeSH91kr"
              className="social-icon-link"
            >
              <SiBuymeacoffee size="2em" />
            </a>
          </div>
          <nav className="nav-container">
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <HashLink className="nav-button" to="#about">
                    About
                </HashLink>
              </li>
              <li className="nav-menu-item">
                <HashLink className="nav-button" to="#portfolio">
                    Portfolio
                </HashLink>
              </li>
              <li className="nav-menu-item">
                <HashLink className="nav-button" to="#contact">
                    Contact
                </HashLink>
              </li>
              <li className="nav-menu-item">
                <a className="nav-button" href="/resume/Resume.pdf">
                    Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    );
  } else {
    return (
      <Container fluid ref={ref} className="nav-bar">
        <div className="text-right">
          <Navbar
            collapseOnSelect
            bg="transparent"
            expand="lg"
            variant="light"
          >
            <Navbar.Brand href="#">
              <span className="Brand-Items">
                <div className="social-bar">
                  <a href="#">
                    <img
                      src="/android-chrome-192x192.png"
                      alt="logo"
                      width={32}
                      height={32}
                    />
                  </a>
                  <a
                    href="https://github.com/noahcorona"
                    className="social-icon-link"
                  >
                    <AiFillGithub size="2em" />
                  </a>
                  <a
                    href="https://linkedin.com/in/noahcorona"
                    className="social-icon-link"
                  >
                    <AiFillLinkedin size="2em" />
                  </a>
                  <a
                    href="buymeacoffee.com/4IeSH91kr"
                    className="social-icon-link"
                  >
                    <SiBuymeacoffee size="2em" />
                  </a>
                </div>
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <div className="nav-menu-item">
                  <a className="nav-button" href="/#about">
                About
                  </a>
                </div>
                <div className="nav-menu-item">
                  <a className="nav-button" href="/#portfolio">
                Portfolio
                  </a>
                </div>
                <div className="nav-menu-item">
                  <a className="nav-button" href="/#contact">
                Contact
                  </a>
                </div>
                <div className="nav-menu-item">
                  <a className="nav-button" href="/resume/Resume.pdf">
                Resume
                  </a>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Container>
    );
  }
};

export default Navigation;
