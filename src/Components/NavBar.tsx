import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

export function NavBar() {
  return (
    <Navbar  className="mb-4" collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="ditem">
              {' '}
              <Link className="text-decoration-none text-white" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="ditem">
              {' '}
              <Link className="text-decoration-none text-white" to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link className="ditem">
              {' '}
              <Link className="text-decoration-none text-white" to="/contact">
                Contact Us
              </Link>
            </Nav.Link>
            <NavDropdown title="Options" id="basic-nav-dropdown" className="ditem">
              <NavDropdown.Item href="/acordion">Acordion</NavDropdown.Item>
              <NavDropdown.Item href='/alert'>Another action</NavDropdown.Item>
              <NavDropdown.Item href="/carousel">Carousel</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="gap-2">
            <Nav.Link className="btn btn-primary" href="/login">Login</Nav.Link>
            <Nav.Link eventKey={2} className="btn btn-light text-black" href="/signup">
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
