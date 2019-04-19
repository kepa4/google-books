import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import axios from 'axios';
import Books from '../Books';

class BookSearch extends Component {
  state = {
    books: [],
    inputValue: ''
  };
  handleSearch = input => {
    axios
      .get('/api/books', { params: { q: this.state.inputValue } })
      .then(res => {
        this.setState({ books: res.data.items });
        console.log(this.state.books);
      })
      .catch(err => console.log(err));
  };
  updateInputValue = evt => {
    this.setState({ inputValue: evt.target.value });
  };
  render() {
    return (
      <div>
        <Form inline className="justify-content-center">
          <FormControl
            as="input"
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={this.updateInputValue}
            value={this.state.inputValue}
          />
          <Button variant="outline-success" onClick={this.handleSearch}>
            Search
          </Button>
        </Form>
        <Books books={this.state.books} />
      </div>
    );
  }
}

export default BookSearch;