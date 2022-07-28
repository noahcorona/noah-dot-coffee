import './style/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import MouseContextProvider from "./context/MouseContext";
import {useState} from "react";
import Resume from "./pages/Resume";
import {Cursor} from "./components/Cursor";

function App() {
  const [navHeight, setNavHeight] = useState(0);

  return (
      <div className="App">
        <MouseContextProvider>
          <Cursor />
          <Router>
            <NavBar height={navHeight} setHeight={setNavHeight} />
            <div className="container">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </div>
          </Router>
        </MouseContextProvider>
      </div>
  );
}

export default App;
