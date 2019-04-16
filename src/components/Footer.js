import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css'
import '../style/App.css'

const Footer = (props) => {
  return (
    <footer>
      <div id="footer-container">
        <div id="footer-left" className="footer-cols">
          <h3>
            Pokédex
          </h3>
          <Link to='/'>Home</Link>
          <Link to='/pokedex'>All Pokemon</Link>
          <Link to='/usersteam'>Your Team</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Create an Account</Link>
        </div>

        <div id="footer-center" className="footer-cols">
          <img src="https://i.imgur.com/EWZkHfO.png" id="footer-logo" alt="pokemon"/>
          <div id="footer-pokeball-container">
            <div id="left-pokeball" className="footer-pokeballs"></div>
            <div id="center-pokeball" className="footer-pokeballs"></div>
            <div id="center-right-pokeball" className="footer-pokeballs"></div>
            <div id="right-pokeball" className="footer-pokeballs"></div>
          </div>
        </div>

        <div id="footer-right" className="footer-cols">
          <h3>Created By:</h3>
          <h4><a href='https://github.com/cristianlava'>Cristian Leiva</a></h4><h4><a href='https://github.com/amoshin91'>Amos Shin</a></h4>

        </div>
      </div>
    </footer>
  )
}

export default Footer
