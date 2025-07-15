import { useState } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { useCart } from './CartContextComponent.jsx';

const PendriveCard = ({ title, imgSrc, description, price }) => {
    const [count, setCount] = useState(0);
    const { agregarAlCarrito } = useCart();

    const handleAgregar = () => {
        if (count > 0) {
        const producto = { title, imgSrc, description, price, quantity: count };
        agregarAlCarrito(producto);
        } else {
        alert('Agregá al menos 1 unidad 😜');
        }
    };

    return (
        <Col md={4} className="w-25 h-25">
            <Card className="m-2 border-3 border-opacity-100 border-dark rounded-5">
                <Card.Title align="center" pt={2} className="text-white">{title}</Card.Title>
                <Card.Img src={imgSrc} className="pendrive_muestra_8bits w-75 mx-auto d-block" />
                <Card.Body>
                <Card.Text className="text-justify">{description}</Card.Text>
                <Card.Text className="text-center">
                    <strong><h5>Precio: ${price}</h5></strong>
                </Card.Text>
            </Card.Body>

            <Card.Footer className="d-flex justify-content-center align-content-center gap-3">
                <Button onClick={() => setCount(prev => prev + 1)} variant="outline-success" size="md" className="w-25">+1💰</Button>
                <h3 className="fw-bolder mt-2 cartNumber">{count}</h3>
                <Button onClick={() => setCount(prev => Math.max(0, prev - 1))} className="w-25">-1💰</Button>
            </Card.Footer>

            <Card.Footer className="d-flex justify-content-center align-content-center gap-3">
                    <Button onClick={handleAgregar} variant="outline-success" size="md" className="w-75">
                        🎒Lottear🎒
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default PendriveCard;