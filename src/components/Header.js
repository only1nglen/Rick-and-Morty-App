import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = () => (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <Navbar.Brand href="#">
            Rick And Morty
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href="#maincast">Main Cast</Nav.Link>
            <Nav.Link href="#episodeguide">Episode Guide</Nav.Link>
            <Nav.Link href="#search">Character Search</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header
