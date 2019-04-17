import React from 'react'
import { Link } from 'react-router-dom'

import '../style/Home.css'

const Home = props => {
  return (
    <div id="pokemon-container">
      <div id="banner">
        <img src="https://i.imgur.com/EWZkHfO.png" alt ="pokemon" />
        <h1>
          Digital Pokèdex
        </h1>
      </div>

      <div id="banner-border-container">
        <div id="banner-border-white">
          <div id="banner-border">
            <h3 id="pokedex-header">
              Home
            </h3>
          </div>
        </div>
      </div>

      <div id="pokemon-container-cards">
        <Link to='/signup' className="home-card large">
          <img src="" alt="" />
          <div class="home-card-text-container">
            <h3>
              Create a New Account
            </h3>
            <p>
              Want to see the pokèdex? Create an account!
            </p>
          </div>
        </Link>


          <Link to='/login' className="home-card large">
            <img src="" alt="" />
            <div class="home-card-text-container">
              <h3>
                Already have an account?
              </h3>
              <p>
                Login here!
              </p>
            </div>
          </Link>

      </div>
    </div>
  )
}

export default Home
