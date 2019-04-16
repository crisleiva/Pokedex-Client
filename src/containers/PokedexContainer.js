import React from 'react'
import PokemonAdapter from '../adapters/PokemonAdapter'
import PokemonCard from '../components/PokemonCard'
import UserTeam from '../components/UserTeam'
import '../style/pokedex.css'
import '../style/App.css'
import '../style/PokemonContainer.css'
import {Route, Switch, Link} from 'react-router-dom'
class PokedexContainer extends React.Component {
  state = {
    pokemons: [],
    usersPoke: []
  }

  componentDidMount = () => {
    PokemonAdapter.getPoke()
    .then(pokeJson => {
      this.setState({
        pokemons: pokeJson
      }, () => console.log(this.state))
    })
  }

  setPokemon = () => {
    return this.state.pokemons.map(pokemon => <PokemonCard pokemon={pokemon} handleClick={this.setUsersPokemon}/>)
  }
  handleUserPoke = () => {

  }

  setUsersPokemon = (pokeObj) => {
    console.log(pokeObj)
    fetch(`http://localhost:3000/users/${this.props.user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          user_pokemons: pokeObj
        }
      })
    })
    .then(res => res.json())
    .then(console.log)
  }
  render () {
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
            <Route path={'/usersteam'} render={() => <UserTeam/>}/>

        </div>

      </div>
    )
  }
}

export default PokedexContainer
