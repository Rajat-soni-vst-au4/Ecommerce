import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const PageBar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#features">STORE</Nav.Link>
          <Nav.Link href="#pricing">ABOUT</Nav.Link>
        </Nav>
      </Container>
      <Nav>
      <Button variant="dark">Cart</Button>
          </Nav>
    </Navbar>
 
  </>
  )
}

export default PageBar;