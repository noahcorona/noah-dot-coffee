import ProjectSmall from '../ProjectSmall';
import {projects} from '../../constants/projects.js';
import {Col, Container, Row} from 'react-bootstrap';
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
        <h3>Favorites</h3>
        <div className="d-flex justify-content-between">
          <h3 className="bottom-spaced">Project Archives</h3>
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
            onClick={(e) => handleFilterClick(e, 'web')}
          >
            Web
          </a>
          <a
            href="#"
            onClick={(e) => handleFilterClick(e, 'mobile')}
          >
            Mobile
          </a>
          <a
            href="#"
            onClick={(e) => handleFilterClick(e, 'embedded')}
          >
            Embedded
          </a>
          <a
            href="#"
            onClick={(e) => handleFilterClick(e, 'ml')}
          >
            Machine Learning
          </a>
          <a
            href="#"
            onClick={(e) => handleFilterClick(e, 'plc-hmi')}
          >
            PLC & HMI
          </a>
          <a
            href="#"
            onClick={(e) => handleFilterClick(e, null)}
          >
            View All
          </a>
        </h5>
        {
          (condensedView && props.windowSize > 800) &&
            <Container className="top-spaced bottom-spaced">
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
                  <h5>Tech Stack</h5>
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
