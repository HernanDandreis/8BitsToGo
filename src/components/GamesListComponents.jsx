import {useEffect, useState} from 'react'
import {Container, Row} from "react-bootstrap";
import GamesCardsComponents from "./GamesCardsComponents";
import ModalGameInfoComponent from "./ModalGameInfoComponent";
import SpinnerComponent from "./SpinnerComponent";

const GamesListComponents = () => {

    const [loading, setLoading] = useState(true);
    const [games, setGames] = useState([]);

// 🐢🥷🏻🍕🟧 useEffect: RAWG API fetch 🐢🥷🏻🍕🟪

    const masterKey = 'a6e391b82a7e4b66ae679dd7b7e25137'

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch(`https://api.rawg.io/api/games?key=${masterKey}&dates=1900-01-01,2000-01-01&tags=retro&page_size=39`);
                const data = await response.json();
                setGames(data.results);
            } catch (error) {
                console.group()
                console.warn('⚠️ ESTE ES EL ERROR AL INTENTAR CARGAR LA RESPUESTA DE LA API ⚠️');
                    console.error(error);
                console.warn('⚠️ ESTE ES EL ERROR AL INTENTAR CARGAR LA RESPUESTA DE LA API ⚠️');
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, []);

// 🐢🥷🏻🍕🟧 ModalGameInfoComponent 🐢🥷🏻🍕🟪

    const [selectedGameId, setSelectedGameId] = useState(null);
    const [show, setShow] = useState(false);

    const handleShow = (gameId) => {
        setSelectedGameId(gameId);
        setShow(true);
    };

    const handleClose = () => setShow(false);

// 🐢🥷🏻🍕🟧 useState: select game btn 🐢🥷🏻🍕🟪

    const [selectedGames, setSelectedGames] = useState(new Set());

    const toggleGameSelection = (gameId) => {
        setSelectedGames(prevSelected => {
            const newSelected = new Set(prevSelected);
            if (newSelected.has(gameId)) {
                newSelected.delete(gameId);
            } else {
                newSelected.add(gameId);
            }
            return newSelected;
        });
    };

    const isGameSelected = (gameId) => selectedGames.has(gameId);

// 🐢🥷🏻🍕🟧 HTML BLOCKCODE 🐢🥷🏻🍕🟪

    return (
        <Container className='mt-4'>
            <h1 className="text-center pb-4 text-white">Títulos disponibles</h1>

            {loading ? (
                <div className="d-flex justify-content-center">
                    <SpinnerComponent />
                </div>
            ) : (
                <Row>
                    {games.map(game => (
                        <GamesCardsComponents
                            key={game.id}
                            name={game.name}
                            imgSrc={game.background_image}
                            isSelected={isGameSelected(game.id)}
                            toggleSelection={() => toggleGameSelection(game.id)}
                            handleShow={() => handleShow(game.id)}
                        />
                    ))}
                </Row>
            )}

            {selectedGameId && (
                <ModalGameInfoComponent
                    show={show}
                    handleClose={handleClose}
                    gameId={selectedGameId}
                />
            )}
        </Container>
    );
}

export default GamesListComponents