import Alert from 'react-bootstrap/Alert';

const AlertAddToCardComponent = () => {
    return (
        <Alert variant="success" className="text-center">
            <Alert.Heading>¡Juego agregado al carrito! 🎮</Alert.Heading>
            <p>
                Tu juego ha sido añadido exitosamente al carrito. ¡Disfruta de tu aventura retro!
            </p>
        </Alert>
    );
}


export default AlertAddToCardComponent;