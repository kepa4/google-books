import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Google Books</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Search">Search</Nav.Link>
          <Nav.Link href="/Saved">Saved</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;