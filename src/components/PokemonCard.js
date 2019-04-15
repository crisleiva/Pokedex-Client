import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'
const PokemonCard = props => {
  console.log(props.pokemon)
  const getImage = require(`../../sprites/sprites/pokemon/${props.pokemon.id}.png`)
  return (
<<<<<<< HEAD
    <div className="pokemon-cards">
      <a href={props.pokemon.name}>
        <h3>{props.pokemon.name}</h3>
        <Image src={getImage}/>
      </a>
    </div>
=======
    <Grid stackable columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <h1>{props.pokemon.name}</h1>
            <Image onClick={(e) => props.handleClick(props.pokemon)} src={getImage}/>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
>>>>>>> cristian
  )
}

export default PokemonCard
