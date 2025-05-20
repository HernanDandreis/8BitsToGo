import React, {useEffect, useState} from 'react'
import {Container, Col, Row, Card, Button, Modal} from "react-bootstrap";
//import ModalGameInfoComponent from "../components/ModalGameInfoComponent.jsx";

const Games = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=a6e391b82a7e4b66ae679dd7b7e25137&dates=1970-01-01,2010-01-01&tags=retro&ordering=-rating&page_size=39`)
            .then((res) => res.json())
            .then((data) => {
                setGames(data.results);
            })
            .catch((err) => {
                console.error('Error en la pegada a la API:', err);
            });
    }, []);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className='mt-4'>
            <h1 className="text-center pb-4 text-white">Titulos disponibles</h1>
            <Row>
                {games.map(game=>(
                    <Col key={game.id} md={4}>
                        <Card className="m-2 bg-light px-2 pt-4">
                            <Card.Text className={'text-center h4'}>
                                {<strong>{game.name}</strong> || 'N/A'}
                            </Card.Text>
                            <Card.Img src={game.background_image} className="background_games_image"/>
                    <Card.Footer className={"my-3 pt-3 d-flex gap-3"}>
                        <Button variant="outline-info" size="md" className="w-50">🕹️</Button>
                        <Button variant="outline-warning" size="md" className="w-50" onClick={handleShow}>ℹ️️</Button>
                    </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
}

export default Games

// PENDIENTES
    // Boton add games cambia de estado (rellena el color) cuando le doy click. Si vuelvo a clickearlo se da marcha atras
    // Modal tiene que venir en un componente aparte
    // Modal tiene que ser rellenado con info traida de una pagada a la API