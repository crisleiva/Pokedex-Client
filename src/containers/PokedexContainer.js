import React from 'react'
import PokemonAdapter from '../adapters/PokemonAdapter'
import PokemonCard from '../components/PokemonCard'
import '../style/PokemonContainer.css'
class PokedexContainer extends React.Component {
  state = {
    pokemons: []
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
    return this.state.pokemons.map(pokemon => <PokemonCard pokemon={pokemon}/>)
  }
  render () {
    const banner = <img src='https://i.imgur.com/EWZkHfO.png' />
    return (
      <div id="pokemon-container">
        <div id="banner">
        {banner}
        </div>
        <div id="pokemon-container-cards">
          {this.setPokemon()}
        </div>
      </div>
    )
  }
}

export default PokedexContainer
