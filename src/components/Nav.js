import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Nav.css'
import '../style/App.css'

const Nav = (props) => {
  return (
    <div>
      <header>
        <nav>

          <Link to='/' id='home-link'><div className='pokeball' />Home</Link>
          <Link to='/pokedex' id='all-pokemon-link'><div className='pokeball' />All Pokemon</Link>
          <Link to='/usersteam' id='user-pokemon-link'><div className='pokeball' />Your Pokemon</Link>
          {(props.user) ? 
            <Link to='/signup' id='signup-link'><div className='pokeball' />Sign Up / Login</Link> 
            : 
            <Link to='/logout' id='signup-link'><div className='pokeball' />Logout</Link>
          }
        </nav>

      </header>
    </div>
  )
}

export default Nav
