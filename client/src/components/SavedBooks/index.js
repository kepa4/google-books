import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';

class SavedBooks extends Component {
  state = {
    savedBooks: []
  };
  componentWillMount() {
    axios
      .get('/api/savedbooks')
      .then(response => {
        console.log(response);
        this.setState({ savedBooks: response.data });
      })
      .catch(err => console.log(err));
  }
  handleDelete = book => {
    axios
      .delete('/api/books/' + book._id)
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
    console.log(book._id);
    console.log(this.state.savedBooks);
  };
  render() {
    return (
      <div style={{ marginLeft: '20rem', marginRight: '20rem' }}>
        {this.state.savedBooks.map((book, index) => {
          return (
            <Card key={index}>
              <Card.Title>{book.title}</Card.Title>
              <Card.Body>
                <Card.Img
                  style={{
                    width: '12rem',
                    height: '12rem'
                  }}
                  src={book.image ? book.image : ''}
                  className="justify-center"
                />
                <Card.Text>{book.description}</Card.Text>
                <Button variant="primary" href={book.link}>
                  Link
                </Button>
                <Button
                  variant="primary"
                  onClick={() => this.handleDelete(book)}
                  href="/Saved">
                  Delete
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default SavedBooks;