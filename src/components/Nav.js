import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.css'

const Nav = (props) => {
  return (
    <nav>

      <Link to='/' className="home-link"><div className="pokeball"></div>Home</Link>
      <Link to='/PokemonCard' className="all-pokemon-link"><div className="pokeball"></div>All Pokemon</Link>
      <Link to='/UserTeam' className="user-pokemon-link"><div className="pokeball"></div>Your Pokemon</Link>


    </nav>
  )
}

export default Nav
