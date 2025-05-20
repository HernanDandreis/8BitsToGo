import React from 'react'
import {Container, Card, Button, Col, Row} from "react-bootstrap";

const Pendrives = () => {
    return (
        <Container mt={4}>
            <h1 align={"center"} className="text-white mt-4"> ELIGE TU PENDRIVE </h1>
            <h5 align={"center"} pt={2} className="text-white">Cada pendrive tiene una capacidad de almancenamiento de juegos distinta.
                Todos ellos incluye sistema</h5>
            <h5 align={"center"} className="text-white">operativo SteamOS 3.5.5 para emular los juegos con la mejor calidad posible</h5>

            <Row className={"mt-5"} style={{backgroundColor: '#212529', width: '100%' , overflow: 'auto', borderRadius: '10px'}}>
                <Col md={4}>
                    <Card className="m-2 border-5 border-opacity-100 border-dark rounded-4">
                        <Card.Title align={"center"} pt={2} className="text-white">Pendrive de 2 GB</Card.Title>
                        <Card.Img src="../../public/pendrive_muestra_8bits.jpg" className="pendrive_muestra_8bits"></Card.Img>
                        <Card.Body>
                            <Card.Text className="text-justify">
                                Un pendrive de marga Xtronger con una capacidad de 2gb de almancernamiento
                                Puede incluir hasta 10 juegos. Incluye sistema operativo SteamOS 3.5.5 para emular
                                los rooms
                            </Card.Text>

                            <Card.Text className="text-center">
                                <strong>
                                    <h5>Precio: $13000</h5>
                                </strong>
                            </Card.Text>
                        </Card.Body>

                        <Card.Footer className="d-flex justify-content-center align-content-center gap-3">
                            <Button variant= 'outline-success' size="md" className={"justify-content-center align-content-center w-25"}><h3 className={"pt-2"}>💰x1</h3></Button>
                            <Button variant= 'outline-success' size="md" className={"justify-content-center align-content-center w-25"}><h3 className={"pt-2"}>💰x2</h3></Button>
                            <Button variant= 'outline-success' size="md" className={"justify-content-center align-content-center w-25"}><h3 className={"pt-2"}>💰x4</h3></Button>                        </Card.Footer>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="m-2 border-5 border-opacity-100 border-dark rounded-4">
                        <Card.Title align={"center"} pt={2} className="text-white">Pendrive de 6 GB</Card.Title>
                        <Card.Img src="../../public/pendrive_muestra_8bits.jpg" className="pendrive_muestra_8bits"></Card.Img>
                        <Card.Body>
                            <Card.Text className="text-justify">
                                Un pendrive de marga Xtronger con una capacidad de 6gb de almancernamiento
                                Puede incluir hasta 25 juegos. Incluye sistema operativo SteamOS 3.5.5 para emular
                                los rooms
                            </Card.Text>

                            <Card.Text className="text-center">
                                <strong>
                                    <h5>Precio: $26000 </h5>
                                </strong>
                            </Card.Text>
                        </Card.Body>

                        <Card.Footer className="d-flex justify-content-center align-content-center gap-3">
                            <Button variant= 'outline-success' size="md" className={"justify-content-center align-content-center w-25"}><h3 className={"pt-2"}>💰x1</h3></Button>
                            <Button variant= 'outline-success' size="md" className={"justify-content-center align-content-center w-25"}><h3 className={"pt-2"}>💰x2</h3></Button>
                            <Button variant= 'outline-success' size="md" className={"justify-content-center align-content-center w-25"}><h3 className={"pt-2"}>💰x4</h3></Button>                        </Card.Footer>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="m-2 border-5 border-opacity-100 border-dark rounded-4">
                        <Card.Title align={"center"} pt={2} className="text-white">Pendrive de 8 GB</Card.Title>
                        <Card.Img src="../../public/pendrive_muestra_8bits.jpg" className="pendrive_muestra_8bits"></Card.Img>
                        <Card.Body>
                            <Card.Text className="text-justify">
                                Un pendrive de marga Xtronger con una capacidad de 8gb de almancernamiento
                                Puede incluir hasta 39 juegos. Incluye sistema operativo SteamOS 3.5.5 para emular
                                los rooms
                            </Card.Text>

                            <Card.Text className="text-center">
                                <strong>
                                    <h5>Precio: $40000 </h5>
                                </strong>
                            </Card.Text>
                        </Card.Body>

                        <Card.Footer className="d-flex justify-content-center align-content-center gap-3">
                            <Button variant= 'outline-success' size="md" className={"justify-content-center align-content-center w-25"}><h3 className={"pt-2"}>💰x1</h3></Button>
                            <Button variant= 'outline-success' size="md" className={"justify-content-center align-content-center w-25"}><h3 className={"pt-2"}>💰x2</h3></Button>
                            <Button variant= 'outline-success' size="md" className={"justify-content-center align-content-center w-25"}><h3 className={"pt-2"}>💰x4</h3></Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Pendrives
