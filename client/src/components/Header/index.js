import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>React Google Books</h1>
          <br />
          <p>
            An application for searching books on google books and saving them
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;