import React from 'react'
import PokemonAdapter from '../adapters/PokemonAdapter'
import PokemonCard from '../components/PokemonCard'
class PokedexContainer extends React.Component {

  componentDidMount = () => {
    PokemonAdapter.getPoke()
    .then(pokeJson => {
      console.log(pokeJson)
    })
  }
  render () {
    return (
      <div>
        <PokemonCard />
      </div>
    )
  }
}

export default PokedexContainer