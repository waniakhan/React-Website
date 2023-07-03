import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'


export default function Navigation() {
  return (
<>
<Navbar expand="lg" className="custom-navbar fixed-top">
      <Container fluid>
        <Navbar.Brand href="#">ZM Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link><Link to="/" className='text-decoration-none text-dark mx-3 '>Home</Link></Nav.Link>
            <Nav.Link><Link to="/products" className='text-decoration-none text-dark mx-3 '>Products</Link></Nav.Link>
            <Nav.Link><Link to="/about" className='text-decoration-none text-dark mx-3'>About</Link></Nav.Link>
            <Nav.Link><Link to="/contact" className='text-decoration-none text-dark  mx-3'>Contact</Link></Nav.Link>
            <Nav.Link><Link to="/signin" className='text-decoration-none text-dark  mx-3'>SignIn/Signup</Link></Nav.Link>

          </Nav>
          <form className="search">
			<input type="text" placeholder="Search" className="search__input" />
			<button type="button" className="search__button">
        <AiOutlineSearch></AiOutlineSearch>
			</button>
		</form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
  )
}
