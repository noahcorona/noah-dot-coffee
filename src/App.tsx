import './style/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./navigation/NavBar";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

function App() {
  return (
      <div className="App">
        <Router>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/downloads" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </Router>
      </div>
  );
}

export default App;
