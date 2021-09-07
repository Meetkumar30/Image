import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../imagesF/logo.svg';

const navbarStyle = {
  backgroundColor: 'Lightblack',
};

const Header = (properties) => {
  const { title } = properties;
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo style={{ maxWidth: '25rem', maxHeight: '6rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
