import React from 'react'
import '../style/App.css'
import { Link } from 'react-router-dom'
import { Image } from 'semantic-ui-react'
const PokemonCard = props => {

class PokemonCard extends React.Component {

  handleUserPoke = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${this.props.location.state.id}`)
    .then(res => res.json())
    .then(console.log)
  }

  render () {
    const getImage = require(`../../sprites/sprites/pokemon/${this.props.location.state.id}.png`)
    console.log('After comp', this.props.location.state.id)
    return (
      <div>
        <img src={getImage} />
        {this.props.match.params.name}
      </div>
    )
  }
}

export default PokemonCard