import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

class Books extends React.Component {
  handleSave = book => {
    axios.post('/api/books', {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    });
  };
  render() {
    return (
      <div style={{ marginLeft: '20rem', marginRight: '20rem' }}>
        {this.props.books.map((book, index) => {
          return (
            <Card key={index}>
              <Card.Title>{book.volumeInfo.title}</Card.Title>
              <Card.Body>
                <Card.Img
                  style={{
                    width: '12rem',
                    height: '12rem'
                  }}
                  src={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : ''
                  }
                  className="justify-center"
                />
                <Card.Text>{book.volumeInfo.description}</Card.Text>
                <Button variant="primary" href={book.volumeInfo.infoLink}>
                  Link
                </Button>
                <Button
                  variant="primary"
                  onClick={() => this.handleSave(book)}
                  href="/Saved">
                  Save
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default Books;