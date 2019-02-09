import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoutes from './common/routes/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar border-bottom">
          <h4>G Notes</h4>
        </nav>
        <AppRoutes></AppRoutes>
      </div>
    );
  }
}

export default App;
