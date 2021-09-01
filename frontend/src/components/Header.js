import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = (properties) => {
  const { title } = properties;
    return (
      
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="/home">{title}</Navbar.Brand>
    </Navbar>
    );
  }
  
export default Header;