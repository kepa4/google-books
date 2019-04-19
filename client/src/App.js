import React, { Component } from 'react';
import Navigation from './components/Navigation';
import BookSearch from './components/BookSearch';
import SavedBooks from './components/SavedBooks';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Header />
          <Route path="/search" component={BookSearch} />
          <Route path="/saved" component={SavedBooks} />
        </Router>
      </div>
    );
  }
}

export default App;
