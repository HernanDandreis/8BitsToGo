import {Button, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";

const ModalGameInfoComponent = () => {

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/{id}?key=a6e391b82a7e4b66ae679dd7b7e25137`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
            })
            .catch((err) => {
                console.error('Error en la pegada a la API:', err);
            });
    }, []);

    return (
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
        </Modal>
    )
}
export default ModalGameInfoComponent

// PENDIENTES
    // Hacer funcional el modal en dos componentes diferentes
    // Que el modal tome como parametro el ID del juego para pegarle al endpoint y trtaer datos de alli