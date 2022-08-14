import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Portfolio from './components/sections/Portfolio';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Error404 from './components/sections/Error404';
import {useEffect, useState} from 'react';
import GalleryModal from './components/GalleryModal';
import Navigation from './components/Navigation';
import './style/App.css';

/**
 * Entry point for the application
 * @constructor
 */
function App() {
  // expansion state for mobile/narrow screen nav bar
  const [navExpanded, setNavExpanded] = useState(true);
  // bookkeeping for navbar height to for proper scroll behavior
  const [navHeight, setNavHeight] = useState(0);
  // bookkeeping for window size to toggle hamburger nav
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  // current photo in the gallery modal
  const [galleryActiveProject, setGalleryActiveProject] = useState(null);
  // current project filter in the project archive
  const [projectFilter, setProjectFilter] = useState<any>(null);

  useEffect(() => {
    /**
         * Resize update handler to track window width
         * Used to modify the navigation bar for mobile
         * devices and narrow windows
         */
    function handleWindowResize() {
      setPageWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Navigation
          height={navHeight}
          setHeight={setNavHeight}
          windowSize={pageWidth}
          expanded={navExpanded}
          setExpanded={setNavExpanded}
        />
        <div
          className="container"
          id="about"
        >
          <Routes>
            <Route
              path="/"
              element={
                <div onClick={() => setNavExpanded(false)}>
                  <About
                    windowSize={pageWidth}
                    setProjectFilter={setProjectFilter}
                  />
                  <Portfolio
                    windowSize={pageWidth}
                    setGalleryActiveProject={setGalleryActiveProject}
                    projectFilter={projectFilter}
                    setProjectFilter={setProjectFilter}
                  />
                  <Contact windowSize={pageWidth} />
                  <GalleryModal
                    setGalleryActiveProject={setGalleryActiveProject}
                    project={
                      galleryActiveProject ?
                        galleryActiveProject :
                        {
                          media: [],
                          title: '',
                        }
                    }
                  />
                </div>
              } />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
