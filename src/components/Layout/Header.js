import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import HeaderCartButton from './HeaderCartButton';
import { Link } from 'react-router-dom';

const Header=(props)=> {
  return (
    <>
       <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                    <Nav.Link href="#store">STORE</Nav.Link>
                    <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                </Nav>
            </Container>
            <HeaderCartButton onClick={props.onShowCart}/>
            <h2>.</h2>
       </Navbar>
       
    </>
  )
}

export default Header
