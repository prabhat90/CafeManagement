import React from 'react';
import {Container, Navbar} from 'react-bootstrap';

const Topnav = () => {
    return (
        <>
             <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
      Cafe Management System
      </Navbar.Brand>
    </Container>
  </Navbar>
        </>
    );
}

export default Topnav;
