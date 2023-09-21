import { useState, useEffect } from "react";
import "./App.css";
import People from "./Components/People";
import Search from "./Components/Search";
import AddNumber from "./Components/AddNumber";
import axios from 'axios'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState('')

  useEffect(() => {
    personService.getAll().then(initialPerson => setPersons(initialPerson))
  }, [] )

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      if (window.confirm(`${newName} has already been added to the phonebook, would you like to update the number?`)) {
        const updatedPerson = persons.find(p => p.name === newName)
        const changedNumber = {...updatedPerson, number: newNumber}

        personService.update(updatedPerson.id, changedNumber)
        .then(returnPerson => {
          setPersons(persons.map(person => person.id !== updatedPerson.id ? person : returnPerson))
          setNewName("");
          setNewNumber("");
        })
      }
    }
    else 
    {const personObject = {
      name: newName,
      number: newNumber,
    };
    personService
    .create(personObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName("");
    setNewNumber("");
    })}
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

  const handleDelete = (id) => {
    const currentPerson = persons.find(p => p.id === id)
    
    if (confirm(`Are you sure you want to delete ${currentPerson.name}?`))
      {personService.deletedPerson(id).then((response) => {
        console.log(response);
        setPersons(persons.filter((p) => p.id !== id))
      });}
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search search={search} onChange={handleSearch}/>
      <AddNumber addPerson={addPerson} newName={newName} handleNewPerson={handleNewPerson} newNumber={newNumber} handleNewNumber={handleNewNumber} />
      <h2>Numbers</h2>
      <People persons={persons} search={search} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
