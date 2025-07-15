//Styles
import './App.css'

//Routes
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Games from "./pages/Games.jsx";
import Login from "./pages/Login.jsx";
import Pendrives from "./pages/Pendrives.jsx";
import MoreItems from "./pages/MoreItems.jsx";
import AdminBackend from "./pages/AdminBackend.jsx";
import PrivateRoutes from "./pages/PrivateRoutes.jsx";  

//Components
import NavbarComponent from "./components/NavbarComponent.jsx";
import CartProvider from './components/CartContextComponent.jsx';

//Auth
import AuthProvider from "./auth/AuthContext.jsx";


//Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <CartProvider>
        <AuthProvider>
          <Router>
            <NavbarComponent />
            <Routes>
              <Route path="/" element={<Navigate to="/Home" />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Pendrives" element={<Pendrives />} />
              <Route path="/Games" element={<Games />} />
              <Route path="/MoreItems" element={<MoreItems />} />
              <Route path="/About" element={<About />} />
              <Route path="/Login" element={<Login />} />

              {/* 🔐 Rutas protegidas */}
              <Route element={<PrivateRoutes />}>
                <Route path="/AdminBackend" element={<AdminBackend />} />
              </Route>

              {/* Ruta fallback */}
              <Route path="*" element={<Navigate to="/Home" replace />} />
            </Routes>
          </Router>
        </AuthProvider>
      </CartProvider>
    </>
  );
}

export default App;
