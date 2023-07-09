import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
// import { FaUserCircle } from 'react-icons/fa'
// import Cart from './Cart'


export default function Navigation() {
  return (
<>
<Navbar expand="lg" className="custom-navbar fixed-top">
      <Container fluid>
        <Navbar.Brand href="#">ZM Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
         
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <div className="container d-flex justify-content-center">
            <Nav.Link><Link to="/" className='text-decoration-none text-dark mx-3 '>Home</Link></Nav.Link>
            <Nav.Link><Link to="/products" className='text-decoration-none text-dark mx-3 '>Products</Link></Nav.Link>
            <Nav.Link><Link to="/about" className='text-decoration-none text-dark mx-3'>About</Link></Nav.Link>
            <Nav.Link><Link to="/contact" className='text-decoration-none text-dark  mx-3'>Contact</Link></Nav.Link>
            <Nav.Link><Link to="/signin" className='text-decoration-none text-dark  mx-3'>SignIn/Signup</Link></Nav.Link>
            
            </div>
        
          </Nav>
    <div className="d-flex align-items-center">
    {/* <div className='me-5 d-flex align-items-center'>   <FaUserCircle size={25} />  <span className='ms-2'>
                    </span></div>
                    <Cart /> */}
              <form className="search">
                <input type="text" placeholder="Search" className="search__input" />
                <button type="button" className="search__button">
                  <AiOutlineSearch />
                </button>
              </form>
              </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
  )
}
