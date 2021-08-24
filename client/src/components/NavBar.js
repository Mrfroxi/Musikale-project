import React  from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {Button} from 'react-bootstrap'
const NavBar = () =>{
  return (
          <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Main</Nav.Link>
      <Nav.Link href="#pricing">My track</Nav.Link>
    </Nav>
    <Button variant = {"outline-light"}>login</Button>
    </Container>
  </Navbar>
  )
}

export default NavBar