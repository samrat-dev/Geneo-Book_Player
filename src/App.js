import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // BrowserRouter  HashRouter

import Book from './containers/Book/Book';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Book />
        </div>
      </Router>
    );
  }
}

export default App;
