import { Container, Row } from 'react-bootstrap';
import PendriveCard from '../components/PendriveCradComponent.jsx';

const Pendrive = () => {
    const handleAddToCart = (item) => {
        console.log(`Agregado al inventario: ${item.count} unidades de ${item.title}`);
    };

    return (
        <Container mt={4}>
            <h1 align={"center"} className="text-white mt-4"> CHOSE YOUR WEAPON ADVENTUROUS </h1>
            <h3 align={"center"} className="text-white">CADA PENDRIVE ES UNA PUERTA A DECENAS DE MUNDOS</h3>

            <Row>
                <PendriveCard
                    title="Pendrive de 2 GB"
                    imgSrc="../../public/pendrive_2GB_250.png"
                    description="El pendrive definitivo de 2gb. Capacidad para hasta 50 juegos. Incluye sistema operativo SteamOS 3.5.5
                    para emular los rooms."
                    price={13000}
                    onAddToCart={handleAddToCart}
                />
                <PendriveCard
                    title="Pendrive de 4 GB"
                    imgSrc="../../public/pendrive_6GB_250.png" 
                    description="El pendrive definitivo de 4gb. Capacidad para hasta 50 juegos. Incluye sistema operativo SteamOS 3.5.5
                    para emular los rooms."
                    price={20000}
                    onAddToCart={handleAddToCart}
                />
                <PendriveCard
                    title="Pendrive de 8 GB"
                    imgSrc="../../public/pendrive_8GB_250.png"
                    description="El pendrive definitivo de 8gb. Capacidad para hasta 50 juegos. Incluye sistema operativo SteamOS 3.5.5
                    para emular los rooms."
                    price={35000}
                    onAddToCart={handleAddToCart}
                />
                <PendriveCard
                    title="Pendrive de 16 GB"
                    imgSrc="../../public/pendrive_16GB_250.png"
                    description="El pendrive definitivo de 16gb. Capacidad para hasta 100 juegos. Incluye sistema operativo SteamOS 3.5.5
                    para emular los rooms."
                    price={50000}
                    onAddToCart={handleAddToCart}
                />
            </Row>
        </Container>
    );
};

export default Pendrive;