import React from 'react'
import { Image } from 'semantic-ui-react'
const PokemonCard = props => {

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  console.log(props.pokemon)
  const getImage = require(`../../sprites/sprites/pokemon/${props.pokemon.id}.png`)
  return (
    <a href={props.pokemon.name} className="pokemon-card-link">
      <div className="pokemon-cards">
        <h3>{capitalize(props.pokemon.name)}</h3>
        <Image src={getImage}/>
      </div>
    </a>
  )
}

export default PokemonCard
