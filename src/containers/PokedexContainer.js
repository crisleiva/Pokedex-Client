import React from 'react'
import PokemonAdapter from '../adapters/PokemonAdapter'
import PokedexCard from '../components/PokedexCard'
import UserTeam from '../components/UserTeam'
import PokemonCard from '../components/PokemonCard'
import '../style/pokedex.css'
import '../style/PokemonContainer.css'
import {Route, Switch, Link} from 'react-router-dom'
class PokedexContainer extends React.Component {
  state = {
    pokemons: []
  }

  componentDidMount = () => {
    PokemonAdapter.getPoke()
    .then(pokeJson => {
      this.setState({
        pokemons: pokeJson
      })
    })
  }

  setPokemon = () => {
    return this.state.pokemons.map(pokemon => <PokedexCard key={pokemon.id} pokemon={pokemon} handleClick={this.handleUserPoke}/>)
  }

  

  //We're going to implement this after MVP
  // setUsersPokemon = (pokeObj) => {
  //   console.log(pokeObj)
  //   fetch(`http://localhost:3000/users/${this.props.user.id}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         user_pokemons: pokeObj
  //       }
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(console.log)
  // }

  render () {
    console.log('After Render:', this.state.pokemons)
    const banner = <img src='https://i.imgur.com/EWZkHfO.png' alt="Pokemon"/>
    return (
      <div id="pokemon-container">
        <div id="banner">
          {banner}
        <h1>
          Digital Pokedex
        </h1>

        </div>

        <div id="pokemon-container-cards">
          {this.setPokemon()}
        </div>

      </div>
    )
  }
}


export default PokedexContainer
