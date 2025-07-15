import { Navbar, Nav, Dropdown, Button, FormControl } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from './CartContextComponent.jsx'; // ajustá la ruta

const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState(false);
  const { carrito, eliminarDelCarrito, actualizarCantidad, vaciarCarrito } = useCart();

  const handleCantidadChange = (id, value) => {
    const cantidad = Math.max(1, Number(value)); // mínimo 1
    actualizarCantidad(id, cantidad);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="pb-3 NavbarContainer">
      <Navbar.Brand as={Link} to="/Home" onClick={() => setActiveLink('Home')} className={activeLink === 'Home' ? 'link-activo' : ''}>
        <h2 className="ms-4 mt-2">8Bits To Go</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-5 NavLinkContainer" >
          <Nav className="ms-auto me-4">
            <Dropdown className="me-5" align="end">
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <img src="../../public/moneda.png" alt="moneda" width="30" height="30" title="¡EL LOOT!"/>
                {carrito.length > 0 && <span className="badge bg-success ms-1">{carrito.length}</span>}
              </Dropdown.Toggle>
                <Dropdown.Menu style={{ minWidth: '300px' }}>
                {carrito.length === 0 ? (
                    <Dropdown.Item>Aún no hay items en tu inventario</Dropdown.Item>
                ) : (
                    <>
                    {carrito.map((producto) => (
                        <Dropdown.Item key={producto.id} className="d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-center">
                            <span>{producto.title}</span>
                            <Button variant="danger" size="sm" onClick={() => eliminarDelCarrito(producto.id)}>X</Button>
                        </div>
                        <div className="d-flex align-items-center mt-1">
                            <FormControl
                            type="number"
                            min="1"
                            value={producto.quantity}
                            onChange={(e) => handleCantidadChange(producto.id, e.target.value)}
                            style={{ width: '60px' }}
                            />
                            <span className="ms-2">x ${producto.price}</span>
                        </div>
                        </Dropdown.Item>
                    ))}

                    <Dropdown.Divider />

                    <Dropdown.Item>
                        <Button variant="warning" size="sm" onClick={vaciarCarrito} className="w-100">
                        Vaciar carrito 🗑️
                        </Button>
                    </Dropdown.Item>
                    </>
                )}
                </Dropdown.Menu>
            </Dropdown>

            <Nav.Link as={Link} to="/Home" onClick={() => setActiveLink('Home')} className={activeLink === 'Home' ? 'link-activo' : ''}><span className="h5">Home</span></Nav.Link>
            <Nav.Link as={Link} to="/Pendrives" onClick={() => setActiveLink('Pendrives')} className={activeLink === 'Pendrives' ? 'link-activo' : ''}><span className="h5">Pendrives</span></Nav.Link>
            <Nav.Link as={Link} to="/Games" onClick={() => setActiveLink('Games')} className={activeLink === 'Games' ? 'link-activo' : ''}><span className="h5">Games</span></Nav.Link>
            <Nav.Link as={Link} to="/MoreItems" onClick={() => setActiveLink('MoreItems')} className={activeLink === 'MoreItems' ? 'link-activo' : ''}><span className="h5">More Items</span></Nav.Link>
            <Nav.Link as={Link} to="/About" onClick={() => setActiveLink('About')} className={activeLink === 'About' ? 'link-activo' : ''}><span className="h5">About</span></Nav.Link>
            <Nav.Link as={Link} to="/Login" onClick={() => setActiveLink('Login')} className={activeLink === 'Login' ? 'link-activo' : ''}><span className="h5">ABM</span></Nav.Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
