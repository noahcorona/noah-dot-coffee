import ProjectSmall from '../ProjectSmall';
import {projects} from '../../constants/projects.js';
import {Col, Container, Row} from 'react-bootstrap';
import ProjectMedium from '../ProjectMedium';
import {BiBookContent} from '@react-icons/all-files/bi/BiBookContent';
import {BiListUl} from '@react-icons/all-files/bi/BiListUl';
import {useEffect, useState} from 'react';
import FadeIn from '../FadeIn';
import {BiAward} from '@react-icons/all-files/bi/BiAward';
import {RiGithubLine} from '@react-icons/all-files/ri/RiGithubLine';
import {BsBoxArrowUpRight} from '@react-icons/all-files/bs/BsBoxArrowUpRight';
import {IoIosImages} from '@react-icons/all-files/io/IoIosImages';
import {BsDownload} from '@react-icons/all-files/bs/BsDownload';
import '../../style/App.css';
import '../../style/Portfolio.css';

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

  const openGalleryClickHandler = (e: any, title: string) => {
    e.preventDefault();
    props.setGalleryActiveProject(
        projects.filter((el: any) => {
          return el.title === title;
        }).at(0),
    );
  };

  useEffect(() => {
    if (projectFilter) {
      const filteredProjects = projects
          .filter((el: any) => el.types.includes(projectFilter))
          .sort(order);
      setCurrentProjects(filteredProjects);
    } else {
      setCurrentProjects(projects.sort(order));
    }
  }, [projectFilter]);

  const CUDAAreaSmall = () => (
    <div className="Favorites-Area-Smaller">
      <div className="Favorites-CUDA-Image-Area">
        <img
          src="/projects/CUDA/CUDA_demo.gif"
          alt="Device screen"
        />
      </div>
    </div>
  );

  const CUDAAreaLarge = () => (
    <div className="Favorites-Area-Larger Favorites-CUDA-Text-Area">
      <div>
        <div className="Favorites-Description-Heading-Area">
          <h2>CUDA Medical Diagnostic Device</h2>
        </div>
        <p>
          {'The CUDA group was awarded 3rd place amongst the ' +
                'electrical and computer engineering capstone ' +
                'teams at UCSB. Working as project lead and ' +
                'developer with the researchers at Aptitude ' +
                'Medical Systems, I helped build a medical ' +
                'diagnostic device capable of detecting ' +
                'a life threatening condition called coagulopathy ' +
                'that occurs commonly in physical trauma ' +
                'patients. On this team of five, my most significant ' +
                'contributions were the creation of a ' +
                'mobile app and additions to the embedded system\'s ' +
                'Bluetooth routines.'
          }
        </p>
      </div>
      <div className="Favorites-Icon-Links">
        <a
          href="https://www.ece.ucsb.edu/spotlights/22-ee-ce-capstone-awards-replays"
          className="Favorites-Icon-Link-Small"
        >
          <div className="Favorites-Icon Favorites-Award-Icon
                                Favorites-Award-Icon"
          >
            <BiAward />
          </div>
          <div className="Favorites-Icon-Link-Small-Background" />
        </a>
        <a
          href="https://github.com/AptitudeCapstone/CUDA"
          className="Favorites-Icon-Link-Small"
        >
          <div className="Favorites-Icon">
            <RiGithubLine />
          </div>
          <div className="Favorites-Icon-Link-Small-Background" />
        </a>
        <a
          href="#"
          className="Favorites-Icon-Link-Small"
          onClick={(e: any) => openGalleryClickHandler(e, 'CUDA')}
        >
          <div className="Favorites-Icon">
            <IoIosImages />
          </div>
          <div className="Favorites-Icon-Link-Small-Background" />
        </a>
        <a
          href="https://aptitudemedical.com/"
          className="Favorites-Icon-Link-Small"
        >
          <div className="Favorites-Icon">
            <BsBoxArrowUpRight />
          </div>
          <div className="Favorites-Icon-Link-Small-Background" />
        </a>
      </div>
    </div>
  );

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
        <FadeIn>
          <div className="Favorites-CUDA">
            {
              props.windowSize > 900 ?
                  <>
                    <CUDAAreaSmall />
                    <CUDAAreaLarge />
                  </> :
                  <>
                    <CUDAAreaLarge />
                    <CUDAAreaSmall />
                  </>
            }
          </div>
        </FadeIn>
        <FadeIn>
          <div className="Favorites-SMLR">
            <div className="Favorites-Icon-Links Favorites-Left-Area">
              <a
                href="https://github.com/noahcorona/url-shortener/"
                className="Favorites-Icon-Link-Small"
              >
                <div className="Favorites-Icon">
                  <RiGithubLine />
                </div>
                <div className="Favorites-Icon-Link-Small-Background" />
              </a>
              <a
                href="#"
                className="Favorites-Icon-Link-Small"
                onClick={(e: any) => openGalleryClickHandler(e, 'smlr.org')}
              >
                <div className="Favorites-Icon">
                  <IoIosImages />
                </div>
                <div className="Favorites-Icon-Link-Small-Background" />
              </a>
              <a
                href="https://smlr.org/"
                className="Favorites-Icon-Link-Small"
              >
                <div className="Favorites-Icon">
                  <BsBoxArrowUpRight />
                </div>
                <div className="Favorites-Icon-Link-Small-Background" />
              </a>
            </div>
            <div className="Favorites-SMLR-Text-Area">
              <div className="Favorites-Description-Heading-Area">
                <h2>smlr.org: A free URL shortener</h2>
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
            <div className="Favorites-SMLR-Image-Area">
              <img
                src="/projects/smlr-dot-org/smlr_dot_org_homepage.png"
                alt="Homepage of smlr.org"
              />
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="d-flex Favorites-CHROM-TUNER">
            <div className="Favorites-CHROM-TUNER-Image-Area">
              <img
                src="/projects/chromatic-tuner/gif-fpga-chromatic-tuner.gif"
                alt="Device screen"
              />
            </div>
            <div className="Favorites-CHROM-TUNER-Text-Area">
              <div className="Favorites-Description-Heading-Area">
                <h2>Chromatic Tuner</h2>
              </div>
              <p>{'An Artix-7 FPGA development board purposed to ' +
                    'detect the nearest note being played via an on-board ' +
                    'microphone from the 3rd to the 9th octave. Under the ' +
                    'hood, utilizes the power of the fast Fourier transform ' +
                    'in an impressively fast grand loop. The tuner ' +
                    'can be configured for the note A4 to be set ' +
                    'to any frequency between 420 and 460 Hz, with the ' +
                    'default being 440 Hz. Automatically ranges the note ' +
                    'being played. Accurate to +/- 10 cents.'
              }
              </p>
            </div>
            <div className="Favorites-Icon-Links ">
              <a
                href="https://github.com/noahcorona/FPGA-chromatic-tuner"
                className="Favorites-Icon-Link-Small"
              >
                <div className="Favorites-Icon">
                  <RiGithubLine />
                </div>
                <div className="Favorites-Icon-Link-Small-Background" />
              </a>
              <a
                href="#"
                className="Favorites-Icon-Link-Small"
                onClick={(e: any) =>
                  openGalleryClickHandler(e, 'Chromatic Tuner')
                }
              >
                <div className="Favorites-Icon">
                  <IoIosImages />
                </div>
                <div className="Favorites-Icon-Link-Small-Background" />
              </a>
              <a
                href="https://github.com/noahcorona/FPGA-chromatic-tuner/archive/refs/heads/main.zip"
                className="Favorites-Icon-Link-Small"
              >
                <div className="Favorites-Icon">
                  <BsDownload />
                </div>
                <div className="Favorites-Icon-Link-Small-Background" />
              </a>
            </div>
          </div>
        </FadeIn>
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
                          'Project-Display-Type-Icon-Selected ' +
                          'Project-Display-Type-Icon' :
                          'Project-Display-Type-Icon'}
                  />
                </a>
                <a
                  href="#"
                  onClick={(e) => handleViewTypeClick(e, false)}
                >
                  <BiBookContent
                    className={
                      condensedView ?
                          'Project-Display-Type-Icon' :
                          'Project-Display-Type-Icon-Selected ' +
                          'Project-Display-Type-Icon'
                    }
                  />
                </a>
              </h3>
            )
          }
        </div>
        <h5 className="Project-Row-Header-Filter-Area">
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
