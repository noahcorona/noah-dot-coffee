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
  // bookkeeping for window size to toggle hamburger nav
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [navHeight, setNavHeight] = useState(0);
  const [galleryActiveProject, setGalleryActiveProject] = useState(null);

  useEffect(() => {
    /**
         * Resize update handler to track window width
         * Used to modify the navigation bar for mobile
         * devices and narrow windows
         */
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
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
          windowSize={windowSize}
        />
        <div
          className="container"
          id="about"
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Portfolio
                    windowSize={windowSize}
                    setGalleryActiveProject={setGalleryActiveProject}
                  />
                  <Contact />
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
                </>
              } />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
