import React, { Component } from 'react';
import Nav from './components/Nav'
import PokedexContainer from './containers/PokedexContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <PokedexContainer/>
      </div>
    );
  }
}

export default App;
