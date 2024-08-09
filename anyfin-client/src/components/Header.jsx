import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" className="shadow-lg py-3" style={{ backgroundColor: '#fff', color: '#333' }}>
      <Container>
        <Navbar.Brand href="/" className="fw-bold d-flex align-items-center">
          <img src="logo.png" alt="logo" width={150} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="text-dark fs-5 fw-medium">
              Home
            </Nav.Link>

            <Nav.Link href="#services" className="text-dark fs-5 fw-medium">
              Service
            </Nav.Link>
            <Nav.Link href="#about" className="text-dark fs-5 fw-medium">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className="text-dark fs-5 fw-medium">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;