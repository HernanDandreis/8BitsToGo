import { Navbar, Nav, Dropdown  } from "react-bootstrap";
import {useState} from "react";
import { Link } from 'react-router-dom';

const NavbarComponent = () => {

    const [activeLink, SetactiveLink] = useState(false);

    return (
            <Navbar bg="dark" variant="dark" expand="lg" className="pb-3 NavbarContainer">
                <Navbar.Brand as = { Link } to = '/Home'
                    onClick={() => SetactiveLink('Home')}
                    className={activeLink === 'Home' ? 'link-activo' : ''}>
                    <h2 className="ms-4 mt-2">8Bits To Go</h2>
                </Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="ms-auto me-5 NavLinkContainer" >
                         <Nav className="ms-auto me-4">

                             <Dropdown className="ms-4">
                                 <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                     <img src="../../public/moneda.png" alt="moneda" width="30" height="30"/>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu>
                                     <Dropdown.Item className={"ps-5 d-flex justify-content-start"}>Aun no hay items en tu inventario</Dropdown.Item>
                                 </Dropdown.Menu>
                             </Dropdown>

                             <Nav.Link as={ Link } to="/Home"
                                 onClick={() => SetactiveLink('Home')}
                                 className={activeLink === 'Home' ? 'link-activo' : ''}
                             >
                                 <span className="h5">Home</span>
                             </Nav.Link>

                             <Nav.Link as={Link} to='/Pendrives'
                                       onClick={() => SetactiveLink('Pendrives')}
                                       className={activeLink === 'Pendrives' ? 'link-activo' : ''}
                             >
                                 <span className="h5">Pendrives</span>
                             </Nav.Link>

                             <Nav.Link as={Link} to='/Games'
                                 onClick={() => SetactiveLink('Games')}
                                 className={activeLink === 'Games' ? 'link-activo' : ''}
                             >
                                 <span className="h5">Games</span>
                             </Nav.Link>

                             <Nav.Link as={Link} to="/About"
                                 onClick={() => SetactiveLink('About')}
                                 className={activeLink === 'About' ? 'link-activo' : ''}
                             >
                                 <span className="h5">About</span>
                             </Nav.Link>
                             <Nav.Link as={Link} to="/Login"
                                       onClick={() => SetactiveLink('Login')}
                                       className={activeLink === 'Login' ? 'link-activo' : ''}
                             >
                                 <span className="h5">Login</span>
                             </Nav.Link>
                         </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}
export default NavbarComponent
