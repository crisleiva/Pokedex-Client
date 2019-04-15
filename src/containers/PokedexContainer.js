import React from 'react'
import PokemonAdapter from '../adapters/PokemonAdapter'
import PokemonCard from '../components/PokemonCard'
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
   
    return (
      <div>
        {this.setPokemon()}
      </div>
    )
  }
}

export default PokedexContainer