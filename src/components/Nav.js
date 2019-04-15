import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.css'

const Nav = (props) => {
  return (
    <nav>

      <Link to='/' className="home-link"><div className="pokeball"></div>Home</Link>
      <Link to='/pokedex' className="all-pokemon-link"><div className="pokeball"></div>All Pokemon</Link>
      <Link to='/usersteam' className="user-pokemon-link"><div className="pokeball"></div>Your Pokemon</Link>


    </nav>
  )
}

export default Nav
