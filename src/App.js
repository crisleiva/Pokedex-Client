import React, { Component } from 'react';
import logo from './logo.svg';
import PokedexContainer from './containers/PokedexContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokedexContainer/>
      </div>
    );
  }
}

export default App;
