import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navi() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Trevor Orr</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Features</Nav.Link>
                <Nav.Link href="#">Pricing</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
      </>
    );
}

export default Navi;