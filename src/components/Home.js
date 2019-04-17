import React from 'react'

const Home = props => {
  return (
    <div>
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
        <p>Please Sign In</p>
      </div>
    </div>
  )
}

export default Home
