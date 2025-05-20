import React from 'react'
import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <Container className='w-25 bg-dark rounded-4 px-5 py-5'>
                <h2 className="pb-3 text-center text-white">LOGIN</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-white h5">Username (email)</Form.Label>
                        <Form.Control type="email" placeholder="iamnotzelda@nintendo.jp" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-white h5">Password</Form.Label>
                        <Form.Control type="password" placeholder="$piny$hell" />
                    </Form.Group>

                    <div className={"d-flex justify-content-center align-items-center"}>
                        <Button type="submit" className="w-50 mt-4 rounded-5 startBtn">
                            <h5 className={"pt=5"}>START</h5>
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Login

// PENDIENTES
    // Sacar el overflow de la pagina