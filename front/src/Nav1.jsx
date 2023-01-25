import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

export default function Nav1() {
  
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand >Navbar</Navbar.Brand>
              &nbsp
              <Nav className="me-auto">
              <Link to='/list' style={{ textDecoration: 'none',color:'white' }}>Product List</Link>
              &nbsp
              <Link to='/addProduct'  style={{ textDecoration: 'none',color:'white' }}>Add Product</Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
}


