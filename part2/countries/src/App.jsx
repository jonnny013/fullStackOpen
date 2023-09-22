import React from 'react'
import SearchBar from './Components/SearchBar'
import { useState } from 'react'
import countryService from "./services/countries";
import { useEffect } from 'react';
import Results from './Components/Results';

const App = ({countries}) => {
  const [country, setCountry] = useState([])
  const [search, setSearch] = useState('')

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

 const rules = () => {
  if (country.filter(c => c.name.common.toLowerCase().match(search)).length === 1) {
    console.log("1")
  }
  if (
    country.filter((c) => c.name.common.toLowerCase().match(search)).length >= 10
  ) {
    console.log("10")
  }
  if (
    country.filter((c) => c.name.common.toLowerCase().match(search)).length < 10
  ) {
    console.log("less than 10")
  }
 }

 
  return (
    <div>
      <h1>Country Search</h1>
      <SearchBar search={search} handleSearch={handleSearch}/>
      <Results search={search} country={country} />
    </div>
  );
}

export default App
