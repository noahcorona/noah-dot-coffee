import '../style/NavBar.css';
import {useLayoutEffect, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import {AiFillGithub} from '@react-icons/all-files/ai/AiFillGithub';
import {AiFillLinkedin} from '@react-icons/all-files/ai/AiFillLinkedin';
import {SiBuymeacoffee} from '@react-icons/all-files/si/SiBuymeacoffee';
import {Link} from 'react-router-dom';

interface IProps {
    height: number,
    setHeight: (height: number) => void,
}

const NavBar = (props: IProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current || !ref.current.clientHeight) {
      return;
    }

    props.setHeight(ref.current.clientHeight);
  }, []);

  return (
    <Container fluid ref={ref} className="nav-bar">
      <div className="nav-content">
        <div className="social-bar">
          <a href="/src/components/pages">
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
              <Link className="nav-button" to="/">
                                About
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link className="nav-button" to="#portfolio">
                                Portfolio
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link className="nav-button" to="#contact">
                                Contact
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link className="nav-button" to="/resume/Resume.pdf">
                                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default NavBar;
