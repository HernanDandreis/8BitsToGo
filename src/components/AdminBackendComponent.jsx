import { useEffect, useState } from "react";
import { Container, Row, Button, Modal, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import SpinnerComponent from "./SpinnerComponent";

const AdminBackendComponent = () => {
    const [articules, setArticules] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [modalMode, setModalMode] = useState("create");
    const [currentItem, setCurrentItem] = useState({ name: "", price: "", stock: "" });
    const [saving, setSaving] = useState(false);

    const API_URL = "https://6866bc9989803950dbb3bc6c.mockapi.io/8BitToGo/api/Articules";

    const fetchArticules = async () => {
        setLoading(true);
        try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setArticules(data);
        } catch (error) {
        console.error("Error fetching articules:", error);
        alert("Error cargando los artículos.");
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchArticules();
    }, []);

    const handleAdd = () => {
        setModalMode("create");
        setCurrentItem({ name: "", price: "", stock: "" });
        setModalShow(true);
    };

    const handleEdit = (item) => {
        setModalMode("edit");
        setCurrentItem({ ...item });
        setModalShow(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("¿Seguro querés eliminar este artículo?")) return;
        try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        setArticules(articules.filter((a) => a.id !== id));
        } catch (error) {
        console.error("Error borrando artículo:", error);
        alert("No se pudo borrar el artículo.");
        }
    };

    const handleSave = async () => {
        if (!currentItem.name.trim() || !currentItem.price || !currentItem.stock) {
        alert("Completá todos los campos, porfa.");
        return;
        }
        setSaving(true);
        try {
        if (modalMode === "create") {
            const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: currentItem.name,
                price: Number(currentItem.price),
                stock: Number(currentItem.stock),
            }),
            });
            const newItem = await response.json();
            setArticules([...articules, newItem]);
        } else {
            const response = await fetch(`${API_URL}/${currentItem.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: currentItem.name,
                price: Number(currentItem.price),
                stock: Number(currentItem.stock),
            }),
            });
            const updatedItem = await response.json();
            setArticules(
            articules.map((a) => (a.id === updatedItem.id ? updatedItem : a))
            );
        }
        setModalShow(false);
        } catch (error) {
        console.error("Error guardando artículo:", error);
        alert("No se pudo guardar el artículo.");
        }
        setSaving(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentItem((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Container className="mt-4">
        <Button className="mb-3" variant="success" onClick={handleAdd}>
            Add items
        </Button>

            {loading ? (
                <div className="d-flex justify-content-center">
                    <SpinnerComponent />
                </div>
            ) : (
            <Row>
            <Table responsive striped bordered hover variant="light">
                <thead>
                <tr className="text-center">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {articules.map((articule) => (
                    <tr className="text-center" key={articule.id}>
                    <td>{articule.id}</td>
                    <td>{articule.name}</td>
                    <td>{articule.price}</td>
                    <td>{articule.stock}</td>
                    <td>
                        <Button variant="info" onClick={() => handleEdit(articule)}>
                        Edit
                        </Button>
                    </td>
                    <td>
                        <Button
                        variant="danger"
                        onClick={() => handleDelete(articule.id)}
                        >
                        Delete
                        </Button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </Row>
        )}

        <Modal show={modalShow} onHide={() => setModalShow(false)}>
            <Modal.Header closeButton>
            <Modal.Title>
                {modalMode === "create" ? "Crear artículo" : "Editar artículo"}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={currentItem.name}
                    onChange={handleChange}
                    placeholder="Nombre del artículo"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrice">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                    type="number"
                    name="price"
                    value={currentItem.price}
                    onChange={handleChange}
                    placeholder="Precio"
                    min="0"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStock">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                    type="number"
                    name="stock"
                    value={currentItem.stock}
                    onChange={handleChange}
                    placeholder="Stock"
                    min="0"
                />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button
                variant="secondary"
                onClick={() => setModalShow(false)}
                disabled={saving}
            >
                Cancelar
            </Button>
            <Button variant="primary" onClick={handleSave} disabled={saving}>
                {saving ? "Guardando..." : "Guardar"}
            </Button>
            </Modal.Footer>
        </Modal>
        </Container>
    );
    };

    export default AdminBackendComponent;
