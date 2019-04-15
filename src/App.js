import React, { Component } from 'react';
import Nav from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';
import PokedexContainer from './containers/PokedexContainer'
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <PokedexContainer />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
