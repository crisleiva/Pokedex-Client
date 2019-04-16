import React from 'react'
import PokemonAdapter from '../adapters/PokemonAdapter'
import PokemonCard from '../components/PokemonCard'
import UserTeam from '../components/UserTeam'
import '../style/pokedex.css'
import {Route, Switch, Link} from 'react-router-dom'
class PokedexContainer extends React.Component {
  state = {
    pokemons: [],
    currentPokeDesc: []
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
    return this.state.pokemons.map(pokemon => <PokemonCard pokemon={pokemon} handleClick={this.handleUserPoke}/>)
  }
  handleUserPoke = pokeObj => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeObj.id}`)
    .then(res => res.json())
    .then(parsedJson => {
      debugger
    })
  }

  //We're going to implement this after MVP
  // setUsersPokemon = (pokeObj) => {
  //   console.log(pokeObj)
  //   fetch(`http://localhost:3000/users/${this.props.user.id}`, {
  //     method: 'PATCH',
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
    const banner = <img src='https://i.imgur.com/EWZkHfO.png' />
    return (
      <div id="pokemon-container">
        <div id="banner">
        {banner}
        <div className='pokedex'>
          {this.setPokemon()}
          <Route path={'/usersteam'} render={() => <UserTeam/>}/>
        </div>
      </div>
    </div>
    )
  }
}

export default PokedexContainer
