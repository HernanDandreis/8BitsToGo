import React from 'react'
import {Row} from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const SpinnerComponent = () => {
    return (
        <>
            <Row className="d-flex justify-content-center align-content-center gap-5 mt-5 pt-5">
                <Spinner animation="grow" variant="light" className="mt-5 px-4 py-4"/>
                <Spinner animation="grow" variant="warning" className="mt-5 px-4 py-4"/>
                <Spinner animation="grow" variant="danger" className="mt-5 px-4 py-4"/>
            </Row>
        </>
    );
}

export default SpinnerComponent