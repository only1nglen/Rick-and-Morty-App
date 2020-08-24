import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import { Container, Row, Col } from 'react-bootstrap'

const Header = () => (
    <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="#">
            Rick And Morty
        </Navbar.Brand>
        <Nav>
            <Nav.Link href="#maincast">Main Cast</Nav.Link>
            <Nav.Link href="#episodeguide">Episode Guide</Nav.Link>
            <Nav.Link href="#search">Character Search</Nav.Link>
        </Nav>
    </Navbar>
)

export default Header
