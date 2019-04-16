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
          <Link to='/pokedex'>Home</Link>
          <Link to='/PokemonCard'>All Pokemon</Link>
          <Link to='/UserTeam'>Your Team</Link>
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
        </div>
      </div>
    </footer>
  )
}

export default Footer
