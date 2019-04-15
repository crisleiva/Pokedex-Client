import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <footer>

      <Link to='/'>Home</Link>
      <Link to='/PokemonCard'>All Pokemon</Link>
      <Link to=''></Link>

    </footer>
  )
}

export default Footer
