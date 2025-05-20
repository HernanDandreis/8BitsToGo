//Styles
import './App.css'

//Routes
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Games from "./pages/Games.jsx";
import Login from "./pages/Login.jsx";
import Pendrives from "./pages/Pendrives.jsx";

//Components
import NavbarComponent from "./components/NavbarComponent.jsx";

//Wrapper

//Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
        <Router>
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Games" element={<Games />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Pendrives" element={<Pendrives />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
