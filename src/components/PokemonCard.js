import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'
const PokedexCard = props => {
  console.log(props.pokemon)
  const getImage = require(`../../sprites/sprites/pokemon/${props.pokemon.id}.png`)
  return (
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
  )
}

export default PokemonCard
