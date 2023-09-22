import React from 'react'
import SearchBar from './Components/SearchBar'
import { useState } from 'react'
import countryService from "./services/countries";
import { useEffect } from 'react';
import Results from './Components/Results';

const App = ({countries}) => {
  const [country, setCountry] = useState([])
  const [search, setSearch] = useState('')
  const [show, setShow] = useState(false)

  useEffect(() => {
    countryService
    .getAll()
    .then(response => {
      setCountry(response.data)
    })
  }, [])

 const handleSearch = (event) => {
  event.preventDefault()
  setSearch(event.target.value.toLowerCase())
 }

 const handleClick = () => {
 setShow(!show)
 console.log("clicked")
 }

 console.log(show)
  return (
    <div>
      <h1>Country Search</h1>
      <SearchBar search={search} handleSearch={handleSearch}/>
      <Results search={search} country={country} handleClick={handleClick} show={show} />
    </div>
  );
}

export default App
