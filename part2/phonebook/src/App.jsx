import { useState, useEffect } from "react";
import "./App.css";
import People from "./Components/People";
import Search from "./Components/Search";
import AddNumber from "./Components/AddNumber";
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => setPersons(response.data))
  }, [] )

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      return window.alert(`${newName} has already been added to the phonebook`)
    }
    const personObject = {
      name: newName,
      id: newName,
      number: newNumber,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNewPerson = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  }
  const handleSearch = (event) => {
    event.preventDefault()
    setSearch(event.target.value.toLowerCase())
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search search={search} onChange={handleSearch}/>
      <AddNumber addPerson={addPerson} newName={newName} handleNewPerson={handleNewPerson} newNumber={newNumber} handleNewNumber={handleNewNumber} />
      <h2>Numbers</h2>
      <People persons={persons} search={search} />
    </div>
  );
};

export default App;
