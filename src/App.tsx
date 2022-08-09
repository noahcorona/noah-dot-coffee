import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Portfolio from './components/sections/Portfolio';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Error404 from './components/sections/Error404';
import {useState} from 'react';
import './style/App.css';
import GalleryModal from './components/GalleryModal';

/**
 * Entry point for the application
 * @constructor
 */
function App() {
  const [navHeight, setNavHeight] = useState(0);
  const [galleryActiveProject, setGalleryActiveProject] = useState(null);

  return (
    <div className="App">
      <Router>
        <NavBar
          height={navHeight}
          setHeight={setNavHeight}
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
