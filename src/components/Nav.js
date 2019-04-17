import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Nav.css'
import '../style/App.css'

const Nav = (props) => {

  const renderNav = () => {
    if(!!localStorage.getItem('token')){
      return (
        <nav>
            <Link to='/' id='home-link'><div className='pokeball' />Home</Link>
            <Link to='/pokedex' id='all-pokemon-link'><div className='pokeball' />All Pokemon</Link>
            <Link to='/usersteam' id='user-pokemon-link'><div className='pokeball' />Your Pokemon</Link>
            <Link to='/logout' id='signup-link'><div className='pokeball' />Logout</Link>
        </nav>
      )
    } else {
      return (
        <nav>
          <Link to='/' id='home-link'><div className='pokeball' />Home</Link>
          <Link to='/signup' id='signup-link'><div className='pokeball' />Sign Up / Login</Link>
        </nav>
      )
    }
  }



  return (
    <div>
      <header>
        {renderNav()}
      </header>
    </div>
  )
}

export default Nav
