import { useState, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate('/AdminBackend');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Container className='w-25 bg-dark rounded-4 px-5 py-5'>
        <h2 className="pb-3 text-center text-white">LOGIN</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white h5">Usuario</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white h5">Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="1234"
            />
          </Form.Group>

          {error && <p className="text-danger text-center">{error}</p>}

          <div className="d-flex justify-content-center align-items-center">
            <Button type="submit" className="w-50 mt-4 rounded-5 startBtn">
              <h5 className="mt-1">START</h5>
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
