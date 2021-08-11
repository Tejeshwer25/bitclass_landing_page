import React from 'react';

import iosApp from '../../Images/appStoreOutlineIcon.svg'
import androidApp from '../../Images/playStoreOutlineIcon.svg'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


import "./Header.css";

function Header() {
    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">MyBit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" id="home">Teach on ByteClass</Nav.Link>

                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Search for courses"
                            aria-label="Search for courses"
                            aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                🔍
                            </Button>
                        </InputGroup>

                        <div className="header__appLink">
                            <Nav.Link href="#link"><img src={iosApp} alt=""/></Nav.Link>
                            <Nav.Link href="#link"><img src={androidApp} alt=""/></Nav.Link>
                        </div>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    )
}

export default Header;