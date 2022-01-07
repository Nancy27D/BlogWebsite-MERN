import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Navbar,Container,Nav } from 'react-bootstrap';

const Header = () => {
    const navigate=useNavigate();

    const logout=()=>{
      localStorage.removeItem('token');
        navigate('/login')
    }
    return (
        <>
            <Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home" style={{color:"white"}}>Bloggingful</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link href="#Home">
            <Link to='/home'>Home</Link>
        </Nav.Link>
        {!localStorage.getItem('token')?(
        <>
        <Nav.Link href="#home">
            <Link to='/signup'>SignUp</Link>
        </Nav.Link>
        <Nav.Link href="#link">
        <Link to='/login'>Login</Link>
        </Nav.Link>
        </>
        ):(    
        <Nav.Link href="#link">
        <Link to='/login' onClick={logout}>Logout</Link>
        </Nav.Link>
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Header
