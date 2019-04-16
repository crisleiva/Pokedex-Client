import React from 'react'
import '../style/App.css'
import '../style/PokemonCard.css'

import { Link } from 'react-router-dom'
import { Image } from 'semantic-ui-react'


class PokemonCard extends React.Component {
  state = {
    pokeHabitat: '',
    enFlavor: '',
    evolId: 0
  }
  createPokeCard = (habitat, text) => {
    console.log(habitat, text)
    return (
      <div>
        <h3>{habitat}</h3>
        <p>{text}</p>
      </div>
    )
  }

  capitalizeHabitat = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  handleUserPoke = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${this.props.location.state.id}`)
    .then(res => res.json())
    .then(parsedJson => {
      const pokeHabitat = parsedJson.habitat.name
      const enFlavor = parsedJson.flavor_text_entries.find(text => text.language.name === 'en').flavor_text
      this.setState({
        pokeHabitat,
        enFlavor
      })
      const pokeUrl = parsedJson.evolution_chain.url
      fetch(pokeUrl)
      .then(res => res.json())
      .then(evolJson => {
        let evolutionId = parseInt(evolJson.chain.evolves_to[0].evolves_to[0].species.url.charAt(42).split(''))
      })

    })
  }
  componentDidMount() {
    this.handleUserPoke()
  }
  render () {
    const getImage = require(`../../sprites/sprites/pokemon/${this.props.location.state.id}.png`)
    console.log('After comp', this.props)
    return (
      <div className="pokemon-container">
        <div className="pokedex">
          <div className="pokedex-image">
            <div className="">
              <img src={getImage} alt=""/>
              <p>
                {this.props.location.state.id}
              </p>
            </div>
          </div>
          <div className="pokedex-info">
            <h1 className="pokedex-info-elements">{this.capitalizeHabitat(this.props.match.params.name)}</h1>
            <h3 className="pokedex-info-elements">{this.capitalizeHabitat(this.state.pokeHabitat)}</h3>
            <p className="pokedex-info-elements">{this.state.enFlavor}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PokemonCard
