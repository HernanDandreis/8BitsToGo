import { Col, Card, Button } from "react-bootstrap";

const GamesCardsComponents = ({ name, imgSrc, isSelected, toggleSelection, handleShow }) => {
    return (
        <Col md={4}>
            <Card className="m-2 bg-light px-2 pt-4">
                <Card.Text className="text-center h4">
                    <strong>{name || 'N/A'}</strong>
                </Card.Text>

                <Card.Img
                    src={imgSrc}
                    alt={name}
                    className="background_games_image"
                />

                <Card.Footer className="my-3 pt-3 d-flex gap-3">
                    <Button
                        variant={isSelected ? "info" : "outline-info"}
                        size="md"
                        onClick={toggleSelection}
                        className="w-50"
                    >
                        {isSelected ? '✅' : '🕹️'}
                    </Button>

                    <Button
                        variant="outline-warning"
                        size="md"
                        onClick={handleShow}
                        className="w-50"
                    >
                        ℹ️
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default GamesCardsComponents;