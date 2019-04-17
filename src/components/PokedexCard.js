import React from 'react'
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
class PokedexCard extends React.Component {
  scrollToTop = () => {
    window.scrollTo(0,220)
  }

  componentWillMount = () => {
    this.scrollToTop()
  }
  capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  getImage = () => {
    return require(`../../sprites/sprites/pokemon/${this.props.pokemon.id}.png`)
  }

  render () {
    return (
      <Link
      to={{
        pathname: `/pokedex/${this.props.pokemon.name}`,
        state: {
          id: this.props.pokemon.id,
          type: this.props.pokemon.poke_type
        }
      }}
      className='pokemon-card-link'>
      <div className={`pokemon-cards ${this.props.pokemon.poke_type}`}>
        <h3>{this.capitalize(this.props.pokemon.name)}</h3>
        <Image src={this.getImage()} />
      </div>
    </Link>
    )
  }
}

export default PokedexCard
