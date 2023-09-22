import React from 'react'

const SearchBar = (props) => {
  return (
    <>
      <form>
        Search: 
        <input value={props.search} onChange={props.handleSearch} />
      </form>
    </>
  );
}

export default SearchBar