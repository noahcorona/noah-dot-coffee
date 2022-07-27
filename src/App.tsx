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
import Cursor from "./components/Cursor";
import MouseContextProvider from "./providers/MouseContext";

function App() {
  return (
      <div className="App">
        <MouseContextProvider>
          <Cursor />
          <Router>
            <NavBar />
            <div className="container">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
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
