import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom'; // BrowserRouter  HashRouter
import { Provider } from 'react-redux';

import Routes from './Routes';
import store from './containers/Practise/redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Routes />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
