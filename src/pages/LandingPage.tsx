/**
 * This component represents the landing page of the application. It is a simple page that displays a header with the title "Landing Page".
 * The page is structured using React Bootstrap's Container, Row, and Col components for layout. The component is designed to be a placeholder for
 * future content related to the landing page of the application.
 */
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const LandingPage = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Disclaimer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please read and understand our terms and conditions before using the application.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Agree
                    </Button>
                </Modal.Footer>
            </Modal>

            <Container fluid className='mt-4'>
                <Row>
                    <Col>
                        <h1 className='text-center'>Landing Page</h1>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
