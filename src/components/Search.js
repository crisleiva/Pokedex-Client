import React from 'react'

const Search = props => {
  return (
    <form>
      <input placeholder='Search for A Pokemon' value={props.searchTerm} onChange={(e) => props.handleChange(e)} />
    </form>
  )
}

export default Search