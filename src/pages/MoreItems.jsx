import {Container, Row} from "react-bootstrap";
import MoreItemsCardComponent from "../components/MoreItemsCardComponent.jsx";

const MoreItems = () => {
    const handleAddToCart = (item) => {
        console.log(`Agregado al inventario: ${item.count} unidades de ${item.title}`);
    };

    return (
        <Container mt={4}>
            <h1 align={"center"} className="text-white mt-4"> SUMA MAS ITEMS A TU AVENTURA </h1>
            <h3 align={"center"} className="text-white"> ¡POR QUE NUNCA ES SUFICIENTE NOSTALGIA!</h3>

                <Row>
                    <MoreItemsCardComponent
                        title="Generic Cartridge"
                        imgSrc="../../public/Generic-Cartridge.png"
                        description="Una skin estilo cartucho 8 bits para pendrive clásico. Diseño retro y colores pixelados.
                        Compatible con carcasas universales.
                        Ideal para guardar tus aventuras en bits."
                        price={15000}
                        onAddToCart={handleAddToCart}
                    />
                    
                    <MoreItemsCardComponent
                        title="Gun-Joystick"
                        imgSrc="../../public/Gun-Joysitck.png"
                        description="Gun-joystick óptico con vibración retroactiva y mira ajustable.
                        Compatible con sistemas clásicos y modernos.
                        Ideal para shooters y puntería de élite."
                        price={25000}
                        onAddToCart={handleAddToCart}
                    />
                    <MoreItemsCardComponent
                        title="Joystick 8 Bits"
                        imgSrc="../../public/Joystick-8Bits.png" // Asegúrate de tener estas imágenes
                        description="Joystick retro estilo 8 bits con palanca robusta y botones rojos.
                        Compatible con sistemas clásicos y modernos, con conexion USB-C.
                        Ideal para jugar como en los viejos tiempos."
                        price={12000}
                        onAddToCart={handleAddToCart}
                    />

                    <MoreItemsCardComponent
                        title="Coin Player One"
                        imgSrc="../../public/Coin-Player-One.png" // Asegúrate de tener estas imágenes
                        description="Define rapidamente quien usara a Mario y quien a Luigi en las partidas.
                        Lanza la moneda y elige al jugador 1. 
                        Tambien funciona para definir ¿pizza o empanadas?."
                        price={5000}
                        onAddToCart={handleAddToCart}
                    />
                </Row>
        </Container>
    )
}
export default MoreItems
