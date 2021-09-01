import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const navbarStyle = {
  backgroundColor: 'lightblue'
};

const Header = (properties) => {
  const { title } = properties;
    return (
      
    <Navbar style={navbarStyle} variant="light">
      <Container>
    <Navbar.Brand href="/home">{title}</Navbar.Brand>
      </Container>
    </Navbar>
    );
  }
  
export default Header;