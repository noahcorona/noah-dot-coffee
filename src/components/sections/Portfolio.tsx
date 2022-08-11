import ProjectSmall from '../ProjectSmall';
import {projects} from '../../constants/projects.js';
import {Badge, Col, Container, Row} from 'react-bootstrap';
import '../../style/App.css';
import '../../style/Portfolio.css';
import ProjectMedium from '../ProjectMedium';
import {BiBookContent} from '@react-icons/all-files/bi/BiBookContent';
import {BiListUl} from '@react-icons/all-files/bi/BiListUl';
import {useEffect, useState} from 'react';

const Portfolio = (props: {
  windowSize: any,
  setGalleryActiveProject: any;
}) => {
  const [projectFilter, setProjectFilter] = useState<any>(null);
  const [currentProjects, setCurrentProjects] = useState<any>(null);
  const [condensedView, setCondensedView] = useState<any>(false);

  /**
   * helper function to sort projects by year
   * @param {object} a - project A
   * @param {object} b - project B
   * @return {number} pos if a's year earlier than b,
   *                  0 if equal years,
   *                  neg if b's year earlier than a
   */
  function order(a: any, b: any) {
    return b.year - a.year;
  }

  const handleFilterClick = (e: any, filterText: any) => {
    e.preventDefault();
    setProjectFilter(filterText);
  };

  const handleViewTypeClick = (e: any, condensed: any) => {
    e.preventDefault();
    setCondensedView(condensed);
  };

  useEffect(() => {
    if (projectFilter) {
      const filteredProjects = projects
          .filter((el) => el.types.includes(projectFilter))
          .sort(order);
      setCurrentProjects(filteredProjects);
    } else {
      setCurrentProjects(projects.sort(order));
    }
  }, [projectFilter]);

  return (
    <div
      id="portfolio"
      className="Section"
    >
      <div className="Portfolio">
        <div className="decorated bottom-spaced">
          <span>
            <h1>{'Things I\'ve worked on'}</h1>
          </span>
        </div>
        <div className="CUDA-area">
          <div className="d-flex justify-content-around">
            <div>
              <div className="CUDA-device-image-area">
                <img
                  src="/projects/CUDA/reader.jpeg"
                  alt="Device screen"
                  className="CUDA-device-image"
                />
              </div>
              <div className="CUDA-screen-image-area">
                <img
                  src="/projects/CUDA/CUDA_demo.gif"
                  alt="Device screen"
                  className="CUDA-screen-image"
                />
              </div>
            </div>
            <div>
              <div className="CUDA-description-area">
                <div className="description-heading">
                  <h3>
                    CUDA Medical Diagnostic Device
                  </h3>
                  <h3>
                    <Badge bg="warning">Academic Award</Badge>
                  </h3>
                </div>
                <p>{'The CUDA group was awarded 3rd place amongst the ' +
                    'electrical and computer engineering capstone teams ' +
                    'at UCSB. Working as project lead and developer with the ' +
                    'researchers at Aptitude Medical Systems, I helped build ' +
                    'a medical diagnostic device capable of detecting a life ' +
                    'threatening condition called coagulopathy that occurs ' +
                    'commonly in physical trauma patients. On this team of ' +
                    'five, my most significant contributions were the ' +
                    'creation of a mobile app and additions to the embedded ' +
                    'system\'s Bluetooth routines.'
                }
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="SMLR-area">
          <div className="d-flex">
            <div className="SMLR-description-area">
              <div className="description-heading">
                <h3>smlr.org: A free URL shortener</h3>
              </div>
              <p>{'smlr.org (smaller) is a full-stack web app that ' +
                  'allows anyone to shorten a URL with ease. The app ' +
                  'includes custom URL strings, profanity checking, QR ' +
                  'code generation, and allows users to track the number ' +
                  'of clicks their links have. Also includes a public ' +
                  'RESTful API with documentation, allowing developers ' +
                  'to easily implement free small URLs into their own ' +
                  'applications.'
              }
              </p>
            </div>
            <div className="SMLR-screen-image-area">
              <img
                src="/projects/smlr-dot-org/smlr_dot_org_homepage.png"
                alt="Device screen"
                className="SMLR-screen-image"
              />
            </div>
          </div>
        </div>
        <div className="CHROM-TUNER-area">
          <div className="d-flex">
            <div className="CHROM-TUNER-screen-image-area">
              <img
                src="/projects/chromatic-tuner/gif-fpga-chromatic-tuner.gif"
                alt="Device screen"
                className="CHROM-TUNER-screen-image"
              />
            </div>
            <div className="CHROM-TUNER-description-area">
              <div className="description-heading">
                <h3>Chromatic Tuner</h3>
              </div>
              <p>{'An Artix-7 FPGA development board purposed to ' +
                  'detect the nearest note being played via an on-board ' +
                  'microphone from the 3rd to the 9th octave. Under the ' +
                  'hood, utilizes the power of the fast Fourier transform ' +
                  'in an impressively fast grand loop. The tuner ' +
                  'can be configured for the note A4 to be set ' +
                  'to any frequency between 420 and 460 Hz, with the ' +
                  'default being 440 Hz. Automatically ranges the note being ' +
                  'played. Accurate to +/- 10 cents.'
              }
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <h3 className="bottom-spaced">Project Archive</h3>
          {
            props.windowSize > 800 && (
              <h3 className="filter-icons bottom-spaced">
                <a
                  href="#"
                  onClick={(e) => handleViewTypeClick(e, true)}
                >
                  <BiListUl
                    className={
                            condensedView ?
                                'filter-icon-selected filter-icon' :
                                'filter-icon'}
                  />
                </a>
                <a
                  href="#"
                  onClick={(e) => handleViewTypeClick(e, false)}
                >
                  <BiBookContent
                    className={
                            condensedView ?
                                'filter-icon' :
                                'filter-icon-selected filter-icon'}
                  />
                </a>
              </h3>
            )
          }
        </div>
        <h5 className="filter-links">
          <span>{'Filter: '}</span>
          <a
            href="#"
            onClick={(e) => handleFilterClick(e, null)}
          >
            View All
          </a>
          <a
            href="#"
            onClick={(e) => handleFilterClick(e, 'plc-hmi')}
          >
            PLC & HMI
          </a>
          <a
            href="#"
            onClick={(e) => handleFilterClick(e, 'ml')}
          >
            Machine Learning
          </a>
          <a
            href="#"
            onClick={(e) => handleFilterClick(e, 'embedded')}
          >
            Embedded
          </a>
          <a
            href="#"
            onClick={(e) => handleFilterClick(e, 'mobile')}
          >
            Mobile
          </a>
          <a
            href="#"
            onClick={(e) => handleFilterClick(e, 'web')}
          >
            Web
          </a>
        </h5>
        {
          (condensedView && props.windowSize > 800) &&
            <Container className="top-spaced bottom-spaced
            Project-Row-Header">
              <Row className="gap-2">
                <Col xs={1} sm={1} md={1} lg={1} xl={1} className="text-center">
                  <h5>Year</h5>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2} className="text-center">
                  <h5>Title</h5>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} className="text-center">
                  <h5>Description</h5>
                </Col>
                <Col xs={3} sm={3} md={3} lg={3} xl={3} className="text-center">
                  <h5>Tech</h5>
                </Col>
                <Col xs={1} sm={1} md={1} lg={1} xl={1} className="text-center">
                  <h5>Links</h5>
                </Col>
              </Row>
            </Container>
        }
        {
          currentProjects && currentProjects
              .map((project: any) => (
                  ((condensedView && props.windowSize < 800) ||
                      !condensedView) ?
                          <ProjectMedium
                            key={project.title}
                            project={project}
                            projectType={'web'}
                            setGalleryActiveProject={
                              props.setGalleryActiveProject
                            }
                          /> :
                          <ProjectSmall
                            key={project.title}
                            project={project}
                            projectType={'web'}
                            setGalleryActiveProject={
                              props.setGalleryActiveProject
                            }
                          />
              ))}
      </div>
    </div>
  );
};

export default Portfolio;
