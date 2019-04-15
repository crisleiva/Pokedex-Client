import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'
const PokemonCard = props => {
  console.log(props.pokemon)
  const getImage = require(`../../sprites/sprites/pokemon/${props.pokemon.id}.png`)
  return (
    <div className="pokemon-cards">
      <a href={props.pokemon.name}>
        <h3>{props.pokemon.name}</h3>
        <Image src={getImage}/>
      </a>
    </div>
  )
}

export default PokemonCard
