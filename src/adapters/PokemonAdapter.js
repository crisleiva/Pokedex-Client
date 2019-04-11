const PokemonAdapter = {
  getPoke: () => fetch('http://localhost:3000/pokemons').then(res => res.json())
}

export default PokemonAdapter
