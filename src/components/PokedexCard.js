import React from 'react'
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const PokedexCard = props => {

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const getImage = require(`../../sprites/sprites/pokemon/${props.pokemon.id}.png`)
  return (

    <Link
      to={{
        pathname: `/pokedex/${props.pokemon.name}`,
        state: {
          id: props.pokemon.id
        }
      }}
      className='pokemon-card-link'>
      <div className={`pokemon-cards ${props.pokemon.poke_type}`}>
        <h3>{capitalize(props.pokemon.name)}</h3>
        <Image src={getImage} />
      </div>
    </Link>

  )
}

export default PokedexCard
