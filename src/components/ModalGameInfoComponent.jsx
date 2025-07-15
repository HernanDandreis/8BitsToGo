import { useEffect, useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';


const ModalGameInfoComponent = ({ show, handleClose, gameId }) => {
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (gameId) {
      setLoading(true);
      fetch(`https://api.rawg.io/api/games/${gameId}?key=a6e391b82a7e4b66ae679dd7b7e25137`)
        .then(res => res.json())
        .then(data => setGameData(data))
        .catch(err => console.error("Error cargando el juego:", err))
        .finally(() => setLoading(false));
    }
  }, [gameId]);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {loading ? "Cargando..." : gameData?.name || "Detalles del juego"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center rounded-2" style={{minHeight: '300px', backgroundColor: 'rgba(136, 149, 162, 0.75)'}}>
            <img src="../../public/staticTV.gif" alt="Cargando..." className="img-fluid rounded-2" />
          </div>
        ) : (
          <>
            {gameData?.background_image && (
              <img src={gameData.background_image} alt={gameData.name} className="img-fluid mb-3 rounded-2" />
            )}
            <p dangerouslySetInnerHTML={{ __html: gameData?.description || 'Sin descripción' }}></p>
            <p><strong>Géneros:</strong> {gameData?.genres.map(g => g.name).join(', ')}</p>
            <p><strong>Fecha de lanzamiento:</strong> {gameData?.released}</p>
            <p><strong>Rating:</strong> {gameData?.rating} ⭐</p>
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalGameInfoComponent;
