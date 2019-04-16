import React from 'react'
import '../style/App.css'
import { Link } from 'react-router-dom'
import { Image } from 'semantic-ui-react'
const PokemonCard = props => {

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  console.log(props.pokemon)
  const getImage = require(`../../sprites/sprites/pokemon/${props.pokemon.id}.png`)
  return (

    <Link to={props.pokemon.name} className="pokemon-card-link">
      <div className="pokemon-cards">
        <h3>{capitalize(props.pokemon.name)}</h3>
        <Image src={getImage}/>
      </div>
    </Link>

  )
}

export default PokemonCard
